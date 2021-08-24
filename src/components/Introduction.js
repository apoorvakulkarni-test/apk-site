import HelloImage from '@images/hello.png'
import { BODY_MARGIN } from '@consts'

const AMAZON_LINK = "https://www.amazon.com/"

const ExternalLink = (props) => (
    <a 
        className="introduction-link"
        href={props.link} target="__blank">{props.children}
    </a>
)

const Introduction = () => {
    return (
        <div className="introduction-container">
            <div className="flex-col justify-start introduction-content">
                <img className="introduction-image" src={HelloImage} alt="Apoorva saying hi" />
                <p className="hook">Hey there!</p>
                <p className="introduction-desc">I’m a product designer who’s passionate about creating experiences that empower and make an impact on people’s lives.
                I’ve previously designed @<ExternalLink link={AMAZON_LINK}>Amazon</ExternalLink>, 
                @<ExternalLink link="https://www.vitalstrategies.org/">Vital Strategies</ExternalLink> &amp; 
                @<ExternalLink>SimplyDoc</ExternalLink></p>
            </div>
            <style jsx>{`
                .introduction-image {
                    width: 30%;
                    position: absolute;
                    right: 0;
                    top: calc(50% - (30vw / 2));              
                }
                .introduction-container {
                    margin: ${BODY_MARGIN};
                    margin-top: 0;
                    height: 77vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                }
                .introduction-desc {
                    font-family: SecondaryFont;
                    font-size: 25px;
                    line-height: 40px;
                    max-width: 75%;
                }
                .introduction-link {
                    font-family: SecondaryBoldFont;
                    text-decoration: none;
                    font-weight: 400;
                    color: black;
                }
                .introduction-link:hover {
                    text-decoration: underline;
                }
                .hook {
                    font-family: PrimaryFont;
                    color: black;
                    font-size: 40px;
                    margin: 0;
                }
                .opaque-50 {
                    opacity: 0.5;
                }
                .opaque-25 {
                    opacity: 0.25;
                }
                .line {
                    opacity: 0.3;
                    width: 200px;
                    height: 3px;
                    background-color: black;
                }
            `}</style>
        </div>
    )
}

export default Introduction