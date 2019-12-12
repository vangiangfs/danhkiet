import React from 'react';

import { DKStack } from './src/Router';
import { createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(DKStack);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        )
    }
}