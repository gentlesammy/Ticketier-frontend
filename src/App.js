import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Entry from './pages/entry/Entry';
import DefaultLayouts from './layouts/DefaultLayouts';
import Dashboard from './pages/dashboard/Dashboard';
import CreateTicket from './pages/createTicket/CreateTicket';
import TicketList from './pages/TicketList/TicketList';


function App() {
  return (
    <div className="App">
        {/* <Entry/> */}
        <DefaultLayouts>
            {/* <Dashboard/> */}
            {/* <CreateTicket/> */}
            <TicketList/>
        </DefaultLayouts>
    </div>
  );
}

export default App;
