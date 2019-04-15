@extends('layout.master')


@section('content')
    <section class="photty_grid_gallery photty_masonry_gallery">
        <div class="row">
            <div class="col col-12 photty_content">
                <div class="photty_masonry_gallery_element">
                    <div class="photty_isotope">
                        <div class="grid1">

                            @foreach($galleries as $gallery)
                                <div class="grid-item grid-item--width2">
                                    <a href="{{Voyager::image($gallery->image)}}" class="swipebox">
                                        <div class="photty_grayscale_img">
                                            <img src="{{Voyager::image($gallery->thumbnail('small'))}}" alt="">
                                        </div>
                                    </a>
                                </div>
                            @endforeach

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
    <div class="photty_pagination">
        {{$galleries->links()}}
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

