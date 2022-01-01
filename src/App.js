import './App.css';

//Contexts 

import EDContextProvider from './context/EDContextProvider';


// Components
import Posts from './components/Posts';
import Form from './components/Form';

function App() {
  return (
      <EDContextProvider>
        <Form/>
        <Posts/>
      </EDContextProvider>
  );
}

export default App;
