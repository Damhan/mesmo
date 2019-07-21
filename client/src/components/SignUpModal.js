import React from 'react';
import {
    Button,
    Modal,
    Form,
    FormGroup,
} from 'react-bootstrap'
import {connect} from 'react-redux';
import {addUser} from '../actions/userActions';

class signupModal extends React.Component {
    state= {
        modal:false,
        email:'',
        password:''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    onSubmit = e => {
        e.preventDefault();
        
        const newUser = {
            email:this.state.email,
            password:this.state.password
        }

        this.props.addUser(newUser)

        this.toggle()
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom:'2rem'}}
                    onClick={this.toggle}>
                    Add User
                </Button>

            <Modal
                show={this.state.modal}
                onHide={this.toggle}
                >
                

                <Modal.Header
                    closeButton>
                    Add to Users

                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <label for="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholders="Add User Item"
                                onChange={this.onChange}/>
                            <label for="password">Password:</label>
                            <input 
                                type="text"
                                name="password"
                                id="password"
                                placeholders="password"
                                onChange={this.onChange}/>
                            <Button
                                color="dark"
                                style={{marginTop:'2rem'}}
                                type="submit"
                                block
                                >Add User</Button>
                        </FormGroup>
                    </Form>
                </Modal.Body>
            </Modal>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    user:state.user
})



export default connect(mapStateToProps, {addUser})(signupModal)
