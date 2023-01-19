import React from "react";
import Script from "next/script";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import data from "../data/index.yml";
import HomepageStep from "../components/HomepageStep";

export async function getStaticProps(context) {
  return {
    props: {
      data,
    },
  };
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Only here to re-initialize after a hot reload.
    this.initParticlesJs();
  }

  render() {
    return (
      <div>
        <Script
          src="/particlejs.min.js"
          strategy="afterInteractive"
          onLoad={this.initParticlesJs}
        />
        <header
          id="splash"
          className="py-5 splash position-relative text-white bg-transparent"
        >
          <Container className="pb-5">
            <Row className="mb-5">
              <Col xs={{ span: 10, offset: 1 }}>
                <h1 className="m-0 display-1 text-center">
                  {this.props.data.hero.title}
                </h1>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs={{ span: 4, offset: 4 }}>
                <div className="border border-4 border-primary"></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="h4 text-center">{this.props.data.hero.blurb}</p>
              </Col>
            </Row>
          </Container>
        </header>
        <main>
          <section id="steps" className="py-5 bg-lines slant-start">
            <Container className="py-5">
              <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                  <h2 className="mb-5 display-3 text-center">
                    {this.props.data.steps.title}
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="mb-5 h4 text-center">
                    {this.props.data.steps.blurb}
                  </p>
                </Col>
              </Row>
              <Row className="gy-3">{this.renderSteps()}</Row>
            </Container>
          </section>
          <section
            id="skills"
            className="py-5 bg-hexagons slant-end text-white"
          >
            <Container className="py-5">
              <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                  <h2 className="mb-5 display-3 text-center">
                    {this.props.data.skills.title}
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="mb-5 h4 text-center">
                    {this.props.data.skills.blurb}
                  </p>
                </Col>
              </Row>
              <Row>
                <div className="mb-5 h1 display-1 text-center fw-light">
                  <i className="fab fa-react"></i>
                  <span className="mx-3">+</span>
                  <i className="fab fa-node"></i>
                </div>
              </Row>
              <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                  <Card className="mb-5 shadow border-0 text-center">
                    <Card.Header className="bg-black">
                      {this.props.data.skills.listTitle}
                    </Card.Header>
                    <Card.Body>{this.renderSkills()}</Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg={{ span: 6, offset: 3 }} className="text-center">
                  <p className="h5 text-italic">
                    {this.props.data.skills.aside}
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </div>
    );
  }

  renderSteps = () => {
    return this.props.data.steps.blocks.map((block) => {
      return <HomepageStep key={block.title} data={block} />;
    });
  };

  renderSkills = () => {
    const sortedSkills = Array.from(this.props.data.skills.list);
    sortedSkills.sort();
    return sortedSkills.map((skill) => {
      return (
        <div key={skill} className="badge text-muted fw-normal">
          {skill}
        </div>
      );
    });
  };

  initParticlesJs = () => {
    if (typeof particlesJS === "undefined") {
      return;
    }
    particlesJS.load("splash", "particlesjs-config.json");
  };
}
