import React from 'react';
import trainer from '../../images/Trainer.png';
const About = () => {
    return (
        <div className='d-flex'>
            <div className='mx-5 mt-5'>
                <img src={trainer} alt="" />
            </div>
            <div className='mt-5'>
                <h1>Josh Mage</h1>
                <p>Personal Trainer</p>
                <h3 className='text-primary'>Biography:</h3>
                <p>Joshua has been working in the Health, Fitness,
                    <br /> and Sports industry for over 10 years in different capacities as
                    <br /> a Group Fitness Instructor, Personal Trainer, and Wellness and Fitness Consultant.
                    <br /> He is now delivering Personal Training, Boxercise,
                    <br /> and Group Fitness Exercises to all age groups bringing with him all the experience in Nutrition, Fitness,
                    <br /> Weight Management and Rehabilitation Exercises to help his clients achieve their goals.

                </p>

            </div>
        </div>
    );
};

export default About;