<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FormcontactController extends Controller
{
    public function index()
    {
        return Inertia::render('PAGE3/formCont');
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
            "name" => 'required',
            "email" => 'required',
            "subject" => 'required',
            "message" => 'required',
        ]);

      


        if ($this->isOnline()) {
            $mail_data = [
                'recipient' => 'cinimania03@gmail.com',
                'formEmail' => $request->email,
                'formName' => $request->name,
                'formSubject' => $request->subject,
                'body' => $request->message
            ];

            // Mail::send("front.contactUs", $data, function ($message) use ($obj) {
            //     $message->from($obj->email);
            //     $message->to('salondesbelleslettres@gmail.com')
            //     ->subject($obj->objet);
            // });  

            
            Mail::send('email-template', $mail_data, function ($message) use ($mail_data) {
                $message->to('cinimania03@gmail.com');
                $message->from($mail_data['formEmail'], $mail_data['formName'])
                ->subject($mail_data['formSubject']);
            });
            return  redirect()->back()->with('success', 'email send');
        } else {
            return redirect()->back()->withInput()->with('error', 'virifier que tu es connecte ');
        }
    }
}
