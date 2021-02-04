import React, { Component } from 'react';
import icon from './img/icon.png'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './Main.scss';

export default class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        borderClass: ''
    }

    handleChange = (e) => {
        const input = e.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { email, password, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    };

    render() {
        return (
            <div>
                <Container maxWidth="sm">
                    <div className='logo'>
                        <img className="icon" src={icon} alt="logo" />
                    </div>
                    <h2>Sign up</h2>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className='full-name'>
                            <input
                                name='firstName'
                                className='first-name'
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                type='text'
                                placeholder='First name *' />
                            <input
                                name='lastName'
                                type='text'
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder='Last name *' />
                        </div>
                        <input
                            name='email'
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder='Email Address *' />
                        <input
                            name='password'
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder='Email Password *' />
                        <input className='checkbox' type='checkbox' />
                        <label className='rememberMe'>I want to receive inspiration, marketing promotions and updates via email.</label>

                        <Button variant="contained" color="primary" type='submit'>
                            SIGN UP
                        </Button>
                        <Link className='links sign-up' to="/">
                            Already have an acount? Sign in
                        </Link>
                    </form>
                    <p>Copyright &#169; Your Website 2020</p>
                </Container>
            </div>
        );
    }
}

