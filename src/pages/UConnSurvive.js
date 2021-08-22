import React from 'react'
import Banner from '@design/Banner'
import Container from '@design/Container'
import H2 from '@design/H2'
import UconnSurivePic from '@images/ucs-card.png'
import UCSColor from '@images/ucs-color.png'
import USCProposed1 from '@images/usc-1.gif'
import USCProposed2 from '@images/usc-2.gif'
import USCProposed3 from '@images/usc-3.gif'



const UConnSurvive = () => {
    window.scrollTo(0,0)
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
                <div className="flex-row flex-center padding-25">
                    <img className="width-50" alt="USC-1" src={USCProposed1} />
                    <p className="design-para width-50 padding-25"><span className="bold">Home page:</span> The primary function of the website was to view and share stories and this was also the first basic feature I built and laid the foundation to the product.Users also have access to more information about UConn Survive. Understanding why and how the platform was created helps survivors gain a more thorough perspective of UConn Survive’s values and beliefs. In addition, I included the “How we helped” section with the hope that survivors who are uncertain about sharing their story are motivated and empowered to share their own story.</p>
                </div>
                <div className="flex-row flex-center padding-25">
                    <img className="width-50" alt="USC-2" src={USCProposed2} />
                    <p className="design-para width-50 padding-25"><span className="bold">How to help:</span> Being told that someone has been assaulted, abused or harassed can be incredibly scary, emotional and shocking for the one being told as well as the survivor. Many times we are unsure of how to respond and what to do. Even though one might want to ask questions, express outrage and offer advice, these expressions may come across as judgemental and detrimental to the survivor. Hence, it is important to learn and understand how to help survivors the right way.</p>
                </div>
                <div className="flex-row flex-center padding-25">
                    <img className="width-50" alt="USC-3" src={USCProposed3} />
                    <p className="design-para width-50 padding-25"><span className="bold">Need help:</span> Survivors are often confused and frustrated about how to get help. Providing the appropriate guidance, support and set of resources can be extremely beneficial to their path of recovery.</p>
                </div>
            </Container>
            <Container color="black">
                <H2 top="BRANDING" bottom="Visual Language" />
                <p className="design-para">The main intention of UConn Survive is to encourage, not force, people to share their stories in order to empower others to share their own to spread awareness and educate others on abuse, assault and harassment at UConn. Visual design plays a major role in fostering a sense of approachability and warmth on this platform. I aimed to evoke a sense of compassion, authenticity, and expressiveness, featuring encouraging, friendly illustrations, and calming, empowering colors.</p>
                <img className="center-mg max-width-100"alt="UConn Survive Color" src={UCSColor} />
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
        </div>
    )
}

export default UConnSurvive
