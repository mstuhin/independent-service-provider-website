import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Service from '../Home/Service/Service';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>welcome to detail:{serviceId}</h2>


            <div className='text-center'>

                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;