export const clients = [...new Array(10)].map((client, index) => {
  return {
    id: index + 1,
    href: `/images/clients/${index + 1}.png`,
  };
});

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/images/products/p1.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '/images/products/p2.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '/images/products/p3.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '/images/products/p4.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/images/products/p5.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: '/images/products/p6.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: '/images/products/p1.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/images/products/p2.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: '/images/products/p3.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: '/images/products/p4.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: '/images/products/p5.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: '/images/products/p6.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/images/products/p1.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: '/images/products/p2.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: '/images/products/p3.png',
  },
];
