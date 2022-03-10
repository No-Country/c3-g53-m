
import "./homeAdmin.css";

export function HomeAdmin() {
  return (

    <>

      <main class="form-signin">
        <div class="div-header">
          <h1 class="h3 mb-3 fw-normal">Basket Web Admin App </h1>
        </div>
        <div class="div-container-admin">
          <form action="/login" method="get" >
            <button class="button-orange" type="submit">Log in</button>
          </form>  
          <form action="/signup" method="get" >
            <button class="button-blue" type="submit">Sign Up</button>
          </form>
        </div>
      </main>
   
  
    </>

  );
}
