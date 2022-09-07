import React, { useState } from "react";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
import UpdateComponent from "./UpdateComponent";


const ActionComponent = () => {
    const getInitialState = () => {
        const value = "1";
        return value;
    };

    const [value, setValue] = useState(getInitialState);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    // const actionOption=this.state.actionOption;
    var view;
    if (value == 1) {
        view = <AddComponent />
    }
    else if(value==2){
        view= <UpdateComponent/>
    }
    else{
        view= <DeleteComponent/>
    }
    return (
        <div>
            <select value={value} onChange={handleChange}>
                <option value="1">Add an Employee</option>
                <option value="2">Update the Department</option>
                <option value="3">Delete an Employee</option>
            </select>
            <div>
                <br></br>
                {view}

            </div>
        </div>

    );

}

export default ActionComponent;