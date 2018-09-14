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

Route::get('/')->name('index')->uses('RouteController@index');
Route::get('/admin')->name('login')->uses('RouteController@login');
Route::get('/dashboard')->name('dashboard')->uses('RouteController@dashboard');
Route::get('/contact')->name('contact')->uses('RouteController@contact');
Route::get('/logout')->name('logout')->uses('RouteController@logout');

Route::post('/add')->name('add')->uses('RouteController@add');
Route::post('/update')->name('update')->uses('RouteController@update');
Route::post('/delete')->name('delete')->uses('RouteController@delete');
Route::post('/authenticate')->name('authenticate')->uses('RouteController@authenticate');