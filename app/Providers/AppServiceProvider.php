<?php

    namespace App\Providers;

    use App\Album;
    use App\Blog;
    use App\Gallery;
    use Illuminate\Support\Facades\View;
    use Illuminate\Support\ServiceProvider;

    class AppServiceProvider extends ServiceProvider
    {
        /**
         * Register any application services.
         *
         * @return void
         */
        public function register()
        {
            //
        }

        /**
         * Bootstrap any application services.
         *
         * @return void
         */
        public function boot()
        {
            $latest_blogs     = Blog::with('category')->orderBy('id', 'desc')->limit(3)->get();
            $latest_albums    = Album::orderBy('id', 'desc')->limit(3)->get();
            $random_galleries = Gallery::inRandomOrder()->limit(6)->get();

            View::share('latest_blogs', $latest_blogs);
            View::share('latest_albums', $latest_albums);
            View::share('random_galleries', $random_galleries);
        }
    }
