import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import axios from 'axios';
import Button from 'material-ui/Button';
import FlightsTable from './FlightsTable.jsx';
import Settings from './Settings.jsx';
import _ from 'underscore';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: [],
            flight: null,
            dataSource: null,
            homeLat: null,
            homeLng: null
        };
    }

    componentWillMount() {
        this.setState({dataSource: `https://api.airtraffic24.com/current`});
        this.setState({homeLat: -32.2663});
        this.setState({homeLng: 115.8230808});
    }

    componentDidMount() {
        this.fetchData();
        setInterval(() => {
            this.fetchData();
        }, 1000);
    }

    handleDataSource(dataSource) {
        this.setState({dataSource: dataSource});
    }

    fetchData () {
        axios.get(this.state.dataSource)
             .then(results => {
                 this.setState({flights: _.sortBy(results.data, 'callsign')});
             })
             .catch(error => {
                 this.setState({flights: []});
             });
    }

    render() {
        const textStyle = {
            width: '100%'
        }
        return (
            <div>
              <Settings
                dataSource={this.state.dataSource}
                homeLat={this.state.homeLat}
                homeLng={this.state.homeLng}
                onSourceChange={(source) => this.handleDataSource(source)} />
              <FlightsTable
                home={ {lat: this.state.homeLat, lng: this.state.homeLng} }
                flights={this.state.flights}
                columns={_.keys(this.state.flights[0])} />
            </div>
        );
    }
}
