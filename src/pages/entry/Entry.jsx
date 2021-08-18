import { Card } from "react-bootstrap"
import Login from "../../components/login/Login"

import "./entry.css"

const Entry = () => {
    return (
        <div className="entry_container bg-primary">
            <div className="jumbotron"> 
                
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Login/>
                    </Card.Body>
                </Card>
                
            </div>
           
        </div>
    )
}

export default Entry
