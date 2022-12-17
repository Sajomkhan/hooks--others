import React from 'react';


function Comp4({user}) {
    return (
        <div>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
        </div>
    );
}
export default Comp4;