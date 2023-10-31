import { useContext,useState } from "react"
import { FormContext } from "../../context/FormContext"

export const AuthForm = () =>{
  // const {isLogIn} = useContext(FormContext);
  const [error,setError] = useState(null);
  const [isLogIn,setIsLogIn] = useState(true);
  const [email,setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const viewLogin = (status) =>{
    setError(null);
    setIsLogIn(status)
  }

  const handleSubmit = async(e, endpoint) =>{
    e.preventDefault();
    if(!isLogIn && password !== confirmPassword){
      setError("Por favor,revisar los datos");
      return
    }
    await fetch(`${process.env.REACT_APP_SERVERURL}/${endpoint}`)
  }
  return (
    <>
      <form>
        <h2>{isLogIn ? "Ingresar" : "Crear cuenta"}</h2>
        <input type="email" className="" placeholder="email" />
        <input type="password" className="" placeholder="password" />
        {!isLogIn && (
          <input
            type="password"
            className=""
            placeholder="confirmar contraseña"
          />
        )}
        <input type="submit" className="create" onClick={(e)=>handleSubmit(e, isLogIn ? "Login" : "Signup")} />
        {error && <p>{error}</p>}
      </form>
      <div className="auth-options">
        <button
          onClick={() => viewLogin(false)}
          style={{
            backgroundColor: isLogIn ? "rgb(255,255,255)" : "rgb(188,188,188)",
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => viewLogin(true)}
          style={{
            backgroundColor: !isLogIn ? "rgb(255,255,255)" : "rgb(188,188,188)",
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}