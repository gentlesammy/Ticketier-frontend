import "./tickettable.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TicketTable = ({TicketsList}) => {
    let idd = 1;
    return (
        <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Date Opened</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        TicketsList?.length && 
                        TicketsList.map((tk) => {
                           return <tr key={tk.id}>
                                <td>{idd++}</td>
                                <td>{tk.User}</td>
                                <td> <Link to={`/tickets/detail/${tk.id}`} className="no_text_decoration">{tk.Subject}</Link></td>
                                <td>{tk.Status}</td>
                                <td>{tk.date}</td>
                            </tr>
                        })
                    }

                    {
                        
                        TicketsList?.length < 1 && (
                            <tr className="no_ticket text-center">
                                <td className="text-center" colSpan="5">You have no tickets</td>
                            </tr>
                        )
                        
                    }


                   
               
                </tbody>
            </Table>
    )
}

export default TicketTable
