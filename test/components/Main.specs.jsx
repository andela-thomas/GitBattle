import { shallow } from 'enzyme';
import React from 'react';
import Main from '../../app/components/Main.jsx';
import { expect } from 'chai';

describe('<Main/>', () => {
  context('When the component is shallow rendered', () => {

    let MainWrapper;
    let props = { pathname: "/jsref/prop_loc_pathname.asp" };

    before(() => {
      MainWrapper = shallow( < Main location = { props }
        />);
    });

    it('Should render without exploading', () => {
    console.log(MainWrapper);
      // expect(MainWrapper.length).to.equal(1);
    });
  });
});
