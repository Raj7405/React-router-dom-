import React from "react";
import { Outlet,Link, useLocation } from "react-router-dom";

function DashBoard() {
    const Location = useLocation()
    console.log(Location)
    const items = [
        { id: 1, name: "Raj7405" },
        { id: 2, name: "kunal-kushwaha" },
        { id: 3, name: "hiteshchoudhary" },
        { id: 4, name: "loveBabbar"},
    ];
    const getElementById = (name) => { 
        return items.find((obj) => obj.name == name )
    }

    return (
        <div>
        <ul className="flex justify-center gap-5 text-blue-600">
            {items.map((item) => (
            <li key={item.id}>
                <Link to={`details/${item.name}`}>{item.name}</Link>
            </li>
            ))}
        </ul>
        <Outlet context={{getElementById, Location}}/>
        </div>
       );
}

export default DashBoard;
