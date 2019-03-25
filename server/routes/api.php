<?php

use Illuminate\Http\Request;
use App\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', [
    'uses'=>'UserController@getUser'
])->middleware('auth:api');

Route::post('/signin', [
    'uses'=> 'UserController@signin',
]);
Route::get('/signout/{id}',[
    'uses'=> 'UserController@signout',
]);
Route::post('/signup', [
    'uses'=> 'UserController@signup',
]);

Route::post('/file', [
    'uses'=> 'FileController@store'
]);
Route::get('/files', [
    'uses'=> 'FileController@index'
]);


Route::post('/book',[
    'uses'=>'BookController@postBook'
]);
Route::get('/books',[
    'uses'=>'BookController@getBooks'
]);
Route::put('/book/{id}',[
    'uses'=>'BookController@putBook'
]);
Route::delete('/book/{id}',[
    'uses'=>'BookController@deleteBook'
]);