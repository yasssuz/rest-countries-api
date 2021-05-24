import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from "./components/shared/_Header";
import Country from "./pages/country/Country";
import Home from "./pages/Home";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/country/:id" component={Country} />
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}
