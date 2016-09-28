import React, {PropTypes} from 'react';
import MainContainer from './MainContainer.jsx';

export default function Prompt(props) {
  return (
    <MainContainer>
      <h1> {props.header}</h1>
       <div className="col-sm-12">
         <form onSubmit={props.onSubmitUser}>
           <div className="form-group">
             <input
              type="text"
              placeholder="Github Username"
              onChange={props.onUpdateUser}
              value={props.username}
              className="form-control"
              required autoFocus/>
           </div>
           <div className="form-group col-sm-4 col-sm-offset-4">
             <button
                className="btn btn-block btn-success"
                type="submit">
               {props.buttonMessage}
             </button>
           </div>
         </form>
      </div>
    </MainContainer>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  buttonMessage:PropTypes.string.isRequired,
  username:PropTypes.string.isRequired
};
