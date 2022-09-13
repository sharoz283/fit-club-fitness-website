import React , { useRef } from "react";
import emailjs from '@emailjs/browser';
 
export default function JoinUsForm() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_phyzi7w', 'template_wxhtxij', form.current, '5YxI2bficubU3t7AP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div>
      <div className="container" id="join-us">
        <div className="join-us-form" >
      <div className="left-join-us">
        <hr />
        <h3><span className="stroke-text">READY TO </span>LEVEL UP YOUR BODY <span className="stroke-text">WITH US?</span></h3>
      </div>
      <div className="right-join-us">
        <form ref={form} onSubmit={sendEmail}>
            <input type="email" name="email" id="email" placeholder="Enter your email address here"/>
            <button type="submit" onClick={()=>{
                alert("new user registered")
            }}>Join now</button>
        </form>
      </div>
        </div>
    </div>
    </div>

  );
}
