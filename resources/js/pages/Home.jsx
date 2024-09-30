import { Link } from "@inertiajs/react";
import React from "react";

const Home = () => {
    return (
        <div>
            <h1>Hello Its Home dss </h1>

            <Link preserveScroll href="/" className="text-blue-500 title block mt-[1000px]"> {new Date().toDateString()}</Link>
        </div>
    );
};

export default Home;
