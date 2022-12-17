import React, {useState} from 'react';
export default function From1() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log("Form is Submited");
        console.log(name, email, password);
        let userInfo = {
            name: name,
            email: email,
            password: password,
        };
        console.log(userInfo);
        e.preventDefault();
    }
    return (
        <div>
            <h1>Registration</h1>
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' id='name' value={name} onChange={handleNameChange} required /> <br/> <br/>

                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' id='email' value={email} onChange={handleEmailChange} required/> <br/> <br/>

                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' id='password' value={password} onChange={handlePasswordChange} required/> <br/> <br/>

                <button type='submit'>Register</button>                
            </form>
        </div>
    )
}