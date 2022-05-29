// import third party library
import React from 'react'

import {Col, Row} from 'react-bootstrap'

// import redux
import { connect } from 'react-redux'
import { initial_event, add_event } from '../app/store'

// import other components
import Event from './Event'
import AddEvent from './AddEvent'


// static variables
// const URL = "https://kvktran.pythonanywhere.com/"

const today = new Date()

const styles = {
    col: {
        border: "1px solid",
        padding: 7,
        marginBottom: "-1px",
    }, 
    cardHeader: {
        padding: 5,
        backgroundColor: "#FCE3DE"
    },
    cardContent: {
        padding: 5,
    },
    li: {
        display: "inline-block",
    },
    ul: {
        listStyleType: "none",
        padding: 0,
    }
}

// global function
function getWeek(fromDate) {
    var sunday = new Date(fromDate.setDate(fromDate.getDate()-fromDate.getDay()))
       ,result = [new Date(sunday)];
    while (sunday.setDate(sunday.getDate()+1) && sunday.getDay()!==0) {
     result.push(new Date(sunday));
    }
    return result;
}

const week = getWeek(today)

// child components

function WeekList() {
    const thisWeek = week.map((date, index) => (
        <Col key={index} style={styles.col}>
            {date.toDateString()}
        </Col>
    ))

    return (
        <Row md={{cols: 7}}>
            {thisWeek}       
        </Row>
    )
}

function EventList(props) {
    const events = props.events

    const EventList = week.map((date, index) => (
        <Col key={index} style={styles.col}>
            {events.filter(function(event) {
                const newDate = new Date(event.date.replaceAll("-", "/"))

                return newDate.toDateString() === date.toDateString()
            }).map((event, index) => (
                <Event key={index} event={event}/>
            ))}
        </Col>
    ))

    return (
        <Row md={{cols: 7}}>
            {EventList}
        </Row>
    )
}

/////////////////////////////////////
// new planner class
class Planner extends React.Component {
    // show the events data in the props
    showEvent = () => {
        console.log(this.props.events)
    }

    addEvent = () => {
        this.props.update_event_task({
            eventId: 5,
            taskId: 4,
        })
    }

    render() {
        return (
            <div>
                <ul style={styles.ul}>
                    <li style={styles.li}><AddEvent /></li>
                </ul>
                <Row style={styles.col}>{week[0].toDateString() + " - " + week[week.length - 1].toDateString()}</Row>
                <WeekList />
                <EventList events={this.props.events}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events.events,
        tasks: state.tasks.tasks,
    }
}

const mapDispatchToProps = () => {
    return {
        initial_event,
        add_event,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Planner)