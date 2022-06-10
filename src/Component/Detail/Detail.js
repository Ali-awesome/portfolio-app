import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../Hooks/useProjects';

const Detail = () => {
    const { id } = useParams();
    console.log(id)
    const [projects, setProjects] = useProjects();
    console.log(projects);
    // const { name } = projects[0];
    // console.log(p);
    // const { name } = project;

    return (
        <div className='text-white min-h-screen py-10'>
            <div className="hero">
                <div className="hero-content flex-col md:flex-row mt-20">
                    <div className="w-3/5 h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                            <img className='w-full' src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-full' src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-full' src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" />
                        </div>
                    </div>
                    <div className='text-left w-2/5'>
                        <h1 className="text-3xl font-bold">Name:</h1>
                        <ul>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                        <a className='flex flex-col md:flex-row mb-3' href="https://github.com/Ali-awesome" target="_blank"><FontAwesomeIcon className='h-7 w-7 mr-2' icon={faGithub}></FontAwesomeIcon>Github Client</a>
                        <a className='flex flex-col md:flex-row mb-3' href="https://github.com/Ali-awesome" target="_blank"><FontAwesomeIcon className='h-7 w-7 mr-2' icon={faGithub}></FontAwesomeIcon>Github Server</a>
                        <a className='flex flex-col md:flex-row mb-3' href="https://github.com/Ali-awesome" target="_blank"><FontAwesomeIcon className='h-7 w-7 mr-2' icon={faGithub}></FontAwesomeIcon>Live Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;