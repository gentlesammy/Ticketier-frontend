import "./reply.css";
import { Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
const Reply = ({reply, setReply, handlyReplySumit}) => {
    return (
      <Form onSubmit={(e)=> {
          e.preventDefault();
          handlyReplySumit();  
          }}>
            <Row>
            <Col>

            </Col>
            <Col xs={12} sm={12} md={8}>
                <FloatingLabel controlId="floatingTextarea2" label="Ticket Message">
                    <Form.Control
                        as="textarea"
                        placeholder="Reply Ticket"
                        style={{ height: '150px' }}
                        onChange= {(e)=> {setReply(e.target.value)}}
                        value={reply}
                     />
                </FloatingLabel>
                <div className="text-right">
                    <Button variant="info" type="submit" className="my-3 button-big">Enter Reply</Button>
                </div>
            </Col>
        </Row>
      </Form>
    )
}

export default Reply
