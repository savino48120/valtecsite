/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home"
import Thinking from "./pages/thinking/thinking"
import NotFoundPage from "./pages/notfound/notfoundpage";
import Contact from "./pages/contact/contact"
import Markets from "./pages/markets/markets"
import Partners from "./pages/partners/partners"
import Projects from "./pages/projects/projects"
import Services from "./pages/services/services"


const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <Layout>
      <Home/>
    </Layout>
    ),
    errorElement: <NotFoundPage/>
  },
  {
    path: "/thinking",
    element: (
    <Layout>
    <Thinking/>
    </Layout>
    )
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact/>
      </Layout>
      )
  },
  {
    path: "/markets",
    element: (
      <Layout>
        <Markets/>
      </Layout>
      )
  },
  {
    path: "/partners",
    element: (
      <Layout>
        <Partners/>
      </Layout>
      )
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Projects/>
      </Layout>
      )
  },
  {
    path: "/services",
    element: (
      <Layout>
        <Services/>
      </Layout>
      )
  },

  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

