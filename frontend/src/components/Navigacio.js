import React from "react";
import '../styles/navigacio.css';
import {Navbar, Nav} from 'react-bootstrap';

export default function Navigacio(){

    return(
        <header>
                <Navbar bg="light" data-bs-theme="light">
                <Nav className="me-auto">
                    <Nav.Link href="/">Szótár</Nav.Link>
                </Nav>
            </Navbar>
        </header>
    );
}