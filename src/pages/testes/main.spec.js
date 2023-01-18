import {expect, should,} from "chai"
import { search ,searchplaylist,searchalbum,searchtrack, searchartist } from "../spote/main"
import sinonChai from "sinon-chai"
import sinonStubPromise from "sinon-stub-promise"
import Sinon from "sinon"
import fetch from "node-fetch"
import { global } from "styled-jsx/css"
import { resolve } from "path"


const fetchedstub =sinon.stub(global,`fetch`)
fetchedstub.returnsPromise();
const artist=search()
describe( `spote`),()=>{
   describe( `smoke-test`),()=>{
   }
}


describe( `generic search`),()=>{
    let fetchedstub;
    let promise;

    beforeEach(()=>{fetchedstub=Sinon.stub(global,`fetch`)});
    promise=fetchedstub.returnsPromise();
    afterEach(()=>{fetchedstub.restore();
    })
}
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
it (`should the json data from the promise`,()=>{
promise.resolve(`body:json`);
const artist=search(`kkk`,`artist`)
expect(artist.resolve).to.be.eql(`body:json`)
}

)
context(`passing more types`),()=>{
    it (`should call fetch function`,()=>{
    const artist=searchartist(`kkk`)
    expect(fetchedstub().to.have.been.calledWith(`	https://api.spotify.com/v1/me=artist`)
    )
    context(`search album`),()=>{
        const album=searchalbum(`kkkk`)
        expect(fetchedstub)
    }
    context(`search track`),()=>{
        const track=searchtrack(`kkkk`)
        expect(fetchedstub)
    }
    context(`search playlist`),()=>{
        const playlist=searchplaylist(`kkkk`)
        expect(fetchedstub)
}
    }
    )

}




















