import Header from "../component/header";
import Footer from "../component/footer";
import ContentPage from "./PageContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/log-in";

export default function HomePage() {
    return (
        <>
            <Header />
            <ContentPage />
            <Footer />
        </>
    );
}
