import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/Menu';


class PageList extends Component {


    render() {
        return (
            <>
                <Menu />
                
            </>

        );
    }
}

export default withRouter(PageList);