import React from 'react'
import { NavLink } from 'react-router-dom';
import './SideNav.css';


const clickStyle = {
    fontWeight: "bold",
    color: "darkgreen"
}


export default function SideNave() {
    return (
        <>
            <nav >
                <div className="sidenav" >
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Barrio&family=Roboto:wght@300&display=swap');
                </style>


                    <NavLink
                        exact to="/"
                        activeStyle={
                            clickStyle
                        }>
                        Spender
                        </NavLink>

                    <NavLink
                        to="/goal"
                        activeStyle={
                            clickStyle
                        }>
                        New Goal
                        </NavLink>

                    <NavLink
                        to="/Feed"
                        activeStyle={clickStyle}>
                        Feed
                        </NavLink>

                    <NavLink
                        to="/Goals"
                        activeStyle={clickStyle}>
                        Goals
                        </NavLink>

                    <NavLink
                        to="/Challenges"
                        activeStyle={clickStyle}>
                        Challenges
                        </NavLink>

                    <NavLink
                        to="/Profile"
                        activeStyle={clickStyle}>
                        Profile
                        </NavLink>

                    <NavLink
                        to="/Settings"
                        activeStyle={clickStyle}>
                        Settings
                        </NavLink>
                </div>

            </nav>

        </>
    )
}
