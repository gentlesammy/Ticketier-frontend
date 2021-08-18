import { useState } from "react"
import { Card } from "react-bootstrap"
import Login from "../../components/login/Login"
import ResetPassword from "../../components/Resetpassword/ResetPassword"


import "./entry.css"

const Entry = () => {
    const [formLoad, setFormLoad] = useState("login");
    
    return (
        <div className="entry_container bg-primary">
            <div className="jumbotron"> 
                
                <Card style={{ width: '20rem' }}>
                    
                    <Card.Body>
                        {
                            formLoad === "login" && (
                             <Login setFormLoad={setFormLoad}/>   
                            )
                        }

                        {
                            formLoad === "reset" && (
                             <ResetPassword setFormLoad={setFormLoad}/>   
                            )
                        }
                        
                        
                    </Card.Body>
                </Card>
                
            </div>
           
        </div>
    )
}

export default Entry
