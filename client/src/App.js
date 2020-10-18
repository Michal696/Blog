import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Logo from "./components/logo.component";
import Footer from "./components/footer.component";
import Articles from "./components/articles.component";
import Article from "./components/article.component";
import NotFound from "./components/not-found.component";


function App() {
  return (
      <Router>
          <div className="container">
              <Logo/>
              <Navbar/>
              <Route path="/" exact component={ExercisesList}/>
              <Route path="/api" exact component={ExercisesList}/>
              <Route path="/api/edit/:id" component={EditExercise}/>
              <Route path="/api/create" component={CreateExercise}/>
              <Route path="/api/user" component={CreateUser}/>
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
