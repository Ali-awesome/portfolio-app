import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../Hooks/useProjects';

const Detail = () => {
    const { id } = useParams();
    console.log(id)
    const [projects, setProjects] = useProjects();
    const [project, setProject] = useState({});
    // console.log(projects);
    useEffect(() => {
        if (projects.length !== 0) {
            setProject(projects.find(e => e.id === parseInt(id)));
            // const { name, murl, surl, turl, live, client, server, cmnt1, cmnt2, cmnt3, cmnt4, cmnt5 } = project;

        }
    }, [id, projects]);


    return (
        <div className='text-white min-h-screen py-10'>
            <div className="hero">
                <div className="hero-content flex-col md:flex-row mt-20">
                    <div className="w-1/2 h-96 carousel carousel-vertical">
                        <div className="carousel-item h-full">
                            <img className='w-full' src={project?.murl} />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-full' src={project?.surl} />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-full' src={project?.turl} />
                        </div>
                    </div>
                    <div className='text-left w-1/2'>
                        <h1 className="text-3xl font-bold">Name:{project?.name}</h1>
                        <ul>
                            <li>{project?.cmnt1}</li>
                            <li>{project?.cmnt2}</li>
                            <li>{project?.cmnt3}</li>
                            <li>{project?.cmnt4}</li>
                            <li>{project?.cmnt5}</li>
                        </ul>
                        <a className='flex flex-col md:flex-row mb-3' href={project?.client} target="_blank"><FontAwesomeIcon className='h-7 w-7 mr-2' icon={faGithub}></FontAwesomeIcon>Github Client</a>
                        <a className='flex flex-col md:flex-row mb-3' href={project?.server} target="_blank"><FontAwesomeIcon className='h-7 w-7 mr-2' icon={faGithub}></FontAwesomeIcon>Github Server</a>
                        <a className='flex flex-col md:flex-row mb-3' href={project?.live} target="_blank"><FontAwesomeIcon className='h-7 w-7 mr-2' icon={faGithub}></FontAwesomeIcon>Live Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;