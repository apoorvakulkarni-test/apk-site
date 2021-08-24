import Banner from '@design/Banner'
import Container from '@design/Container'
import AmazonBanner from '@images/amazon-banner.png'

const Amazon = () => {
    return (
        <div>
            <Banner pic={AmazonBanner} />
            <Container color="black">
                <h1 className="design-h1">Amazon Project (NDA)</h1>
                <p className="design-h1-desc">Reimagining the onboarding experiences for new hires</p>
                <span className="design-info">Duration: 6 weeks</span>
                <span className="design-info">Type: Sponsored project</span>
                <span className="design-info">Team: Nuri Kim, Spencer Paullin, Susan Jung, Me</span>
            </Container>
            <Container color="white">
                <p className="design-para gray bold">This project is currently covered by an NDA. If you’d like to learn more, please get in touch with me.</p>
            </Container>
        </div>
    )
}

export default Amazon