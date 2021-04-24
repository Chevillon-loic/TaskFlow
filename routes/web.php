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
});

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');


//Main Routes (for Views)


// Routes for Boards
Route::get('/home', 'BoardController@index')->name('board.index');
Route::get('/board/show', 'BoardController@show')->name('board.show');
Route::post('/board/store', 'BoardController@store')->name('board.store');
Route::put('/board/update', 'BoardController@index')->name('board.update');
Route::delete('/board/delete}', 'BoardController@index')->name('board.delete');
Route::get('/board/create', 'BoardController@create')->name('board.create');
Route::get('/board/edit/', 'BoardController@edit')->name('board.edit');
