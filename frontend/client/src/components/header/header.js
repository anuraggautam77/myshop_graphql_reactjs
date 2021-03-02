import React, { Component } from 'react';
import "../../style/scss/headernav/index.scss"

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header className="b-b">
                <div className="header-content black-bg">
                    <a href="/?home=1" className="logo">
                        <i className="iconfont icon_logo"></i>
                         &nbsp; MyShop
                    </a>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
