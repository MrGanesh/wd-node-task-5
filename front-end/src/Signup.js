import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

function Signup() {
    const history = useHistory()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    // const [url,setUrl] = useState(undefined);
    // const [image,setImage] = useState("");

    const uploadField = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(email)) {
            M.toast({ html: "Invalid email", classes: "#d32f2f red darken-2" })
            return
        }

        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)) {
            M.toast({ html: "enter character between7 to 15,special charcter, number", classes: "#d32f2f red darken-2" })
            return
        }

        fetch("https://new-auth-demo.herokuapp.com/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password

            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#d32f2f red darken-2" })
                }
                else {
                    M.toast({ html: data.message, classes: "#43a047 green darken-1" })
                    setEmail('');
                    setName('');
                    setPassowrd('')
                    history.push('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <div className="mycard">
            <div className="card card-auth input-field">
                <h2>Login Signup </h2>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassowrd(e.target.value)} />


                <button className="btn waves-effect waves-light #42a5f5 blue darken-1" type="submit" name="action"
                    onClick={() => uploadField()} >
                    Sign Up
        </button>
                <h6>
                    <Link to="/signin">
                        Already have an account?
            </Link>
                </h6>
            </div>
        </div>
    )
}

export default Signup
