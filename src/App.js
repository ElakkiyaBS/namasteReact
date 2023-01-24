import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import { Body } from "./body";
import SearchArea from "./search"
import Footer from "./footer";

const AppLayout = () => {
    return (
        <>
            <Header />
            <SearchArea />
            <Body />
            <Footer />
        </>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
