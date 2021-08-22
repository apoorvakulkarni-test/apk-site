import Introduction from '@components/Introduction'
import TileContainer from '@components/TileContainer'
import AmazonCard from '@images/amazon-card.gif'
import WishCard from '@images/wish-card.gif'
import UCSCard from '@images/ucs-card.png'
import RiderCard from '@images/rider-card.png'

const tilesContent = [
  {
    title: "SPONSPORED PROJECT",
    desc: "Reimagining the onboarding experience @ Amazon",
    pic: AmazonCard,
  },
  {
    title: "DESIGN CHALLENGE",
    desc: "Making menstrual hygiene products more accessible with Flo",
    pic: WishCard,
    dest: "work/wish"
  },
  {
    title: "PASSION PROJECT",
    desc: "Giving abuse, assault and harassment survivors a voice",
    pic: UCSCard,
    dest: 'work/uconnsurvive'
  },
  {
    title: "INDIVIDUAL PROJECT",
    desc: "Designing a simpler, faster transit system around campus",
    pic: RiderCard,
    dest: 'work/rider'
  },
]
function Work() {
  return (
    <div>
      <Introduction />
      <TileContainer title="My Work" tiles={tilesContent} />
    </div>
  );
}

export default Work;
