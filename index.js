import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//-- react-router configuration --//
import { BrowserRouter } from 'react-router-dom';
//-- --//


//-- redux and redux-thunk configuration --//
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sidebarCategoryReducer from './store/reducer/sidebarCategory';
import carouselDataReducer from './store/reducer/carouselData';
import homeProductsReducer from './store/reducer/homeProducts';
import bannerReducer from './store/reducer/banner';
import categoryProductsReducer from './store/reducer/categoryProducts';
// -- -- //
const rootReducer = combineReducers({
  sidebarCategory: sidebarCategoryReducer,
  carouselData: carouselDataReducer,
  homeProducts: homeProductsReducer,
  banner: bannerReducer,
  categoryProducts: categoryProductsReducer
})

//-- redux store creation --//
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true,
  traceLimit: 25
}) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
//-- --//

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
