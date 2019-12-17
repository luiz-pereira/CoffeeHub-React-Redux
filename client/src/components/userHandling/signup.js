import React, { Component } from "react";
import { connect } from 'react-redux'
import $ from 'jquery'
import { withRouter } from "react-router-dom";

import { userPostFetch, logoutUser } from '../../actions/userActions'

class SignUp extends Component {
	
	state = {
		password: '',
		confirmedPassword:'',
		email:'',
		name: '',
		company: '',
	}

	componentWillMount(){
		document.body.id = 'sign-id'
	}

	componentWillUnmount(){
		document.body.id = 'root'
	}

	componentDidMount(){
		this.props.logoutUser()
		$('#password-length-alert').hide()
		$('#password-confirmed-alert').hide()
		$('#email-alert').hide()
		$('#name-alert').hide()
		$('#company-alert').hide()
		$('#existing-alert').hide()
	}

	handleEmail = event =>{
		$('#existing-alert').hide()
		this.setState({email: event.target.value})
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
		if (event.target.value !== this.state.confirmedPassword) {
			$('#password-confirmed-alert').show()
		} else {
			$('#password-confirmed-alert').hide()
		}
	}

	handleConfirmPassword = event => {
		this.setState({confirmedPassword: event.target.value})
		if (event.target.value !== this.state.password) {
			$('#password-confirmed-alert').show()
		} else {
			$('#password-confirmed-alert').hide()
		}
	}

	handleName = event =>{
		this.setState({name: event.target.value})
		$('#name-alert').hide()
	}
	handleCompany = event =>{
		this.setState({company: event.target.value})
		$('#company-alert').hide()
	}
	
	handleSubmit = event => {
		event.preventDefault()
		if (this.validateFields(this.state)){
			const signup = async () => {
				await this.props.signupUser(this.state)
				if (this.props.currentUser.userName !=='') {
					this.props.history.push('/coffees')
				} else {
					$('#existing-alert').show()
				}
			}
			signup()
		} else {
			window.alert ("Please fill the fields as shown")
		}
	}

	validateFields(state){
		if (!validateEmail(state.email)){
			$('#email-alert').show()
		}
		if (state.name === ''){
			$('#name-alert').show()
		}
		if (state.company === ''){
			$('#company-alert').show()
		}
		return (validateEmail(state.email) && state.name !=='' && state.company !== '' && this.validatePassword(state.password, state.confirmedPassword))
	}

	validatePassword(password, confirmedPassword){
		return (password === confirmedPassword && password.length >= 3)
	}

	

	render() {
		return (
			<section id="signup-container">
				<form action="#" method="post">
					<h2>Sign Up</h2>
						<p>
							<label className="floatLabel">Email</label>
							<input onChange={this.handleEmail} id="Email" name="Email" type="text"/>
							<span id='email-alert' >The e-mail entered is not valid!</span>
							<span id='existing-alert' >This e-mail is already in use!</span>
						</p>
						<p>
							<label className="floatLabel">Full Name</label>
							<input onChange={this.handleName} id="name" name="name" type="text"/>
							<span id='name-alert' >Please enter your full name</span>
						</p>
						<p>
							<label className="floatLabel">Company</label>
							<input onChange={this.handleCompany} id="company" company="name" type="text"/>
							<span id='company-alert' >Please enter your company's name</span>
						</p>
						<p>
							<label className="floatLabel">Password</label>
							<input onChange={this.handlePassword} id="password" name="password" type="password"/>
							<span id='password-length-alert'>Enter a password longer than 3 characters</span>
						</p>
						<p>
							<label className="floatLabel">Confirm Password</label>
							<input onChange={this.handleConfirmPassword} id="confirm_password" name="confirm_password" type="password"/>
							<span id='password-confirmed-alert' >Your passwords do not match</span>
						</p>
						<p>
							<input onClick={this.handleSubmit} type="submit" value="Create My Account" id="submit"/>
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
		signupUser: user => dispatch(userPostFetch(user)),
		logoutUser: () => dispatch(logoutUser())
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp))