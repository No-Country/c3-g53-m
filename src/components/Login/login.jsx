import React from "react";
import "./login.css"


export function Login() {


    return(
        


      <form>
              <h2>WELCOME !</h2>
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required></input>
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password"></input>
              </div>
                <input className="button-login" type="submit" value="LOGIN"></input>
      </form>
  
    
            
        
    )
}