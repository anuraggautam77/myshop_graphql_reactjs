import React, { Component, Fragment } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import HeaderComponent from '../components/header/header';
import SubNavComponent from '../components/sidenav/sidenav';
import AppFooter from '../components/footer/index';
import ProfileComponent from '../components/account/profile';



class ProfilePage extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <HeaderComponent />
                <div className="body-container">
                    <div className="left-panel panel-border">
                        <SubNavComponent />
                    </div>
                    <div className="right-panel">
                        <ProfileComponent />
                    </div>
                </div>
                <AppFooter />
                <ScrollUpButton style={ { width: 50 } } ToggledStyle={ { right: 10 } } />
            </Fragment>
        );
    }
}




export default ProfilePage;