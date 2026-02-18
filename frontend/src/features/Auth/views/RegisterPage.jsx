import "../styles/register.css"
import "../../../shared/style/fonts.css";
function RegisterPage(){
  return(
  <>
    <div className="outer-container">
      <div className="inner-container">
        <div>
          <h2 className="register-heading font-sans-serif">Register</h2>
        </div>
        <div className="name-container">
          <input className="register-inputs" placeholder="First Name"/>
          <input className="register-inputs" placeholder="Last Name"/>
        </div>
        <input className="register-inputs" placeholder="Email"/>
        <input className="register-inputs" placeholder="Password"/>
        <div className="register-btn-2-div">
          <button className="register-btn-2">Register</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default RegisterPage;
