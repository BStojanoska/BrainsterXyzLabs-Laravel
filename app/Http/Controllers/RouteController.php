<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Admin;
use App\Http\Requests\ValidateProduct;
use App\Http\Requests\ValidateAdmin;

class RouteController extends Controller
{
    public function index() {
        $products = Product::get();

        return view('index', compact('products'));
    }

    public function login() {
        return view('admin');
    }

    public function authenticate(ValidateAdmin $request)
    {
        $admin = new Admin();
        $email = $request->email;
        $password = $request->password;
        $adminPass = $admin->where('email', 'like', $email)->pluck('password')->first();
        // dd($adminDb);
        if ($password == $adminPass) {
            session(['email' => $email]);
            return redirect('dashboard');
        } else {
            return redirect('admin')->with('error', 'Погрешен е-мејл или лозинка!');
        }
    }

    public function logout(Request $request) {
        $request->session()->forget('email');

        return redirect('admin');
    }

    public function dashboard(Request $request) {
        if ($request->session()->get('email')) {

            $products = Product::get();
            
            return view('dashboard', compact('products'));
        } else {
            return redirect('admin')->with('error', 'Ве молиме логирајте се!');
        }
    }

    public function add(ValidateProduct $request) {
        $product = new Product();

        $product->name = $request->name;
        $product->subtitle = $request->subtitle;
        $product->photo = $request->photo;
        $product->url = $request->url;
        $product->description = $request->description;

        $product->save();

        return redirect('dashboard')->with('message', 'Продуктот е успешно додаден!');
    }

    public function update(ValidateProduct $request) {
        $product = Product::find($request->id);
        
        $product->name = $request->name;
        $product->subtitle = $request->subtitle;
        $product->photo = $request->photo;
        $product->url = $request->url;
        $product->description = $request->description;

        $product->save();

        return redirect('dashboard')->with('message', 'Продуктот е успешно променет!');
    }

    public function delete(Request $request) {
        $product = Product::find($request->id);
        $product->delete();

        return redirect('dashboard')->with('message', 'Продуктот е успешно избришан!');
    }

    public function contact() {
        return view('contact');
    }
}
