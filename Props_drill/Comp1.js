import React, { useState } from 'react';
import Comp2 from "./Comp2";

function Comp1() {
    const [user, setUser] = useState({id: 102, name: 'Saiful Ajom Khan'})
    return (
        <Comp2 user= {user} />
    );
}
export default Comp1;

// Data send Comp1 to Comp4 & Comp3