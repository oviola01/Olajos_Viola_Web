import React from "react";
import Navigacio from "../components/Navigacio";
import { Outlet } from "react-router-dom";

export default function PublicLayout(){

    return(
        <>
        <Navigacio />
        <Outlet />
        </>
    );
}