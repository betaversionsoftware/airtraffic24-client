import React from 'react';
import TextField from 'material-ui/TextField';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textStyle = {
      width: '100%'
    }

    return (
      <div>
          <TextField
              id="data_source"
              label="Data Source"
              value={this.props.dataSource}
              onChange={(event) => this.props.onSourceChange(event.target.value)}
              margin="normal"
              style={textStyle} />
          <TextField
              id="home_lat"
              label="Home Lat"
              value={this.props.homeLat}
              onChange={event => this.setState({ homeLat: event.target.value })}
              margin="normal"
              style={textStyle} />
          <TextField
              id="home_lng"
              label="Home Lng"
              value={this.props.homeLng}
              onChange={event => this.setState({ homeLng: event.target.value })}
              margin="normal"
              style={textStyle} />
      </div>
    );
  }
}
