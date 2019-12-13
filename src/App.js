import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-Title">Welcome to Groves IT</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A cloud native serverless site built with React.js/ CI~CD with Git/ AWS CodePipeline/ CodeBuild; IAC with CloudFormation; Content Delivery with CloudFront, backend with Node and DynamoDb
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
