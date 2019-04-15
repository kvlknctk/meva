@extends('layout.master')


@section('content')
    <div class="photty_blog_left_sidebar photty_blog_single ">
        <div class="photty_container">
            <div class="row gutters">
                <div class="col col-9 photty_content">
                    <div class="photty_blog_post">
                        <h1>{{$blog->title}}</h1>
                        <div class="photty_meta">
                            <div>{{$blog->created_at->diffForHumans()}}</div>
                            <div class="photty_post_ref">Kategori :  <a href="{{route('category', ['category' => $blog->category->slug])}}">{{$blog->category->title}}</a></div>
                        </div>
                        <img class="photty_single_post_img" src="{{Voyager::image($blog->image)}}" alt="">

                        {!! $blog->description !!}

                    </div>
                    <div class="row">
                        <div class="col col-12">
                            <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small" ><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u={{url()->current()}}" class="fb-xfbml-parse-ignore">Paylaş</a></div>
                        </div>
                        <div class="col col-12">
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false" >Tweet</a>
                            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </div>
                    </div>

                    <div class="row photty_prev_next_posts">
                        <div class="col col-6 photty_prev_post">
                            @isset($previous_data)
                            <a class="photty_prev_post_link" href="{{route('blog_detail', ['category' => $previous_data->category->slug, 'slug' => $previous_data->slug])}}"></a>
                            <a href="{{route('blog_detail', ['category' => $previous_data->category->slug, 'slug' => $previous_data->slug])}}"><h5>{{$previous_data->title}}</h5></a>
                            <div class="photty_meta">
                                <div>{{$previous_data->created_at->diffForHumans()}}</div>
                                <div>Kategori : <a href="{{route('category', ['category' => $previous_data->category->slug])}}"> {{$previous_data->category->title}}</a></div>
                            </div>
                            @endisset
                        </div>
                        <div class="col col-6 photty_next_post">
                            @isset($next_data)
                            <a class="photty_next_post_link" href="{{route('blog_detail', ['category' => $next_data->category->slug, 'slug' => $next_data->slug])}}"></a>
                            <a href="{{route('blog_detail', ['category' => $next_data->category->slug, 'slug' => $next_data->slug])}}"><h5>{{$next_data->title}}</h5></a>
                            <div class="photty_meta">
                                <div>{{$next_data->created_at->diffForHumans()}}</div>
                                <div>Kategori : <a href="{{route('category', ['category' => $next_data->category->slug])}}"> {{$next_data->category->title}}</a></div>
                            </div>
                            @endisset
                        </div>
                    </div>
                    <div class="photty_featured_posts">
                        <h3>Diğer yazılarım</h3>
                        <div class="row">
                            @foreach($random_blogs as $random)
                            <div class="col col-6">
                                <div class=" photty_grid_blog_item">
                                    <a href="{{route('blog_detail', ['category' => $random->category->slug, 'slug' => $random->slug])}}" class=" photty_post_formats">
                                        <img src="{{Voyager::image($random->thumbnail('thumb'))}}" alt="">
                                    </a>
                                    <div class="photty_grid_post_content">
                                        <a href="{{route('blog_detail', ['category' => $random->category->slug, 'slug' => $random->slug])}}"><h5>{{$random->title}}</h5></a>
                                        <div class="photty_meta">
                                            <div>{{$random->created_at->diffForHumans()}}</div>
                                            <div>Kategori :  <a href="{{route('category', ['category' => $random->category->slug])}}">{{$random->category->title}}</a></div>
                                        </div>
                                        {!! $random->description !!}

                                    </div>
                                </div>
                            </div>
                            @endforeach

                        </div>
                    </div>
                    {{--<div class="photty_comments_cont">
                        <h3 class="photty_comments_title">1 Comment on This Post</h3>

                        <div class="photty_comment_list">
                            <div class="photty_comments_block">
                                <img src="http://2.gravatar.com/avatar/e5df5a63a52667f2ca78d48b52fdc2d2?s=70&d=mm&r=g" alt="">
                                <h5 class="photty_comment_author">donpixel</h5>
                                <div class="photty_comment_date">May 29, 2017</div>
                                <p>Some comment here
                                    <img draggable="false" class="emoji" alt="😉" src="https://s.w.org/images/core/emoji/2.3/svg/1f609.svg">
                                </p>
                                <div class="photty_comment_reply"><a href="#">Reply</a></div>
                            </div>
                        </div>

                        <div class="photty_blog_single_comments">
                            <h3>Leave a Reply</h3>
                            <div class="photty_form_block">
                                <p class="photty_comment_notes">Your email address will not be published. Required fields are marked *</p>
                                <form  class="photty_form">
                                    <textarea  class="form_comment" name="message" placeholder=""></textarea>
                                    <div class="row">
                                        <div class="col col-6">
                                            <input type="text" class="form_user-name " name="name" placeholder="Your Name *">
                                        </div>
                                        <div class="col col-6">
                                            <input type="text" class="form_email" name="email" placeholder="Your Email *">
                                        </div>
                                    </div>
                                    <input class="" type="submit" value="Post Comment">
                                </form>
                            </div>
                        </div>
                    </div>--}}
                </div>
                <div class="col col-3 photty_sidebar first">
                    {{--<div class="photty_sidebar_block">
                        <form class="fotty_search_form">
                            <input type="text" name="search" placeholder="Arama">
                            <span><i class="fa fa-search" aria-hidden="true"></i></span>
                        </form>
                    </div>--}}
                 {{--   <div class="photty_sidebar_block photty_sidebar_text">
                        <h6>ABOUT US</h6>
                        <img src="img/banner1.jpg" alt="">
                        <p>Nunc ultrices metus vitae purus fringilla, velir pretium nunc bibendum. Duis in diam nonum neque ultricies volutpat. Etiam dolor et lectus.</p>
                    </div>--}}
                    <div class="photty_sidebar_block photty_sidebar_categories">
                        <h6>Kategoriler</h6>
                        <ul>
                            @foreach($categories as $category)
                                <li>
                                    <a href="{{route('category', ['category' => $category->slug])}}">{{$category->title}}</a>
                                </li>
                            @endforeach

                        </ul>
                    </div>
                    <div class="photty_sidebar_block">
                        <h6>Son Yazılar</h6>
                        <div class="photty_footer_posts">

                            @foreach($recent_blogs as $r_blogs)

                                <div class="photty_footer_contact_block">
                                    <a href="{{route('blog_detail', ['category' => $r_blogs->category->slug, 'slug' => $r_blogs->slug])}}">{{$r_blogs->title}}</a>
                                    <div class="photty_meta">
                                        <div>{{$r_blogs->created_at->diffForHumans()}}</div>
                                        <div>by <a href="category.html">pixel-mafia</a></div>
                                    </div>
                                </div>
                            @endforeach


                        </div>
                    </div>
              {{--      <div class="photty_sidebar_block">
                        <img src="img/banner300x250.jpg" alt="">
                    </div>--}}


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
    <link rel="stylesheet"  href="{{asset('css/owl.carousel.min.css')}}">
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/tr_TR/sdk.js#xfbml=1&version=v3.2"></script>
@endpush

@push('js')
    <script src="{{asset('js/owl.carousel.min.js')}}"></script>

@endpush

