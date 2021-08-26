import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Entry from './pages/entry/Entry';
import Dashboard from './pages/dashboard/Dashboard';
import CreateTicket from './pages/createTicket/CreateTicket';
import TicketList from './pages/TicketList/TicketList';
import Ticket from './pages/ticket/Ticket';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/privateroute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
              <Entry />
          </Route>
            <PrivateRoute path="/dashboard" exact>
                <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/tickets" exact>
                <TicketList />
            </PrivateRoute>
            <PrivateRoute path="/tickets/detail/:id" exact>
                <Ticket />
            </PrivateRoute>
            <PrivateRoute path="/tickets/create" exact>
                <CreateTicket />
            </PrivateRoute>
        






        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
