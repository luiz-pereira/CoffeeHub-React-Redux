import React, { Component } from "react";
import { connect } from 'react-redux'
import $ from 'jquery'
import { withRouter } from "react-router-dom";

import { userLoginFetch, logoutUser } from '../../actions/userActions'

class SignIn extends Component {

	state = {
		password: '',
		email:''
	}

	componentWillMount(){
		document.body.id = 'sign-id'
	}
	componentWillUnmount(){
		document.body.id = 'root'
	}
	

	componentDidMount(){
		this.props.logoutUser()
		$('#email-alert').hide()
		$('#password-length-alert').hide()
		$('#notfound-alert').hide()
	}

	handleEmail = event =>{
		this.setState({email: event.target.value})
		$('#notfound-alert').hide()
		if (event.target.value ==='' || validateEmail(event.target.value)){
			$('#email-alert').hide()
		} else {
			$('#email-alert').show()
		}
	}

	handlePassword = event => {
		this.setState({password: event.target.value})
		if (event.target.value !== '' && event.target.value.length < 3) {
			$('#password-length-alert').show()
		} else {
			$('#password-length-alert').hide()
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		if (this.validateFields(this.state)){
			const signin = async () => {
				await this.props.loginUser(this.state)
				if (this.props.currentUser.userName !=='') {
					this.props.history.push('/coffees')
				} else {
					$('#notfound-alert').show()
				}
			}
			signin()
		} else {
			window.alert ("Please fill the fields as shown")
		}
	}

	validateFields(state){
		if (!validateEmail(state.email)){
			$('#email-alert').show()
		}
		return (validateEmail(state.email) && this.validatePassword(state.password, state.confirmedPassword))
	}

	validatePassword(password, confirmedPassword){
		return (password.length >= 3)
	}

	render() {
		return (
			<section id="signup-container">
				<form>
					<h2>Sign In</h2>
						<p>
							<label className="floatLabel">Email</label>
							<input onChange={this.handleEmail} id="Email" name="Email" type="text"/>
							<span id='email-alert' >The e-mail entered is not valid!</span>
							<span id='notfound-alert' >User not found, please sign up!</span>
						</p>
						<p>
							<label className="floatLabel">Password</label>
							<input onChange={this.handlePassword} id="password" name="password" type="password"/>
							<span id='password-length-alert'>Enter a password longer than 3 characters</span>
						</p>
						<p>
							<input onClick={this.handleSubmit} type="submit" value="Sign In" id="submit"/>
						</p>
					</form>
				</section>
		);
	}
}

function validateEmail(email){
	return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

const mapStateToProps = state => {
	return {currentUser: state.user.currentUser}
}

const mapDispatchToProps = dispatch => {
	return ({
		loginUser: user => dispatch(userLoginFetch(user)),
		logoutUser: () => dispatch(logoutUser())
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))