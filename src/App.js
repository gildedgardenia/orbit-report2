import './App.css';
import data from './satellites.json';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const satelliteData = data.satellites;

  return (
    <div className="App">
      <h1>Orbit Report</h1>
      <Table satellites={satelliteData} />
      <Form satellites={satelliteData} />
    </div>
  );
}

export default App;
