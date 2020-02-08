import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/Menu';

import CandidateList from '../../components/CandidateList';

class PageList extends Component {


    render() {
        return (
            <>
                <Menu /> 
                <CandidateList />
            </>

        );
    }
}

export default withRouter(PageList);