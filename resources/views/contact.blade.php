@extends('layout.master')


@section('content')
    <div class="photty_contacts">
        <div class="row">
            <div class="col col-12 photty_content">
                <h1 class="">İletişim</h1>
                <div class="photty_container">
{{--
                    <div id="map-canvas" class=" canvas_map_container"></div>
--}}
                </div>
                <div class="photty_client_contacts">
                    <div class="photty_container">
                        <div class="row gutters">
                            <div class="col col-12">
                                <div class="photty_form_block ">
                                    <form  class="photty_forms" method="post">
                                        @csrf
                                        <div class="row ">
                                            <div class="col col-6">
                                                <input type="text" class="form_user-name " name="name" placeholder="İsim" required>
                                            </div>
                                            <div class="col col-6">
                                                <input type="text" class="form_email" name="email" placeholder="E-Posta" required>
                                            </div>
                                        </div>
                                        <textarea class="form_comment" name="message" placeholder="Mesaj" required></textarea>

                                        <input class="" type="submit" value="Gönder">

                                    </form>
                                </div>
                            </div>
                            {{--<div class="col col-4">
                                <div class="photty_contact_info">
                                    <h6>ADDRESS:</h6>
                                    <p>1600 Pennsylvania Ave NW, Washington</p>
                                    <h6>PHONE:</h6>
                                    <p>+1 (800) 456 37 96 – Office</p>
                                    <p>+1 (800) 456 37 96 – Fax</p>
                                    <h6>EMAIL:</h6>
                                    <p><a href="mailto:info@company.com">info@company.com</a></p>
                                    <ul class="photty_social_block">
                                        <li><a class="facebook" href="https://www.facebook.com"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a class="twitter" href="https://twitter.com"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a class="google" href="https://www.instagram.com"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a class="pinterest" href="https://www.pinterest.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>--}}
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

