@extends('layout.master')

@section('bodyClass')
    photty_fullscreen_slider_page
@endsection

@section('headerClass')
    photty_transparent
@endsection

@section('content')
    <div class="photty_fullscreen_slider_wrapper">
        <div class="photty_fullscreen_slider fade wait4load no_fit" data-nav="arrows" data-autoplay="no" data-interval="4000">

            @foreach($sliders as $slider)
                <div class="photty_fullscreen_slide photty_fullscreen_slide{{$slider->id}} photty_preload_slide" data-count="{{$slider->id}}"
                     data-title="{{$slider->title}}" data-descr="{{$slider->description}}"
                     data-src="{{Voyager::image($slider->image)}}">
                </div>
            @endforeach


        </div>
        <div class="photty_slideshow_title_wrapper">
            <h2 class="photty_slideshow_title">&nbsp;</h2>
            <div class="photty_slideshow_caption">&nbsp;</div>
        </div>
        <a href="javascript:void(0)" class="photty_fullscreen_play_pause"></a>
        <a href="javascript:void(0)" class="photty_fullscreen_slider_prev"></a>
        <a href="javascript:void(0)" class="photty_fullscreen_slider_next"></a>
        <a href="javascript:void(0)" class="photty_fullscreen_controls_toggler"></a>
    </div>
@endsection

@section('footer')
   {{--Burası boş kaldığında ve index çağrıldığında hiçbir şey gösterilmeyecek.--}}
@endsection

@push('js')
    <script src="{{asset('js/slideshow_gallery.js')}}"></script>
    <script src="{{asset('js/jquery.event.swipe.js')}}"></script>
@endpush
