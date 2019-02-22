var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    desc: `The best socks you'll find in town!`,
    image: './socks_green.jpeg',
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
        variantImage: './socks_green.jpeg'
      },
      {
        variantId: 235,
        variantColor: 'Blue',
        variantImage: './socks__blue.jpeg'
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
    updateProduct: function(variantImage) {
      this.image = variantImage;
    }
  }
});
