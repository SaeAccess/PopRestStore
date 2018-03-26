var CheckOutPage = {
  name: "checkout-page",
  data() {
    return {
      productsInCart: [],
      shippingAddress: {},
      listShippingAddress: [],
      axiosConfig: {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "api_key":storeInfo.apiKey,
          "moquiSessionToken":storeInfo.moquiSessionToken
        }
      }
    };
  },
  methods: {
    addShippingAddress(){
      console.log(this.shippingAddress);
      CustomerService.addShippingAddress(this.shippingAddress,this.axiosConfig).then(data => {
      console.log(data);
      });
    }
  },
  mounted() {
    ProductService.getProductsInCart(this.axiosConfig).then(data => {
      this.productsInCart = data;
    });
    CustomerService.getShippingAddresses(this.axiosConfig).then(data => {
      console.log(data);
      this.listShippingAddress = data;
    });
  }
};
var CheckOutPageTemplate = getPlaceholderRoute(
  "./components/pages/CheckOutPage/CheckOutPage.html",
  "CheckOutPage"
);