import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import themeConfig from './config/theme';
import App from './containers/AppShell/App';
import './index.css';
import { history, store } from './store/store';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <App theme={themeConfig} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
