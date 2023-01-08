import React from 'react';
import { useParams } from 'react-router-dom';
export default function About() {
let { id } = useParams();
return (
<>
    <h1>VOI</h1>
    <p>VOI’s leadership team brings together best in show insights and expertise from technology & informatics and specialist leisure industry sales & marketing. The hands on team have worked for clients as diverse as London’s major museum, independent UK hotel brands as well as boutique, privately owned hotels.</p>
    <p>The team brings together proven best practices and an in-depth understanding of the commercial dynamics of hotels, venues and spas with the capabilities of progressive technology and integration</p>
    <ul>
        <li>Jai Hermolle	Founder & CEO</li>
        <li>Andrew White	Commercial Director</li>
        <li>Paul Hermolle	Development Director</li>
    </ul>
</>
);
}