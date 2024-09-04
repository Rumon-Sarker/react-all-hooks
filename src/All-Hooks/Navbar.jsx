import React from "react";


const Navbar = () => {
    console.log("Component Rendaring")
    return (
        <div>
            <h1>Thsi si Header Component</h1>
        </div>
    );
};

export default React.memo(Navbar);