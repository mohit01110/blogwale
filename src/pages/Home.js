import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css'
import '../styles/HomeButtons.css';

const Home = () => {
    return (
      <div>
        <Header />
        <h1>Welcome to My Blog</h1>
        <ul>
          <li><Link to="/blog/first-post">First Post</Link></li>
          <li><Link to="/blog/second-post">Second Post</Link></li>
          {/* Add more links for your blog posts */}
        </ul>
        <div className="buttons-container">
          <button className="button">Logout</button>
          <Link to="/register" className="button">Register</Link>
        </div>
        <Footer />
      </div>
    );
  };

export default Home;
