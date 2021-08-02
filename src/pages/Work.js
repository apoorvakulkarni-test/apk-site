import Introduction from '@components/Introduction'
import TileContainer from '@components/TileContainer'

const tiles = new Array(4).fill(0)
function Work() {
  return (
    <div>
      <Introduction />
      <TileContainer title="My Work" tiles={tiles} />
      <TileContainer title="Coming Soon" tiles={tiles} />
    </div>
  );
}

export default Work;
