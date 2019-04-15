@extends('layout.master')


@section('content')
    <div class="photty_blog_grid">
        <div class="row">
            <div class="col col-12 photty_content">

                <h1>{{$finded_category->title}}</h1>

                <div class="photty_grid_blog_element">
                    <div class="photty_grid " data-inrow="3"  data-setpad="30px">

                        @foreach($finded_blogs as $blog)
                            <div class="photty_grid-item photty_grid_post_loading">
                                <div class="photty_grid-item_iner">
                                    <div class="photty_blog_grid_ratio" data-ratio="0.75">
                                        <div class=" photty_post_formats">
                                            <img src="{{Voyager::image($blog->thumbnail('thumb'))}}" alt="">
                                        </div>
                                    </div>
                                    <div class="photty_grid_post_content">
                                        <a href="{{route('blog_detail', ['category' => $blog->category->slug, 'slug' => $blog->slug])}}"><h5>{{$blog->title}}</h5></a>
                                        <div class="photty_meta">
                                            <div>{{$blog->created_at->diffForHumans()}}</div>
                                            <div class="photty_post_ref"><a href="{{route('category', ['category' => $blog->category->slug])}}">{{$blog->category->title}}</a></div>
                                        </div>
                                        <div class="photty_excerpt">{!! $blog->description !!}</div>
                                    </div>
                                </div>
                            </div>
                        @endforeach


                    </div>

                </div>

            </div>
        </div>
    </div>

    <div class="photty_pagination">
        {{$finded_blogs->links()}}
    </div>
    <div style="height: 50px;"></div>

    <div class="photty_back_to_top"></div>
@endsection

@section('footer')
    @parent
@endsection

@push('css')
    <link rel="stylesheet"  href="{{asset('css/owl.carousel.min.css')}}">

@endpush

@push('js')
    <script src="{{asset('js/owl.carousel.min.js')}}"></script>

@endpush

