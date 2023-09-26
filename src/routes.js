import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min"
import HomePage from "./components/HomePage/HomeBody"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import ProjectPage from "./components/ProjectPage"

function Router() {
    return (
        <>
    <BrowserRouter>
      {/* <Header /> */}
      {/* <HomePage /> */}
      <Route exact path='/' component={HomePage}/>
       <Route exact path="/about" component={AboutPage}/>
       <Route exact path="/contact" component={ContactPage}/>
       <Route exact path="/project" component={ProjectPage}/>
     </BrowserRouter>
        </>
    )
}

export default Router