<?php

use Illuminate\Support\Facades\Route;
// use Illuminate\Support\Facades\App\Http\Controller;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});


Route::resource('posts', PostController::class);

// Additional Posts Routes
Route::get('posts/search', [PostController::class, 'search'])->name('posts.search');
Route::get('posts/filter', [PostController::class, 'filter'])->name('posts.filter');
Route::get('posts/paginate', [PostController::class, 'paginate'])->name('posts.paginate');
Route::get('posts/{id}/details', [PostController::class, 'view'])->name('posts.details');


// User Routes
Route::get('users', [UserController::class, 'index'])->name('users.index');  // Fetch users
Route::get('users/create', [UserController::class, 'create'])->name('users.create');  // Show registration form
Route::post('users', [UserController::class, 'store'])->name('users.store');  // Insert user data
Route::get('users/{id}/edit', [UserController::class, 'edit'])->name('users.edit');  // Show edit form
Route::put('users/{id}', [UserController::class, 'update'])->name('users.update');  // Update user data
Route::delete('users/{id}', [UserController::class, 'destroy'])->name('users.destroy');  // Delete user

Route::middleware('role:user')->group(function () {
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
});