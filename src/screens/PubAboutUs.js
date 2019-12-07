import React, { Component } from "react";
import {
  Card,
  Button,
  Collapse,
  CardBody,
  Carousel,
  // CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselCaption,
  CardHeader,
  Jumbotron,
  Col,
  Row
} from "reactstrap";

const items = [
  {
    src: "./assets/img/gallery/gjs1.jpg",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: "./assets/img/gallery/gjs2.jpg",
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: "./assets/img/gallery/gjs3.jpg",
    altText: "Slide 3",
    caption: "Slide 3"
  },
  {
    src: "./assets/img/gallery/gjs4.jpg",
    altText: "Slide 3",
    caption: "Slide 3"
  },
  {
    src: "./assets/img/gallery/gjs5.jpg",
    altText: "Slide 3",
    caption: "Slide 3"
  },
  {
    src: "./assets/img/gallery/gjs6.jpg",
    altText: "Slide 3",
    caption: "Slide 3"
  },
  {
    src: "./assets/img/gallery/gjs8.jpg",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      collapse: false,
      accordion: [false, false, false],
      timeout: 300
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.onEnteringAccordion = this.onEnteringAccordion.bind(this);
    this.onEnteredAccordion = this.onEnteredAccordion.bind(this);
    this.onExitingAccordion = this.onExitingAccordion.bind(this);
    this.onExitedAccordion = this.onExitedAccordion.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
  }
  //carousel punya
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  //accordion punya
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
    const { activeIndex } = this.state;

    const slides2 = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption
          // captionText={item.caption}
          // captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl>
            <Card className="card-accent-primary">
              <CardHeader className="text-center">
                <strong>About Us</strong>
              </CardHeader>
              <CardBody>
                <Carousel
                  class="h-50 d-inline-block"
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                  />
                  {slides2}
                </Carousel>
                <Jumbotron fluid>
                  <h1 className=" text-center">
                    Welcome to Jungle School Gombak!
                  </h1>
                  <hr className="my-2" />
                  <p className="lead text-center">
                    Back to Basic! Love Nature, Love Life!
                  </p>
                  <p className="lead text-center">
                    <Button
                      className="btn-outline-success btn-sm"
                      onClick={() => this.toggleAccordion(0)}
                      aria-expanded={this.state.accordion[0]}
                      aria-controls="collapseOne"
                    >
                      Learn More
                    </Button>
                  </p>

                  {/* accordion */}
                  <CardBody>
                    <div id="accordion">
                      <Card className="mb-0">
                        <Button
                          color="primary"
                          className="btn-block text-center m-auto p-auto"
                          onClick={() => this.toggleAccordion(0)}
                          aria-expanded={this.state.accordion[0]}
                          aria-controls="collapseOne"
                        >
                          <h6 className="m-0 p-0">
                            <strong>About Us</strong>
                          </h6>
                        </Button>
                        <Collapse
                          isOpen={this.state.accordion[0]}
                          data-parent="#accordion"
                          id="collapseOne"
                          aria-labelledby="headingOne"
                        >
                          <CardBody style={{ textAlign: "center" }}>
                            <p>
                              JSG is a leadership experiential empowerment
                              program which uses nature i.e. rainforest in
                              Malaysia as a venue. Hosted by Assistant Prof. Dr
                              Norzalifa binti Zainal Abidin from International
                              Islamic University Malaysia (IIUM), with the help
                              of Major (R) Kalam Pie and the talented indigenous
                              'hidden gems' i.e master craftsmen and weavers,
                              and indigenous jungle experts. Jungle school helps
                              to empower the indigenous people in Gombak to
                              share their cultural knowledge and expertise.
                            </p>
                            <p>
                              The programs include survival skills of Orang Asli
                              (Peninsular Malaysia Indigenous People), learning
                              about the use of flora and fauna, the basic skills
                              of food searching and the traditional ways of the
                              Orang Asli hut making, camping, awareness of the
                              rainforest sustainability, law of the jungle,
                              preparing food like the Orang Asli style and tree
                              planting program. 5 levels of survival course will
                              be offered for the public, since the beginning of
                              early 2014.
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
                            <h6 className="m-0 p-0">
                              <strong>Mission</strong>
                            </h6>
                          </Button>
                        </CardHeader>
                        <Collapse
                          isOpen={this.state.accordion[1]}
                          data-parent="#accordion"
                          id="collapseTwo"
                        >
                          <CardBody style={{ textAlign: "center" }}>
                            <p>
                              To educate and motivate the Orang Asli community
                              to empower and share their cultural heritage to
                              the public whilst elevating their income.
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
                            <h6 className="m-0 p-0">
                              <strong>Vision</strong>
                            </h6>
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
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default AboutUs;
