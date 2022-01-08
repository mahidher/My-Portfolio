
import './App.css';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div className='parent-container'>
          <Header></Header>
          <Routes>
          <Route path='/' element={<HomeScreen/>} exact></Route>
          </Routes>
          
        </div>
      </Router>
      
    </div>
  );
}

export default App;
