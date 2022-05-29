import React from 'react';

import {Container,} from 'react-bootstrap'
import Planner from './Planner'

// const styles = {
//     home: {
//         padding: 10,
//         border: "5px solid",
//     }
// }

class Home extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Planner />
                </Container>
            </div>
        )
    }
}

export default Home