import React from 'react';
import {Link} from 'react-router';
import MainContainer from './MainContainer.jsx';

export default function Home() {
  return (
    <MainContainer>
      <h1>
        Github Battles
      </h1>
      <p className="lead">
        Some fancy motto</p>
      <Link to="/playerOne">
        <button className="btn btn-lg btn-success">Get Started</button>
      </Link>
    </MainContainer>
  );
}
