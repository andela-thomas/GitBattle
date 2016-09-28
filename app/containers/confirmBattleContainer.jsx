import React, {PropTypes, Component } from 'react';
import ConfirmBattle from '../components/confirmBattle.jsx';
import githubHelpers from '../utils/github-helper.jsx';

export default class ConfirmBattleContainer extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      playersInfo:[]
    };

    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);

  }

  componentDidMount() {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        if(!players) {
          return this.context.router.push({
            pathname:'/'
          });
        }
        return this.setState({
          isLoading:false,
          playersInfo:players
        });
      })
      .catch(error => {
        console.log('Error', error);
      });
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle}
      />
    );
  }
}
