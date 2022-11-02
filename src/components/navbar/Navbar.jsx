import img from "../../assets/logo2.png"
import {Link} from "react-router-dom";
import  "./style.css"
const Navbar = () => {
  return (
      <nav>
        <Link className='activ1' to="/"><img src={img} alt="" /></Link>
        <Link className='activ' to="/about" >About</Link>
        <a className="github" href="https://github.com/Muhammet-Developer?tab=repositories" target="blank">Github</a>
        <Link className='activ' to="/logout">Log Out</Link>
      </nav>
    
  )
}

export default Navbar