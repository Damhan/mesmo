import React, {component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from 'react-boostrap';
import {connect} from 'react-redux';
import {addUser} from '../actions/userActions';

class signupModal extends Component {
    state= {
        modal:false,
        email:'',
        password:''
    }
}

export default connect()(signupModal)