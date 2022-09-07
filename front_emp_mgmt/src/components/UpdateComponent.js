import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function UpdateComponent() {
    const handleSubmit = (values) => {
        values.preventDefault();
        fetch('/updateDept', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: values.target.eid.value,
                newDeptid: values.target.did.value
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

export default UpdateComponent;