@extends('master')

@section('content')

<header class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-light bg-light row">
        <div class="container d-flex justify-content-between">
            <a class="navbar-brand d-flex align-items-center flex-column justify-content-center mx-auto" href=" {{ route('index') }} ">
                <img class="logo justify-self-md-center" src="{{asset('/images/logo_footer_black.png')}}">
                <p class="logo-text">Brainster</p>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav d-flex align-items-center ml-auto justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="http://www.codepreneurs.co">Академија за Програмирање
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://www.brainster.io/marketpreneurs">Академија за Маркетинг</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://blog.brainster.co/">Блог</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#modal">Вработи наши студенти</a>
                    </li>
                </ul>

                <div class="modal fade" id="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title py-2">Вработи наши студенти</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p class="text-muted py-2">Внесете Ваши информации за да стапиме во контакт:</p>
                                <form>
                                    <div class="form-group">
                                        <label for="email">Е-мејл</label>
                                        <input class="form-control" type="email" id="email" name="email" value="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="tel">Телефон</label>
                                        <input class="form-control" type="tel" id="tel" name="tel" value="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="company">Компанија</label>
                                        <input class="form-control" type="text" id="company" name="company" value="" />
                                    </div>

                                    <button type="submit" class="btn btn-light btn-block">Испрати</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="row">
        <div class="col hero text-white text-center d-flex align-items-center justify-content-center flex-column">
            <h1 class="title">Brainster.xyz Labs</h1>
            <p class="p-2">Проекти на студентите на академиите за програмирање и маркетинг на Brainster</p>
        </div>
    </div>
</header>

<div class="fixed-bottom p-3 message-bubble">
    <div class="wrapper ml-auto">
        <a href="#">
            <i class="fas fa-comment-alt fa-2x" data-fa-transform="shrink-8"></i>
        </a>
    </div>
</div>

<main class="container p-5">
    <div class="row">
        <p class="col-7 mx-auto text-muted pt-2 pb-5">Внесете Ваши информации за да стапиме во контакт:</p>
        <form class="col-7 mx-auto">
            <div class="form-group">
                <label for="email">Е-мејл</label>
                <input class="form-control" type="email" id="email" name="email" value="" />
            </div>
            <div class="form-group">
                <label for="tel">Телефон</label>
                <input class="form-control" type="tel" id="tel" name="tel" value="" />
            </div>
            <div class="form-group">
                <label for="company">Компанија</label>
                <input class="form-control" type="text" id="company" name="company" value="" />
            </div>

            <button type="submit" class="btn btn-light btn-block">Испрати</button>
        </form>
    </div>
</main>

<footer class="container-fluid">
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