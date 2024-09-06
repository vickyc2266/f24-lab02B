// function circle(radius: number): Shape {
//     return {
//         radius,
//         computeArea: function (): number {
//             return Math.PI * radius * radius
//         }
//     }
// }

// export { circle }

import { Shape } from '../shapes/shape';


class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    draw(): void {
        console.log(`Shape printed\nIts area is ${this.getArea()}`);
    }
}

export { Circle }
