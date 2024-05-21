import React, { useEffect, useState } from "react";
import {Container, Form} from 'react-bootstrap';
import '../styles/szotar.css';
import Szavak from "../components/Szavak";
import axios from "../api/axios.js"

export default function Szotar(){
    const [temak, setTemak] = useState([]);
    const [kival, setKival] = useState(0);

    useEffect(()=>{
        fetchTemak();
    }, [])

    const fetchTemak=async()=>{
        try {
            const response=await axios.get("/api/tema");
            const adatok = response.data;
            console.log(response);
            setTemak(adatok);
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnChange=(e)=>{
        setKival(e.target.value);
    }

    return(
        <div className="szotar-site">
            <h3>Szavak</h3>
            <Container fluid>
            <Form.Select aria-label="tema" onChange={handleOnChange}>
                <option>Válassz témát!</option>
                {temak.map((elem, index) => {
                    return (
                        <option key={index} value={elem.id}>{elem.temanev}</option>
                    );
                  })}
            </Form.Select>
            {kival!=0 && <Szavak tema={kival} />}
            </Container>
        </div>
    );
};