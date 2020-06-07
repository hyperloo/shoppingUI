import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadProduct } from "../../actions/ProductActions";
import { loadSellers } from "../../actions/SellerActions";
import { clearErrors } from "../../actions/ErrorActions";

import { loader as Loader } from "../images/loader";
import Nav from "./Nav";
import SubNav from "./SubNav";
import SellerList from "./SellerList";

import "./Seller.scss";

class SellersPage extends Component {
  static propTypes = {
    product: PropTypes.object,
    sellers: PropTypes.array,
    error: PropTypes.object.isRequired,
    ploading: PropTypes.bool,
    sloading: PropTypes.bool,
    loadProduct: PropTypes.func.isRequired,
    loadSellers: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadProduct();
    this.props.loadSellers();
  }

  render() {
    const { history, product, sellers, ploading, sloading, error } = this.props;
    return (
      <div className="sellerPage">
        <>
          <Nav />
          {!(sellers && product) ? (
            <div
              style={{
                height: "80%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Loader />
            </div>
          ) : (
            <>
              <SubNav
                name={product.productName}
                history={history}
                photo={product.productResources[0].resourceURL}
              />
              <SellerList sellers={sellers} />
            </>
          )}
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product.product,
  sellers: state.seller.sellers,
  sloading: state.seller.isLoading,
  ploading: state.product.isLoading,
  error: state.error,
});

export default connect(mapStateToProps, {
  loadSellers,
  clearErrors,
  loadProduct,
})(SellersPage);
