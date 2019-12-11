import React, { Component } from "react";



export default class SignUp extends Component {
    render() {
        return (
					<div className='container col-md-4 col-md-offset-4 centered'>
            <form className='text-center border border-light p-5'>
						<p class="h4 mb-4">Sign Up</p>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control text-center" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control text-center" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control text-center" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control text-center" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>
            </form>
					</div>
        );
    }
}