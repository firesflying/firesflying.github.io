import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import ProductItem from './components/ProductItem';
import ProductArea from './components/ProductArea';
import CoverImages from './components/CoverImages';
import Disclaimer from './components/Disclaimer';
import PageFooter from './components/PageFooter';
import About from './components/About';
import Contact from './components/Contact';
import TermAndCondition from './components/TermAndCondition';
import DisclaimerDetails from './components/DisclaimerDetails';
import PrivacyPolicy from './components/PrivacyPolicy';


import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>

      <div className='bg-dark'><NavBar/></div> 
      <Disclaimer title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This Website contains affiliate links. If you use these links to buy something we may earn a commission. Thanks. &nbsp; "/>
      <ScrollToTop>
      <Routes>
        <Route path='/' element={<div><CoverImages/><ProductItem/></div>}/>
        <Route path='about' element={<div><About/></div>}/>
        <Route path='products' element={<div><ProductArea/></div>}/>
        <Route path='contact' element={<div><Contact/></div>}/>
        <Route path='termAndCondition' element={<div><TermAndCondition/></div>}/>
        <Route path='disclaimerDetails' element={<div><DisclaimerDetails/></div>}/>
        <Route path='privacyPolicy' element={<div><PrivacyPolicy/></div>}/>

      </Routes>
      </ScrollToTop>
      <PageFooter/>
      
      </BrowserRouter>

      </>
    )
  }
}
