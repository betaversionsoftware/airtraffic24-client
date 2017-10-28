import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import haversine from 'haversine';

export default class FlightsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        { this.props.columns.map(column =>
                            <TableCell key={column}>{column}</TableCell>
                        )}
                        <TableCell>Distance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { this.props.flights.map(flight =>
                    <TableRow hover key={flight.icao}>
                        { this.props.columns.map(column =>
                            <TableCell key={column}>{flight[column]}</TableCell>
                        )}
                        <TableCell>{haversine({
                            latitude: this.props.home.lat,
                            longitude: this.props.home.lng
                          }, {
                            latitude: flight["lat"],
                            longitude: flight["lng"]
                          }).toFixed(2)}</TableCell>
                    </TableRow>
                )}
                </TableBody>
            </Table>
        );
    }
}
