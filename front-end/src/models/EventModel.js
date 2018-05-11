import React, {Component} from 'react';
import axios from 'axios';

class EventModel extends Component {
    static all(){
        let request = axios.get("https://calendar.google.com/calendar/embed?" +
            "src=mscalendarapp%40gmail.com&ctz=America%2FLos_Angeles");
        return request
    }
}

export default EventModel;