'use strict'

export async function getFilmes(){
    const url = 'https://acmefilmes.onrender.com/v2/acmefilmes/filmes'
    const respose = await fetch(url)
    const data = await respose.json()
    return data.filme
}

export async function getFilme(id){
    const url = `https://acmefilmes.onrender.com/v2/acmefilmes/filme/${id}`
    const respose = await fetch(url)
    const data = await respose.json()
    return data.filme[0]
}

// export async function postFilme (filme) {
//     const url = 'http://localhost/v2/acmefilmes/filme' 
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(filme),

//     }

//     const response = await fetch (url, options)

//     return response.ok

// }