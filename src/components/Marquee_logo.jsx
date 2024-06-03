// src/MarqueeComponent.js
import React from 'react';
import Marquee from 'react-fast-marquee';

const logos = [
  {
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      alt: 'Facebook Logo'
  },
  {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      alt: 'Amazon Logo'
  },
  {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      alt: 'Apple Logo'
  },
  {
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      alt: 'Netflix Logo'
  },
  {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png',
      alt: 'Google Logo'
  },
  {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      alt: 'Microsoft Logo'
  },
  {
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
      alt: 'Twitter Logo'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
    alt: 'Tesla Logo'
},
{
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg',
    alt: 'LinkedIn Logo'
},

];

const Marquee_logo = () => {
    return (
        <Marquee gradient={true} speed={50} pauseOnHover>
               {logos.map((logo, index) => (
                <div key={index} style={{ margin: '0 90px' }}>
                    <img src={logo.src} alt={logo.alt} style={{ height: '50px' }} />
                </div>
            ))}
        </Marquee>
    );
};

export default Marquee_logo;
