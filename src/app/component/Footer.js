'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center space-x-4 p-3 bg-white/10 text-white">
      <p className="text-sm ">&copy; 2024 My Personal Blog</p>

      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className="sr-only">LinkedIn</span>
        </a>

        
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">
        <FontAwesomeIcon icon={faXTwitter}  />
          <span className="sr-only">Twitter</span>
        </a>

        
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors duration-300">
          <FontAwesomeIcon icon={faInstagram} />
          <span className="sr-only">Instagram</span>
        </a>

      
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
          <FontAwesomeIcon icon={faGithub}  />
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
