import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
  const items = useSelector((state)=> state.cart)
  return (
    <div className="main">
       <span style={{fontWeight:"bold"}}>Redux Tutorial</span>
       <div className="first">
       

            <Link style={{ textDecoration: 'none',fontWeight:"bold", color:"black" }} to={'/'}>Home</Link>
            <Link style={{ textDecoration: 'none',fontWeight:"bold", color:"black" }} to={'/cart'}>Cart</Link>
            <span style={{fontWeight:"bold"}}>item:{items.length}</span>
       
       </div>
        </div>
  )
}

export default Navbar