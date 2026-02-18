function LoginPage(){
  return(
    <div className="outer-container-login">
      <div className="inner-container-login">
        <div className="">
          <h2>Login</h2>
        </div>
        <input placeholder="Email"/>
        <input placeholder="Password"/>
        <div>
          <p>Create a new account</p>
        </div>
        <div>
          <p>Forgot password</p>
        </div>
        <div>
          <button>login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
