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

Route::get('/', ['as' => 'index', 'uses' => 'HomeCTRL@index']);
Route::get('/gallery', ['as' => 'gallery', 'uses' => 'HomeCTRL@gallery']);
Route::get('/album', ['as' => 'album', 'uses' => 'HomeCTRL@album']);
Route::get('/album/{slug}', ['as' => 'album_detail', 'uses' => 'HomeCTRL@album_detail']);
Route::get('/blog', ['as' => 'blog', 'uses' => 'HomeCTRL@blog']);
Route::get('/blog/{category}', ['as' => 'category', 'uses' => 'HomeCTRL@blog_category']);
Route::get('/blog/{category}/{slug}', ['as' => 'blog_detail', 'uses' => 'HomeCTRL@blog_detail']);

Route::get('/contact', ['as' => 'contact', 'uses' => 'HomeCTRL@contact']);
Route::post('/contact', ['as' => 'contact_post', 'uses' => 'HomeCTRL@contact_post']);


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
