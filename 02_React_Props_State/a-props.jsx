import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = (props) => (
  <div style={styles}>
    <h2> {props.propNumber} </h2>
    <p> {props.propText} </p>
  </div>
);

let myPropNumber = 5;
const myPropText = "hello";

setTimeout( () => {
  render(<App propNumber={myPropNumber++} propText = {myPropText} />, document.getElementById('root'));
},1000)


//Converting the (node component)? from function to class
import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  render () {
    return (
      <div style={styles}>
        <h2> {this.props.propNumber} </h2>
        <p> {this.props.propText} </p>
      </div>
    )
  }
}

let myPropNumber = 5;
const myPropText = "hello";

setInterval( () => {
  render(<App propNumber={myPropNumber++} propText = {myPropText} />, document.getElementById('root'));
},5000)









/* ORIGINAL CODE FROM LECTURE:
import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = (props) => (
  <div style={styles}>
    <h2>{props.count}</h2>
  </div>
);

const App2 = function(props) {
  return (
    <div style={styles}>
      <h2>{props.count}</h2>
    </div>
  )
}
let count = 0

setInterval(
  function() {render(<App2 count={count++} />, document.getElementById('root'))},
  1000
)*/
