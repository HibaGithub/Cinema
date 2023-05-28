<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
// use App\Models\Payment;
use Exception;
use Inertia\Inertia;
use Stripe;

class PaymentController extends Controller
{
 
    public function index()
    {
        return Inertia::render('pageTecket/CheckoutPage');
    }
 
    public function pay(Request $request)
    {

        // Replace with your secret key, found in your Stripe dashboard
        Stripe\Stripe::setApiKey('sk_test_51HtyfhFcT3SQ1CDfVMuLpnTL5s23YmOYizF7iAUFujGCJt9pgbrQSqlPNdJJuB93n9HnXbDKmVQhyFxM6ELbfdJs00Y1zRKzmQ'); 

        function calculateOrderAmount(array $items): int {
            return 499;
        }

        header('Content-Type: application/json');

        try {

            $jsonStr = file_get_contents('php://input');
            $jsonObj = json_decode($jsonStr);

            $paymentIntent = Stripe\PaymentIntent::create([
                'amount' => calculateOrderAmount($jsonObj->items),
                'currency' => 'gbp', // Replace with your country's primary currency
                'automatic_payment_methods' => [
                    'enabled' => true,
                ],
                // Remove if you don't want to send automatic email receipts after successful payment
                // "receipt_email" => $request->email 
            ]);

            $output = [
                'clientSecret' => $paymentIntent->client_secret,
            ];
            echo json_encode($output);
            // return back()->with(['succed' => $output]);
            
        } catch (Exception $e) {
            return back()->with(['error' => $e->getMessage()]);
        }
    }
}