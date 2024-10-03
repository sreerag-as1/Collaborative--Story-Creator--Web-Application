import React from 'react';
import './AboutUs.css';  // Import the CSS file

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="heading">About Collaborative Story Creator</h1>
      <p className="paragraph">
        Welcome to the Collaborative and Fun Story Creator! This platform brings together
        creative minds from all around the world to collaboratively write short stories.
        Whether you're an experienced writer or just want to have some fun, our app allows
        you to join hands with other users to create captivating stories in a structured and enjoyable way.
      </p>

      <h2 className="subheading">Features</h2>
      <ul className="list">
        <li>Collaborative Story Writing with real-time updates.</li>
        <li>Structured storytelling broken into sections or chapters.</li>
        <li>Track contributions through user profiles.</li>
      </ul>

      <h2 className="subheading">Backend</h2>
      <p className="paragraph">
        Our backend is built using Django with the MVC (Model-View-Controller) pattern to
        ensure clean, efficient code. We use JWT-based authentication to keep everything secure, and follow RESTful principles for smooth communication.
      </p>

      <h2 className="subheading">Frontend</h2>
      <p className="paragraph">
        The frontend is developed using React/Next.js, providing a fast, intuitive interface. You can view stories, add your contributions, and collaborate in real-time with other users.
      </p>

      <h2 className="subheading">Authentication</h2>
      <p className="paragraph">
        Our authentication system is simple yet secure, using JWT tokens. Quickly register, log in, and start writing without any hassle.
      </p>

      <p className="signature">Let's create stories together!</p>
    </div>
  );
};

export default AboutUs;
