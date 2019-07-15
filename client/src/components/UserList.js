import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class UserList extends Component {
    state = {
        users: [
            {id: uuid(), email: 'damhanrichardson@gmail.com'},
            {id: uuid(), email: 'damhansalt@gmail.com'},
            {id: uuid(), email: 'danklootthrowaway@gmail.com'}
        ]
    }

    render() {
        const {users} = this.state
        return(
            <Container>
                <Button 
                    className="btn-dark"
                    style={{marginTop: '2rem'}}
                    onClick={() => {
                        const user = prompt("Enter name")
                        if(user) {
                            this.setState(state=> ({
                                users: [...state.users, {id: uuid(), email:user}]
                            }))
                        }
                    }}
                >Add User</Button>
                <ListGroup>
                    <TransitionGroup className="userList">
                        {users.map(({id, email}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroup>
                                    <Button
                                        className="remove-btn"
                                        variant="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => {
                                                items: state.users.filter(user => user.id != id)
                                            });
                                        }}
                                    >&times;</Button>
                                    {email}
                                    
                                </ListGroup>
                            </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default UserList;