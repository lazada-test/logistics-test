const request = require('request-promise');

const extractProductSpec = (body) => {
  const description = /<div class="description-detail">((.|\n)*?)<\/div>/;
  const productInformationRegex = /dataLayer.push\(({.*})/;
  const cleanDescriptionRegex = /(<(li|div|ul) [^>][\w-="> ]*)|(<\/(li|div|ul)>)/g;
  const product = {};

  const descriptionRawText = body.match(description)[0];
  const cleanedDescription = descriptionRawText
    .replace(cleanDescriptionRegex, '')
    .replace(/<span>/g, '')
    .split(/<\/span>/g);

  const productInformation = JSON.parse(body.match(productInformationRegex)[1]);
  product.name = productInformation.page.product.name;
  product.discountedPrice = `${productInformation.pdt_currency} ${productInformation.page.product.price}`;
  product.originalPrice = `${productInformation.pdt_currency} ${productInformation.pdt_amount}`;
  product.discountPercentage = productInformation.page.product.discountPercentage;
  product.categoryName = productInformation.category;
  product.brand = productInformation.brand;
  product.image = productInformation.pdt_photo;
  product.seller = productInformation.seller_name;
  product.sku = productInformation.pdt_simplesku;
  product.inStock = productInformation.page.product.inStock;
  product.reviewCount = productInformation.page.product.reviewCount;
  product.condition = product.u7;
  product.descriptions = cleanedDescription;

  return product;
};

exports.getSpec = function(req, res) {
  const { url1, url2 } = req.body;
  const products = [];
  const specifications = [
    {
      propertyName: 'name',
      description: 'Product Name'
    },
    {
      propertyName: 'condition',
      description: 'Condition'
    },
    {
      propertyName: 'descriptions',
      description: 'Description'
    },
    {
      propertyName: 'discountedPrice',
      description: 'Discounted price'
    },
    {
      propertyName: 'originalPrice',
      description: 'Original price'
    },
    {
      propertyName: 'discountPercentage',
      description: 'Discount percentage'
    },
    {
      propertyName: 'categoryName',
      description: 'Category'
    },
    {
      propertyName: 'seller',
      description: 'Seller'
    },
    {
      propertyName: 'brand',
      description: 'Brand'
    },
    {
      propertyName: 'sku',
      description: 'Sku'
    },
    {
      propertyName: 'inStock',
      description: 'In stock'
    },
    {
      propertyName: 'reviewCount',
      description: 'Review count'
    },
  ];

  if(!url1) {
    res.json({});
    return;
  }

  request(url1).then((body) => {
    products.push(extractProductSpec(body));
  }).then(() => {
      if(!url2) {
        res.json({specifications: specifications, products: products});
        return;
      }

      request(url2).then((body) => {
        products.push(extractProductSpec(body));
      }).then(() => {
        res.json({specifications: specifications, products: products});
      });
    }
  )
};