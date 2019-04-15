<?php

    namespace App\Http\Controllers;

    use App\Album;
    use App\Blog;
    use App\Category;
    use App\Contact;
    use App\Gallery;
    use App\Slider;
    use OpenGraph;
    use SEOMeta;
    use SEO;

    use Illuminate\Http\Request;

    class HomeCTRL extends Controller
    {
        public function index()
        {
            $sliders = Slider::all();

            return view('index', compact('sliders'));
        }

        public function gallery()
        {
            $galleries = Gallery::paginate(10);

            SEO::setTitle('Galeri');
            SEO::setDescription('Çalışmalarımın yüksek çözünürlükte yer aldığı sayfam.');

            return view('gallery', compact('galleries'));
        }

        public function album()
        {
            $albums = Album::paginate(10);

            SEO::setTitle('Albüm');
            SEO::setDescription('Konsept için türetilmiş birden fazla görseller bu sayfada yer almaktadır. ');

            return view('album', compact('albums'));
        }

        public function album_detail($slug)
        {
            $album        = Album::whereSlug($slug)->firstOrFail();
            $random_album = Album::inRandomOrder()->limit(3)->get();

            SEO::setTitle($album->title);
            SEO::setDescription(strip_tags($album->description));

            return view('album_detail', compact('album', 'random_album'));
        }

        public function blog()
        {
            $blogs = Blog::with('category')->paginate(10);

            return view('blog', compact('blogs'));
        }

        public function blog_detail($category, $slug)
        {
            $blog         = Blog::with('category')->whereSlug($slug)->firstOrFail();
            $categories   = Category::all();
            $recent_blogs = Blog::orderBy('created_at', 'desc')->limit(10)->get();

            $previous      = Blog::where('id', '<', $blog->id)->max('id');
            $next          = Blog::where('id', '>', $blog->id)->min('id');

            $random_blogs = Blog::with('category')->inRandomOrder()->limit(2)->get();

            $previous_data = Blog::with('category')->find($previous);
            $next_data     = Blog::with('category')->find($next);


            // OG TYPE için değerler atayacağız.
            SEO::setTitle($blog->title);
            SEO::setDescription(strip_tags($blog->description));

            OpenGraph::setUrl(url()->current());
            OpenGraph::addProperty('type', 'articles');
            OpenGraph::addProperty('image', asset($blog->image));

            return view('blog_detail', compact('blog', 'categories', 'recent_blogs', 'previous_data', 'next_data', 'random_blogs'));
        }

        public function blog_category($category)
        {
            $finded_category = Category::whereSlug($category)->firstOrFail();
            $finded_blogs    = Blog::where('category_id', $finded_category->id)->paginate(10);

            //$blogs = Blog::with('category')->paginate(10);
            SEO::setTitle('Kategori : ' . $finded_category->title);
            SEO::setDescription(strip_tags($finded_category->description));

            return view('blog_category', compact('finded_category', 'finded_blogs'));
        }

        public function contact()
        {

            SEO::setTitle('İletişim');
            SEO::setDescription('Çalışmalarım hakkında fikirlerinizi iletebilir, benimle iletişime geçebilirsiniz.');

            return view('contact');
        }

        public function contact_post(Request $request)
        {

            Contact::create([
                'name'    => $request->get('name'),
                'email'   => $request->get('email'),
                'message' => $request->get('message')
            ]);

            return view('success');
        }


    }
