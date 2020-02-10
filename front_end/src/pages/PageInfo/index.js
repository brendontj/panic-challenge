import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/Menu';
import CandidateInfo from '../../components/CandidateInfo';


class PageInfo extends Component {


    render() {
        return (
            <>
                <Menu /> 
                <CandidateInfo {...this.props} />
            </>

        );
    }
}

export default withRouter(PageInfo);