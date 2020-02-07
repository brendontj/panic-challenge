import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/Menu';
import SideBar from '../../components/SideBar';

class PageForm extends Component {


    render() {
        return (
            <>
                <Menu />
                <SideBar />
                
            </>

        );
    }
}

export default withRouter(PageForm);