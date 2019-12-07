import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Row
} from "reactstrap";

class Collapses extends Component {
  constructor(props) {
    super(props);
    this.onEnteringAccordion = this.onEnteringAccordion.bind(this);
    this.onEnteredAccordion = this.onEnteredAccordion.bind(this);
    this.onExitingAccordion = this.onExitingAccordion.bind(this);
    this.onExitedAccordion = this.onExitedAccordion.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: "Closed",
      fadeIn: true,
      timeout: 300
    };
  }

  onEnteringAccordion() {
    this.setState({ status: "Opening..." });
  }

  onEnteredAccordion() {
    this.setState({ status: "Opened" });
  }

  onExitingAccordion() {
    this.setState({ status: "Closing..." });
  }

  onExitedAccordion() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  }

  toggleCustom(tab) {
    const prevState = this.state.custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      custom: state
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl="12">
            <Card>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button
                        block
                        color="link"
                        className="text-center m-0 p-0"
                        onClick={() => this.toggleAccordion(0)}
                        aria-expanded={this.state.accordion[0]}
                        aria-controls="collapseOne"
                      >
                        <h5 className="m-0 p-0">
                          <strong>About Us</strong>
                        </h5>
                      </Button>
                    </CardHeader>
                    <Collapse
                      isOpen={this.state.accordion[0]}
                      data-parent="#accordion"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                    >
                      <CardBody style={{ textAlign: "center" }}>
                        <p>
                          JSG is a leadership experiential empowerment program
                          which uses nature i.e. rainforest in Malaysia as a
                          venue. Hosted by Assistant Prof. Dr Norzalifa binti
                          Zainal Abidin from International Islamic University
                          Malaysia (IIUM), with the help of Major (R) Kalam Pie
                          and the talented indigenous 'hidden gems' i.e master
                          craftsmen and weavers, and indigenous jungle experts.
                          Jungle school helps to empower the indigenous people
                          in Gombak to share their cultural knowledge and
                          expertise.
                        </p>
                        <p>
                          The programs include survival skills of Orang Asli
                          (Peninsular Malaysia Indigenous People), learning
                          about the use of flora and fauna, the basic skills of
                          food searching and the traditional ways of the Orang
                          Asli hut making, camping, awareness of the rainforest
                          sustainability, law of the jungle, preparing food like
                          the Orang Asli style and tree planting program. 5
                          levels of survival course will be offered for the
                          public, since the beginning of early 2014.
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button
                        block
                        color="link"
                        className="text-center m-0 p-0 "
                        onClick={() => this.toggleAccordion(1)}
                        aria-expanded={this.state.accordion[1]}
                        aria-controls="collapseTwo"
                      >
                        <h5 className="m-0 p-0">
                          <strong>Mission</strong>
                        </h5>
                      </Button>
                    </CardHeader>
                    <Collapse
                      isOpen={this.state.accordion[1]}
                      data-parent="#accordion"
                      id="collapseTwo"
                    >
                      <CardBody style={{ textAlign: "center" }}>
                        <p>
                          To educate and motivate the Orang Asli community to
                          empower and share their cultural heritage to the
                          public whilst elevating their income.
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button
                        block
                        color="link"
                        className="text-center m-0 p-0"
                        onClick={() => this.toggleAccordion(2)}
                        aria-expanded={this.state.accordion[2]}
                        aria-controls="collapseThree"
                      >
                        <h5 className="m-0 p-0">
                          <strong>Vision</strong>
                        </h5>
                      </Button>
                    </CardHeader>
                    <Collapse
                      isOpen={this.state.accordion[2]}
                      data-parent="#accordion"
                      id="collapseThree"
                    >
                      <CardBody style={{ textAlign: "center" }}>
                        <p>
                          To become catalyst to set world recognition of the
                          beautiful heritage of the Orang Asli in Peninsular
                          Malaysia.
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Collapses;
