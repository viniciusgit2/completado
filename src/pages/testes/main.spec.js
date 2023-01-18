import {expect, should,} from "chai"
import { search ,searchplaylist,searchalbum,seartrack } from "../spote/main"
import sinonChai from "sinon-chai"
import sinonStubPromise from "sinon-stub-promise"
import Sinon from "sinon"
import fetch from "node-fetch"
import { global } from "styled-jsx/css"


const fetchedstub =sinon.stub(global,`fetch`)
const artist=search()
describe( `spote`),()=>{
   describe( `smoke-test`),()=>{
   }



describe( `generic search`),()=>{
    let fetchedstub;
    beforeEach(()=>{fetchedstub=Sinon.stub(global,`fetch`)});
    afterEach(()=>{fetchedstub.restore();
    })

it( `should call fetched function`),()=>{


    const artist=search()
    expect().to.have.been.calledOnce

    
}
it (`should call fetch function the correct url`,()=>{
context(`passing type`),()=>{
const fetchedstub =sinon.stub(global,`fetch`)  
const artist=search(`kkk`,`artist`)
expect(fetchedstub).to.have.been
.calledWith(`	https://api.spotify.com/v1/me`)
fetchedstub.restore();

}
const fetchedstub =sinon.stub(global,`fetch`)  

const album=search(`kkk`,`album`)
expect(fetchedstub).to.have.been
.calledWith(`	https://api.spotify.com/v1/me`)
fetchedstub.restore();


})
context(`passing more types`),()=>{
  
    const artistaandalbum=search(`kkk`,[`album`,`artist`])
    expect(fetchedstub).to.have.been
    .calledWith(`	https://api.spotify.com/v1/me&type=artist,album`)
    fetchedstub.restore();

}

}

}


















