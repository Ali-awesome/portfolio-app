import React from 'react';
import useProjects from '../Hooks/useProjects';
import './Website.css';
import { Link } from 'react-router-dom';


const Website = () => {
    const [projects, setProjects] = useProjects();

    return (
        <div className='text-white py-3 '>
            < h1 className="text-5xl text-left ml-24 mt-10" > Featured Works</h1 >
            <hr className='w-3/5 mx-24 mb-16 mt-10' />
            <div className='grid grid-cols-1 md:grid-cols-3 my-3 mx-5'>
                {
                    projects.map((project, i) =>
                        <div key={project.id} className='image border-8 border-white w-[68%] h-[350px] mx-auto mb-3'>
                            <img className='img h-[85%]' src={project.murl} alt="" />
                            <div className="overlay">
                                <ul className='text-xl text-left mx-5'>
                                    <li>{project.cmnt1}</li>
                                    <li>{project.cmnt2}</li>
                                    <li>{project.cmnt3}</li>
                                </ul>
                                <Link to={`/detail/${project.id}`} className='text-3xl my-5 border-white '>Click!</Link>
                                {/* <Detail project={project}></Detail> */}


                            </div>
                            <p className='bg-white text-black font-[cursive] text-2xl h-[15%]'>{project.name}</p>
                        </div>
                    )
                }

            </div>
        </div >
    );
};

export default Website;