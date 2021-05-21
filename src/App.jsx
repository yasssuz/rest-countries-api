import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Header } from "./components/shared/_Header";
import CountryData from "./pages/country/CountryData";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/country/:id" component={CountryData} />
      </Switch>
    </Router>
  )
}
