import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Entry from './pages/entry/Entry';

function App() {
  return (
    <div className="App">
        <Entry/>
    </div>
  );
}

export default App;
