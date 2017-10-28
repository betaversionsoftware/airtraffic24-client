import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './components/App.jsx';

function MainApp() {
    return (
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    );
}

ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);
