import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/Menu';

class PageInfo extends Component {


    render() {
        return (
            <>
                <Menu /> 
                
            </>

        );
    }
}

export default withRouter(PageInfo);