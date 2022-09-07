import React, { useEffect, useState } from "react";
import './ListComponent.css';

const ListComponent = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('/getAll')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Dept Id</th>
                    <th>Email</th>
                </tr>

                {posts.map((post) => {
                    return (
                        <tr>
                            <td key={post.empid}>{post.empid} </td>
                            <td>{post.empname}</td>
                            <td> {post.deptid}</td>
                            <td>{post.email}</td>
                        </tr>
                    );
                })}

            </table>
        </div>
    );
}

export default ListComponent;