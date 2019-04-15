@extends('layout.master')


@section('content')
    <div class="photty_contacts">
        <div class="row">
            <div class="col col-12 photty_content">
                <h1 class="">Mesajınız Bana Ulaştı</h1>
                <div class="photty_container">


                </div>
                <div class="photty_client_contacts">
                    <div class="photty_container">
                        <div class="row gutters">
                            <div class="col col-12">
                                Mesajınız bana ulaştı. İletişime geçtiğiniz için teşekkür ederim.
                            </div>
                        </div>
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
   {{-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCuHurSUFUfsgtm7L_EySTjMNeh_zRkovM"></script>
    <script src="{{asset('js/maps.js')}}"></script>--}}
@endpush

