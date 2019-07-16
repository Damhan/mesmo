import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import { getUsers, delUser } from './../actions/userActions';
import PropTypes from 'prop-types';

class UserList extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    onDelClick = (id) => {
        this.props.delUser(id);
    }

    render() {
        const { users } = this.props.user;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="userList">
                        {users.map(({id, email}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        variant="danger"
                                        size="sm"
                                        onClick={this.onDelClick.bind(this,id)}
                                    >&times;</Button>
                                    {email}
                                    
                                </ListGroupItem>
                            </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

UserList.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user:state.user
})

export default connect(mapStateToProps,
     { getUsers, delUser }
     )(UserList);