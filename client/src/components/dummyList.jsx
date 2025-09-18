import React, { useState, useEffect } from "react";
import api from "../services/api";

function DummyList() {
    const [dummys, setDummys] = useState([]);

    useEffect(() => {
        api.get("dummys/")
        .then((response) => setDummys(response.data))
        .catch((err) => console.error("Error", err));
    }, []);

    return (
    <div>
        <h2>Dummy List</h2>
        <ul>
            {dummys.map((item) => (
            <li key={item.id}>
                {item.name} {item.description} - {item.price} ({item.quantity})
            </li>
            ))}
        </ul>
    </div>
    );
}

export default DummyList;