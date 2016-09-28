import React, {Component} from 'react';
import Results from '../components/Results.jsx';
import githubHelpers from '../utils/github-helper.jsx';

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      scores: []
    };
  }

  componentDidMount() {
    githubHelpers
      .battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({scores: scores, isLoading: false});
      }.bind(this));
  }

  render() {
    return (<Results isLoading={this.state.isLoading} playersInfo={this.props.location.state.playersInfo} scores={this.state.scores}/>);
  }
}
