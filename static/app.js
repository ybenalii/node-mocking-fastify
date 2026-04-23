const populateProducts = async () => {
  const products = document.querySelector('#products')
  products.innerHTML = ''
  const data = [
    {id: 'A1', name: 'Scooter Comète', rrp: '99.99', info: 'Un petit scooter, rapide en ville et facile à garer.'},
    {id: 'A2', name: 'Camion Titan', rrp: '303.33', info: 'Un véhicule utilitaire conçu pour transporter presque n\'importe quoi.'},
    {id: 'B1', name: 'Coupé Mirage', rrp: '22.40', info: 'Une voiture sportive au style élégant et au prix étonnamment bas.'}
  ]
  for (const product of data) {
    const item = document.createElement('product-item')
    for (const key of ['name', 'rrp', 'info']) {
      const span = document.createElement('span')
      span.slot = key
      span.textContent = product[key]
      item.appendChild(span)
    }
    products.appendChild(item)
  }
}

document.querySelector('#fetch').addEventListener('click', async () => {
  await populateProducts()
})

customElements.define('product-item', class Item extends HTMLElement {
  constructor() {
    super()
    const itemTmpl = document.querySelector('#item').content
    this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
  }
})
