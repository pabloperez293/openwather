import './assets/css/App.css';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import WeatherPanel from './components/WeatherPanel';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <WeatherPanel />
      <Spinner />
    </div>
  );
}

export default App;
