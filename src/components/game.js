import React from "react";
import PropTypes from "prop-types";

//using enzymes for testing
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//prop validation: npm install prop-types

function Sum(props) {
  return (
    <h1>
      {props.a} + {PropTypes.b} = {props.a + props.b}
    </h1>
  );
}
Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

//testing component
function Hello(props) {
  return <h1>Hello at {props.now}</h1>;
}

const moment = new Date(1588946400000);
describe("when testing directly", () => {
  let result;
  beforeAll(() => {
    result = Hello({ now: moment.toISOString() });
  });
  it("return a value", () => {
    expect(result).not.toBeNull();
  });
  it("it a h1", () => {
    expect(result.type).toBe("h1");
  });
  it("has children", () => {
    expect(result.props.children).toBeTruthy();
  });
});

//testing component with react dom
describe("When testing with ReactDOM", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello now={moment.toISOString()} />, div);
  });
});

//enzyme testing
Enzyme.configure({ adapter: new Adapter() });
describe("When testing with enzyme", () => {
  it("renders a h1", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.find("h1").length).toBe(1);
  });
  it("contains Hello at 2020-05-08T14:00:00.000z", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.contains(<h1>Hello at 2020-05-08T14:00:00.000z</h1>)).toBe(
      true
    );
  });
});

function Game() {
  return <div></div>;
}

export default Game;
