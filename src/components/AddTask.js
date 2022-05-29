import React from 'react'

import {Button, Form, ListGroup, Badge, Row, Col, CloseButton} from 'react-bootstrap'

import { connect } from 'react-redux'
import { initial_new_task,
    add_new_task,
    clear_new_task, } from '../app/store'

import axios from 'axios'

// statiuc variable 
const URL = "https://kvktran.pythonanywhere.com/"

const styles = {
    button: {
        marginBottom: 10,
        marginRight: 10,
    }, 
    badge: {
        marginRight: 5,
    }
}

class AddTask extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            status: "not added",
            color: "warning",
            tasks: [],
            newTask: {
                detail: "",
                checked: false,
            },
        }
    }

    handleChange = (e) => {
        let task = this.state.newTask
        task.detail = e.target.value

        this.setState({
            newTask: task,
        })
    } 

    showTasks = () => {
        console.log(this.props.newTasks)
    }

    addTask = () => {
        let newTasks = this.state.tasks

        if (this.state.newTask.detail !== "") {
            newTasks.push(this.state.newTask)
        } 
        

        this.setState({
            tasks: newTasks,
            newTask: {
                detail: "",
                checked: false,
            }
        })
    }

    addAllTasks = () => {
        for (let i = 0; i < this.state.tasks.length; i++) {
            axios.post(URL + "tasks/", this.state.tasks[i])
            .then(res => {
                this.props.add_new_task(res.data)
            })
        }

        // clear everything so far
        this.setState({
            status: "added",
            color: "success",
            newTask: {
                detail: "",
                checked: false,
            },
        })
    }



    render() {
        let taskList = []

        if (this.state.tasks.length === 0) {
            taskList = (
                <ListGroup.Item>No task have been added here</ListGroup.Item>
            )
        } else {
            taskList = this.state.tasks.map((task, index) => {
                return (
                    <ListGroup.Item key={index}>
                        <Row >
                            <Col>{task.detail}</Col> 
                            <Col>
                                <Badge bg={this.state.color} style={styles.badge}>{this.state.status}</Badge>
                                <CloseButton />
                            </Col>    
                        </Row>
                    </ListGroup.Item>
                )
            })
        }

        return (
            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>New Task</Form.Label>
                    <Form.Control type="text" placeholder="Detail" name="detail"
                        onChange={this.handleChange} value={this.state.newTask.detail}
                    />
                    <Form.Text className="text-muted">
                        You can add your new task here
                    </Form.Text>
                </Form.Group>
                {/* <Button variant="primary" style={styles.button} onClick={this.showTasks}>
                    Show Task
                </Button> */}
                <Button variant="primary" style={styles.button} onClick={this.addTask}>
                    Add Task
                </Button>
                <Button variant="primary" style={styles.button} onClick={this.addAllTasks}> 
                    Save All Tasks to Event
                </Button>
                <ListGroup variant="flush" style={{marginBottom: 20}}>
                    {taskList}
                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newTasks: state.newTasks.newTasks,
    }
}

const mapDispatchToProps = () => {
    return {
        initial_new_task,
        add_new_task,
        clear_new_task,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(AddTask)