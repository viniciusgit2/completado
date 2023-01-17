export const search=()=>
fetch( `https://open.spotify.com/?`)
//generico
export const searchalbum=()=>{}
export const searchartist=()=>
fetch( `https://api.spotify.com/v1/search?query=kkkkk&type=artist&locale=pt-BR%2Cpt%3Bq%3D0.9%2Cen%3Bq%3D0.8%2Cen-GB%3Bq%3D07%2Cen-US%3Bq%3D0.6&offset=0&limit=20"`)
export const searchplaylist=()=>{}
export const track=()=>
fetch(`https://api.spotify.com/v1/search?query=kkkkkkkk&type=track&locale=pt-BR%2Cpt%3Bq%3D0.9%2Cen%3Bq%3D0.8%2Cen-GB%3Bq%3D0.7%2Cen-US%3Bq%3D0.6&offset=0&limit=20`)