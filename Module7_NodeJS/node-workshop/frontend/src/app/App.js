import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {Main} from './Main/Main';
import {Group} from './Group/Group';
import Link from 'react-router-dom/es/Link';

class App extends Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Welcome to Devices</h1>

                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/group'>Group</Link></li>
                        </ul>
                    </nav>
                </header>

                <div className='body-content'>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route path='/group' component={Group}/>
                    </Switch>
                </div>
            </div>
        )
    }

}

export default App;
