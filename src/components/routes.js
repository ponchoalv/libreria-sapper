const routes = [
  {
    display: 'Inicio',
    segment: undefined,
    path: '.',
    prefetch: false
  },
  {
    display: 'Acerca la Librería',
    segment: 'about',
    path: 'about',
    prefetch: false
  },
  {
    display: 'Noticias',
    segment: 'blog',
    path: 'blog',
    prefetch: true
  }
];

export default routes;