import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import {Switch, Route} from 'react-router-dom'
import {Main} from './Main/Main';
import {Group} from './Group/Group';
import Link from 'react-router-dom/es/Link';

class App extends Component {

    render() {
        return (
            <div className='body-content'>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Devices</h1>

                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/group'>Group</Link></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/group' component={Group}/>
                </Switch>
            </div>
        )
    }

}

export default App;
