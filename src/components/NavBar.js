import React from 'react'
import { Link } from 'react-router-dom'
import { BODY_MARGIN } from '@consts'

const NavBar = (props) => {
    return (
        <div className="container">
            <h1 className="name">APOORVA KULKARNI</h1>
            <div className="menu-option-container">
                <Link className="menu-option" to="/work">WORK</Link>
                <Link className="menu-option" to="/about">ABOUT</Link>
                <Link className="menu-option">RESUME</Link>
            </div>
            <style jsx>{`
                .container {
                    margin: ${BODY_MARGIN};
                    display: flex;
                    flex-direction: flex-row;
                    justify-content: flex-start;
                    align-items: center;
                }
                .name {
                    font-family: PrimaryFont;
                    font-size: 18px;
                    letter-spacing: 3px;
                    color: #828282;
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
                    color: #A1A1A1;
                    font-size: 14px;
                    letter-spacing: 0.75px;
                    font-weight: bold;
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