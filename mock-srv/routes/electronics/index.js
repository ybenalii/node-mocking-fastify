'use strict'

const data = [
  {
    id: 'A1',
    name: 'Filtre de Signal S-1',
    rrp: '145.00',
    info: 'Suppression active des bruits résiduels sur circuits haute impédance.'
  },
  {
    id: 'A2',
    name: 'Modulateur de Flux M-2',
    rrp: '620.00',
    info: "Unité d'amplification pour transmission de données longue distance."
  }
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
