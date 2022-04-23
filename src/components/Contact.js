import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [loading,setLoading]=useState(false);

  const sendEmail = (event) => {

    event.preventDefault();
    setLoading(true);
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, event.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result);
        setLoading(false);
        alert("Message sent successfully !\nI will get back to you as soon as possible!");
        event.target.reset();
      }, (error) => {
        alert("Failure to send message !\nPlease check your internet connection or try again later!");
      });
  };  

  return (
    <div style={{ margin:"5% auto"}}>
      <h1>CONTACT ME</h1>
      <form onSubmit={sendEmail}>
        <div className="row" style={{marginBottom:"2%"}}>
          <div className="col-12 col-sm-3">
            <h3>Name</h3>
          </div>
          <div className="col-12 col-sm-9">
            <input type="text" className="form-control" required placeholder="Enter your Name" name="name"></input>
          </div>
        </div>
        <div className="row" style={{marginBottom:"2%"}}>
          <div className="col-12 col-sm-3">
            <h3>Email</h3>
          </div>
          <div className="col-12 col-sm-9">
            <input type="email" className="form-control" required placeholder="Enter your email" name="email"></input>
          </div>
        </div>
        <div className="row" style={{marginBottom:"2%"}}>
          <div className="col-12 col-sm-3">
            <h3>Message</h3>
          </div>
          <div className="col-12 col-sm-9">
            <textarea type="text" className="form-control" required placeholder="Enter your message" rows="5" name="message"></textarea>
          </div>
        </div>
        {loading && 
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            &nbsp;Loading...
          </button>
        }
        {!loading && 
          <button type="submit" className="btn btn-primary btn-lg">SUBMIT</button>
        }
      </form>
    </div>
  )
}

export default Contact