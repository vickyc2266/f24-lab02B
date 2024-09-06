package edu.cmu.cs.cs214.lab02.shapes;

public class Square implements Shape {
    // public double sideLen;

    // public Square(double sideLen) {
    //     this.sideLen = sideLen;
    // }
    
    // public double getArea() {
    //     return sideLen * sideLen;
    // }

    private double sideLen;

    public Square(double sideLen){
        this.sideLen = sideLen;
    }

    @Override
    public double getArea(){
        return sideLen * sideLen;
    }

    @Override
    public void draw(){
        System.out.println("Shape printed\nIts area is " + getArea());
    }

    
}
