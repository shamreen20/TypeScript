"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const sorter_1 = require("./sorter");
class CharacterCollection extends sorter_1.sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const Characters = this.data.split("");
        const leftHand = Characters[leftIndex];
        Characters[leftIndex] = Characters[rightIndex];
        Characters[rightIndex] = leftHand;
        this.data = Characters.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
