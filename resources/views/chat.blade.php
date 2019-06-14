@extends('layouts.app')

@section('content')

    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    <div id="chat-sidebar">
                    @foreach(\App\User::where('id','!=',Auth::user()->id)->get() as $user)
                        <div id="sidebar-user-box" class="100" >
                        <img src="https://freeiconshop.com/wp-content/uploads/edd/person-solid.png" />
                        <span id="slider-username">{{$user->name}} </span><span class="float-right user_{{$user->id}}"></span>
                        
                        </div>	
                    @endforeach

                    
                        
                    </div>	
                    </div>
                    </div>
            </div>
        </div>
@endsection
