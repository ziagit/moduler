<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\User;

class UserController extends Controller
{
    public function signup(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->all(), 400);
        }
        $user = new User([
            'name'=> $request->input('name'),
            'email'=> $request->input('email'),
            'password'=> bcrypt($request->input('password')),
            'role'=> 'admin'
        ]); 
        if($request->input('password')!==$request->input('confirm_password')){
            return response()->json(["Message"=>"Password not matching!"]);
        }      
        $user->save();
        return response()->json(['message'=>'User saved'], 200);
    }

    public function signin(Request $request){
        $credentials = [
            'email'=> $request->input('username'),
            'password'=>$request->input('password')
        ];
        if (Auth::attempt($credentials)){
            $data=[
                'username'=> $request->username,
                'password'=> $request->password,
                'grant_type'=> 'password',
                'client_id'=> env('CLIENT_ID'),
                'client_secret'=> env('CLIENT_SECRET')
            ];
            $tokenRequest = Request::create('/oauth/token','post',$data);
            $response = app()->handle($tokenRequest);
            $user = new User();
            return response()->json([
                'tokens'=>json_decode((string) $response->getContent(), true),
                'user'=>$user->where('email',$request->username)->get()
            ]);
        }else{
            return response()->json(['Message'=>'Your Username or Password is Incorrect!'], 404);
        }
    }

    public function signout($id){
        $user = new User();

       
        return response()->json($user->find(1));
    }

    public function getUser(Request $request){
        $users = new User();
        $res = $users->all();
        return response()->json($res);
    }

    public function logout(Request $request){
        //delete token
    }
}
