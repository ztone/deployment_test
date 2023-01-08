import React from 'react';
import { Link } from "react-router-dom";

export default function HomePage() {
return (
<>
<h1>Voice of Influence</h1>
    <ul>
        <li>
            <Link to='about:id'>About Us</Link>
        </li>
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