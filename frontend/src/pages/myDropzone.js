import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MyDropzone() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Data from CSV</h1>
            <table>
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row['כותרת']}</td>
                            <td>{row['מחיר']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
