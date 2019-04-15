@extends('layout.master')

@section('content')
    <section class=" photty_album-listing">
        <div class="row">
            <div class="col col-12 photty_content">
                <div class="photty_album-listing_element">
                    <div class="photty_isotope">
                        <div class="grid">


                            @foreach($albums as $album)
                                <div class="grid-item">
                                    <a class="photty_album_img" href="{{route('album_detail', ['slug' => $album->slug])}}">
                                        <img src="{{Voyager::image($album->thumbnail('cropped'))}}" alt="">
                                    </a>
                                    <div class="photty_album_content">
                                        <a href="{{route('album_detail', ['slug' => $album->slug])}}">
                                            <h5>{{$album->title}}</h5>
                                        </a>
                                        <div class="photty_albums_categories">
                                            Concept</a> / {{$album->title}}
                                        </div>
                                    </div>
                                </div>
                            @endforeach



{{--
                            <div class="grid-item">
                                <a class="photty_album_img" href="album-single.html">
                                    <img src="img/45-915x600.jpg" alt="">
                                </a>
                                <div class="photty_album_content">
                                    <a href="album-single.html">
                                        <h5>Spring Mood</h5>
                                    </a>
                                    <div class="photty_albums_categories">
                                        <a href="album-category.html">Events</a> / <a href="album-category.html">People</a>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <a class="photty_album_img" href="album-single.html">
                                    <img src="img/19-915x600.jpg" alt="">
                                </a>
                                <div class="photty_album_content">
                                    <a href="album-single.html">
                                        <h5>Elegance</h5>
                                    </a>
                                    <div class="photty_albums_categories">
                                        <a href="album-category.html">People</a> / <a href="album-category.html">Portrait</a>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item grid-item--width2">
                                <a class="photty_album_img" href="album-single.html">
                                    <img src="img/17-915x600.jpg" alt="">
                                </a>
                                <div class="photty_album_content">
                                    <a href="album-single.html">
                                        <h5>Bright Fashion</h5>
                                    </a>
                                    <div class="photty_albums_categories">
                                        <a href="album-category.html">Fashion</a>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item grid-item--width2">
                                <a class="photty_album_img" href="album-single.html">
                                    <img src="img/16-915x600.jpg" alt="">
                                </a>
                                <div class="photty_album_content">
                                    <a href="album-single.html">
                                        <h5>Best Friends</h5>
                                    </a>
                                    <div class="photty_albums_categories">
                                        <a href="album-category.html">People</a>
                                    </div>
                                </div>
                            </div>--}}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="photty_pagination">
        {{$albums->links()}}
    </div>
    <div style="height: 50px;"></div>

    <div class="photty_back_to_top"></div>
@endsection

@section('footer')
    @parent
@endsection

@push('css')
    <link rel="stylesheet"  href="{{asset('css/swipebox.css')}}">
@endpush

@push('js')
    <script src="{{asset('js/imagesloaded.pkgd.min.js')}}"></script>
    <script src="{{asset('js/isotope.pkgd.min.js')}}"></script>
    <script src="{{asset('js/jquery.swipebox.js')}}"></script>
@endpush
