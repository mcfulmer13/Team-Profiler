 function html(data){
  return`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <title>The A Team!</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> 
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>
  </head>
  <body>    

<main class="container">
  <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">The Team!!!</h1>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">NAME:${data.name}</strong>
          <h3 class="mb-0">Position: Manager</h3>
          <div class="mb-1 text-muted">ID:${data.id}</div>
          <a href="#" class="stretched-link">Email:${data.email}</a>
          <p class="card-text mb-auto">Office Number:${data.office} </p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">NAME:${data.ename}</strong>
          <h3 class="mb-0">Position: Engineer</h3>
          <div class="mb-1 text-muted">ID:${data.eid}</div>
          <a href="#" class="stretched-link">Email:${data.eemail}</a>
          <p class="card-text mb-auto">Github:${data.egithub} </p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">NAME:${data.iname}</strong>
          <h3 class="mb-0">Position: Intern</h3>
          <div class="mb-1 text-muted">ID:${data.iid}</div>
          <a href="#" class="stretched-link">Email: ${data.iemail}</a>
          <p class="card-text mb-auto">School: ${data.ischool} </p>
        </div>
      </div>
    </div>
    
    </div>
    
  </div>
  
  </body>
</html>`
    };
module.exports = html;
