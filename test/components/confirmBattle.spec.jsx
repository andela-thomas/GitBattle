import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import data from '../mocks/data.json';
import ConfirmBattle from '../../app/components/confirmBattle.jsx';

describe('<ConfirmBattle/>', () => {

  const props = {
    isLoading: false,
    onInitiateBattle: () => {},
    playersInfo: data
  };

  let ConfirmBattleWrapper;
  context('When the component is shallow rendered', () => {
    before(() => {
      ConfirmBattleWrapper = shallow(< ConfirmBattle isLoading = {
        props.isLoading
      }
      onInitiateBattle = {
        props.onInitiateBattle
      }
      playersInfo = {
        props.playersInfo
      } />);
    });

    it('should render  without exploding', () => {
      expect(ConfirmBattleWrapper.length)
        .to
        .equal(1);
    });

    it('should render Loading Component', () => {
      const BattleWrapper = shallow(<ConfirmBattle isLoading={true} onInitiateBattle={props.onInitiateBattle} playersInfo={[]}/>);
      expect(BattleWrapper.find('Loading').length)
        .to
        .equal(1);
    });

    it('Should contain <h1>Confirm Players</h1>', () => {
      expect(ConfirmBattleWrapper.contains(
          <h1>Confirm Players</h1>
        ))
        .to
        .equal(true);
    });

    it('should render MainContainer', () => {
      expect(ConfirmBattleWrapper.find('MainContainer').length)
        .to
        .equal(1);
    });

    it('should render UserDetailsWrapper', () => {
      expect(ConfirmBattleWrapper.find('UserDetailsWrapper').length)
        .to
        .equal(2);
    });

    it('should render UserDetails', () => {
      expect(ConfirmBattleWrapper.find('UserDetails').length)
        .to
        .equal(2);
    });

    it('should Have a link to playerOne', () => {
      expect(ConfirmBattleWrapper.find('Link').prop('to'))
        .to
        .equal('/playerOne');
    });

    it('Should have the a div with class col-sm-8 col-sm-offset-2', () => {
      expect(ConfirmBattleWrapper.find('div.col-sm-8.col-sm-offset-2').length)
        .to
        .equal(2);
    });

    it('should have a  div with class of col-sm-12', () => {
      expect(ConfirmBattleWrapper.find('div.col-sm-12').length)
        .to
        .equal(2);
    });

    it('it should have a link with a button', () => {
      const LinkWrapper = ConfirmBattleWrapper.find('Link');
      const button = (
        <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
      );
      expect(LinkWrapper.length)
        .to
        .equal(1);
      expect(LinkWrapper.contains(button))
        .to
        .equal(true);
      expect(LinkWrapper.prop('to'))
        .to
        .equal('/playerOne');
    });
  });

  context('When the Component is mounted', () => {

    let ConfirmBattleWrapper;

    before(() => {
      ConfirmBattleWrapper = mount(< ConfirmBattle isLoading = {
        false
      }
      onInitiateBattle = {
        props.onInitiateBattle
      }
      playersInfo = {
        data
      } />);
    });

    it('Should have all the props defined', () => {
      const props = ConfirmBattleWrapper.props();
      expect(props.playersInfo)
        .to
        .deep
        .equal(data);
      expect(props.isLoading)
        .to
        .equal(false);
    });

  });
});
