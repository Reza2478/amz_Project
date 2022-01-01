import './App.css';

//Contexts 
// import PostContextProvider from './context/PostContextProvider';
import EDContextProvider from './context/EDContextProvider';


// Components
import Posts from './components/Posts';

function App() {
  return (
    
      <EDContextProvider>
        <Posts/>
      </EDContextProvider>
    
  );
}

export default App;
