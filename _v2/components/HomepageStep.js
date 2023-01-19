import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default class HomepageStep extends React.Component {
  render() {
    return (
      <Col lg={4}>
        <Card className="border-0 shadow">
          <Card.Body className="p-4">
            <div className="text-center">
              <i
                className={`h1 display-1 text-primary ${this.props.data.iconClass}`}
              ></i>
            </div>
            <h3 className="my-4 fw-bold text-center">
              {this.props.data.title}
            </h3>
            <Card.Text className="fw-light">{this.props.data.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
