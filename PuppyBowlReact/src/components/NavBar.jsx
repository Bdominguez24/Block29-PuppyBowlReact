import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <Link to="/" style= {{marginRight: "20px"}}>All Players</Link>
        <Link to="/addNew">Add New Player</Link>
     </nav>
  ); 
}
