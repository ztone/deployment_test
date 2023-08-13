import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Login() {
    const [apiResponse, setApiResponse] = useState('');

    const fetchAPIResponse = () => {
        fetch("http://localhost:9000/testAPI")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setApiResponse(data)
        })
    }
    
    useEffect(() => {
        fetchAPIResponse();
    }, [])
    
    return (
    <>
        <p>Text:{apiResponse.name}</p>
        <div className="display-1 text-center">
            <img src="/images/logo.png" alt="Voice of influence" /> 
        </div>
        <ul className='mt-5'>
            <p className="text-center">
                <li> <Link className='main-menu-btn fw-bold btn btn-light btn-lg w-75' to='menu'>Creators</Link> </li>
            </p>
            <p className="text-center">
                <li> <Link className='main-menu-btn fw-bold btn btn-light btn-lg w-75' to='calendar'>Hotels</Link> </li>
            </p>
        </ul>
    </>
);
}