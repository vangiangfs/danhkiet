import React from 'react';

import { DKMenu } from './src/Router';
import { createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(DKMenu);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        )
    }
}