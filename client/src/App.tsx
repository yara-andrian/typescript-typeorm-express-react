import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from "react-router-dom";

import FuncComponent from "./components/FuncComponent";
import ShowPerson from "./components/Something";
import { ContactUsForm } from "./components/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

type TParams = { id: string };

function Index() {
  return <h2>Home</h2>;
}

function Product({ match }: RouteComponentProps<TParams>) {
  return <h2>This is a page for product with ID: {match.params.id} </h2>;
}

function AppRouter() {
  return (
    <Router>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Link to="/" className="nav-link" data-testid="xxx">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/products/1" className="nav-link">
            First Product
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/products/2" className="nav-link">
            Second Product
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/something" className="nav-link">
            Something
          </Link>
        </Nav.Item>
      </Nav>
      <Route path="/" exact component={ContactUsForm} />
      <Route path="/products/:id" component={Product} />
      <Route path="/something" component={ShowPerson} />
    </Router>
  );
}

export default AppRouter;
