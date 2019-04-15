<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700" rel="stylesheet">
    {!! SEO::generate() !!}
    <link rel="stylesheet"  href="{{asset('css/kube.css')}}">
    <link rel="stylesheet"  href="{{asset('css/font-awesome.css')}}">
    <link rel="stylesheet"  href="{{asset('css/style.css')}}">
    @stack('css')
</head>

<body class="@yield('bodyClass')">
<div class="photty_preloader_wrapper">
    <div class="photty_preloader_bar">
        <div class="photty_preloader_line"></div>
    </div>
</div>
<header class="photty_header @yield('headerClass')">
    <div class="row ">
        <div class="col col-12 photty_def_header ">
            <div class="photty_logo_cont">
                <a href="{{route('index')}}" class="photty_image_logo" style="background: url({{Voyager::image(setting('site.logo'))}}) 0 0 no-repeat transparent; background-size: 168px 36px;"></a>
            </div>
            <nav class="photty_menu_cont">
                <ul id="menu-main-menu" class="photty_menu">
                    <li class="menu-item {{active(['index'], 'active')}}"><a href="{{route('index')}}">Anasayfa</a></li>
                    <li class="menu-item {{active(['gallery'], 'active')}}"><a href="{{route('gallery')}}">Galeri</a></li>
                    <li class="menu-item {{active(['album', 'album/*'], 'active')}}"><a href="{{route('album')}}">Albüm</a></li>
                    <li class="menu-item {{active(['blog', 'blog/*'], 'active')}}"><a href="{{route('blog')}}">Blog</a></li>
                    <li class="menu-item {{active(['contact'], 'active')}}"><a href="{{route('contact')}}">İletişim</a></li>
                </ul>
            </nav>
            <div class="clear"></div>
        </div>
        <div class="mobile_header ">
            <a href="{{route('index')}}" class="photty_image_logo" style="background: url({{Voyager::image(setting('site.logo'))}}) 0 0 no-repeat transparent; background-size: 168px 36px;"></a>
            <a href="javascript:void(0)" class="btn_mobile_menu">
                <span class="photty_menu_line1"></span>
                <span class="photty_menu_line2"></span>
                <span class="photty_menu_line3"></span>
            </a>
        </div>
    </div>
</header>


@yield('content')

@section('footer')
<footer class="photty_footer ">
    <div class="photty_container">
        <div class="row gutters photty_footer_content">

            <div class="col col-3">
                <h6>Galeri</h6>
                <ul class="photty_footer_gallery">
                    @foreach($random_galleries as $r_gallery)
                        <li>
                            <a href="{{route('gallery')}}" class="photty_image_fader">
                                <img src="{{Voyager::image($r_gallery->thumbnail('minimal'))}}"
                                     alt="{{$r_gallery->title}}">
                            </a>
                        </li>
                        @endforeach
                 {{--   <li>
                        <a class="photty_image_fader" href="{{asset('img/28-364x364.jpg')}}">
                            <img src="{{asset('img/28-364x364.jpg')}}" alt="">
                        </a>
                    </li>
                    <li>
                        <a class="photty_image_fader" href="album-single.html">
                            <img src="{{asset('img/45-364x364.jpg')}}" alt="">
                        </a>
                    </li>
                    <li>
                        <a class="photty_image_fader" href="album-single.html">
                            <img src="{{asset('img/19-364x364.jpg')}}" alt="">
                        </a>
                    </li>
                    <li>
                        <a class="photty_image_fader" href="album-single.html">
                            <img src="{{asset('img/17-364x364.jpg')}}" alt="">
                        </a>
                    </li>
                    <li>
                        <a class="photty_image_fader" href="album-single.html">
                            <img src="{{asset('img/16-364x364.jpg')}}" alt="">
                        </a>
                    </li>
                    <li>
                        <a class="photty_image_fader" href="album-single.html">
                            <img src="{{asset('img/15-364x364.jpg')}}" alt="">
                        </a>
                    </li>--}}
                </ul>
            </div>

            <div class="col col-3">

                <h6>Son Albümler</h6>
                <div class="photty_footer_posts">
                    @foreach($latest_albums as $l_album)
                        <div class="photty_footer_contact_block">
                            <a class="" href="{{route('album_detail', ['slug' => $l_album->slug])}}">{{$l_album->title}}</a>
                            <div class="photty_meta">
                                <div>{{$l_album->created_at->diffForHumans()}}</div>
                            </div>
                        </div>
                    @endforeach



                </div>

            </div>

            <div class="col col-3">
                <h6>Son Bloglarım</h6>
                <div class="photty_footer_posts">
                    @foreach($latest_blogs as $l_blog)
                        <div class="photty_footer_contact_block">
                            <a class=""
                               href="{{route('blog_detail', ['category' => $l_blog->category->slug, 'slug' => $l_blog->slug])}}">{{$l_blog->title}}</a>
                            <div class="photty_meta">
                                <div>{{$l_blog->created_at->diffForHumans()}}</div>
                            </div>
                        </div>
                    @endforeach

                </div>
            </div>
            <div class="col col-3">
                <h6>Hakkımda</h6>
                <p>
                    {!! setting('hakkimda.hakkimda') !!}
                </p>
                <ul class="photty_social_block">
                    @if(setting('sosyal-medya.facebook'))
                        <li><a class="facebook" href="{{setting('sosyal-medya.facebook')}}"><i class="fa fa-facebook"
                                                                                   aria-hidden="true"></i></a></li>
                    @endif

                    @if(setting('sosyal-medya.twitter'))
                        <li><a class="twitter" href="{{setting('sosyal-medya.twitter')}}"><i class="fa fa-twitter"
                                                                             aria-hidden="true"></i></a></li>
                    @endif

                    @if(setting('sosyal-medya.instagram'))
                        <li><a class="google" href="{{setting('sosyal-medya.instagram')}}"><i class="fa fa-instagram"
                                                                                  aria-hidden="true"></i></a></li>
                    @endif
                        @if(setting('sosyal-medya.youtube'))
                            <li><a class="google" href="{{setting('sosyal-medya.youtube')}}"><i class="fa fa-youtube"
                                                                                                  aria-hidden="true"></i></a></li>
                        @endif

                    @if(setting('sosyal-medya.email'))
                        <li><a class="envelope" href="mailto:{{setting('sosyal-medya.email')}}"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                    @endif

                </ul>
            </div>
        </div>
    </div>
    <hr>
    <div class="photty_container">
        <div class="row photty_copyright_block">
            <div class="col col-12">
                <div class="photty_logo_cont">
                    <a href="{{route('index')}}" class="photty_image_logo" style="background: url({{Voyager::image(setting('site.logo'))}}) 0 0 no-repeat transparent; background-size: 168px 36px;">
                    </a>
                </div>
                <div class="photty_copy_text">Copyright © {{date('Y')}} Meva Eyüboğlu. All Rights Reserved.</div>
            </div>
        </div>
    </div>
</footer>
@show

<script src="{{asset('js/jquery-3.2.1.min.js')}}"></script>
@stack('js')
<script src="{{asset('js/index.js')}}"></script>
</body>
</html>