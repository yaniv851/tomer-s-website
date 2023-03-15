import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles/myDropzone.css";

export default function MyDropzone() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/api/data');

                setData(data.results)
                                console.log(data)
            } catch (err) {
                console.log(err)
            }
        }

        getData()
    }, []);

    return (
        <div dir='rtl'>
            <h1>דאטא מקובץ סי אס וי</h1>
            <table style={{ borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th>מספר שורה</th>
                        <th>כותרת</th>
                        <th>מחיר</th>
                        <th>תיאור</th>
                        <th>פוסט 1</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{row['title']}</td>
                            <td>{row['price']}</td>
                            <td>{row['body']}</td>
                            <td>{row['poster1']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
