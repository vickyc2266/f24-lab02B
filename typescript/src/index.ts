// import { newRenderer } from "./renderer.js"
// import { Rectangle, newRectangle } from "./shapes/rectangle.js";

// const rectangle: Rectangle = newRectangle(2, 3)
// const renderer = newRenderer(rectangle)
// renderer.draw();

import { newRenderer } from './renderer';
import { Rectangle } from './shapes/rectangle';

// Create a new Rectangle with the given dimensions (2, 3)
const rectangle = new Rectangle(2, 3);

// Create a new Renderer and pass the rectangle to it
const renderer = new newRenderer(rectangle);

// Call the draw method to render the rectangle
renderer.draw();
