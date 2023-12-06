import { getProducts } from "./service/product.services.js";
getProducts().then(function (products) {
  $.each(products, function (index, product) {
    $(`<div class="product">
        <img src="${product.thumbnail}" alt="">
        <h3>${product.title}</h3>
        </div>`).appendTo(".products");
  });
});
