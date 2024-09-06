package edu.cmu.cs.cs214.lab02.shapes;

public class Rectangle implements Shape {
    // public double height;
    // public double width;
    
    // public Rectangle(double height, double width){
    //     this.height = height;
    //     this.width = width;
    // }

    // public double getArea() {
    //     return height * width;
    // }

    private double height;
    private double width;

    public Rectangle(double height, double width){
        this.height = height;
        this.width = width;
        
    }

    @Override 
    public double getArea(){
        return height * width;
    }

    @Override
    public void draw(){
        System.out.println("Shape printed\n" + "Its area is " + getArea());
    }
}
