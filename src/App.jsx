import {Provider} from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store = {store}>
    <BrowserRouter>
      <Routes>
        <Switch>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        </Switch>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
