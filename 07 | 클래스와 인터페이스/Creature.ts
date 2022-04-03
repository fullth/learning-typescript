class Creature implements multipleInheritance{
    getStatus(): { runningSpeed: number; flightSpeed: number; } {
        return {runningSpeed: 100, flightSpeed: 550}
    }
    run(): void {
    }
    fly(): void {
    }
}