import React from "react";
import Directory from "../../components/menu-item/directory/directory.component";
import './homepage.styles.scss';
import { Link } from "react-router-dom";

const HomePage = props => (
    <div className='homepage'>
        <Link to='/topics'>Topics</Link>
        <button onClick={() => props.history.push('/topics')}>Topics</button>
        <Directory></Directory>
    </div>
);

export default HomePage;