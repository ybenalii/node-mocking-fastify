'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return [
      {id: 'B1', name: 'Module C-22', rrp: '890.00', info: 'Transport individuel compact à lévitation magnétique.'}
    ]
  })
}
