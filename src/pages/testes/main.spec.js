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
    const fetchstub=Sinon.stub(global,"fetch")
    const artist=search();
    expect(fetchstub).to.have.been.calledOnce
}
it(`should exist the search method`),()=>{
   

}
it(`should exist the search method`),()=>{

  
  
}
it(`should exist the search method`),()=>{
    
    
}
it(`should exist the search method`),()=>{
   
 
}}
)

}
)