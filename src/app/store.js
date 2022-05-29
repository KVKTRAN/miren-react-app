import { createSlice, configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value = 100
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: []
  },
  reducers: {
    initial_task: (state, action) => {
      if (state.tasks.length === 0) {
        state.tasks = action.payload
      }
    },
    add_task: (state, action) => {
      state.tasks.push(action.payload)
    },
    update_task: (state, action) => {
      let newTasks = state.tasks.map(task => {
        if (task.id === action.payload.taskId) {
          task.checked = !task.checked
        }
        return task
      })

      state.tasks = newTasks
    }
  }
})

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        events: []
    },
    reducers: {
        initial_event: (state, action) => {
            if (state.events.length === 0) {
              state.events = action.payload
            }
        },
        add_event: (state, action) => {
            state.events.push(action.payload)
        },
        update_event_task: (state, action) => {
            let newState = state.events.map(event => {
                if (event.id === action.payload.eventId) {
                    event.tasks.map(task => {
                        if (task.id === action.payload.taskId) {
                            task.checked = !task.checked
                        }
                        return task
                    })
                }
                return event
            })

            state.events = newState
        }
    }
})

const newTaskSlice = createSlice({
  name: 'new task',
  initialState: {
    newTasks: []
  },
  reducers: {
    initial_new_task: (state, action) => {
      if (state.newTasks.length === 0) {
        state.newTasks = action.payload
      }
    },
    add_new_task: (state, action) => {
      state.newTasks.push(action.payload)
    },
    clear_new_task: (state) => {
      state.newTasks = []
    }
  }
})

// combined all reducers
const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    events: eventSlice.reducer,
    tasks: taskSlice.reducer,
    newTasks: newTaskSlice.reducer,
})

// export reducer action
export const { incremented, decremented } = counterSlice.actions
export const { initial_event, add_event, update_event_task } = eventSlice.actions
export const { initial_task, update_task, add_task} = taskSlice.actions
export const { initial_new_task, add_new_task, clear_new_task} = newTaskSlice.actions

// combined all reducers
const store = configureStore({
  reducer: rootReducer
})


// export the store
export default store