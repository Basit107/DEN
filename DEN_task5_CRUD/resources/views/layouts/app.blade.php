<!-- resources/views/layouts/app.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title class="text-white">@yield('title', 'My Laravel App')</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Styles -->
    <style>
        /* body {
            background-color: #ffffff; /* White background 
            color: #333333; Dark text color 
            font-family: 'Arial', sans-serif;
        } */

        .navbar {
            background-color: #000000; /* Black navbar */
            border-bottom: 2px solid #0056b3; /* Blue border at the bottom */
        }

        .navbar-brand, .navbar-nav .nav-link {
            color: #ffffff !important; /* White text in navbar */
            font-size: 18px;
        }

        .navbar-brand:hover, .navbar-nav .nav-link:hover {
            color: #0056b3 !important; /* Blue on hover */
        }

        /* .container {
            margin-top: 20px;
        } */

        .footer {
            background-color: #000000; /* Black footer */
            color: #ffffff; /* White text */
            padding: 10px 0;
            text-align: center;
            margin-top: 50px;
        }

        /* .btn-primary {
            background-color: #0056b3;
            border-color: #0056b3;
        }

        .btn-primary:hover {
            background-color: #003d82;
            border-color: #003d82;
        } */

        /* h1, h2, h3, h4, h5, h6 {
            color: #000000; /* Black headers 
        } */

        /* Form Inputs */
        /* .form-control {
            background-color: #f8f9fa; /* Light gray background for form fields
            border: 1px solid #cccccc; Gray border 
        }  */

        /* .form-control:focus {
            border-color: #0056b3;  Blue border on focus 
            box-shadow: 0 0 8px rgba(0, 86, 179, 0.2); Subtle blue glow on focus
        } */

        /* Alerts Styling */
        /* .alert-success {
            background-color: #d4edda;
            color: #155724;
        }

        .alert-danger {
            background-color: #f8d7da;
            color: #721c24;
        } */

    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="bg-dark py-3">
            <a class="navbar-brand" href="{{ route('users.index') }}"> <h3>Simple CRUD FORM</h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="{{ url('/') }}">Home</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" >About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Contact</a>
                    </li>
                    @guest
                        <li class="nav-item">
                            <a class="nav-link" >Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Register</a>
                        </li>
                    @else
                        <li class="nav-item">
                            <a class="nav-link" >Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Logout</a>
                        </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="container mt-5">
        <!-- Display Success or Error Messages -->
        @if (session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('success') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        @endif

        @if (session('error'))
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                {{ session('error') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        @endif

        @yield('content')
    </div>

    <!-- Footer -->
    <footer class="footer bg-dark text-white py-3 mt-lg-5 gap-15 mb-0 fixed-bottom">
        <div class="container text-center">
            <p>&copy; {{ date('Y') }} My Personal Laravel App. All rights reserved.</p>
        </div>
    </footer>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    @yield('scripts')
</body>

</html>
