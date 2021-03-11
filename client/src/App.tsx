import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from "react-router-dom";

import FuncComponent from "./components/FuncComponent";
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
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/products/1">First Product</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/products/2">Second Product</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Route path="/" exact component={ContactUsForm} />
      <Route path="/products/:id" component={Product} />
    </Router>
  );
}

export default AppRouter;
