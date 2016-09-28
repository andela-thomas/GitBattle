import React from 'react';
import { shallow , mount} from 'enzyme';
import Loading  from '../../app/components/Loading.jsx';
import { expect } from 'chai';
import {stub} from 'sinon';

describe('<Loading />', () => {

  context('When the component is shallow rendered', () => {
    it('Should Render without exploding', () => {
      expect(shallow(<Loading />).length).to.equal(1);
    });
  });

  context('When the component is mounted', () => {

    it('Should render with default props', ()=> {
      const LoadingWrapper = mount(<Loading/>);
      expect(LoadingWrapper.props().text).to.equal('Loading');
      expect(LoadingWrapper.props().speed).to.equal(300);
    });

    it('Should render with custom props', ()=> {
      const text = "Loading please wait";
      const speed = 300;
      const LoadingWrapper = mount(<Loading text={text} speed={speed}/>);
      expect(LoadingWrapper.props().text).to.equal(text);
      expect(LoadingWrapper.props().speed).to.equal(300);
    });

    it('calls componentDidMount', () => {
      stub(Loading.prototype, 'componentDidMount');
      const Loadingwrapper = mount(<Loading />);
      expect(Loading.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    it('calls componentWillUnmount', () => {
      stub(Loading.prototype, 'componentWillUnmount');
      const Loadingwrapper = mount(<Loading />);
      Loadingwrapper.unmount();
      expect(Loading.prototype.componentWillUnmount.calledOnce).to.equal(true);
    });
  });
});
