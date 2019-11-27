'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/notes',controller.notes.echo);
  router.get('/get1',controller.notes.httpGetQuery);
  router.get('/get2/:id/:name',controller.notes.httpGetParam);
  router.post('/create',controller.notes.httpPost);
  router.put('/update/:id',controller.notes.httpPull);
  router.delete('/delete/:id',controller.notes.httpDelete);
};
