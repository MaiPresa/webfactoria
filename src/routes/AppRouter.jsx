// npm install react-router-dom

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LayoutLogin } from "../layouts/LayoutLogin";
import { Home } from "../pages/Home/Home";
import { Postulantes } from "../pages/Postulantes/Postulantes";
import { Admitidos } from "../pages/Admitidos/Admitidos";
import { Fichaalumno } from "../pages/Fichaalumno/Fichaalumno";



export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutLogin/>}>
                    <Route path="/" element={<Navigate to="/home"/>} />
                    <Route path="home" element={<Home/>} />

                    <Route path="/postulantes" element={<Postulantes/>} />
                    <Route path="/admitidos" element={<Admitidos/>} />

                    <Route path="/ficha/:id/:showImage" element={<Fichaalumno/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
