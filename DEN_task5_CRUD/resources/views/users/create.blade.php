@extends('layouts.app')

@section('title', 'User Registration')

@section('content')
<div class="container">
    <h2 class=" text-lg-center">User Registration</h2>

    <!-- Registration Form -->
    <form action="{{ route('users.store') }}" method="POST">
        @csrf

        <div class="card border-0 shadow-lg my-4 mb-lg-5">
            <div class="form-group card-body">
                <label for="name" class="h5">Name</label>
                <input type="text" name="name" id="name" class="form-control form-control-lg @error('name') is-invalid glow @enderror" value="{{ old('name') }}">
                @error('name')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                @enderror
            </div>

            <div class="form-group card-body">
                <label for="email" class="h5">Email</label>
                <input type="email" name="email" id="email" class="form-control form-control-lg @error('email') is-invalid glow @enderror" value="{{ old('email') }}">
                @error('email')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                @enderror
            </div>

            <div class="form-group card-body">
                <label for="password" class="h5">Password</label>
                <input type="password" name="password" id="password" class="form-control form-control-lg @error('password') is-invalid glow @enderror">
                @error('password')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                @enderror
            </div>

            <div class="form-group card-body">
                <label for="password_confirmation" class="h5">Confirm Password:</label>
                <input type="password" class="form-control form-control-lg @error('password_confirmation') is-invalid glow @enderror" id="password_confirmation" name="password_confirmation" required>
                @error('password_confirmation')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                @enderror
            </div>

            <button type="submit" class="btn p-lg-2 mb-lg-5 mr-lg-4 ml-lg-4 btn-lg btn-primary font-bold">Register</button>
        </div>
    </form>
</div>

<!-- Custom Styles -->
<style>
    .glow {
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.5); /* Red glow effect */
        border-color: red; /* Red border */
    }

    /* Optional: Change background color for invalid inputs */
    .form-control.is-invalid {
        background-color: #ffe6e6; /* Light red background for invalid inputs */
    }
</style>
@endsection
