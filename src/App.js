import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Scene from "react-parallax-3d";

const Button = styled.button`
    position: absolute;
    top: 90%;
    left: 50%;
    font-size: xx-large;
    border: none;
    padding: 0 20px;
    background-color: #0c0c0ccf;
    color: #fff;
    cursor: pointer;
    transform: translate(-50%, -50%);

    &:hover {
      background-color: black;
    }
`;

class App extends Component {
  state = { scene: 0 };

  handleNextClick = () => {
    this.setState((state) => ({
      scene: state.scene + 1
    }));
  }

  render() {
    const scene = this.state.scene;

    return (
      <Fragment>
        <Scene
          ID={0}
          scene={scene}
          img="/images/background-img.jpg"
          title="ADEL"
          subTitle="JOJO"
        />
        <Scene
          ID={1}
          scene={scene}
          img="/images/background-img2.jpg"
          title="MARC"
          subTitle="MARON"
        />
        <Scene
          ID={2}
          scene={scene}
          img="/images/background-img3.jpg"
          title="LEO"
          subTitle="MESSI"
        />
        <Scene
          ID={3}
          scene={scene}
          img="/images/background-img4.jpg"
          title="BARAK"
          subTitle="OBAMA"
        />
        <Scene
          ID={4}
          scene={scene}
          img="/images/background-img5.jpg"
          title="MOHAMED"
          subTitle="SALAH"
        />
        <Scene
          ID={5}
          scene={scene}
          img="/images/background-img6.jpg"
          title="ERIC"
          subTitle="ELLIOTT"
        />
        <Scene
          ID={6}
          scene={scene}
          img="/images/background-img8.jpg"
          title="KYLE"
          subTitle="SIMPSONE"
        />
        <Scene
          ID={7}
          scene={scene}
          img="/images/background-img9.jpg"
          title="KETY"
          subTitle="PRETTY"
        />
        <Scene
          ID={8}
          scene={scene}
          img="/images/background-img10.jpg"
          title="SUPER"
          subTitle="MAN"
        />
        <Button onClick={this.handleNextClick}>Next</Button>
      </Fragment>
    );
  }
}

export default App;
