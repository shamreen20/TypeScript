import { sorter } from "./sorter";


export class CharacterCollection extends sorter{

    constructor(public data:string) {
        super();
    }

    get length():number{
        return this.data.length;
    }

    compare(leftIndex:number,rightIndex:number):boolean{
        return(this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex:number,rightIndex:number): void{

      const Characters = this.data.split("");
      const leftHand =   Characters[leftIndex];
      Characters[leftIndex] = Characters[rightIndex];
      Characters[rightIndex] = leftHand;
      this.data = Characters.join("");
    }
}
    