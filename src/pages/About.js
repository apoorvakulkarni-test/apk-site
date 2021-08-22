import React from 'react'
import AboutImage from '@images/about.jpg'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-body-container">
                <img alt="About" className="about-image" src={AboutImage} />
                <div className="about-desc">
                    <h1 className="about-header">Practical in mind. Creative at heart</h1>
                    <p>I’m a first-year graduate student at the University of Washington, studying Human-Centered Design &amp; Engineering. I am passionate about creating experiences that help others and make an impact on people’s lives.</p>
                    <p>Here is what I bring to the table:</p>
                    <ul>
                        <li>Experience: I worked as a graphic designer, product designer, and user researcher in various industries ranging from sports to healthcare. </li>
                        <li>Honesty: By being truthful I have garnered trust and respect which has helped me guide and encourage my peers in all my leadership positions.</li> 
                        <li>Inclusivity: As an individual who has been raised in different countries, I learned to be respectful, inclusive and open-minded not only to various backgrounds but also to dissimilar perspectives. </li>
                    </ul>
                    <p>Apart from design, I love to dance, travel and wouldn’t mind eating pani puri for all my meals. I’m eager to work with partners and companies that have the same values as I do. If you think that's you, feel free to contact me!</p>
                </div>
            </div>
            <style jsx>{`
                .about-container {
                    display: flex;
                    flex-direction: column;
                }
                .about-header {
                    font-family: PrimaryFont;
                    font-weight: 300;
                    font-size: 25px;
                }
                .about-body-container {
                    display: flex;
                    flex-direction: row;
                    margin-top: 25px;
                    font-family: SecondaryFont;
                }
                .about-desc {
                    flex: 1;
                    padding: 0 20px;
                }
                .about-desc > p, ul, li {
                    line-height: 2em;
                }
                .about-image {
                    width: 50%;
                    max-height: 100vh;
                    margin-right: 25px;
                    object-fit: contain;
                }
            `}</style>
        </div>
    )
}

export default About