import "./signUp.css";

export function SignUp() {
  return (

    <>
    
    <main class="form-signin">
        <div class="div-header">
          <h4 className="text-orange">Basket Web Admin App </h4>
        </div>

        <div class="container-login-adm">
          <form action="/login" method="post" >
            <h1 class="h3 mb-3 fw-normal">Please Log In</h1>

            <div class="form-floating">
              <input type="first-field" class="form-control" id="floatingInput" name="email" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="last-field" class="form-control" id="floatingPassword" name="password" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label > 
                <input type="checkbox" value="remember-me" /> <p className="remember">Remember me</p>
              </label>
            </div>
            <button className="button-orange" type="submit">Log In</button>
          </form>
          <form action="/" method="get" >
            <button class="button-blue" type="submit">Home</button>
          </form>
        </div>
    </main>
  
  </>
        

  );
}