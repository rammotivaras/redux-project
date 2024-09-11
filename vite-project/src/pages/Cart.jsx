import { useSelector ,useDispatch} from "react-redux"
import { remove} from "../redux/cartSlice";

const Cart = () => {
  const cartitems = useSelector((state)=> state.cart)
const dispatch = useDispatch();
const handleClick = (id)=>{
  dispatch(remove(id))
}

  return (
    <div className='item-wrapper'>
      {
        cartitems.map((item)=>(
          <div className='item-cart' key={item.id}>
            <img src={item.image} alt='img'  style={{ width: '100px', height: '100px' }}/>
            <h4>{item.title}</h4>
                            <h5>${item.price}</h5>
                            <button onClick={()=>handleClick(item.id)}>Remove to Cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart