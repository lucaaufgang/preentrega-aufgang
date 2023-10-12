const products =[
    {
        id: '1',
        nombre: 'Jordan 1 Retro Low OG SP',
        precio: 557,
        category: 'sneakers',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtVae8Ux-nnywGbu5XaGILdIMP6eJAklQceKjL0RaYymlmvKkgcsnC2sDIHe4tB7LlLg&usqp=CAU',
        stock: 50,
        description: 'descripcion Jordan 1 Retro Low OG SP'
        },
        {id:'2', name: 'Jordan 4 Retro Off-White Sail', price: 1200, category: 'sneakers',img:'https://d2r9epyceweg5n.cloudfront.net/stores/001/074/983/products/off-white-air-jordan-4-sail-official-images-003-2-d5d2ab284efb5875ff16450280808874-1024-1024.jpg'}
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}