import "./adminads.css";

export function AdminAds() {
    return (
        <body className="text-center">
    <main className="form-signin">
      <div className="div-header modal-content rounded-6 shadow text-white bg-primary">
        <h1 className="h3 mb-3 fw-normal">Basket Web Admin App </h1>
      </div>
      
      <div className="div-container modal-content rounded-6 shadow">
        <form action="/admin" method="post" >
          <h1 className="h3 mb-3 fw-normal">Advertisment Editor</h1>
      
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
            <input type="last-field" className="form-control" id="floatingPassword" name="video" placeholder="video" />
            <label for="floatingPassword">video URL</label>
          </div>


          <button className="w-100 btn btn-lg btn-primary" type="submit">Add Advertisment</button>
        </form>

        
        <form action="/admin/news" method="get" >
          <button className="w-100 btn btn-lg btn-outline-primary" type="submit">Edit News</button>
        </form>

        <form action="/" method="get" >
          <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">Log Out</button>
        </form>

        
    </div>

    </main>
  </body>
    )
}