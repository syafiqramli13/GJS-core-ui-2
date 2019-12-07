import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

export default class QrScanner extends Component {
  state = {
    result: "No result"
  };

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl>
            <Card className="card-accent-y">
              <CardHeader>About Us-Card with accent</CardHeader>
              <CardBody>
                <div>
                  <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "100%" }}
                  />
                  <p style={{ textAlign: "center" }}>{this.state.result}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
