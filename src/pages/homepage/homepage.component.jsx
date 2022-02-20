import React from "react";
import Directory from "../../components/menu-item/directory/directory.component";
import './homepage.styles.scss';
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className='homepage'>
        <Directory></Directory>
    </div>
);

export default HomePage;