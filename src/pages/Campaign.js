import React from 'react';
import { useParams } from 'react-router-dom';
export default function UserPage() {
let { id } = useParams();
return (
<>
<h1>Campaign {id}</h1>
<p>This is your awesome User Profile page, yeah</p>
</>
);
}