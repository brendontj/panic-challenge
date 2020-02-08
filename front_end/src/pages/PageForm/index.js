import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/Menu';
import CandidateForm from '../../components/CandidateForm';

class PageForm extends Component {


    render() {
        return (
            <>
                <Menu />
                <CandidateForm />
                
            </>

        );
    }
}

export default withRouter(PageForm);