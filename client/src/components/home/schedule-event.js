import React from 'react';
import { getFormattedTime } from '../../functions/util';
import './schedule-event.scss';

class ScheduleEvent extends React.Component {
    render() {
        return (
            <div className="ScheduleEvent" onClick={this.props.onClick}>
                <p className={'event-type event-type-' + this.props.event.type}></p>
                <p className="event-time">{getFormattedTime(this.props.event)}</p>
                <p className="event-club-name">{this.props.event.club}</p>
                <p className="event-name">{this.props.event.name}</p>
            </div>
        );
    }
}

export default ScheduleEvent;
