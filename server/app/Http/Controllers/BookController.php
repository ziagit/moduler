<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Book;
use App\User;

class BookController extends Controller
{
    public function postBook(Request $request){
        


        $book = new Book();
        $book->name=$request->input('name');
        $book->author=$request->input('author');
        $book->publisher=$request->input('publisher');
        $book->publish_date=$request->input('publish_date');
        $book->summary=$request->input('summary');
        $book->image_path=$request->input('image_path');
        $book->pdf_path=$request->input('pdf_path');
        $book->mp3_path=$request->input('mp3_path');
        $book->save();
         return response()->json(['book'=> $book], 201);
    }

    public function getBooks(){
        $books=Book::all();
        $response=[
            'books'=> $books
        ];
        return response()->json($response, 200);
    }

    public function putBook(Request $request, $id){
        $book = Book::find($id);
        if(!$book){
            return response()->json(['message'=>'Book not found'], 404);
        };
        $book->name=$request->input('name');
        $book->author=$request->input('author');
        $book->publisher=$request->input('publisher');
        $book->publish_date=$request->input('publish_date');
        $book->summary=$request->input('summary');
        $book->image_path=$request->input('image_path');
        $book->pdf_path=$request->input('pdf_path');
        $book->mp3_path=$request->input('mp3_path');
        $book->save();
        return response()->json(['book'=>$book], 200);
    }

    public function deleteBook($id){
        $book=Book::find($id);
        $book->delete();
        return response()->json(['message'=>'Book deleted'], 200);
    }
}
