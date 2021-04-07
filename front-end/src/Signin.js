import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';


function Signin() {
    // const {state,dispatch} = useContext(Usercontext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(email)) {
            M.toast({ html: "Invalid email", classes: "#d32f2f red darken-2" })
            return
        }

        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)) {
            M.toast({ html: "Invalid password", classes: "#d32f2f red darken-2" })
            return
        }

        fetch('https://new-auth-demo.herokuapp.com/signin', {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#d32f2f red darken-2" })
                }
                else {

                    M.toast({ html: "Login successfully", classes: "#43a047 green darken-1" })
                    history.push('/home')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="mycard">
            <div className="card card-auth input-field">
                <h2>Login Signin </h2>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light #42a5f5 blue darken-1" type="submit" name="action" onClick={() => PostData()}>
                    Sign In
        </button>
                <h6>
                    <Link to="/">
                        Already don't have an account?
            </Link>
                </h6>
            </div>
        </div>
    )
}

export default Signin
