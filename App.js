import React, {Component} from 'react';
import AppNavigation from './AppNavigation';
import { Provider } from 'react-redux';
import AppStore from './stores/AppStore';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={AppStore}>
        <AppNavigation />
      </Provider>
    );
  }
}
