// function square(sideLen: number): Shape {
//     return {
//         sideLen,
//         computeArea: function (): number {
//             return sideLen * sideLen
//         }
//     }
// }

import { Shape } from '../shapes/shape';

class Square implements Shape {
    private sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    getArea(): number {
        return this.sideLen * this.sideLen;
    }

    draw(): void {
        console.log(`Shape printed\nIts area is ${this.getArea()}`);
    }
}

export { Square };



// export { square }