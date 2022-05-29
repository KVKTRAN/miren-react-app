import * as React from "react";
import axios from 'axios'
import { connect } from 'react-redux'

import Home from "./components/Home"

import { initial_event, initial_task } from './app/store'


const styles = {
  main: {
    margin: 0,
    backgroundColor: "white",
    minHeight: 2000,
  },
  outlet: {
    paddingTop: 100,
  }
}

const URL = "https://kvktran.pythonanywhere.com/"

class App extends React.Component {
  componentDidMount() {
    axios.get(URL + "events/")
    .then((res) => {
        this.props.initial_event(res.data)
    })

    axios.get(URL + "tasks/")
    .then((res) => {
        this.props.initial_task(res.data)
    })
  }

  render() {
    return (
      <div style={styles.main}>
        <Home />
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
      initial_event,
      initial_task,
  }
}

export default connect(null, mapDispatchToProps())(App)

// function Layout() {
//   return (
//     <div>
//       <Header />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }