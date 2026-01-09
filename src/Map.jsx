import React from 'react'

function Map() {
    const products =[
      // yo curly braces bhitra bhako id, name... haru sab backend bata aaune data ho but hamle backend connect gareko chainam so yetikkai dummy data haleko ho hamle ahile chai!!!
        {
        id: 1,
        name: "Wireless Headphones",
        description: "High quality wireless headphones with noise cancellation." ,
        image:"https://images.unsplash.com/photo-1612465289702-7c84b5258fde?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
        stock: 10,
        price: 3000,
        },
        {
            id:2,
            name:"Gaming Mouse",
            description: "For seamless experience in gaming",
            image:"https://images.unsplash.com/photo-1629121291243-7b5e885cce9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
            stock:15,
            price:1500,
        },
        {
            id:3,
            name:"Smart Watch",
            description: "For Track of time and fitness in this morden world",
            image:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
            stock:15,
            price:2000,
        },
        {
            id:4,
            name:"Bluetooth Speaker",
            description: "Portable bluetooth speaker",
            image:"https://media.istockphoto.com/id/1150071437/photo/listening-to-music.webp?a=1&b=1&s=612x612&w=0&k=20&c=cTKQ43LX-nFX20Li6L9e_0Er7YqWFDaN6NPVxIZUgO0=",
            stock:15,
            price:2000,
        },
        
    ]
  return (
    <div className='bg-gradient-to-r from-pink-400 to bg-green-400 min-h-screen'>
      <h1 className='text-center font-3xl font-semibold'>Product List</h1>
      {/* Card container */}
      <div className='grid grid-cols-3 gap-6'>
        {/* .map function le sab {} ma bhako data lai scan garcha  and after that products.map ko sabai scanned data "product" ma store huncha*/}
        {products.map((product)=>(
          <div  key={product.id} className='bg-white rounded shadow-md'>
            <img src={product.image} alt={product.name} className='w-full h-52 object-cover'/>
            <div>
              <h1 className='text-lg text-center font-semibold'>{product.name}</h1>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Stock: {product.stock}</p>
              <button className='bg-blue-500 text-white text-lg font-medium p-2 rounded w-full cursor-pointer hover:bg-blue-600'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Map
