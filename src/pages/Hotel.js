import React from 'react';
import { useParams } from 'react-router-dom';
export default function UserPage() {
let { search } = useParams();
return (
<>
    <h1>Hotel Profile Page</h1>
    <h2>Feldon Vally</h2>
</>
);
}