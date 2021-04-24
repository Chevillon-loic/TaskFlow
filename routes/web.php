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

Route::get('/home', 'BoardController@index')->name('home.index');

Route::get('show}', 'BoardController@show')->name('home.show');

Route::post('store', 'BoardController@store')->name('board.store');

Route::put('/home/update/', 'BoardController@index')->name('home.update');

Route::delete('/home/delete/', 'BoardController@index')->name('home.delete');

Route::get('/home/create/', 'BoardController@create')->name('home.create');

Route::get('/home/edit/', 'BoardController@edit')->name('home.edit');


//Main Routes (for Views)
Route::get('/profile', 'UserController@index')->name('user.index')->middleware('auth.basic');

Route::post('profile/update', 'UserController@update')->name('user.update');
