import React from 'react';
import { shallow } from "enzyme";
import PageNotFound from '../../components/PageNotFound';


test(
  "should render 404 page correctly",
  () => {
    const wrapper = shallow(<PageNotFound />)
    expect(wrapper).toMatchSnapshot()
  }
)