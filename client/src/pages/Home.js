import React from 'react';
import DateSection from '../components/DateSection';
import ScheduleEvent from '../components/ScheduleEvent';
import CalendarDay from '../components/CalendarDay';
import './Home.scss';
import Popup from '../components/Popup';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { schedule: true, popupActive: false };
    }

    // Pads a date to 2 digits (eg. 1 => '01')
    pad = (num) => {
        if (num < 10) return `0${num}`;
        return `${num}`;
    };

    switchView = () => {
        this.setState({ schedule: !this.state.schedule });
    };

    activePopup = (id) => {
        this.props.history.push(`${window.location.pathname}?id=${id}`);
        this.setState({ popupActive: true, popupId: id });
    };

    closePopup = () => {
        this.props.history.push(`${window.location.pathname}`);
        this.setState({ popupActive: false });
    };

    componentDidMount() {
        // Check querystring to see if a popup is active
        // TODO: Maybe put it into a boolean function?
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (id == undefined || id == null) this.setState({ popupActive: false });
        else this.setState({ popupActive: true, popupId: id });
    }

    render() {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var calendarHeader = [];
        daysOfWeek.forEach((day) => {
            calendarHeader.push(
                <div className="days-of-week" key={day}>
                    {day}
                </div>
            );
        });
        var calendar = [];
        for (let i = 1; i <= 30; i++)
            calendar.push(<CalendarDay day={this.pad(i)} key={'1-' + i} events={[]}></CalendarDay>);
        for (let i = 1; i <= 5; i++)
            calendar.push(<CalendarDay day={this.pad(i)} key={'2-' + i} events={[]}></CalendarDay>);

        return (
            <div className="Home">
                <Popup active={this.state.popupActive} close={this.closePopup} id={this.state.popupId}></Popup>
                <div className="home-top">
                    <div className="dummy"></div>
                    <div className="month-year">November 2020</div>
                    <button className="view-switch" onClick={this.switchView}>
                        {`Switch to ${this.state.schedule ? 'Calendar' : 'Schedule'} View`}
                    </button>
                </div>
                <div className={'schedule-view' + (this.state.schedule ? ' view-active' : '')}>
                    {/* TODO: Replace temp data with GET request from backend */}
                    <DateSection date="Monday 11/9/20"></DateSection>
                    <ScheduleEvent
                        type="event"
                        time="7:00pm - 8:00pm"
                        club="HOPE"
                        description="New Committee GA"
                        onClick={() => {
                            this.activePopup('HOPE');
                        }}></ScheduleEvent>
                    <DateSection date="Wednesday 11/11/20"></DateSection>
                    <ScheduleEvent
                        type="event"
                        time="8:00pm - 9:00pm"
                        club="Eureka!"
                        description="CRT GA + TARC Info"></ScheduleEvent>
                    <ScheduleEvent
                        type="event"
                        time="8:00pm - 9:00pm"
                        club="FACES"
                        description="It's Complex Workshop"></ScheduleEvent>
                    <ScheduleEvent
                        type="event"
                        time="9:00pm - 10:00pm"
                        club="TCS"
                        description="TCS Intro GA"></ScheduleEvent>
                    <DateSection date="Thursday 11/12/20"></DateSection>
                    <ScheduleEvent
                        type="event"
                        time="6:00pm - 7:00pm"
                        club="Active Minds"
                        description="Mind Talk"></ScheduleEvent>
                    <ScheduleEvent
                        type="event"
                        time="8:00pm - 9:00pm"
                        club="CSO USACO"
                        description="How to Pass USACO Bronze"></ScheduleEvent>
                    <DateSection date="Friday 11/13/20"></DateSection>
                    <ScheduleEvent
                        type="event"
                        time="6:00pm - 7:00pm"
                        club="FACES"
                        description="Bills of Fare"></ScheduleEvent>
                    <DateSection date="Saturday 11/14/20"></DateSection>
                    <ScheduleEvent
                        type="event"
                        time="6:00pm - 7:00pm"
                        club="TAS Comp."
                        description="Intro to USABO"></ScheduleEvent>
                    <DateSection date="Sunday 11/15/20"></DateSection>
                    <ScheduleEvent
                        type="event"
                        time="3:00pm - 4:00pm"
                        club="TAS Phyiscs"
                        description="Physics Exam 3 Review"></ScheduleEvent>
                    <ScheduleEvent
                        type="event"
                        time="7:00pm - 9:00pm"
                        club="TAS CS"
                        description="CS Exam 3 Office Hours"></ScheduleEvent>
                    <ScheduleEvent
                        type="signup"
                        time="11:00pm"
                        club="Elm Fork"
                        description="Elm Fork Signups"></ScheduleEvent>
                </div>
                <div className={'calendar-view' + (!this.state.schedule ? ' view-active' : '')}>
                    <div className="calendar">
                        {calendarHeader}
                        {calendar}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
