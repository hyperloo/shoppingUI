import axios from "axios";
import { returnErrors, clearErrors } from "./ErrorActions";

import { SELLERS_LOADED, SELLERS_LOADING } from "./Types";

export const loadSellers = () => (dispatch, getState) => {
  dispatch({ type: SELLERS_LOADING });

  axios
    .get("http://35.225.50.138:9091/otherSellers", {
      params: {
        productId: 9,
        variantId: 6,
      },
    })
    .then((res) => {
      dispatch({ type: SELLERS_LOADED, payload: res.data.otherSellerList });
    })
    .catch((err) => {
      const res = {
        errorcode: "000",
        status: "OK",
        message: "Seller's Product Detail found",
        productDetail: {
          sellerId: 12,
          sellerName: "Rajdeep Telecom",
          categoryId: 1,
          subCategoryId: 6,
          productId: 6,
          productName:
            "Apple Macbook Pro Core i7 - (16 GB/256 GB SSD/Mac OS Sierra/2 GB Graphics) MLH32HN/A  (15 inch, SPace Grey, 1.83 kg)",
          productDescription:
            "\r\nThe Vivo Y91i smartphone is here to make your life simpler. Its Halo Fullview Display paves the way for an enhanced viewing experience. Its 13 MP rear camera and the AI-powered 5 MP front camera, ensure that every picture you click is extremely likeable. With the presence of a whopping 4030 mAh battery, this phone will keep you engrossed, even when you are on the go.",
          productSpecification: {
            OS: "Android",
            RAM: "8 GB",
            "Item Weight": "195 g",
            "Product Dimensions": "16.4 x 0.9 x 7.6 cm",
            Batteries: "1 Lithium Polymer batteries required. (included)",
            "Item model number": "CPH1937",
            "Wireless communication technologies": "Bluetooth, WiFi Hotspot",
            "Connectivity technologies":
              "802.11a/b/g/n/ac, WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display",
            "Special features":
              "Dual SIM, GPS, Music Player, Video Player, Built-in GPS, Supports A-GPS, Beidou, Glonass, GALILEO",
            "Display technology":
              "IPS LCD capacitive touchscreen, 16M colors,6.5 inches, 102.0 cm2 (~82.5% screen-to-body ratio)",
            "Other camera features": "8MP",
            "Form Factor": "Touchscreen Phone",
            Weight: "195 Grams",
            Colour: "Space Purple",
            "Battery Power Rating": "5000",
            "In The Box":
              "Handset, USB Cable, Sim Tray Ejecter, Pre-applied Screen Protector and Protective Case, Booklet with Warranty Card and Quick Guide",
          },
          productKeyFeatures: [
            "13MP + 2MP | 8MP Front Camera",
            "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
            "15.75 cm (6.2 inch) HD+ Display",
            "MTK MT6765 Processor",
            "4230 mAh Battery",
          ],
          productResources: [
            {
              resourceType: "image",
              resourceURL:
                "https://rukminim1.flixcart.com/image/832/832/computer/r/x/u/apple-macbook-pro-notebook-original-imaepax8usdzrh5h.jpeg",
              orderRender: 1,
            },
            {
              resourceType: "image",
              resourceURL:
                "https://rukminim1.flixcart.com/image/832/832/computer/r/x/u/apple-macbook-pro-notebook-original-imaepax8usdzrh5h.jpeg",
              orderRender: 2,
            },
          ],
          brandId: 1,
          brandName: "OnePlus",
          variants: [
            {
              variantId: 2,
              variantName: "colour",
              variantDescription: "blue",
              sellerPrice: 24599,
              elocalsPrice: 22000,
              quantity: 20,
              variantResourcesSet: [
                {
                  resourceType: "image",
                  resourceURL:
                    "https://quantummobiles.com/wp-content/uploads/2020/04/2020-Macbook-in-three-colors-Gold-space-gray-and-silver.jpg",
                  orderRender: 1,
                },
                {
                  resourceType: "image",
                  resourceURL:
                    "https://quantummobiles.com/wp-content/uploads/2020/04/2020-Macbook-in-three-colors-Gold-space-gray-and-silver.jpg",
                  orderRender: 2,
                },
              ],
              mrp: 38000,
            },
          ],
        },
      };

      console.log("Server Fault Due to ", err);
      dispatch({ type: SELLERS_LOADED, payload: res.data.otherSellerList });
    });
};
