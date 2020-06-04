import React from 'react';
import './app.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './pages';



const MainRoute = ({ Component, path, exact, purpose, auth, ...rest }) => {
    return <Route exact={exact} path={path} {...rest} render={props => {
        return <Layout>
            <Component {...rest} {...props} />
        </Layout>
    }} />
}

function App() {
    return (
        <Router>
            <Switch>
                <MainRoute path="/" Component={Home} />
            </Switch>
        </Router>
    )
}

export default App
