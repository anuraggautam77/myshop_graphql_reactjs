import React, { Component, Fragment } from 'react';
import { getAllProducts } from "../../gql/product";
import { useQuery } from "@apollo/client";
import "../../style/scss/productlist/index.scss";
import client from '../../apollo';

const ProductList = () => {

    console.log(client);

    function innerinlist() {
        const { loading, error, data } = useQuery(getAllProducts);
        if (loading) return <p>Loading ...</p>;

        let list = null;
        if (data) {
            list = data.products.map((prod, key) => {
                return <div className="col-md-3 col-sm-12 col-12" key={ key }>
                    <div className="product-thumbnail">
                        <div className="product-img-head">
                            <div className="product-img">
                                <img src={ `./img/promo/${prod.image}` } alt="" className="img-fluid" />
                            </div>

                        </div>
                        <div className="product-content">
                            <div className="product-content-head">
                                <h3 className="product-title">{ prod.Name }</h3>
                                <div className="product-price">Price: ${ prod.Price }</div>
                            </div>
                            <div className="product-btn">
                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                <a href="#" className="btn btn-outline-light">Details</a>
                                <a href="#" className="product-wishlist-btn"><i className="fa fa-star"></i></a>
                            </div>
                        </div>
                    </div>
                </div >
            });

        } else {
            list = <div>No Record found</div>
        }
        return list
    }

    return (
        <div className="row">
            <div className=" col-12 dashboard-wrapper product-list">
                <div className="container-fluid dashboard-content ">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12">
                            <div className="page-header">
                                <h2 className="pageheader-title">Product Listing </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        { innerinlist() }
                    </div>
                </div>
            </div >
        </div >
    );


}


export default ProductList;
