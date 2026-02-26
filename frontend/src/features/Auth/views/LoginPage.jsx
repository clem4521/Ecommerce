import {NavLink} from "react-router";
import axios from "axios";

function LoginPage(){
  const instance = axios.create({
    baseURL:"http://localhost:8080"
  });
  async function login(){
    let emailField = document.getElementById("emailValue")?.value;
    let passwordField = document.getElementById("passwordValue")?.value;
    console.log(emailField,passwordField);
    try {
      await instance.post("/api/auth/login",{
        email:emailField,
        password:passwordField
      }).then((response)=>{
          console.log(response)
      });
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <main className="flex justify-center items-center">
      <div className="border-2 border-gray-300 w-[30vw] h-[45vh] rounded-3xl absolute top-15">
        <div className="flex flex-col justify-center items-center mt-2">
          <h2 className="text-3xl font-semibold">Login</h2>
          <div className="flex flex-col mt-5 gap-5">
            <input className="h-8 w-[20vw] border rounded-2xl pl-2" placeholder="Email" id="emailValue"/>
            <input className="h-8 w-[20vw] border rounded-2xl pl-2" placeholder="Password" type="password" id="passwordValue"/> 
          </div>
          <div className="mt-5">
            <NavLink to="/auth/register" end>
              <p className="hover:text-blue-600">Create a new account</p>
            </NavLink>
            <p className="mt-3 cursor-default ml-4">Forgot password</p>
          </div>
          <div className="mt-3">
            <button className="bg-gray-200 w-[5vw] h-[5vh] rounded-3xl hover:bg-gray-400 hover:text-white" onClick={login}>Log In</button>
          </div>
        </div>
      </div>
    </main>
    
  )
}

export default LoginPage;
