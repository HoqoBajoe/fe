import DashboardSuperAdmin from "./Pages/SuperAdmin/DashboardSuperAdmin";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { store, persistor } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Loginpage from "./Pages/Loginpage";
import SignInPage from "./Pages/SignInPage";
import { store,persistor } from "./Redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            {/* <Sidebar /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
            {/* <HomePage/> */}
              <Route path="/dashboard" element={<DashboardSuperAdmin/>}/>
              <Route path="/login" element={<Loginpage/>}/>
              <Route path="/signin" element={<SignInPage/>}/>
            </Routes>   
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
