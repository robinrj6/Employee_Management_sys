import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        values.preventDefault();
        const flag = fetch('/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                empname: values.target.name.value,
                deptid: values.target.did.value,
                email: values.target.email.value
            })
        }).then((response) => response.text())
            .then((responseText) => {
                alert(responseText+"\n\tSuccessfully Added!!!");
            })
            .catch((error) => {
                console.error(error);
            });
        values.target.reset();
    }

    render() {
        return (
            <div className="container" >
                <Form onSubmit={(values) => this.handleSubmit(values)}>
                    <FormGroup>
                        <Label for="examplePassword">Enter Employee Name</Label>
                        <Input type="text" name="name" id="name" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="did">Enter Department ID</Label>
                        <Input type="number" name="did" id="did" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Enter Employee Email</Label>
                        <Input type="email" name="email" id="email" required />
                    </FormGroup>
                    <Button variant="success" >Submit</Button>
                </Form>

            </div>
        );
    }
}

export default AddComponent;