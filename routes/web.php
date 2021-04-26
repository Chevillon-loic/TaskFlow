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

//Routes pour page Welcome
Route::get('/', function () {
    return view('welcome');
})->name('welcome');


//Routes Login, logout et Register
Auth::routes();


//Routes page Home qui liste les tableaux
Route::get('/home', 'HomeController@index')->name('home.index');

Route::get('show}', 'HomeController@show')->name('home.show');

Route::post('store', 'HomeController@store')->name('home.store');

Route::put('/home/update/', 'HomeController@index')->name('home.update');

Route::delete('/home/delete/', 'HomeController@index')->name('home.delete');

Route::get('/home/create/', 'HomeController@create')->name('home.create');

Route::get('/home/edit/', 'HomeController@edit')->name('home.edit');


//Routes page Profile
Route::get('/profile', 'UserController@index')->name('user.index')->middleware('auth.basic');

Route::post('profile/update', 'UserController@update')->name('user.update');

//Routes page tableau
Route::get('board/index/{id}', 'BoardController@index')->name('board.index')->middleware('auth');
Route::post('board/store/{id}', 'BoardController@store')->name('board.store')->middleware('auth');

Route::post('ticket/store/{id}', 'TicketController@store')->name('ticket.store')->middleware('auth');

Route::post('comment/store/{id}', 'CommentController@store')->name('comment.store')->middleware('auth');

//Route Recherche user pour invitation
Route::get('board/search/{q}', 'BoardController@search')->name('board.search')->middleware('auth');

//Route Column

Route::post('column/destroy', 'ColumnController@destroy')->name('column.destroy')->middleware('auth');
