import { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { appTemplate } from './App.template';

class App extends Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return appTemplate(logo);
    }
}

export default App;
