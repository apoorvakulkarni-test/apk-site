import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                <h4 className="footer-section-title">CONTACT</h4>
                <p className="footer-section-desc">apk11@uw.edu</p>
            </div>
            <div className="footer-section">
                <h4 className="footer-section-title">CONNECT</h4>
                <p className="footer-section-desc">apk11@uw.edu</p>
            </div>
             <style jsx>{`
                .footer {
                    border-top: 1px solid #A1A1A1;
                    width: 100%;
                    padding: 20px 60px;
                    background-color: black;
                    color: white;
                    display: flex;
                    flex-direction: row;
          
                }
                .footer-section {
                    margin: 0 40px;
                    display: flex;
                    flex-direction: column;
                }
                .footer-section-title {
                    font-family: PrimaryFont;
                    margin: 5px 0;
                    font-weight: 400;
                }
                .footer-section-desc {
                    font-family: PrimaryLight;
                }
             `}</style>
        </div>
    )
}

export default Footer