@extends('layout.master')

@section('content')
    <div class="photty_single_album_head photty_js_bg_image" data-src="{{Voyager::image($album->image)}}">
        <div class="photty_single_album_title">
            <h1>{{$album->title}}</h1>
        </div>
        <a href="javascript:void(0)" class="photty_album_down_arrow"></a>
    </div>
    <div class="photty_grid_about_element">
        <div class="photty_isotope">
            <div class="grid">

                @php $images = json_decode($album->images); @endphp
                @foreach($images as $image)

                    <div class="grid-item ">
                        <a href="{{Voyager::image($image)}}" class="swipebox">
                            <div class="photty_grayscale_img">
                                <img src="{{Voyager::image($album->getThumbnail($image, 'cropped'))}}" alt="">
                            </div>
                        </a>
                    </div>
                @endforeach

            </div>

        </div>
    </div>
    <div class="row">
        <div class="col col-12 photty_content">
            <div class="photty_container">
                <div class="row gutters photty_album_single_block">
                    <div class="col col-3">
                        <h6>Lisans</h6>
                        <p>TDR-011201{{$album->id}}</p>
                        <h6>Tasarım</h6>
                        <p>Meva Eyüboğlu</p>
                    </div>
                    <div class="col col-3">

                        <h6>Program</h6>
                        <p>Photoshop</p>
                    </div>
                    <div class="col col-6">
                        {!! $album->description !!}
                    </div>
                </div>
                <div class="row">
                    <div class="col col-12">
                        <ul class="photty_social_block">

                        </ul>
                    </div>
                </div>
                <hr>
            </div>
            <div class="row">
                <div class="col col-12 photty_album_single_featured">
                    <h3>Bunlara da bakabilirsin</h3>
                    <div class="row ">

                        @foreach($random_album as $rand)
                            <div class="col col-4">
                                <div class="photty_album_single_item ">
                                    <a class="photty_album_img" href="{{route('album_detail', ['slug' => $rand->slug] )}}">
                                        <img src="{{Voyager::image($rand->image)}}" alt="">
                                    </a>
                                    <div class="photty_album_content">
                                        <a href="{{route('album_detail', ['slug' => $rand->slug] )}}">
                                            <h5>{{$rand->title}}</h5>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        @endforeach

{{--
                            <div class="col col-12 photty_content">
                                <div class="photty_masonry_gallery_element">
                                    <div class="photty_isotope">
                                        <div class="grid1">

                                            @foreach($random_album as $rand)
                                                <div class="grid-item grid-item--width2">
                                                    <a href="{{Voyager::image($rand->image)}}" class="swipebox">
                                                        <div class="photty_grayscale_img">
                                                            <img src="{{Voyager::image($rand->image)}}" alt="">
                                                        </div>
                                                    </a>
                                                </div>
                                            @endforeach

                                        </div>

                                    </div>
                                </div>
                            </div>--}}




                    </div>
                </div>
            </div>

        </div>
    </div>

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
