import React, {useEffect,useState } from 'react'
import './Footer.css'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin,FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll ]);
    return (
        <div className='containar'>
            <div className="footerCards">
                <div className='first'>
                    <h1>
                        Give cleverBooks a try and
                        accelerate your business.
                    </h1>
                    <button>
                        Get started with cleverBooks
                    </button>
                </div>
            </div>
            <div className="footerCards">
                <div className='second'>
                    <div className='cleverBooks'>
                        <h1>cleverBooks</h1>
                        <p>cleverBooks is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
                    </div>
                    <div className='explore'>
                        <h3>Explore</h3>
                        <ul>
                            <li>Product</li>
                            <li>Pricing</li>
                            <li>Customer Stories</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className='learn'>
                        <h3>Learn</h3>
                        <ul>
                            <li>About us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='contact'>
                        <h3>Contact cleverBooks</h3>
                        <p>sales@getcleverBooks.ai</p>
                        <p>Registered Office: 1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102</p>
                        <p>Corporate Office: 291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR Layout, Bengaluru, India. 560102</p>
                        <div className='social'>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <p>Copyright 2024 cleverBooks | Terms of Service | Privacy Policy</p>
                <p>Conifer Innovations Private Limited | CIN: U72900KA2022PTC163144</p>
            </div>
            <FaArrowUp className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }} />
        </div>
    )
}

export default Footer
