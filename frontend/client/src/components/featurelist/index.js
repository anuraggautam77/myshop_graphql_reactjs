import React, { Component, Fragment } from 'react';
import "../../style/scss/featureList/index.scss"


class FeatureList extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }


    render() {
        return (
            <Fragment>
                <div className="section  feature_component">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center">
                                    <div className="section_subtitle">only the best</div>
                                    <div className="section_title">feature prices</div>
                                </div>
                            </div>
                        </div>
                        <div className="row feature_container">
                            <div className="col-lg-3 feature_col">
                                <div className="feature_item">
                                    <div className="feature_image">
                                        <img src="img/promo/promo_1.jpg" alt="" />
                                        <div className="feature_content feature_content_1">
                                            <div className="feature_title">-30% off</div>
                                            <div className="feature_subtitle">on all bags</div>
                                        </div>
                                    </div>
                                    <div className="feature_link"><a href="#">Shop Now</a></div>
                                </div>
                            </div>

                            <div className="col-lg-3 feature_col">
                                <div className="feature_item">
                                    <div className="feature_image">
                                        <img src="img/promo/promo_2.jpg" alt="" />
                                        <div className="feature_content feature_content_2">
                                            <div className="feature_title">-30% off</div>
                                            <div className="feature_subtitle">coats & jackets</div>
                                        </div>
                                    </div>
                                    <div className="feature_link"><a href="#">Shop Now</a></div>
                                </div>
                            </div>

                            <div className="col-lg-3 feature_col">
                                <div className="feature_item">
                                    <div className="feature_image">
                                        <img src="img/promo/promo_3.jpg" alt="" />
                                        <div className="feature_content feature_content_3">
                                            <div className="feature_title">-25% off</div>
                                            <div className="feature_subtitle">on Sandals</div>
                                        </div>
                                    </div>
                                    <div className="feature_link"><a href="#">Shop Now</a></div>
                                </div>
                            </div>
                            <div className="col-lg-3 feature_col">
                                <div className="feature_item">
                                    <div className="feature_image">
                                        <img src="img/promo/promo_2.jpg" alt="" />
                                        <div className="feature_content feature_content_2">
                                            <div className="feature_title">-30% off</div>
                                            <div className="feature_subtitle">coats & jackets</div>
                                        </div>
                                    </div>
                                    <div className="feature_link"><a href="#">Shop Now</a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default FeatureList;
