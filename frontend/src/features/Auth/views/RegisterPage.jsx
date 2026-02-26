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
  <main className="flex justify-center items-center">
    <div className="border-2 border-gray-300 w-[35vw] relative top-10 rounded-2xl">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h2 className="text-2xl font-semibold">Register</h2>
        <div className="flex flex-row gap-3">
          <input className="border h-[5vh] rounded-2xl pl-2" placeholder="First Name" id="firstNameValue"/>
          <input className="border h-[5vh] rounded-2xl pl-2" placeholder="Last Name" id="lastNameField"/>
        </div>
        <input className="w-[29.5vw] h-[5vh] rounded-2xl pl-2 border" placeholder="Email" id="emailValue"/>
        <input className="w-[29.5vw] h-[5vh] rounded-2xl pl-2 border" placeholder="Password" type="password" id="passwordValue"/>
        <div className="">
          <button className="relative pl-3 bg-gray-200 w-[5vw] h-[5vh] rounded-3xl hover:bg-gray-400 hover:text-white"onClick={postNewUser}>
            <p className="absolute bottom-1.5 right-2">Sign In</p>
          </button>
        </div>
      </div>
    </div>
  </main>
  )
}

export default RegisterPage;
