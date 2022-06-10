import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div className='text-white min-h-screen py-10'>
            <div className="card w-3/5 mx-auto pt-20 shadow-xl">
                <div className="card-body text-left">
                    <h1 className='text-2xl my-4'>Hello visitor,</h1>
                    <p className='my-3'>This site is a portfolio of a dreamer named <strong className='text-xl'>Mohammad Sanaullah</strong>. He loves to learn. Though he sometimes gets lazy, so much so that he can barely get up from bed. He is an ordinary guy. One who is just passing by the Earth! He can be a real pain if he becomes determined. Anyways he is not here now, so don't worry! He won't mind.</p>
                    <p className='my-3'>He is currently learning to be a Web Developer. And, also he loves the idea of how data can change the world of everything if handled correctly. So he also loves to learn about data. And I am sure he will do good with that. Let's give him some time, okay?</p>

                    <p className="text-3xl text-center my-4">* Oh! Don,t forget to browse his works! *</p>

                </div>
            </div>
        </div>
    );
};

export default About;