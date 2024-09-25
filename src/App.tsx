import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Ma Ming - Postdoctoral Researcher</title>
          <meta name="description" content="Ma Ming is currently a Postdoctoral Researcher at Free University Berlin. His research interests include computational social science, authoritarian politics and AI governance." />
        </Helmet>
        // ... existing navigation code ...
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        // ... existing footer code ...
      </div>
    </Router>
  );
}

export default App;
