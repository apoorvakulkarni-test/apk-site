import Introduction from '@components/Introduction'
import TileContainer from '@components/TileContainer'
import AmazonCard from '@images/amazon-card.gif'
import WishCard from '@images/wish-card.gif'
import UCSCard from '@images/ucs-card.png'
import RiderCard from '@images/rider-card.png'
import FloLogo from '@images/flo-logo.png'
import TranslocLogo from '@images/transloc-logo.png'
import UCSLogo from '@images/ucs-logo.jpg'
import AmazonLogo from '@images/amazon-logo.jpg'

const tilesContent = [
  {
    title: "SPONSPORED PROJECT",
    desc: "Reimagining the onboarding experience @ Amazon",
    pic: AmazonCard,
    logo: AmazonLogo,
    dest: "work/amazon",
    logoSize: "calc(29% + 85px) auto"
  },
  {
    title: "PASSION PROJECT",
    desc: "Giving abuse, assault and harassment survivors a voice",
    pic: UCSCard,
    dest: 'work/uconnsurvive',
    logo: UCSLogo,
    logoSize: "calc(25% + 40px) auto"
  },
  {
    title: "DESIGN CHALLENGE",
    desc: "Making menstrual hygiene products more accessible with Flo",
    pic: WishCard,
    dest: "work/wish",
    logo: FloLogo,
    logoSize: "calc(29% + 70px) auto"
  },
  {
    title: "INDIVIDUAL PROJECT",
    desc: "Designing a simpler, faster transit system around campus",
    pic: RiderCard,
    dest: 'work/rider',
    logo: TranslocLogo,
    logoSize: "calc(18% + 25px) auto"
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
