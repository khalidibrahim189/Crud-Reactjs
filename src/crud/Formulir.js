import React from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'

const Formulir = () => {
    return (
        <div className="mt-3">
            <Row>
                <Col>
                    <h4>Tambah Siswa</h4>
                    <hr></hr>
                </Col>
            </Row>

            <Row>
                <Col>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nama Siswa</Form.Label>
                        <Form.Control type="text" name="name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Formulir
