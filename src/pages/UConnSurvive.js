import React from 'react'
import Banner from '@design/Banner'
import Container from '@design/Container'
import H2 from '@design/H2'
import UconnSurivePic from '@images/ucs-card.png'

const UConnSurvive = () => {
    return (
        <div>
            <Banner pic={UconnSurivePic} />
            <Container color="black">
                <h1 className="design-h1">UConn Survive</h1>
                <p className="design-h1-desc">Creating a web platform to give assault, abuse and harassment survivors a voice</p>
                <span className="design-info">Duration: 3 weeks</span>
                <span className="design-info">Type: Individual Project</span>
            </Container>
            <Container color="white">
                <H2 top={"OVERVIEW"} bottom="Context" />
                <p className="design-para">UConn Survive is a digital space on Instagram dedicated to empower unheard and ignored stories. The goal of this platform is to create a community where people can express their abuse, assault and/or harassment stories, learn about other’s experiences and know they’re not alone. At UConn Survive, every story matters.</p>
                <p className="design-para">Although UConn Survive is active on Instagram, it is not an efficient system to maintain an organized community. The Instagram account uses the stories and highlights features to share and save resources, facts and other important information. Based on the feedback from UConn Survivors, the current system makes it difficult and strenuous for them to navigate and find exactly what they are looking for especially in times of need.</p>
            </Container>
            <Container color="black">
                <H2 top="USER RESEARCH" bottom="Understanding the Users" />
                <p className="design-para">In order to create a more organized and resourceful platform, I needed to gain a deeper understanding of the need of an online safe space focusing on what kinds of principles and sense of community was desired. Using surveys, semi-structured interviews and general feedback, these were the insights I was able to gather:
<br />• It is easier for people to talk about mental health when others open up too and when the conversDesigning a simpler, faster transit system around campusation is anonymous.
<br />• Due to inaccurate, downplayed and disguised tellings of stories, some people feel as though their stories are too much, out of the “ordinary” and unrelatable. Stories are the most impactful when they feature personal experiences and acknowledge the dark times.
<br />• Learning that other people have experienced similar events has helped heal.
<br />• Society stigmatizes assault, abuse and harassment. When you have to fight with people so they can believe you, it feels isolating, invisible. They saw what they wanted to see, not what I was telling them.
<br />• Many times, survivors are not given a sense of control. They are either ignored and forced to not share their story because if they do, no one would ever believe them. Creating a space where survivors were supported, believed, helped and heard was important and that was the kind of platform I wanted to design.</p>
            </Container>
            <Container color="white">
                <H2 top="DESIGN" bottom="To Figma We Go!" />
                <p className="design-para">Through a website, survivors and allies have access to all types of resources, from hotlines to organizations. They can also submit their story, view submitted survivor stories and learn more about UConn Survive.</p>
            </Container>
            <Container color="black">
                <H2 top="BRANDING" bottom="Visual Language" />
                <p className="design-para">The main intention of UConn Survive is to encourage, not force, people to share their stories in order to empower others to share their own to spread awareness and educate others on abuse, assault and harassment at UConn. Visual design plays a major role in fostering a sense of approachability and warmth on this platform. I aimed to evoke a sense of compassion, authenticity, and expressiveness, featuring encouraging, friendly illustrations, and calming, empowering colors.</p>
            </Container>
            <Container color="white">
                <H2 top="REFLECTION" bottom="Summary" />
                <p className="design-para">To make UConn Survive’s website functional, I had to wear multiple hats besides design which made me understand the unique challenges and step in the shoes of roles complementary to product design. I designed not only through a survivor’s perspective but also through a marketing, safeguarding and outreach lens to build a safe, resourceful and helpful community. I learned how to design mindfully as I noticed that there is a tension between creative expression and safety. For example, although illustrations provide visual interest, I had to iterate over which designs to use as some may convey a message that can be interpreted as force or aggression. I learned how to put the survivor first and make sure no aspects were too restrictive, alarming or lighthearted.</p>
                <p className="design-para">Another emphasis of UConn Survive’s brand is inclusivity and that this value must be reflected across the entire design process. As a designer, I have the ability and responsibility to ingrain greater diversity and representation into my designs. I had to consider how to be more inclusive in all aspects, from including people of different ages, ethnicities, and sexual orientations in my research pool and story collection, to the imagery and content categories that I used in this design.</p>
            </Container>
            <Container color="black">
                <H2 top="MOVING FORWARD" bottom="Next Steps" />
                <p className="design-para">I’m putting my designer hat back on to gather more user feedback on the current MVP to improve the design and promote long-term engagement as well as include more features that can benefit survivors and allies.</p>
            </Container>
            <Container color="white">
                <H2 top="DESIGN" bottom="To Figma We Go!" />
                <h3 className="design-h3">Current Application</h3>
                <h3 className="design-h3">Proposed Designs</h3>
            </Container>
            <Container color="black">
                <H2 top="REFLECTION" bottom="LESSONS LEARNED" />
                <h3 className="design-h3">If I had more time...</h3>
                <p className="design-para">• Tested this solution to find areas of improvement
                <br />• Found more innovative donation methods</p>
                <h3 className="design-h3">Biggest Challenge...</h3>
                <p className="design-para">Designing a mobile experience that helps people without access to smartphones.</p>
                <h3 className="design-h3">What did I take away from this?</h3>
                <p className="design-para"><br />• When in doubt, look back at your research findings! I found that refreshing myself on the disadvantaged communities and their pain points helped me develop a thorough understanding of the problem space which later helped me when I designed my solution.
                <br />• Thinking from not only the donor’s perspective but also the members of the disadvantaged communities, Flo taught me about the multiple roles involved in product design. For a product to be successful, a designer must design a solution that solves the problem from the design, business as well as outreach lens.
                <br />• One of Flo’s values is inclusivity and I wanted that to be reflected throughout the design process. As a designer, I have the ability and responsibility to ingrain greater diversity and representation into my designs.
</p>
            </Container>
        </div>
    )
}

export default UConnSurvive
