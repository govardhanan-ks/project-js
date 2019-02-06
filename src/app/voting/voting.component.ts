import { Component, OnInit } from '@angular/core';
import {Block } from "./Block"
import { Chain } from '@angular/compiler';
import  {SHA256} from 'crypto-js/sha256';


@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  newBlock: Block;
  chain:any;

  constructor() { 

   
  }

  createGenesisBlock(){
    return new Block(0,new Date(), "Genesis block", 0);
 }

 getlatesBlock(){
  return this.chain[this.chain.length - 1];
}

 addBlock(newBlock:Block){
   debugger
  newBlock.previousHash = this.getlatesBlock().hash;
  newBlock.hash = this.caculateHash(newBlock)
  this.chain.push(newBlock);
}


caculateHash(newBlock){
  debugger
  return SHA256(newBlock.index + newBlock.previousHash + newBlock.timestamp + JSON.stringify(newBlock.data)).toString();

}
  ngOnInit() {
    this.chain =[this.createGenesisBlock()];
   //this.newBlock = new Block(1 ,new Date(), {candidate: 1})
   this.addBlock(new Block(1,new Date(),{cand:1}))
     // this.chain.push(new Block(1 ,new Date(), {candidate: 1},))
      //this.chain.push(new Block(2 ,new Date(), {candidate: 1}))
   //this.newBlock = new Block(2 ,new Date(), {candidate: 1})
    //console.log(this.newBlock)
    console.log(this.chain)
  }

}
