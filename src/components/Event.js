import React from 'react'

import {OverlayTrigger, Card, Popover, ProgressBar, Form} from 'react-bootstrap'

import { connect } from 'react-redux'
import { initial_task, update_event_task } from '../app/store'

/// example eventId = 5, taskId = 4

// static variable 
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
}


// global function
function getTimeString(time) {
    if (time < 10) {
        return "0" + time.toString()
    }

    return time.toString()
}

function checkTask(task) {
    return task.checked === true
}

function countTaskDone(tasks) {
    const taskDone = tasks.filter(checkTask)

    return taskDone.length
}

// child component


// class events 
class Event extends React.Component {
    constructor(props) {
        super(props)

        const taskDone = countTaskDone(props.event.tasks)
        const count = props.event.tasks.length

        let checkedArray = props.event.tasks.map((task) => {
            return task.checked
        })
        

        this.state = {
            taskDone: taskDone,
            count: count,
            checkedArray: checkedArray,
        }
    }

    render() {
        const TaskList = this.props.event.tasks.map((task, index) => (
            <Form.Check 
                key={index}
                label={task.detail} 
                type="checkbox"
                value={task.id}
                checked={task.checked}
                onChange={() => {
                    let newCheckedArray = this.state.checkedArray
                    let newTaskDone = this.state.taskDone
                    newCheckedArray[index] = !newCheckedArray[index]

                    if (newCheckedArray[index] === true) {
                        newTaskDone += 1
                    } else {
                        newTaskDone -= 1
                    }

                    

                    this.props.update_event_task({
                        eventId: this.props.event.id,
                        taskId: task.id,
                    })

                    this.setState({
                        taskDone: newTaskDone,
                        checkedArray: newCheckedArray,
                    })
                }}
            />
        )) 

        const popover = (
            <Popover id="popover-basic">
              <Popover.Header as="h5">{this.props.event.name}</Popover.Header>
              <Popover.Body>
                <Form>
                    <Form.Group>
                        {TaskList}
                    </Form.Group>
                </Form>
                <ProgressBar 
                    now={(this.state.taskDone / this.state.count) * 100} 
                    label={this.state.taskDone + "/" + this.state.count} 
                    style={{marginTop: 10}}
                />
              </Popover.Body>
            </Popover>
        ); 

        

        return (
            <div style={{marginBottom: 10}}>
                <OverlayTrigger trigger={['click']} placement="right" overlay={popover}>
                <Card border="secondary">
                    <Card.Header as="h6" style={styles.cardHeader}>{this.props.event.name}</Card.Header>
                    <Card.Body style={styles.cardContent}>
                        <Card.Text >
                            {this.props.event.description}
                        </Card.Text>
                        <Card.Text >
                            Time: {getTimeString(this.props.event.hour)} : {getTimeString(this.props.event.minute)}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </OverlayTrigger>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    return {
        initial_task,
        update_event_task,
    }
}

export default connect(null, mapDispatchToProps())(Event)