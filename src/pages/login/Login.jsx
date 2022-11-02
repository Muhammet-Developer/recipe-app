import styles from "./style.module.css";
import { useState} from "react";
import { Navigate,useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate();
  const [giriş, setGiriş] = useState({
    userName:"admin",
    passWord:"food"
  })
  localStorage.setItem("giriş",JSON.stringify(giriş));

  const [login, setLogin] = useState({
    userName:"",
    passWord:""
  })
    const [okey,setOkey]=useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    if((giriş.userName===login.userName) && (giriş.passWord===login.passWord)){
      setOkey(true)
    }
    else{
      alert("yanlış")
    }
    setLogin({
      userName:"",
      passWord:""
    });
  }
  
  return (
    <>
    <div className={styles.center}>
      <h1>Login</h1>
      <p>Username:admin Password:food</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.txt_field}>
          <input type="text" required name="username" value={login.userName} 
          onChange={(e)=>setLogin({...login,userName:e.target.value})} />
          <span></span>
          <label htmlFor="">Username</label>
        </div>
        <div className={styles.txt_field}>
          <input type="password" required name="password" value={login.passWord} 
          onChange={(e)=>setLogin({...login,passWord:e.target.value})}  />
          <span></span>
          <label htmlFor="">Password</label>
        </div>
        <button className={styles.button36} >Login</button>
      </form>
      
      {okey ? <Navigate  to="/" state={okey}/> : ""  }

    </div>
          </>
  )
}

export default Login