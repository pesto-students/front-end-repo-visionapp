import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FirebaseProvider } from './context/Firebase';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import ForgetPassword from './pages/ForgotPassword/ForgotPassword';
import CreatePosts from './pages/CreatePosts/CreatePosts';
import Approvals from './pages/AcceptApprovals/AcceptApprovals';
import ReviewTicket from './pages/ReviewTicket/ReviewTicket';
import FundMonitor from './pages/FundMonitor/FundMonitor';
import AddProducts from './pages/AddProducts/AddProducts';
import AddServiceProviders from './pages/AddServiceProviders/AddServiceProviders';

import store from "./store/store";
import { Provider } from "react-redux";
import PageNotFound from './pages/PageNotFound/PageNotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/forgotPassword",
    element: <ForgetPassword />,
  },
  {
    path: "/createPosts",
    element: <CreatePosts />,
  },
  {
    path: "/acceptApprovals",
    element: <Approvals />,
  },
  {
    path: "/reviewTicket",
    element: <ReviewTicket />,
  },
  {
    path: "/fundMonitor",
    element: <FundMonitor />,
  },
  {
    path: "/addProducts",
    element: <AddProducts />,
  },
  {
    path: "/addServiceProviders",
    element: <AddServiceProviders />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </FirebaseProvider>
  </React.StrictMode>
);
