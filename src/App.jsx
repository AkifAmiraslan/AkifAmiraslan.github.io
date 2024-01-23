import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import './assets/global.scss';
import {AboutUsPage, BlogsPage, CoursesPage, HomePage } from './pages';


function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path='/blogs' element={<BlogsPage/>}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
