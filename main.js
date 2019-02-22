var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    desc: `The best socks you'll find in town!`,
    image: './socks_green.jpeg',
    alt: 'Green socks',
    link: 'https://bombas.com/collections/mens-socks',
    inventory: 100,
    onSale: true,
    details: ['80% cotton', '20% polyester', '100% comfort'],
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      {
        variantId: 234,
        variantColor: 'Green'
      },
      {
        variantId: 235,
        variantColor: 'Blue'
      }
    ]
  }
});
