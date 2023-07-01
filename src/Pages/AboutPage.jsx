import React from 'react';
import "./AboutPage.css";
import AboutImage from "../assets/images/about.jpg";

const AboutPage = () => {
    return (
        <div className='about-page'>
            <div className='about left'>
                <div className='image-wrapper'>
                    <img src={AboutImage} alt="about" />
                </div>
            </div>

            <div className='about right'>
                <h2 className='about-heading'>ABOUT</h2>
                <div className='about-desc'>

                    <p>At Freshlo, we are passionate about delivering the freshest groceries to
                        your doorstep. Our mission is to provide a seamless online shopping
                        experience, making it easy for you to access high-quality products and
                        enjoy the convenience of home delivery. With our commitment to
                        freshness, quality, and customer satisfaction, Freshlo is your trusted
                        partner for all your grocery needs.
                    </p>
                    <p>At Freshlo, we are passionate about delivering the freshest groceries to
                        your doorstep. Our mission is to provide a seamless online shopping
                        experience, making it easy for you to access high-quality products and
                        enjoy the convenience of home delivery. With our commitment to
                        freshness, quality, and customer satisfaction, Freshlo is your trusted
                        partner for all your grocery needs.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
