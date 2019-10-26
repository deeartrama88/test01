import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './layouts/MainPage';
import './assets/scss/app.scss';

const App = () => {
   return (
      <BrowserRouter>
         <div className="app">
            <Header />
            <Route exact path="/" component={MainPage} />
            <Footer />
         </div>
      </BrowserRouter>
   );
};

export default App;
