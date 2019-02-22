var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    desc: `The best socks you'll find in town!`,
    image: './socks_green.jpeg',
    alt: 'Green socks',
    link: 'https://bombas.com/collections/mens-socks',
    inventory: 100,
    onSale: true
  }
});
