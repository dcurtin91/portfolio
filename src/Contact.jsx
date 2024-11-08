import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const [showConfirmation, setShowConfirmation] = useState('');
    const [showForm, setShowForm] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4exugpd', 'template_2p84r1j', form.current, 'PPkFo7F-cUWCAtXQC')
            .then((result) => {
                console.log(result.text);
                resetForm(); 
            }, (error) => {
                console.log(error.text);
            });
    };

   

    const resetForm = () => {
        form.current.reset();
       setShowConfirmation(`Thanks! I'll get back to you asap.`);
       setShowForm('none');
    };

    return (
        <div className="tile is-ancestor is-vertical" style={{ marginTop: "30px", marginBottom: "50px" }} >
            <div className="tile is-parent is-vertical" >
                <div className="tile is-child" style={{ display: "flex", justifyContent: "center" }}>

                    <form ref={form} onSubmit={sendEmail} style={{ display: showForm }}>

                        <div className="field is-horizontal" >
                            <div className="field-label is-normal">
                                <label className="label">From</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p>
                                        <input className="input" type="text" name="user_name" placeholder="Name" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p >
                                        <input className="input" type="email" name="user_email" placeholder="Email" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="field is-horizontal" >
                            <div className="field-label is-normal">
                                <label className="label">Subject</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p>
                                        <input className="input" type="text" name="user_subject" placeholder="Hey Dave" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                                
                                
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Message</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <textarea className="textarea" name="message" rows="15" ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label">

                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control" style={{ display: "flex", justifyContent: "center" }}>
                                        <button type="submit" className="button is-link">
                                            Send
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                    <div>{showConfirmation}</div>
                </div>
            </div>
        </div>

    );
};
