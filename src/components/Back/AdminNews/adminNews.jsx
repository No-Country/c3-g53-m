
import "./adminNews.css";


export function AdminNews() {
  return (
    
  <> 
     <main className="form-signin">
      <div className="div-header modal-content rounded-6 shadow text-white bg-primary">
        <h1 className="h3 mb-3 fw-normal">Basket Web Admin App </h1>
      </div>
      
      <div className="div-container modal-content rounded-6 shadow">
        <form action="/admin" method="post" >
          <h1 className="h3 mb-3 fw-normal">News Editor</h1>

          <div className="imput-container">
      
            <div className="form-floating">
              <input type="first-field" className="form-control" id="floatingInput" name="title" placeholder="New Title" />
              <label for="floatingInput">Title</label>
            </div>

            <div className="form-floating">
              <input type="middle-field" className="form-control" id="floatingPassword" name="image" placeholder="img" />
              <label for="floatingPassword">image URL</label>
            </div>

            <div className="form-floating">
              <input type="middle-field" className="form-control" id="floatingPassword" name="gif" placeholder="gif" />
              <label for="floatingPassword">GIF URL</label>
            </div>

            <div className="form-floating">
              <input type="middle-field" className="form-control" id="floatingPassword" name="video" placeholder="video" />
              <label for="floatingPassword">video URL</label>
            </div>
          </div>

          <div className="form-floating">
              <textarea className="txtArea" name="message" id="floatingMessage" cols="30" rows="10" placeholder="Write a message"></textarea>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Add News</button>
        </form>

        <form action="/admin/advertisment" method="get" >
          <button className="w-100 btn btn-lg btn-outline-primary" type="submit">Edit Advertisment</button>
        </form>

        <form action="/home" method="get" >
          <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">Log Out</button>
        </form>
      </div>

    </main>
    
  </>
  
  );
};

