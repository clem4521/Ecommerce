import axios from "axios"

function RegisterPage(){
  const instance = axios.create({
    baseURL:"http://localhost:8080"
  });
  async function postNewUser(){
    let firstNamefield = document.getElementById("firstNameValue")?.value;
    let lastNameField = document.getElementById("lastNameField")?.value;
    let emailField = document.getElementById("emailValue")?.value;
    let passwordField = document.getElementById("passwordValue")?.value;
    console.log(firstNamefield,lastNameField,emailField,passwordField);
    try {
      await instance.post("/api/auth/register",{
        first_name:firstNamefield,
        last_name:lastNameField,
        email:emailField,
        password:passwordField
      });
    } catch (error) {
      console.log(error);
    }
  }
  

  return(
  <>
    <div className="outer-container">
      <div className="inner-container">
        <div>
          <h2 className="register-heading font-sans-serif">Register</h2>
        </div>
        <div className="name-container">
          <input className="register-inputs" placeholder="First Name" id="firstNameValue"/>
          <input className="register-inputs" placeholder="Last Name" id="lastNameField"/>
        </div>
        <input className="register-inputs" placeholder="Email" id="emailValue"/>
        <input className="register-inputs" placeholder="Password" type="password" id="passwordValue"/>
        <div className="register-btn-2-div">
          <button className="register-btn-2"onClick={postNewUser} >Register</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default RegisterPage;
