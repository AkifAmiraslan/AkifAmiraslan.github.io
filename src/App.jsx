/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { AboutUsPage, BlogsPage, CoursesPage, HomePage, BlogDetailPage } from './pages'; // BlogDetailPage eklenmiştir
import './assets/global.scss'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path='/blogs' element={<BlogsPage/>}/>
        <Route path='/blogs/:id' element={<BlogDetailPage/>}/> {/* :id parametresi eklenmiştir */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
