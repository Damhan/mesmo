import React, {component} from 'react';
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
        this.setState({[e.target.email] : e.target.value , [e.target.password] : e.target.password})
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
                isOpen={this.state.modal}
                toggle={this.toggle}>

                <Modal.Header 
                    toggle={this.toggle}>
                    Add to Users

                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <label for="email">email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholders="Add User Item"
                                onChange={this.onChange}/>

                            <input 
                                type="text"
                                name="pass"
                                id="pass"
                                placeholders="password"
                                onChange={this.onChange}/>
                        </FormGroup>
                    </Form>
                </Modal.Body>
            </Modal>


            </div>
        )
    }
}


export default connect()(signupModal)