import {expect,} from "chai"
import { search ,searchplaylist,searchalbum,seartrack,searchartist } from "../spote/main"
import sinonStubPromise from "sinon-stub-promise"
import sinonchai from "sinon-chai"
import Sinon from "sinon"
import fetch from "node-fetch"
chai.use(sinonchai)
sinonStubPromise(Sinon)
global.fetch=require(node-fetch)
describe("spote",()=>{
describe("smoke test",()=>{
it(`should call fetch function`),()=>{
    context(`expect to passing`),()=>{
        const searchartist=search(`https://api.spotify.com/v1/me`);
        expect(fetchstub).to.have.exist
        const fetchstub=Sinon.stub(global,"fetch")
        expect(fetchstub).to.have.been.calledOnce
    }
    context(`expect to passing`),()=>{
   
    it(`should receiv correct the url to fetch`),()=>{
   
        const searchartist=search(`https://api.spotify.com/v1/me`);
        expect(fetchstub).to.have.exist
   
}
it(`should receive correct url to be fetch`),()=>{

    const searchartist=search(`kkk,artist`)
    expect(fetchstub).to.been.calledWith(`https://api.spotify.com/v1/me`)
    fetchstub.restore(`https://api.spotify.com/v1/me`)
  }
}

it(`should exist the search method`),()=>{
    const searchalbum=search(`kkk,album`)
    expect(fetchstub).to.been.calledWith(`https://api.spotify.com/v1/me`)
}
it(`should exist the search method`),()=>{
   
 
}}
}
)

}
)