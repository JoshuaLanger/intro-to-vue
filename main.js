var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    desc: `The best socks you'll find in town!`,
    selectedVariant: 0,
    alt: 'Green socks',
    link: 'https://bombas.com/collections/mens-socks',
    inventory: 20,
    onSale: true,
    details: ['80% cotton', '20% polyester', '100% comfort'],
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      {
        variantId: 234,
        variantColor: 'Green',
        variantImage: './socks_green.jpeg',
        variantQuantity: 12
      },
      {
        variantId: 235,
        variantColor: 'Blue',
        variantImage: './socks__blue.jpeg',
        variantQuantity: 8
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      if (this.inventory === 0) return this.cart;
      this.cart += 1;
      this.inventory -= 1;
    },
    removeFromCart: function() {
      if (this.cart === 0) return 0;
      this.cart -= 1;
      this.inventory += 1;
    },
    updateProduct: function(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    onSaleString() {
      return this.title + ' ' + 'are on sale!';
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    }
  }
});
