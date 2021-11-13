
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Shared/Header/Header';
import Property from './pages/Properties/Property/Property';
import AllProperties from './pages/Properties/Properties/AllProperties';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
// import AddProperties from './Admin/PropertiesManage/AddProperties';
// import ManageProperties from './Admin/PropertiesManage/ManageProperties';
// import ManageOrder from './Admin/OrderManage/ManageOrder';
// import ManageAdmin from './Admin/MangeAdmin/ManageAdmin';
// import AdminList from './Admin/MangeAdmin/AdminList';
import AdminDashboard from './Admin/Home/Home/AdminDashboard';
// import AdminLogin from './pages/Login/Login/AdminLogin';
import Dashboard from './pages/Users/Dashboard/Dashboard';
import Orders from './pages/Users/Orders';
import Reviews from './pages/Users/Dashboard/Reviews';
import Pay from './pages/Users/Dashboard/Pay';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './pages/Home/Shared/Footer/Footer';
import About from './pages/About/About';
import Career from './pages/Career/Career';
import AddProperties from './Admin/PropertiesManage/AddProperties';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>

            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>

            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="/register">
              <Header></Header>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <Route path="/properties">
              <Header></Header>
              <AllProperties></AllProperties>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/property/:id">
              <Header></Header>
              <Property></Property>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/career">
              <Header></Header>
              <Career></Career>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/profile">
              <Header></Header>
              <Dashboard></Dashboard>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Header></Header>
              <Dashboard></Dashboard>
              <Orders></Orders>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/reviews">
              <Header></Header>
              <Dashboard></Dashboard>
              <Reviews></Reviews>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Header></Header>
              <Dashboard></Dashboard>
              <Pay></Pay>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <PrivateRoute path="/addproperty">
              <AddProperties></AddProperties>
            </PrivateRoute>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
