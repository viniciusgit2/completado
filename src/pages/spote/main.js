export const search=(query,type)=>
fetch( `https://api.spotify.com/${query}&${type}`)

export const searchalbum=()=>{}
export const searchartist=()=>
fetch( `https://api.spotify.com/v1/me`)
export const searchplaylist=()=>{}
export const track=()=>
fetch(`https://api.spotify.com/v1/me`)
//copie do artist(meu test)
