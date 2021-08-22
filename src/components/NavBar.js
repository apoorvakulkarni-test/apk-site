import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BODY_MARGIN } from '@consts'
import Resume from '@images/resume.pdf'

const NavBar = () => {
    const { pathname } = useLocation()
    const getClasses = (pattern) => pathname.includes(pattern) ? "menu-option black" : "menu-option"
    return (
        <div className="container">
            <a className="styleless-link" href="/"><h1 className="name">APOORVA KULKARNI</h1></a>
            <div className="menu-option-container">
                <Link className={getClasses("/work")} to="/work">WORK</Link>
                <Link className={getClasses("/about")} to="/about">ABOUT</Link>
                <a href={Resume} target="__blank" className="menu-option">RESUME</a>
            </div>
            <style jsx>{`
                .container {
                    margin: ${BODY_MARGIN};
                    display: flex;
                    flex-direction: flex-row;
                    justify-content: flex-start;
                    align-items: center;
                }
                .black {
                    color: black !important;
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