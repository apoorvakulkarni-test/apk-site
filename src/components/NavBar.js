import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className="container">
            <h1 className="name">Apoorva Kulkarni</h1>
            <div className="menu-option-container">
                <Link className="menu-option" to="/work">Work</Link>
                <Link className="menu-option" to="/about">About</Link>
                <Link className="menu-option">Resume</Link>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: flex-row;
                    justify-content: flex-start;
                    align-items: center;
                }
                .name {
                    font-family: PrimaryFont;
                    font-size: 25px;
                }
                .menu-option-container {
                    display: flex;
                    flex-direction: row;
                    margin-left: auto;
                    font-family: SecondaryFont;
                }
                .menu-option {
                    padding: 15px;
                    text-decoration: none;
                    color: black;
                }
                .menu-option:hover {
                    background-color: rgba(0,0,0,0.05);
                    cursor: pointer;
                }
                .menu-icon {
                    margin-left: auto;
                    width: 25px;
                    height: 25px;
                }
            `}</style>
        </div>
    )
}

export default NavBar