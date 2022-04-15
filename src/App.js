import DashboardSuperAdmin from "./Pages/DashboardSuperAdmin";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { store, persistor } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store,persistor } from "./Redux/Store";
import RegisterPage from "./Pages/RegsiterPage";
import RegisUser from "./Components/Form/RegisUser";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardSuperAdmin/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
            </Routes>   
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
