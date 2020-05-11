// react test renderer  ==> library to test components rendering.
// snapShot ==>  allow us to track changes in component over time.


import React from 'react';
import { shallow } from "enzyme";
import Header from '../../components/Header';

// test1
test(
  "should render header correctly",
  () => {

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();




    // wrapper is a naming convention
    // const wrapper = shallow(<Header />)
    // expect(wrapper.find('h1').text()).toBe('Expensify')

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // console.log(renderer.getRenderOutput())
  }
)
