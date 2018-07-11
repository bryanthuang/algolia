import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import { Input, Segment } from 'semantic-ui-react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      currentValue: 0
    }
  }

  getData(currentValue) {
    console.log('current', currentValue)
    let newData = [];
    for(let i = currentValue; i < currentValue + 25; i++){
      newData.push(i)
    }
    currentValue += 25
    newData = this.state.items.concat(newData)
    this.setState({
      items: newData,
      currentValue: currentValue
    });
  }


  componentDidMount() {

  }

  render () {
    return (
    <div>
      <Segment style={{backgroundColor:'#2C688F'}} >
        <Input fluid placeholder='Search for Restaurants by Name, Cuisine, Location' />
      </Segment>
      <button>Add Items</button>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));