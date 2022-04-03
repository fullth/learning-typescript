interface multipleInheritance extends Dog, Bird{
    getStatus(): {
        runningSpeed: number;
        flightSpeed: number;
    }
}