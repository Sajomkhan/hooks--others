import { useState, useEffect } from "react";



const LoginForm = () => {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
  
    return (
      <div className="container my-5">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
  
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label className="form-label">Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <button className="btn btn-primary mb-3">Submit</button>
          </div>
        </form>
      </div>
    );
  }

export default LoginForm


//         <div className="container">
//             <form action="" onSubmit={handleSubmit} className="form-wrapper">
//                 <div className="mb-3">
//                     <label for="fname" className="form-label">Frist Name: </label>
//                     <input type="text" className="form-control" name="fname" placeholder="Enter First Name" onChange={handleChange} value={formValues.fname}/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="lname" className="form-label">Last Name: </label>
//                     <input type="text" className="form-control" name="lname" placeholder="Enter Last Name" onChange={handleChange} value={formValues.lname}/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="email" className="form-label">Email Address: </label>
//                     <input type="email" className="form-control" name="email" placeholder="Enter Your Email" onChange={handleChange} value={formValues.email}/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="password" className="form-label">Password: </label>
//                     <input type="password" className="form-control" name="password" placeholder="password" onChange={handleChange} value={formValues.password}/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="comfirmPassword" className="form-label">Confirm Password: </label>
//                     <input type="comfirmPassword" className="form-control" name="comfirmPassword" placeholder="Confirm Password" onChange={handleChange} value={formValues.comfirmPassword}/>
//                 </div>
//                 <button type="submit" className="btn btn-primary mb-3">Submit</button>
//             </form>            
//         </div>
//       </div>
//     );
//   }

