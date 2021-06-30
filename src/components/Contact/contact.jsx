import "./contact.scss";
import {useState,useEffect} from"react";

import email from "../secret";
import emailjs from 'emailjs-com';
export default  function Contact() {
    const[message,setMessage]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true);
        emailjs.sendForm('', '', e.target, '')
.then((result) => {
alert("Message Sent, We will get back to you shortly", result.text);
},
(error) => {
alert("An error occurred, Please try again", error.text);
});
       
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!');
          setMessage(false);
          console.log(message);

        }, 1000);
        return () => clearTimeout(timer);
  }, []);
    

    return (
        <div className="contact" id="contact">
            <div className="left" style={{}}>
                
        
            </div>
            <div className="right">
               
                <div className="design">
                <h2>Contacts</h2>
                </div>
                <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="from_name"></input>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
                {message && <span>Thanks, I'll reply Asap :)</span>}

            </div>
        </div>
    )
}


