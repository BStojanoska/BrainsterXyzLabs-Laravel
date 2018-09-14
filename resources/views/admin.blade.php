@extends('master')
    
@section('content')

<header class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-light bg-light row">
        <div class="container d-flex justify-content-between">
            <a class="navbar-brand d-flex align-items-center flex-column justify-content-center mr-auto" href=" {{ route('index') }} ">
                <img class="logo justify-self-md-center" src="{{asset('/images/logo_footer_black.png')}}">
                <p class="logo-text">Brainster</p>
            </a>
            <h4 class="ml-auto">Администрација</h4>
        </div>
    </nav>
</header>

<main class="container py-3">
    <div class="row">
        <form class="col-lg-6 col-md-8 col-sm-11 mx-auto" method="POST" action="{{ route('authenticate') }}">
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            @if(session()->has('error'))
                <div class="alert alert-danger">
                    {{ session()->get('error') }}
                </div>
            @endif

            <div class="form-group">
                <label for="email">Е-мејл</label>
                <input type="email" class="form-control" id="email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Пасворд</label>
                <input type="password" class="form-control" id="password" name="password" value="">
            </div>
            <button type="submit" class="btn btn-light btn-block">Логирај се</button>
            @csrf
        </form>
    </div>
</main>


<footer class="container-fluid mt-5 fixed-bottom">
    <div class="row">
        <div class="container">
            <div class="row">
                <p class="col d-flex justify-content-end align-items-center text-muted">Made with &#x2764 by</p>
                <div class="col-1 align-items-center d-flex flex-column">
                    <img class="logo" src="{{asset('/images/logo_footer_black.png')}}">
                    <p class="logo-text">Brainster</p>
                </div>
                <p class="col d-flex justify-content-start align-items-center">-
                    <a class="p-2" href="https://www.facebook.com/brainster.co/?ref=br_rs" target="_blank">Say Hi!</a>
                    -
                    <span class="text-muted pl-2"> Terms</span>
                </p>
            </div>
        </div>
    </div>
</footer>

@endsection