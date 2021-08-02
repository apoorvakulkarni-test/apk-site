
const UW_HCDE_LINK = "https://www.hcde.washington.edu/"
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
            <div className="flex-row justify-start">
                <p className="hook">Designer. 
                    <span className="opaque-50"> Sometimes coder.</span> 
                    <span className="opaque-25"> Occasional cup stacker</span>
                </p>
            </div>
            <div className="line"></div>
            <p className="introduction-desc">I’m a first-year M.S HCDE student @ <ExternalLink link={UW_HCDE_LINK}>University of Washington</ExternalLink>. 
            I’ve previously designed @<ExternalLink link={AMAZON_LINK}>Amazon</ExternalLink>, 
            @<ExternalLink>Vital Strategies</ExternalLink> &amp; 
            @<ExternalLink>SimplyDoc</ExternalLink></p>

            <style jsx>{`
                .introduction-container {
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
                    width: 750px;
                }
                .introduction-link {
                    font-family: SecondaryBoldFont;
                    text-decoration: none;
                    font-weight: 400;
                    color: black;
                    :hover {
                        text-decoration: underline;
                    }
                }
                .hook {
                    font-family: PrimaryFont;
                    color: black;
                    font-size: 35px;
                    font-weight: bold;
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