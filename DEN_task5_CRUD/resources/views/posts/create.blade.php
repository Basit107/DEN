<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CRUD FORM | PHP LARAVEL</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <div class="bg-dark py-3">
        <h1 class="text-white text-center">
            Simple CRUD FORM
        </h1>
    </div>
    <div class="contaner">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10">
                <div class="card border-0 shadow-lg my-5">
                    <div class="card-header bg-dark">
                        <h3 class="text-white">Create Form</h3>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="" class="form-label h4">Title:</label>
                            <input type="text" class="form-control form-control-lg" placeholder="Title" name="title">
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="" class="form-label h4">Content</label>
                            <textarea type="text" class="form-control form-control-lg" placeholder="Your Content" name="content" cols="5" rows="20"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </body>
</html>