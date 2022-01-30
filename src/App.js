import { useState } from 'react';
import './App.css';
import About from './Component/About/About';
import Profile from './Component/Profile/Profile';
import Project from './Component/Project/Project';
import 'tachyons';
import ContentFn from './Component/Counter/Counter';

const App = () => {
  let [route, setRoute] = useState('About')
  const ruteAbout = () => {
    setRoute(route='About')
  }
  const ruteProfile = () => {
    setRoute(route='Profile')
  }

  const ruteProject = () => {
    setRoute(route='Project')
  }

  return (
    <div className="App"> {
      route === 'About' ?
        <About ruteProfile = {ruteProfile} ruteProject={ruteProject}/>

      : (route === 'Profile') ? 
        <Profile ruteAbout = {ruteAbout} ruteProject={ruteProject}/>
      :
      <>
        <Project ruteAbout={ruteAbout} ruteProfile={ruteProfile}/>
        <ContentFn/>    
      </>
    }
    </div>
  );
}

export default App;

  