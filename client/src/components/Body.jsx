import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Upload from './Upload.jsx';
import About from './About.jsx';
import Chart from './Chart.jsx';
import Dashboard from './Dashboard.jsx';
import MachineLearning from './MachineLearning.jsx';
import DataTypes from './DataTypes.jsx';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      chartType: 'line'
    }
  }

  componentDidUpdate() {
    // console.log(typeof this.state.data);
    // console.log(this.state.data);
  }

  updateState(key, chartType) {
    let context = this;
    return (value, charttype, cb) => {
      // console.log(value);
      context.setState({
        [key]: value,
        [chartType]: charttype
      }, cb);
    }
  }

  render() {
    return (

      <Switch>
        <Route
          exact path='/'
          component={ Home }
        />

        <Route
          path='/upload'
          render={ () => {
            return (<Upload updateData={this.updateState('data', 'chartType')} data={this.state.data} />)
          } }
        />

        <Route path='/machinelearning'
          component={ MachineLearning }
        />

        <Route path='/about'
          component={ About }
        />

        <Route path='/chart'
          render={ () => {
            return (<Chart data={this.state.data} charttype={this.state.chartType}/>)
          } }
        />

        <Route path='/dashboard'
          component={ Dashboard }
        />

        <Route path='/datatypes'
          component={ DataTypes }
        />

      </Switch>
    );
  }
}

export default Body;