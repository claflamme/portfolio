import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import navData from "../data/nav.yml";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileNav: false,
    };
  }

  render() {
    // The nav is rendered twice--once for "desktop" and once for "mobile".
    // The mobile nav is actually a fullscreen modal.
    return (
      <Navbar bg="black" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <span className="fw-bold">
            <Link passHref href="/">
              <Navbar.Brand className="fw-bolder">{navData.brand}</Navbar.Brand>
            </Link>
          </span>
          <Button
            variant="outline-dark"
            className="d-lg-none fw-light text-white"
            onClick={this.onMobileNavShow}
            aria-haspopup="true"
            aria-expanded={this.state.showMobileNav}
          >
            <i
              className="m-0 p-0 fas fa-fw fa-bars"
              style={{ lineHeight: 1 }}
            />
          </Button>
          <Modal
            fullscreen
            show={this.state.showMobileNav}
            onHide={this.onMobileNavHide}
            aria-labelledby="mobile-nav-menu-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="mobile-nav-menu-title">
                {navData.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Nav>{navData.links.map(this.renderNavLink)}</Nav>
            </Modal.Body>
          </Modal>
          <Navbar.Collapse className="justify-content-end">
            <Nav>{navData.links.map(this.renderNavLink)}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  renderNavLink = (link) => {
    return (
      <Nav.Item key={link.href}>
        <Link passHref href={link.href}>
          <Nav.Link onClick={this.onMobileNavHide}>{link.label}</Nav.Link>
        </Link>
      </Nav.Item>
    );
  };

  onMobileNavShow = () => {
    this.setState({ showMobileNav: true });
  };

  onMobileNavHide = () => {
    this.setState({ showMobileNav: false });
  };
}
