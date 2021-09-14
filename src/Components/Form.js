import React from 'react';
import style from "./Form.module.css";

function form() {
    return (
        <div className={style.container} >

            <div className={style.one}>
                <h4>Login</h4>
                <h4>Register</h4>            
            </div>
            <div className={style.two}>
                <div>
                    <h4>Email/Mobile Number</h4>
                    <input type="text" name="email" placeholder="dummy@email.com" />
                </div>   
                <div>
                    <h4>Password</h4>
                    <input type="password" name="email" value="password"/>
                    <h5>Forget Password</h5>
                </div>   

                <button>Login</button>
                <h6>not a member yet? <span>Register</span></h6>

            </div>
        </div>
    )
}

export default form
