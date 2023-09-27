import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Header from "./components/HomePage/Header";


function App() {
  return (
    <div className="display">
     <BrowserRouter>
      <Header />
      <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route exact path="/about" component={AboutPage}/>
       <Route exact path="/contact" component={ContactPage}/>
       <Route exact path="/project" component={ProjectPage}/>
      </Switch>
     </BrowserRouter>
    </div>
  )  
};


export default App;