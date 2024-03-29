import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store,persistor } from "./Redux/Store";
import RegisterPage from "./Pages/RegsiterPage";
import ManageAdmin from "./Pages/ManageAdmin";
import TourPackage from "./Pages/TourPackage";
import Transactions from "./Pages/Transactions";
import AllPackageUser from "./Components/TourPackage/AllPackageUser";
import DetailPackage from "./Components/TourPackage/DetailPackage";
import Profileuser from "./Components/User/Profileuser";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/manage-admin" element={<ManageAdmin/>}/>
              <Route path="/tour-package" element={<TourPackage/>}/>
              <Route path="/transaction" element={<Transactions/>}/>
              <Route path="/tour" element={<AllPackageUser/>}/>
              <Route path="/detail-package/:id" element={<DetailPackage/>}/>
              <Route path="/profile-user" element={<Profileuser/>}/>
            </Routes>   
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
