import  chai,{ expect } from "chai";
import{ getalbum,getalbumtracks} from"../spote/album"
import Sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";
chai.use(sinonChai)
describe(`album`),()=>{
    beforeEach(()=>{})
    describe(`smoke test`,()=>{it(`should have getalbum method`,()=>{expect(getalbum).to.exist})})
}
it(`should have getalbumtracks method`,()=>{const album=getalbum() })
describe(`getalbum`,()=>{it(`should call fetch method`,()=>{expect(getalbum).to.exist})})
