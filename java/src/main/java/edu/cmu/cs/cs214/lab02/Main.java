package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Circle;
import edu.cmu.cs.cs214.lab02.shapes.Square;

public class Main {
    // public static void main(String[] args) {
    //     Rectangle rectangle = new Rectangle(2, 3);

    //     Renderer renderer = new Renderer(rectangle);

    //     renderer.draw();
    //     System.out.println("Hey Vicky");
    // }


    public static void main(String[] args){
        Rectangle rect1 = new Rectangle(2, 3);
        Renderer renderRect = new Renderer(rect1);
        renderRect.draw();

        Circle cir1 = new Circle(3);
        Renderer renderCir = new Renderer(cir1);
        renderCir.draw();

        Square squ1 = new Square(4);
        Renderer rendererSqu1 = new Renderer(squ1);
        rendererSqu1.draw();


    }
}
