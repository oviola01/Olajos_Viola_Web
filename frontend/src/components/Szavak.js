import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap';
import axios from "../api/axios.js"


export default function Szavak({tema}){
    const [szavak, setSzavak] = useState([]);
    const id = tema;

    useEffect(()=>{
        fetchSzavak();
    }, [tema])

    const fetchSzavak=async()=>{
        try {
            const response=await axios.get(`/api/szavak/tema/{$id}`);
            console.log(response);
            const adatok = response.data;
            setSzavak(adatok);
        } catch (error) {
            console.log(error);
        }
    }


    
    return(
        <Table striped>
            <thead>
                <tr>
                <th>ANGOL</th>
                <th>MAGYAR</th>
                <th>viszajelzés</th>
                </tr>
            </thead>
            <tbody>
            {szavak.map((elem) => {
                return (
                    <tr key={elem.id}>
                        <td>{elem.angol}</td>
                        <td><input type="text" className="form-control mb-2 mr-sm-2" placeholder="ide írd a választ" /></td>
                        <td></td>
                    </tr>
                );
              })}
            </tbody>
        </Table>
    )
}