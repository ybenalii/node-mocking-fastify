'use strict'

const data = [
  {id: 'B1', name: 'Module C-22', rrp: '890.00', info: 'Transport individuel compact à lévitation magnétique.'}
]

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return data
  })
  fastify.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  })
}
