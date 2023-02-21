import { DefaultPlayer } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <DefaultPlayer
        autoPlay
        loop
        poster='thumbnail.png'
      >
        <source src='video.mkv' type='video/webm'></source>
      </DefaultPlayer>
    </div>
  );
}

export default App;
