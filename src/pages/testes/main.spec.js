import {expect,} from "chai"
import { search ,searchplaylist,searchalbum,seartrack } from "../spote/main"
import {sinon} from "sinon"
import sinonchai from "sinon-chai"
describe("spote",()=>{
describe("smoke test",()=>{
it(`should exist the search method`),()=>{
expect(search).to.exist
}
it(`should exist the search method`),()=>{
    expect(searchalbum).to.exist

}
it(`should exist the search method`),()=>{
    expect(searchartist).to.exist
     
}
it(`should exist the search method`),()=>{
    expect(seartrack).to.exist
    
}
it(`should exist the search method`),()=>{
    expect(searchplaylist).to.exist
 
}}
)

}
)