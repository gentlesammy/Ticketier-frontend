import { Container, Row, Col, Button } from "react-bootstrap";
import "./messagehistory.css"
const MessageHistory = ({msg}) => {
    console.log({msg});
    return (
        <div className="messages_container my-5">
            {
                msg?.length > 0 && msg.map((mg) => {
                   return (<div className={`message_container my-2 ${mg.messageBy=== "operator"   ? 'operator' : 'client'} `} key={mg.id}>
                      <Row>
                        <Col xs={12} md={4} className="pt-3">
                               <Row>
                                    <Col>
                                        <p className="sender">{mg.messageBy} </p>
                                    </Col>
                                    <Col>
                                        <p className="date">{mg.date} </p>
                                    </Col>
                               </Row>
                        </Col>
                        <Col className="pt-3">
                                <p className="message">{mg.message} </p>
                        </Col>
                      </Row>  
                    </div>)
                })
            }



        </div>
    )
}

export default MessageHistory
