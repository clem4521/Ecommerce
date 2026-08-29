import axios from "axios"
import instance from "../../../utils/axiosConfig";

function RegisterPage(){
  async function postNewUser(){
  }
  

  return(
  <main className="flex justify-center items-center">
    <div className="border w-[60vw] h-[40vh] relative top-15 rounded-2xl flex flex-col lg:w-[29.5vw]">
      <h1 className="text-center font-bold text-[20px]">Register</h1>
      <span className="text-[12px] ml-2">Enter Your infomation</span>
      <div className="pl-2 flex flex-col gap-2 mt-2 md:flex-row lg:gap-3">
        <input placeholder="First Name" className="outline-1 rounded-[4px] pl-1 w-[55vw] md:w-[27vw] lg:w-[13.5vw]"/>
        <input placeholder="Last Name" className="outline-1 rounded-[4px] pl-1 w-[55vw] md:w-[27vw] lg:w-[13.5vw]"/>
      </div>

      <div className="pl-2 flex flex-col gap-2 mt-6">
        <input placeholder="Email" className="outline-1 rounded-[4px] pl-1 w-[55vw] lg:w-[28vw]"/>
        <input placeholder="Password" className="outline-1 rounded-[4px] pl-1 w-[55vw] lg:w-[28vw]"/>
      </div>
     
      <div className=" justify-center mt-4">
         <button className="  bg-gray-400 text-white font-bold hover:bg-gray-200 ml-[34%] w-[20vw] border rounded-[4px] md:w-[15vw] lg:w-[10vw]">SignIn</button>
      </div>
    </div>
  </main>
  )
}

export default RegisterPage;
