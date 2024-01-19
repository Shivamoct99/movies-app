import Home from './components/Home'
import SingleMovie from './components/SingleMovie'
import {BrowserRouter as Router, Route  } from "react-router-dom";
// import { useGlobalContext } from './context';

const App = () => {
    // let user=useGlobalContext();
  return (
    <Router>
    <div>
      {/* <h1>Hello App Component </h1> */}
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/movie/:id">
      <SingleMovie/>
      </Route>
    </div>
    </Router>
  )
}

export default App
