import  SHA256 from 'crypto-js/sha256';

export class Block{
    index:any;
    timestamp:any;
    data:any;
    previousHash:any = 0;
    Hash:any;
    chain:any;
    hash:any;

    constructor(index,timestamp,data, previousHash?:any, Hash?:any){
        this.index = index;
        this.timestamp= timestamp;
        this.data=data;
        this.previousHash = previousHash
        this.Hash=this.caculateHash();
    }
    caculateHash(){
        // debugger
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();

    }
}