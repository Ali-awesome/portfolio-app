import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();
        const name = e.target.name.value
        console.log(name)
        emailjs.sendForm('service_jz2ee26', 'template_vyo25i7', e.target, 'A5SA48ZWQ4xL5muGD').then(res => {
            console.log(res);
        });
        e.target.reset();
    }
    return (
        <div>
            <div className="hero min-h-screen py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Let's Talk!</h1>
                        <p className="py-6">You can email me and we will have a chat! I am so excited. What about you?</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <form onSubmit={sendEmail}>
                                <div className="form-control  text-gray">
                                    <label className="label">
                                        <span className="label-text ">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter you name..." name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter your email..." className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">What's in your mind?</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" type="text" name='message' placeholder="Your message..." required></textarea>

                                </div>
                                <input type="submit" value={"SEND"} className="form-control w-full mt-2 btn btn-ghost text-gray border-black" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;