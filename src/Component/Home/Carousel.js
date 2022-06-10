import React from 'react';
import { Link } from 'react-router-dom';
import myPDF from '../../images/Resume of Sanaullah.pdf'

const Carousel = () => {
    return (
        <div>
            <div className='relative carousel w-full h-screen'>
                <div className='absolute w-full'>
                    <img src="https://i.postimg.cc/cC3p3zpN/wall.jpg" className="w-full  brightness-[.25] h-screen" alt='hero' />
                </div>

                <div className='absolute inset-1/3 z-10 w-1/3'>
                    <img className='hidden md:flex' src="https://i.postimg.cc/YqY7L47m/Sa-Na-Ullah-1.png" alt="logoone" />
                    <Link className='btn btn-ghost text-white border border-white' to={myPDF} target="_blank" download>RESUME</Link>
                </div>
            </div>

        </div>
    );
};

export default Carousel;