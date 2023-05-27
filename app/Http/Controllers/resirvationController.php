<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class resirvationController extends Controller
{
    public function index()
    {
        return Inertia::render('pageTecket/Reservation');
    }

    public function isOnline($site = 'https://www.youtube.com/')
    {
        if (@fopen($site, 'r')) {
            return true;
        } else {
            return false;
        }
    }
    public function store(Request $request)
    {
        $request->validate([
            "First_name" => 'required',
            "Last_name" => 'required',
            "email" => 'required',
            "Phone_Number" => 'required',
            "Film_Name" => 'required',
            "Film_Category" => 'required',
            // "Day" => 'required',
            "Hour" => 'required',
             "City" => 'required',
            "cinimaname" => 'required',
        ]);




        if ($this->isOnline()) {
            $mail_data = [
                'recipient' => 'cinimania03@gmail.com',
                'formFirst_name' => $request->First_name,
                'formLast_name' => $request->Last_name,
                'formemail' => $request->email,
                'formPhone_Number' => $request->Phone_Number,
                'formFilm_Name' => $request->Film_Name,
                'formFilm_Category' => $request->Film_Category,
                'formDay' => $request->Day,
                'formHour' => $request->Hour,
                'formCity' => $request->City,
                'formcinimaname' => $request->cinimaname
            ];

            // Mail::send("front.contactUs", $data, function ($message) use ($obj) {
            //     $message->from($obj->email);
            //     $message->to('salondesbelleslettres@gmail.com')
            //     ->subject($obj->objet);
            // });  


            Mail::send('emailTemplate', $mail_data, function ($message) use ($mail_data) {
                $message->to('cinimania03@gmail.com');
                $message->from($mail_data['formemail'], $mail_data['formLast_name'], $mail_data['formFirst_name'])
                    ->subject( $mail_data['formFilm_Name']);
                    
                    // 'la category de film est ', $mail_data['formFilm_Category'],
                    // 'la date de film est ',  $mail_data['formDay'],
                    // "l'heurs de film est ",  $mail_data['formHour'],
                    // 'la ville de film est ',   $mail_data['formCity'],
                    // 'Cinema: ',   $mail_data['formcinimaname']
               
            });
            return  redirect()->back()->with('success', 'email send');
        } else {
            return redirect()->back()->withInput()->with('error', 'virifier que tu es connecte ');
        }
    }
}
