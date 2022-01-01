import './App.css';

//Contexts 

import EDContextProvider from './context/EDContextProvider';


// Components
import Posts from './components/Posts';
import Add from './components/Add';

function App() {
  return (
      <EDContextProvider>
        <Add/>
        <Posts/>
      </EDContextProvider>
  );
}

export default App;
