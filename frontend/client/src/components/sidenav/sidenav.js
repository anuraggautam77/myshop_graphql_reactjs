import React, { Component } from 'react';
import "../../style/scss/sidenav/index.scss"
import { Link } from "react-router-dom";

import { getAccessToken, resetToken } from '../../common/utils';



class SubNavComponent extends Component {
    constructor (props) {
        super(props);
        this.logountHandler = this.logountHandler.bind(this);
    }

    protectedCtas() {
        if (getAccessToken() !== undefined) {
            return <a className="btn btn-secondary" onClick={ this.logountHandler } href="#">Logout </a>
        } else {
            return <Link className="btn btn-primary" to="/Login">LogIn </Link>
        }
    }

    protectedLinsting() {
        if (getAccessToken() !== undefined) {
            return (<li>
                <Link to="/history">Order History </Link>
            </li>)
        } else {
            return false;
        }

    }


    logountHandler() {
        resetToken()
    }


    render() {
        return (
            <div className="side-nav-container">


                <div className="row">
                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12">
                        <div className="user-avatar-info">
                            <div className="user-avatar-name">
                                <h2 className="mb-1">Hi, Anurag!!</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-default" role="navigation">
                    <div className="side-menu">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile </Link>
                            </li>
                            { this.protectedLinsting() }

                        </ul>
                    </div>

                    <div className="side-menu-protected">

                        { this.protectedCtas() }

                    </div>

                </nav>
            </div>
        );
    }
}

export default SubNavComponent;
