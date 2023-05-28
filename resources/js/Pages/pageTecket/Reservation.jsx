import React, { createContext, useEffect, useContext, useState } from 'react'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { useForm } from '@inertiajs/react'
import CheckoutPage from './CheckoutPage'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { faCircleCheck, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const stripePromise = loadStripe('pk_test_51HtyfhFcT3SQ1CDfD2mFcdGw3mBJQ9rFggRPmmd2GbZ0bMHQQWJElxOFhfQVTDERIQvbTjefeduYFrmSMuAvbcP500F4vzZdnd');

const appearance = {
    theme: 'night',
    labels: 'floating',

    variables: {
        colorPrimary: '#0570de',
        colorBackground: '#101b56',
        colorTextPlaceholder: '#828ab3',
        colorText: '#6370b9',
        colorTextSecondary: '#8c9eff',
        colorDanger: '#df1b41',
        fontFamily: 'Ideal Sans, system-ui, sans-serif',
        spacingUnit: '3px',
        borderRadius: '4px',

    },

    rules: {
        '.Input': {
            color: '#fff'
        }
    }
};


export default function Reservation() {
    const stripe = useStripe();
    const elements = useElements();
    let token = document.getElementById('meta_token').getAttribute('content');
    const [clientSecret, setClientSecret] = useState('')
    const [paymentCompleted, setPaymentCompleted] = useState(false)
    // const [paymentProccessing, setPaymentProccessing] = useState(false);
    const [paymentOnProccess, setPaymentOnProccess] = useState(false);
    const [error, setError] = useState();

    const { data, setData, post, processing, errors } = useForm({
        First_name: '',
        Last_name: '',
        email: '',
        Phone_Number: '',
        Film_Name: '',
        Film_Category: '',
        Day: '',
        Hour: '',
        City: '',
        cinimaname: '',
    })

    const submit = async (e) =>{
        e.preventDefault()
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: "http://127.0.0.1:8000/payment",
            },
            redirect: 'if_required'
        })

        // paymentIntent !== undefined && setPayementStatus(paymentIntent?.status)

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            setError(result.error)
            console.log(result?.error);
        } else {
            setPaymentCompleted(true)
            post('/envoyer')

            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }

    };

    useEffect(() => {
        if (paymentCompleted) {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }, [paymentCompleted])


useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/charge", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": token },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .catch((err) => console.log(err))
}, []);

const options = {
    clientSecret,
    appearance,
};

return (

    <div class="containerR">
        <div class="title">Reservation</div>
        <Element stripe={stripePromise} options={options}>
            <form action="#" onSubmit={submit}>
                <div class="form-group">
                    <span> First Name</span>
                    <input type="text" name='First_name' placeholder="Enter  first name" value={data.First_name} onChange={e => setData('First_name', e.target.value)} />
                </div>
                <div class="form-group">
                    <span>Last Name</span>
                    <input type="text" name='Last_name' placeholder="Enter last name" value={data.Last_name} onChange={e => setData('Last_name', e.target.value)} />
                </div>
                <div class="form-group">
                    <span>Email</span>
                    <input type="email" name='email' placeholder="Enter email" value={data.email} onChange={e => setData('email', e.target.value)} />
                </div>
                <div class="form-group">
                    <span>Phone Number</span>
                    <input type="text" name='Phone_Number' placeholder="Enter phone number" value={data.Phone_Number} onChange={e => setData('Phone_Number', e.target.value)} />
                </div>
                <div class="form-group">
                    <span>Film Name</span>
                    <input type="text" name='Film_Name' placeholder="Enter film name" value={data.Film_Name} onChange={e => setData('Film_Name', e.target.value)} d />
                </div>
                <div class="form-group">
                    <span> Film Category </span>
                    <input type="text" name='Film_Category' placeholder="Enter film category " value={data.Film_Category} onChange={e => setData('Film_Category', e.target.value)} />
                </div>
                <div class="form-group">
                    <span> Day for watch movie </span>
                    <input type="text" name='Day' placeholder="manday " value={data.Day} onChange={e => setData('Day', e.target.value)} />
                </div>
                <div class="form-group">
                    <span> Hour for watch movie </span>
                    <input type="text" name='Hour' placeholder="14H 00min " requivalue={data.Hour} onChange={e => setData('Hour', e.target.value)} red />
                </div>
                <div class="form-group">
                    <span> City </span>
                    <input type="text" name='City' placeholder="Enter your city " value={data.City} onChange={e => setData('City', e.target.value)} />
                </div>
                <div class="form-group">
                    <span> Cinima Name </span>
                    {/* <input type="text" placeholder="Enter film category " required /> */}
                    <select name='cinimaname' value={data.cinimaname} onChange={e => setData('cinimaname', e.target.value)}>
                        <option>
                            select cenima name </option>
                        <option>
                            Cinema Rialto</option>
                        <option>
                            La maison du cinema</option>
                        <option>
                            Megarama
                        </option>
                        <option>
                            Cinema Rif
                        </option>

                    </select>
                </div>
                {
                    paymentCompleted ?
                        <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-y-12">
                            <FontAwesomeIcon className="text-secondary-dark text-4xl opacity-100 transition" icon={faCircleCheck} />
                            <p className="text-white font-bold text-2xl">Payment success</p>
                        </div>
                        :
                        <>
                            <PaymentElement className="w-full" />
                            <button className="w-full bg-secondary-dark rounded-sm mt-3 py-2 disabled:bg-[#33636a]" disabled={!stripe} onClick={() => (setPaymentOnProccess(true), setError(''))}>{(!error && paymentOnProccess && !paymentCompleted) && <FontAwesomeIcon icon={faCircleNotch} spin />} Submit</button>
                        </>
                }
                <div class="button">
                    <button class="send">Send</button><br />
                    {errors.First_name && errors.Last_name && errors.email && errors.Phone_Number && errors.Film_Name
                        && errors.Film_Category && errors.Day && errors.Hour && errors.City &&
                        errors.cinimaname && (
                            <div className="warning-messsage ">
                                <i class="fa-sharp fa-solid fa-circle-exclamation mr-2  "></i>
                                verify all the fields are validet.
                            </div>)}
                </div>
            </form>
        </Element>
    </div>


)
}