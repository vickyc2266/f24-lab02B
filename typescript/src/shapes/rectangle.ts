// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

// function newRectangle(width: number, height: number): Rectangle {
//     return {
//         width,
//         height,

//         computeArea: function (): number {
//             return width * height
//         }
//     }
// }

// export { Rectangle, newRectangle }

// interface Shape {
//     getArea(): number;
//     draw(): void;
// }

import { Shape } from '../shapes/shape';

class Rectangle implements Shape {
    private height: number;
    private width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }

    draw(): void {
        console.log(`Shape printed\nIts area is ${this.getArea()}`);
    }
}

export { Rectangle }


