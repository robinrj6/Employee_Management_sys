import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class DeleteComponent extends Component {

    render() {

        const handleSubmit = (values) => {
            values.preventDefault();
            fetch(`/deleteById/${values.target.eid.value}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((response) => response.text())
                .then((responseText) => {
                    alert(responseText+"\n\tSuccessfully Deleted!!!");
                })
                .catch((error) => {
                    console.error(error);
                });
            values.target.reset();
        }
        return (
            <div className="container">
                <Form onSubmit={(values) => { handleSubmit(values) }}>
                    <FormGroup>
                        <Label>Enter the Employee ID
                        </Label>
                        <Input type="number" name="eid" id="eid" required />
                    </FormGroup>
                    <Button color="success">Submit</Button>
                </Form>
            </div >
        );
    }
}

export default DeleteComponent;