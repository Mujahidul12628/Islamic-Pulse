
import React from 'react';
import './Register.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from 'react-router-dom'

const Register = () => {
    const { registerUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const [success, setSuccess] = useState('');
    const [error, setError] = useState("");

    const handleRegistration = (event) => {
        event.preventDefault();
        console.log(name, email, password)
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError("password not valid!!! minimum 8 character(at least one letter and one number)");
            return;
        }
        if (name, email, password) {
            registerUser(name, email, password)
                .then((result) => {
                    console.log(result.user);
                    const user = result.user;
                    setSuccess("User Created Successfully");
                    setError("");
                    setName("");
                    setEmail("");
                    setPassword("");
                })
                .catch((err) => {
                    console.log(err.message);
                    setError(err.message);
                    setSuccess("")
                });
        }
        else {
            setError("Please fill in all fields");
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 ">
                        <div className="border w-100 m-auto text-center p-5">
                            <p id='errorText'>{error}</p>
                            <p id='successText'>{success}</p>
                            <form action="" className="form-container">
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    className="email p-3 m-2"
                                    type="text"
                                    placeholder="enter your Name"
                                    required
                                />
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="email p-3 m-2"
                                    type="email"
                                    placeholder="enter your email"
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="password p-3 m-2"
                                    type="password"
                                    placeholder="8 char password including (1 letter and 1 number)"
                                    required
                                />
                                <button
                                    onClick={handleRegistration}
                                    id="register-btn"
                                >
                                    Register
                                </button>
                                <p className="p-2">
                                    Already have an account? <Link to='/login' className='register-link'>Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;





// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
// import "./Register.css";

// const Register = () => {
//   const { registerUser } = useContext(AuthContext);

//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const handleRegistration = (event) => {
//     event.preventDefault();

//     if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
//       setError(
//         "Password not valid! Minimum 8 characters (at least one letter and one number)."
//       );
//       return;
//     }

//     if (name && email && password) {
//       registerUser(name, email, password)
//         .then((result) => {
//           console.log(result.user);
//           const user = result.user;
//           setSuccess("User created successfully!");
//           setError("");
//           setName("");
//           setEmail("");
//           setPassword("");
//           setPhoto("");
//         })
//         .catch((err) => {
//           console.log(err.message);
//           setError(err.message);
//           setSuccess("");
//         });
//     } else {
//       setError("Please fill in all fields.");
//     }
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="row d-flex justify-content-center align-items-center">
//           <div className="col-md-6 ">
//             <div className="border w-100 m-auto text-center p-5">
//               <p id="errorText">{error}</p>
//               <p id="successText">{success}</p>
//               <form action="" className="form-container">
//                 <input
//                   onChange={(e) => setName(e.target.value)}
//                   className="email p-3 m-2"
//                   type="text"
//                   placeholder="Enter your name"
//                   value={name}
//                   required
//                 />
//                 <input
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="email p-3 m-2"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   required
//                 />
//                 <input
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="password p-3 m-2"
//                   type="password"
//                   placeholder="8 char password including (1 letter and 1 number)"
//                   value={password}
//                   required
//                 />
//                 <button onClick={handleRegistration} id="register-btn">
//                   Register
//                 </button>
//                 <p className="p-2">
//                   Already have an account?{" "}
//                   <Link to="/login" className="register-link">
//                     Login
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import app from '../../firebase/firebase.config';
// import { Link } from 'react-router-dom'
// import './Register.css'

// const auth = getAuth(app);
// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleEmailChange = (event) => {
//         console.log(event.target.value)
//         setEmail(event.target.value)
//     }

//     const handlePasswordBlur = (event) => {
//         console.log(event.target.value)
//         setPassword(event.target.value)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const email = event.target.email.value;
//         const password = event.target.password.value;

//         console.log(email, password)

//         //Validate

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((result) => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser)
//                 setError('');
//                 event.target.reset();
//                 setSuccess("User Created Successfully")
//             })
//             .catch((error) => {
//                 console.log(error.message)
//                 setError(error.message);
//                 setSuccess("")
//             });

//     }


//     return (
//         <div >
//             <h4>Please Register</h4>

//             <form className='form-container' onSubmit={handleSubmit} action="">

//                 <input onChange={handleEmailChange} type="name" name='name' id='name' placeholder='Name' required />

//                 <input onChange={handleEmailChange} type="email" name='email' id='email' placeholder='Email' required />

//                 <input onBlur={handlePasswordBlur} type="password" name='password' id='password' placeholder='Password' required />

//                 <button type="submit" value="Register"> Register</button>

//                 <p><small>Already have an account? Please <Link to="/login">Login</Link></small></p>
//                 <p id='errorText'>{error}</p>
//                 <p id='successText'>{success}</p>
//             </form>
//         </div>
//     );
// };

// export default Register;
