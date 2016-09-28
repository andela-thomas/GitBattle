import React, {Component, PropTypes} from 'react';
import Prompt from '../components/Prompt.jsx';

export default class PromptContainer extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      buttonMessage: 'Continue'
    };

    this.handleUpdateUser = this
      .handleUpdateUser
      .bind(this);
    this.handleSubmitUser = this
      .handleSubmitUser
      .bind(this);
  }

  handleUpdateUser(e) {
    this.setState({username: e.target.value});
  }

  handleSubmitUser(e) {
    e.preventDefault();

    var username = this.state.username;
    this.setState({username: ''});

    if (this.props.routeParams.playerOne) {

      return this
        .context
        .router
        .push({
          pathname: '/battle',
          query: {
            playerOne: this.props.routeParams.playerOne,
            playerTwo: this.state.username
          }
        });
    }

    this.setState({buttonMessage: 'Battle'});

    this
      .context
      .router
      .push('/playerTwo/' + this.state.username);

  }

  render() {
    return (<Prompt onSubmitUser={this.handleSubmitUser} onUpdateUser={this.handleUpdateUser} header={this.props.route.header} username={this.state.username} buttonMessage={this.state.buttonMessage}/>);
  }
}
