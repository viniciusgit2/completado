import { data } from "autoprefixer"
import{api_url} from "./config"
export const search=(query,type)=>
fetch( `https://api.spotify.com/${query}&${type}`)
.then(data=>data.json())
export const searchalbum=()=>{query}
search(query,`album`)

export const searchartist=()=>{query}
search(query,`artist`)
export const searchplaylist=()=>{query}
search(query,`playlist`)

export const track=()=>{query}
search(query,`track`)


