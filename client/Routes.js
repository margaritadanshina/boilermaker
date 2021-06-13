import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm'
import Home from './components/Home'
import {me} from './store'

class Routes extends Component {
    componentDidMount() {
        this.props.loadInitialData()
    }

    render() {
        const {isLoggedIn} = this.props

        return(
            <div>
                {isLoggedIn ? (
                    <Switch>
                    <Route path='/home' expect component={Home} />
                    <Route path='/home' />
                </Switch>
                ) : (
                    <Switch>
                        <Route path='/' expect component={Login} />
                        <Route path='/login' expect component={Login} />
                        <Route path='/signup' expect component={Signup} />
                    </Switch>
                )}
            </div>
        )
    }
}

const mapState = state => {
    return {
        isLoggedIn: !!state.auth.id
    }
}

const mapDispatch = dispatch => {
    return {
        loadInitialData() {
            dispatch(me())
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))