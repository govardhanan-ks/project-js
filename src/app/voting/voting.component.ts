import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Block } from "./Block"
import SHA256 from 'crypto-js/sha256';
import { Chain } from '@angular/compiler';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  newBlock: Block;
  chain: any = [];
  selected: any;
  c11_count: any = 0;
  c22_count: any = 0;
  c33_count: any = 0;
  c44_count: any = 0;
  c55_count: any = 0;
  showResult: Boolean = false;
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, new Date(), "Genesis block", 0);
  }

  onSubmit() {
    let self = this
    var count = 0;
    var check = 'val';

    if (confirm('confirm your vote!')) {

      this.addBlock(new Block(++count, new Date(), "candidate" + self.selected, 0))
      console.log(JSON.stringify(self.chain, null, 4));
    } else {
      console.log("no")

    }
  }
  onViewResul() {
    this.showResult = true
    var c1_count = 0, c2_count = 0, c3_count = 0,c4_count=0,c5_count=0;

    loop: {
      for (var i = 0; i < this.chain.length; i++) {
        if (this.chain[i].data === 'candidate1') {
          c1_count++;
          this.c11_count = c1_count;
        }
        else if (this.chain[i].data === 'candidate2') {
          c2_count++;
          this.c22_count = c2_count;
        }
        else if (this.chain[i].data === 'candidate3') {
          c3_count++;
          this.c33_count = c3_count;
        }
        
        else if (this.chain[i].data === 'candidate4') {
          c4_count++;
          this.c44_count = c4_count;
        }
        else if (this.chain[i].data === 'candidate5') {
          c5_count++;
          this.c55_count = c5_count;
        }
        //console.log("candidate 1");
      }
      console.log(c1_count);
      console.log(c2_count);
      console.log(c3_count);
      console.log(c4_count);
      console.log(c5_count);

    }
    console.log("DONE");
  }

  getlatesBlock() {

    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock: Block) {

    newBlock.previousHash = this.getlatesBlock().Hash;
    newBlock.Hash = this.caculateHash(newBlock)

    this.chain.push(newBlock);
  }


  caculateHash(newBlock) {
    return SHA256(newBlock.index + newBlock.previousHash + newBlock.timestamp + JSON.stringify(newBlock.data)).toString();

  }
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const preivousBlock = this.chain[i - 1];

      if (currentBlock.Hash !== currentBlock.caculateHash()) {
        return false;

      }


      if (currentBlock.previousHash !== preivousBlock.Hash) {
        return false;
      }
    }

    return true;
  }
  onvalid() {
    console.log('is blockchain valid?  ' + this.isChainValid());
    //change the data of block
    //this.chain[1].data ='{candi}';
    //console.log('is blockchain valid?  ' +this.isChainValid());
  }



  ngOnInit() {
  }

}
