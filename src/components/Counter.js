import React from 'react'
import { connect } from 'react-redux'
import { incremented, decremented, initial_event, add_event, update_task } from '../app/store'

import axios from 'axios'
import {Button } from 'react-bootstrap'

const URL = "https://kvktran.pythonanywhere.com/"

const styles = {
    button: {
        padding: 5,
        margin: 5,
    }
}

class Counter extends React.Component {
    handleIncrement = () => {
        this.props.incremented()
    }

    handleDecrement = () => {
        this.props.decremented()
    }

    toggleEvent = () => {
        console.log(this.props.events)
    }

    addEvent = () => {
        this.props.update_task({
            eventId: 3,
            taskId: 1,
        })

        this.props.update_task({
            eventId: 3,
            taskId: 2,
        })
    }

    componentDidMount() {
        axios.get(URL + "events/")
        .then((res) => {
            this.props.initial_event(res.data)
        })
    }
    
    render() {
        return (
            <div style={{padding: 50,}}>
                <h5>{this.props.count}</h5>
                <p>
                    <Button style={styles.button} onClick={this.handleIncrement}> + </Button>
                    <Button style={styles.button} onClick={this.handleDecrement}> - </Button>
                </p>
                <p>
                    <Button style={styles.button} onClick={this.toggleEvent}> Events </Button>
                    <Button style={styles.button} onClick={this.addEvent}> Add </Button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.value,
        events: state.events.events
    }
}

const mapDispatchToProps = () => {
    return {
        incremented,
        decremented,
        initial_event,
        add_event,
        update_task,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter)