import { data } from "autoprefixer"
import {tojson} from "util"
import { json } from "stream/consumers"
import { api_url } from "./config"

export const getalbum=()=> fetch( `${api_url}()https://api.spotify.com/`)
.then(tojson)
export const getalbumtracks=()=>`${api_url}()https://api.spotify.com/`
.then(tojson)
export const getalbums=()=>`${api_url}()https://api.spotify.com/`
.then(tojson)