var savenRemediesproductCatalog = 
  {
      products:[
          {productImageSource:"img/products/1.png",productName:"Calsiven",productDescription:""},
          {productImageSource:"img/products/2.png",productName:"Calsiven Plus",productDescription:""},
          {productImageSource:"img/products/3.png",productName:"Cobaven",productDescription:""},
          {productImageSource:"img/products/4.png",productName:"D3 Ven",productDescription:""},
          {productImageSource:"img/products/5.png",productName:"Depoven 4",productDescription:""},
          {productImageSource:"img/products/6.png",productName:"Etorven",productDescription:""},
          {productImageSource:"img/products/7.png",productName:"Etorven - MR",productDescription:""},
          {productImageSource:"img/products/8.png",productName:"Ferorapid",productDescription:""},
          {productImageSource:"img/products/9.png",productName:"Flexaven - D",productDescription:""},
          {productImageSource:"img/products/10.png",productName:"Galin SR 75",productDescription:""},
          {productImageSource:"img/products/11.png",productName:"Rabiven - D",productDescription:""},
          {productImageSource:"img/products/12.png",productName:"Rhumafast Gel",productDescription:""},
          {productImageSource:"img/products/13.png",productName:"Ridefree-MR",productDescription:""},

      ]
  }

var vueApp = new Vue({
    el: '#product-collection-list',
    data: savenRemediesproductCatalog,
    methods:{
        getProductImageAlignmentClass(indexValue)
        {
            return indexValue%2===0 ? "col-md-4 image-block" : "col-md-4 image-block-left";
        },
        isProductAlignedLeft(indexValue)
        {
            return indexValue%2===0;
        }
    }
  })


  