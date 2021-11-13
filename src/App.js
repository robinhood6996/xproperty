
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
import AddProperties from './Admin/PropertiesManage/AddProperties';
import ManageProperties from './Admin/PropertiesManage/ManageProperties';
import ManageOrder from './Admin/OrderManage/ManageOrder';
import ManageAdmin from './Admin/MangeAdmin/ManageAdmin';
import AdminList from './Admin/MangeAdmin/AdminList';
import AdminDashboard from './Admin/Home/Home/AdminDashboard';
import AdminLogin from './pages/Login/Login/AdminLogin';
import Dashboard from './pages/Users/Dashboard/Dashboard';
import Orders from './pages/Users/Orders';
import Reviews from './pages/Users/Dashboard/Reviews';
import Pay from './pages/Users/Dashboard/Pay';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
            </Route>
            <Route path="/register">
              <Header></Header>
              <Register></Register>
            </Route>
            <Route path="/properties">
              <Header></Header>
              <AllProperties></AllProperties>
            </Route>
            <PrivateRoute path="/property/:id">
              <Header></Header>
              <Property></Property>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Header></Header>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Header></Header>
              <Dashboard></Dashboard>
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/reviews">
              <Header></Header>
              <Dashboard></Dashboard>
              <Reviews></Reviews>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Header></Header>
              <Dashboard></Dashboard>
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route path="/admin/login">
              <AdminLogin></AdminLogin>
            </Route>
            <PrivateRoute path="/addproperty">
              <AddProperties></AddProperties>
            </PrivateRoute>
            <PrivateRoute path="/manage-property">
              <ManageProperties></ManageProperties>
            </PrivateRoute>
            <PrivateRoute path="/manage-orders">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/manage-admin">
              <ManageAdmin></ManageAdmin>
            </PrivateRoute>
            <PrivateRoute path="/admin-list">
              <AdminList></AdminList>
            </PrivateRoute>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
