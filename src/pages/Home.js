import { Link } from 'react-router-dom';
import VideoPlayer from '../Component/VideoPlayer';

const DUMMY_DATA = [
  {
    id: '1',
    title: 'My Legendary Gamer s journey',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    description:
      'As a Epic Gamer, I ve been gaming for 18years',
  },
  {
    id: '2',
    title: 'Coding Farmer',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',

    description:
      'Code is Fun',
  },
];

function Home() {
  return (
    <section>
      <h1>About Me</h1>
      <VideoPlayer/>
      <ul>
        {DUMMY_DATA.map((Nova) => {
          return <li key={Nova.id}>{Nova.title}</li>;
        })}
      </ul>
      <Link to="https://www.youtube.com/@Nova_3008" target="_blank">
          <button>Nova's Youtube Channel</button>
</Link>
  
    </section>
  );
}


export default Home;