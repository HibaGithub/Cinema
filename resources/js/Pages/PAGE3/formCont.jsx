import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { useForm } from '@inertiajs/react'

export default function Form(status){
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/send')
    }

    return (
        <div class="containerform">
           
            <div class="contact-boxform ">
                <div class="rightform">
                    <h2>Contact</h2>
                    <p>We are here for you! How can we help</p>
        <form onSubmit={submit}>
            <input type="text" class="field" name='name' placeholder="Enter your name" value={data.name} onChange={e => setData('name', e.target.value)} />
        
            <input type="text" class="field" name='email' placeholder="Enter your email address" value={data.email} onChange={e => setData('email', e.target.value)} />
                      
            <input type="text" class="field" name='subject' placeholder="Enter your subject" value={data.subject} onChange={e => setData('subject', e.target.value)} />
                        
            <textarea placeholder="How we can help..." name='message' class="field" value={data.message} onChange={e => setData('message', e.target.value)} ></textarea>
                        
            <button class="send">Send</button>
                        {errors.name  && errors.email && errors.message && errors.subject  && (
                            <div className="warning-messsage ">
                                <i class="fa-sharp fa-solid fa-circle-exclamation mr-2  "></i>
                                virify all the fields are validet.
                            </div>
                        )}
        </form>
                </div>
                <div class="leftform">
                    
                </div>
            </div>
        </div>
    )
}