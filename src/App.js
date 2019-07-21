import React, {Component} from 'react';
import {Link, Route, withRouter} from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncPizza = asyncComponent(() => {
    return import('./containers/Pizza');
});

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> | <Link to='/pizza'>Pizza</Link>
                </div>
                <div>
                    <Route path='/' exact component={Users}/>
                    <Route path='/pizza' exact component={asyncPizza}/>
                </div>
            </div>
        );
    }
}

export default withRouter(App);