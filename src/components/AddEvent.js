import React from 'react'
import axios from 'axios'

import {Button, Modal, Form, Row, Col} from 'react-bootstrap'

import AddTask from './AddTask'

import { connect } from 'react-redux'
import { add_event, add_task, update_event_task, initial_new_task, add_new_task, clear_new_task } from '../app/store'


// static variables
const URL = "https://kvktran.pythonanywhere.com/"

const styles = {
    button: {
        marginBottom: 10,
        marginRight: 10,
    },
    bt: {marginRight: 10,}
}

// global functions
function getHour(time) {
    let hour = time.slice(0, 2)

    return parseInt(hour)
}

function getMinute(time) {
    let minute = time.slice(3)

    return parseInt(minute)
}

// child components

// class AddEvent 
class AddEvent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            name: "",
            description: "",
            time: "00:00",
            date: "",
        }
    }

    handleShow = () => {
        this.setState({
            show: true,
        })
    }

    handleClose = () => {
        this.setState({
            show: false,
        })
    }

    showEvent = () => {
        console.log(this.props.events)
        console.log(this.props.newTasks)
    }

    handleChange = (e) => {
        this.setState((state) => {
            state[e.target.name] = e.target.value

            return state
        })
    } 

    handleSubmit = (e) => {
        const hour = getHour(this.state.time)
        const minute = getMinute(this.state.time)

        let taskId = this.props.newTasks.map((task) => {
            return task.id
        })

        const data = {
            name: this.state.name,
            description: this.state.description,
            planner: 'example',
            hour: hour,
            minute: minute,
            date: this.state.date,
            tasks: taskId,
        }

        axios.post(URL + "events/", data)
        .then(res => {
            let event = res.data
            event.tasks = this.props.newTasks

            this.props.add_event(event)
        })

        this.setState({
            show: false,
            name: "",
            description: "",
            time: "00:00",
            date: "",
        })
    }

    render() {
        return(
            <div>
                <Button variant="primary" onClick={this.showEvent} style={styles.button}>
                    Show Event
                </Button>
                <Button variant="primary" onClick={this.handleShow} style={styles.button}>
                    Add Event
                </Button>

                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Event Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control as="textarea" placeholder="Description" name="description" onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="time" placeholder="Time" name="time" onChange={this.handleChange} value={this.state.time}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="date" placeholder="Date" name="date" onChange={this.handleChange} value={this.state.date}/>
                                </Form.Group>
                                <br />
                                <Button variant="primary" type="submit" style={styles.bt}>
                                    Save Event
                                </Button>
                            </Form> 
                            </Col>
                            <Col>
                                <AddTask />
                            </Col>
                        </Row>
                    
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events.events,
        newTasks: state.newTasks.newTasks,
    }
}

const mapDispatchToProps = () => {
    return {
        add_event,
        add_task,
        update_event_task,
        initial_new_task,
        add_new_task,
        clear_new_task,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(AddEvent)