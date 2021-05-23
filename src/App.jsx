import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from "./components/shared/_Header";
import CountryData from "./pages/country/CountryData";
import Home from "./pages/Home";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-whitish dark:bg-gray-dark">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/country/:id" component={CountryData} />
          </Switch>
        </Router>
      </div>
    </QueryClientProvider>
  )
}
