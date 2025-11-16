import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Web Developer','Tech Enthusiast', 'BCA Graduate', 'Educator'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1800,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>

                <span className="introText">
                    I'm <span className="introName">Pulkit Dubey</span> <br />
                    <span className="role">
                        <span ref={typedRef}></span>
                    </span>
                </span>

                <p className="introPara">
                    I am a skilled web designer with experience in creating <br />
                    visually appealing and user friendly websites.
                </p>

                <Link>
                    <button className="btn hireBtn">
                        <img src={btnImg} alt="Hire" className='btnImg'/> Hire Me
                    </button>
                </Link>
            </div>

            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
};

export default Intro;
