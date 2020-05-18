import React from 'react';
import { Switch, Route } from "react-router-dom";
import { appStore } from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import  ScrollToTop from "./ScrollToTop";
import Home from './containers/Home';
import People from './containers/People';

import { colors } from './theme/colors';

function App() {
  return (
		<ThemeProvider theme={colors}>
			<Provider store={appStore}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
					</Switch>
				</ScrollToTop>
			</Provider>
		</ThemeProvider>
  );
}

export default App;
