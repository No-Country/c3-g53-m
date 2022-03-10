
import "./adminNews.css";


export function AdminNews() {
  return (
    
  <>
     <main class="form-signin">
      <div class="div-header modal-content rounded-6 shadow text-white bg-primary">
        <h1 class="h3 mb-3 fw-normal">Basket Web Admin App </h1>
      </div>
      
      <div class="div-container modal-content rounded-6 shadow">
        <form action="/admin" method="post" >
          <h1 class="h3 mb-3 fw-normal">News Editor</h1>
      
          <div class="form-floating">
            <input type="first-field" class="form-control" id="floatingInput" name="title" placeholder="New Title" />
            <label for="floatingInput">Title</label>
          </div>

          <div class="form-floating">
            <input type="middle-field" class="form-control" id="floatingPassword" name="image" placeholder="img" />
            <label for="floatingPassword">image URL</label>
          </div>

          <div class="form-floating">
            <input type="middle-field" class="form-control" id="floatingPassword" name="gif" placeholder="gif" />
            <label for="floatingPassword">GIF URL</label>
          </div>

          <div class="form-floating">
            <input type="middle-field" class="form-control" id="floatingPassword" name="video" placeholder="video" />
            <label for="floatingPassword">video URL</label>
          </div>

          <div class="form-floating">
              <textarea class="txtArea" name="message" id="floatingMessage" cols="30" rows="10" placeholder="Write a message"></textarea>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit">Add News</button>
        </form>

        <form action="/admin/advertisment" method="get" >
          <button class="w-100 btn btn-lg btn-outline-primary" type="submit">Edit Advertisment</button>
        </form>

        <form action="/home" method="get" >
          <button class="w-100 btn btn-lg btn-outline-secondary" type="submit">Log Out</button>
        </form>
      </div>

    </main>
    
  </>
  
  );
};

