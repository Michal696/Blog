import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import Logo from "./components/logo.component";
import Footer from "./components/footer.component";
import Articles from "./components/articles.component";
import Article from "./components/article.component";
import NotFound from "./components/not-found.component";
import AboutMe from "./components/aboutme.component";

function App() {
  return (
      <Router>
          <div className="container">
              <Logo/>
              <Navbar/>
              <Route path="/" exact component={AboutMe}/>
              <Route path="/api" exact component={AboutMe}/>
              <Route path="/api/prolog" exact component={Article}/>
              <Route path="/api/aboutme" exact component={AboutMe}/>
              <Route exact strict path="/api/articles" component={Articles}/>
              <Route exact strict path="/api/articles/" component={Articles}/>
              <Route path="/api/articles/:id" component={Article}/>
              <Route path="/notfound" exact component={NotFound}/>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
