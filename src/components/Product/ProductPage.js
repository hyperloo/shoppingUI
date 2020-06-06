import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadProduct } from "../../actions/ProductActions";
import { clearErrors } from "../../actions/ErrorActions";

import { loader as Loader } from "../images/loader";
import Nav from "./Nav";
import SubNav from "./SubNav";
import ImageSec from "./ImageSec";
import InfoSec from "./InfoSec";
import IconLine from "./IconLine";
import DescBox from "./DescBox";
import ReviewSec from "./ReviewSec";
import SimilarProducts from "./SimilarProducts";
import CouldNot from "./Couldnot";

import "./Product.scss";
// import { Loader } from "semantic-ui-react";

class ProductPage extends Component {
  static propTypes = {
    product: PropTypes.object,
    error: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    loadProduct: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  state = { drop: false };

  componentDidMount() {
    this.props.loadProduct();
  }

  render() {
    const { history, product, loading, error } = this.props;
    console.log(product);
    return (
      <div className="product">
        <Nav />
        <SubNav />
        {!product ? (
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
            <div className="containerDiv">
              <ImageSec image={product.productResources[0].resourceURL} />
              <InfoSec
                features={product.productKeyFeatures}
                name={product.productName}
                variant={product.variants}
              />
            </div>
            <IconLine name={product.sellerName} />
            <DescBox
              specs={product.productSpecification}
              desc={product.productDescription}
            />
            <ReviewSec />
            <SimilarProducts />
            <CouldNot />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product.product,
  loading: state.product.isLoading,
  error: state.error,
});

export default connect(mapStateToProps, { loadProduct, clearErrors })(
  ProductPage
);
