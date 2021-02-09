import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_juz9ubs', 'template_gs5x43e', e.target, 'user_fe0cAdfvqK8cCfcYkzey6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
      <div className="contact-container">
          <div>
              <h1>Free Consultation</h1>
          </div>
          <form onSubmit={sendEmail}>
            <div className='contact-item'>
                <div><label>Name</label> </div>
                <div><input type="name" name="name"/></div>
            </div>
            <div className='contact-item'>
                <div><label>Email</label></div>
                <div><input type="email" name="email"/></div>
            </div>
            <div className='contact-item'>
                <div><label>Message</label></div>
                <div><textarea name="message"/></div>
            </div>

            <input type="submit" value="Send" />
        </form>
      </div>
    
  );


}