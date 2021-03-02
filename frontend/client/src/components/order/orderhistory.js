import React, { Component, Fragment } from 'react';
import { getAllOrder } from "../../gql/product";
import { useQuery } from "@apollo/client";
import "../../style/scss/order/index.scss";

const OrderHistory = () => {

    const STATUS_CLASS = {
        'DELIVERED': 'success',
        'CANCELED': 'danger',
        'RETURNED': 'warning'
    }


    function innerinlist(prods) {

        const list = prods.productlist.map((prod, key) => {
            return <div className="col-md-3 col-sm-12 col-12" key={ key }>
                <div className="product-thumbnail">
                    <div className="product-img-head">
                        <img src={ `./img/promo/${prod.image}` } alt="" className="img-fluid" />
                    </div>
                    <div className="product-content">
                        <div className="product-content-head">
                            <h3 className="product-title">{ prod.Name }</h3>
                            <div className="product-price">${ prod.Price }</div>
                        </div>
                        <div className="product-btn">
                            <a href="#" className="btn btn-outline-light">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        });
        return list
    }


    function outerList() {
        const { loading, error, data } = useQuery(getAllOrder);
        if (loading) return <p>Loading ...</p>;
        console.log(data);
        const list = data.orderhistory.map((prod, key) => {
            return (


                <div className="col-12 p-0 order-list-container" key={ key }>
                    <div className="card">
                        <h6 className="card-header">Order: #{ prod.orderId }</h6>
                        <div className="card-body">
                            <div className="row ">
                                <div className="col-md-8 col-sm-12  p-0">
                                    <div className="row ">
                                        { innerinlist(prod) }
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">

                                    <div className="widget">
                                        <div className="page-header"><h2 className="pageheader-title">Order Summary: #{ prod.orderId } </h2></div>
                                        <div className="summary-block">
                                            <div className="summary-content first-block">
                                                <div className="summary-head">
                                                    <span className={ `btn btn-xs btn-${STATUS_CLASS[ prod.status ]}` }>{ prod.status } </span> on <span>{ prod.orderdelivered }</span>
                                                    <h5 className="summary-title"></h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="summary-block">
                                            <div className="summary-content">
                                                <div className="summary-head">
                                                    <h5 className="summary-title">Shipping Address</h5>
                                                </div>
                                                <div className="summary-price">
                                                    <p className="summary-text">Anurag Gautam , Vill Danrun PO Dharamshala Distt KAngra</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )


        });
        return list
    }





    return (
        <div className="row">
            <div className=" col-12 orderlist-list">
                <div className="container-fluid dashboard-content ">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12">
                            <div className="page-header">
                                <h2 className="pageheader-title">Order History </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row ">

                        { outerList() }

                    </div>
                </div>
            </div>
        </div>
    );

}

export default OrderHistory;


