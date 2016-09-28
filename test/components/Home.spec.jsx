import { shallow } from 'enzyme';
import React from 'react';
import Home  from '../../app/components/Home.jsx';
import {expect} from 'chai';

describe('<Home/>', () => {
  let HomeWrapper;
  beforeEach(()=> {
    HomeWrapper = shallow(<Home/>);
  });

  it('should render without exploding', ( )=> {
    expect(HomeWrapper.length).to.equal(1);
  });

  it('should render MainContainer component', () => {
    expect(HomeWrapper.find('MainContainer').length).to.equal(1);
  });

  it('should have all the expected elements', () => {
    const elements = [
      <h1> Github Battles </h1>,
      <p className="lead"> Some fancy motto</p>
    ];
    expect(HomeWrapper.contains(elements)).to.equal(true);
  });

  it('should contain a link', ()=> {
    const LinkWrapper =HomeWrapper.find('Link');
    expect(LinkWrapper.length).to.equal(1);
    expect(
      LinkWrapper.contains(
        <button className="btn btn-lg btn-success">Get Started</button>
      )
    );

    expect(LinkWrapper.prop('to')).to.equal('/playerOne');

  });

});
