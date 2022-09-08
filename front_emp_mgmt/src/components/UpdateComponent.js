import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class UpdateComponent extends Component {

    render() {
        // const { isLoading } = this.state;

        // if (isLoading) {
        //     return <p>Loading...</p>;
        // }
        const handleSubmit = (values) => {
            values.preventDefault();
            fetch(`/updateDept/${values.target.eid.value}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    deptid: values.target.did.value
                })
            }).then((response) => response.text())
                .then((responseText) => {
                    alert(responseText);
                })
                .catch((error) => {
                    console.error(error);
                });
            alert("Successfullt updated");
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
                    <FormGroup>
                        <Label>Enter the new Deptartment ID
                        </Label>
                        <Input type="number" name="did" id="did" required />
                    </FormGroup>
                    <Button color="success">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default UpdateComponent;