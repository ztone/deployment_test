import React from 'react';
import { Link } from "react-router-dom";

export default function Root() {
return (
<>
<h1>Voice of Influence</h1>
    <ul>
        <li> <Link to='hotels'>Hotels</Link> </li>
        <li> <Link to='campaigns'>My Campaigns</Link> </li>
        <li> <Link to='profile'>My Profile</Link> </li>
        <li> <Link to='about'>About Us</Link> </li>
    </ul>
</>
);
}

// import React from 'react';
// //import { useParams } from 'react-router-dom';
// export default function UserPage() {
// //let { id } = useParams();
// return (
// <>
// <p>This is your awesome User Profile page</p>
// </>
// );
// }