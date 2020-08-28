
import React, {useState, useEffect} from 'react';
import httpInstance from "../services/http.service";

const MainPage = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        getServices();

    }, []);
  
    const getServices = async () => {
        const serv = await httpInstance.get(`http://localhost:8001/api/services/all`);
        setData(serv.data);
        console.log(serv.data, "la data");
    }

    return (
        <div className="App">
            <ul>
            {
                data.map(item => (
                <li key={item.id}>{item.title} - {item.body}</li>
                ))
            }
            </ul>
        </div>
    );
}

export default MainPage;