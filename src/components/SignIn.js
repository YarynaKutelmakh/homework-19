import React, { Component } from 'react';
import icon from './img/icon.png'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './Main.scss';

export default class SignIn extends Component {
    state = {
        email: '',
        password: '',
        rememberMe: false
    }

    handleChange = (e) => {
        const input = e.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { email, password, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('email', rememberMe ? email : '');
        localStorage.setItem('password', rememberMe ? password : '');
    };

    render() {
        return (
            <div>
                <Container maxWidth="sm">
                    <div className='logo'>
                        <img className="icon" src={icon} alt="logo" />
                    </div>
                    <h2>Sign in</h2>
                    <form onSubmit={this.handleFormSubmit}>
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
                        <input className='checkbox' type='checkbox' name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} />
                        <label className='rememberMe'>Remember me</label>
                        <Button variant="contained" color="primary" type='submit'>
                            SIGN IN
                        </Button>
                        <Link className='links' to='/forgot-password'>
                            Forgot password?
                         </Link>
                        <Link className='links link' to="/signup">
                            Don't have an acount? Sing Up
                    </Link>
                    </form>
                    <p>Copyright &#169; Your Website 2020</p>
                </Container>
            </div>
        );
    }
}

