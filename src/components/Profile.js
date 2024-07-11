// src/components/Profile.js
import React from 'react';
import './Profile.css'; // Ensure you have your CSS file for styling
import myPicture from '../images/profilepic.jpeg'; // Adjust path based on your actual file location

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-image-container">
                <img src={myPicture} alt="My Picture" className="profile-picture" />
                <div className="image-frame"></div>
            </div>
            <div className="profile-text">
                <p className="name">ABOUT ME</p>
                <p className="description">
                    Hi I am Jyothika, currently pursuing my B.E. in Computer Science at B.M.S College of Engineering, 
                    Bengaluru. With a solid foundation in programming languages such as Python, C, Java, and SQL, I am focused on honing my 
                    skills in software development and problem-solving. My project portfolio includes developing solutions like a Full Stack 
                    Web Application for college admissions and contributing to mobile app development projects using Flutter and Firebase. 
                    I am passionate about leveraging technology to solve real-world challenges and eager to explore emerging technologies to 
                    expand my expertise.
                </p>
                <a href='https://drive.google.com/file/d/1ra2WXtbfYgFbdyfxlmPWSvi5QZF3oKuo/view?usp=sharing' download className="resume-button">Resume</a>
            </div>
        </div>
    );
};

export default Profile;
