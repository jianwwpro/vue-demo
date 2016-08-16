export default (router) => {
  router.map({
    '/': {
      name: 'index',
      component: require('./views/Index')
    },
    '/admin': {
    	name: 'admin',
    	component: require('./views/Admin')
    }
  })
}