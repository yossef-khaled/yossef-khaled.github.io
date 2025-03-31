import './App.css';
import Main from './Components/MainComponent/Main';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [backgroundImage, setBackgroundImage] = useState();

  return (
    <BrowserRouter>
        <div className="App" style=
        {{
          minHeight: "100%",
          maxHeight: "500%", 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover cover"
        }}>
          <Main onComponentRender={(imageName) => setBackgroundImage(imageName)}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
