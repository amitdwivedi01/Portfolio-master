import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';


const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://github.com/amitdwivedi01" target="_blank" rel="noreferrer">
    <BsGithub />    
    </a> 
    </div>
    <div>
    <a href="https://www.linkedin.com/in/amit-dwivedi-785862228" target="_blank" rel="noreferrer">
    <FaLinkedin /> 
    </a> 
      
    </div>
    <div>
    <a href="https://instagram.com/mr_dwivedi_01?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
    <BsInstagram />   
    </a> 
    </div>
  </div>
);

export default SocialMedia;