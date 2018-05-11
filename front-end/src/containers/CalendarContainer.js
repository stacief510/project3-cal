import React, {Component} from 'react';
import Calendar from 'react-calendar';
import EventModel from '../models/EventModel';

class CalendarContainer extends Component{
	constructor(props){
		super(props)
        this.state = {
            date: new Date(),
        }
	}

    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }

    onChange = date => this.setState({ date })


}
export default CalendarContainer; 