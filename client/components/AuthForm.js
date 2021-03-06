import React from 'react';
import {connect} from 'react-redux';
import {authenticate} from '../store';

const AuthForm = props => {
    const {name, displayName, handleSubmit, error} = props

    return(
       <div>
           <form onSubmit={handleSubmit} name={name}>
               <div>
                   <label htmlFor="username">
                       <small>Username</small>
                    </label>
                    <input name="username" type="text" />
               </div>
               <div>
                    <label htmlFor="password">
                       <small>Password</small>
                    </label>
                    <input name="password" type="password" />
               </div>
               <div>
                   <button type="submit">{displayName}</button>
               </div>
               {error && error.response && <div> {error.response.data} </div>}
            </form>
       </div>
    )
}

const mapLogin = state => {
    return {
        name: 'login',
        displayName: 'Login',
        error: state.auth.error
    }
}

const mapSignup = state => {
    return {
        name: 'signup',
        displayName: 'Sign Up',
        errir: state.auth.error
    }
}

const mapDispatch = dispatch => {
    return {
        handleSubmit(evt) {
            evt.prenetDefault()
            const formName = evt.target.name
            const username = evt.target.username.value
            const password = evt.target.password.value
            dispatch(authenticate(username, password, formName))
        }
    }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signuo = connect(mapSignup, mapDispatch)(AuthForm)
