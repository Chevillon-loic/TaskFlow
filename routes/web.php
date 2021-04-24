<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home.index');


//Main Routes (for Views)
Route::get('/profile', 'UserController@index')->name('user.index')->middleware('auth.basic');

Route::post('profile/update', 'UserController@update')->name('user.update');
