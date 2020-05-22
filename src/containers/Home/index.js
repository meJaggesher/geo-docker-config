import React, { Component } from 'react';
import { Container, Col, Row, Form, Card, Button } from "react-bootstrap";
import { exportToJSON } from '../../utils/FileGenerator';
import { myFromConfig } from '../../utils/FromConfig';
import './index.scss';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { formData: {} }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        exportToJSON(this.state.formData);
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        const formData = this.state.formData;
        const slice = name.split("_");

        if (formData[slice[0]] === undefined) formData[slice[0]] = {};
        formData[slice[0]][slice[1]] = value;

        this.setState({ ...this.state, formData: formData });
    }

    generateFromField = (name, obj) => {
        return obj.map(el => {
            if (el.type === "select") {
                const valList = [];
                valList.push(<option key={el.placeholder} value="" >{el.placeholder} </option>);
                valList.push(el.values.map(ell => {
                    return (
                        <option key={ell} value={ell}>{ell}</option>
                    )
                }));

                return (
                    <Form.Group key={name + '_' + el.name} as={Row} controlId={name + '_' + el.name}>
                        <Form.Label column sm={2}>{el.name}</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" name={name + '_' + el.name} onChange={this.handleChange}>
                                {valList}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                )
            } else {
                return (
                    <Form.Group key={name + '_' + el.name} as={Row} controlId={name + '_' + el.name}>
                        <Form.Label column sm={2}>{el.name}</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder={el.placeholder} name={name + '_' + el.name} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                )
            }
        });
    }

    render() {
        const items = myFromConfig.map(element => {
            const exItems = this.generateFromField(element.name, element.formItems);
            return (
                <Card key={element.name} className="myCard">
                    <Card.Header>{element.name}</Card.Header>
                    <Card.Body>
                        {exItems}
                    </Card.Body>
                </Card>
            )
        });


        return (
            <Container>
                <Col className="text-center top-section">
                    <h3>Page Title</h3>
                    <h4>Sub Title</h4>
                    <hr />
                </Col>

                <Col>
                    <Form onSubmit={this.handleSubmit}>
                        {items}
                        <Button type="submit" >Export To JSON</Button>
                    </Form>
                </Col>
            </Container>
        );
    }
}
export default Home;