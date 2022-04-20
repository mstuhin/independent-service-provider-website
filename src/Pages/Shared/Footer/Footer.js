import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <footer className='text-center mt-5 '>
                <p><small>copyright &copy; {new Date().getUTCFullYear()}</small></p>
            </footer>
        </div>
    );
};

export default Footer;