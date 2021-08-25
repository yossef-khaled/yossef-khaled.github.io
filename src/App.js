import './App.css';
import Main from './Components/MainComponent/Main';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [backgroundImage, setBackgroundImage] = useState('black-white-horizontally.jpg');

  console.log(`${JSON.stringify(backgroundImage)} is the background image at App`);

  return (
    <BrowserRouter>
        <div className="App" style=
        {{
          minHeight: "100%",
          maxHeight: "500%", 
          //backgroundImage: `url(../src/Shared/images/${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover cover"
        }}>
          <Main onProjectsRender={(imageName) => setBackgroundImage(imageName)}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
