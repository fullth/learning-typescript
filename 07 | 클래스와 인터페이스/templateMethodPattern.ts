abstract class AbstractBird {
    abstract birdName: string;
    abstract habitat: string;

    abstract flySound(sound: string);

    fly(): void{ 
        this.flySound("푸드덕 푸드덕");
    }

    getHabitat(): void{
        console.log(`<${this.birdName}>의 서식지는 <${this.habitat}>입니다.`);
    }
}

class Chicken extends AbstractBird {
    constructor(public birdName: string, public habitat: string) {
        super();
    }

    flySound(sound: string) {
        console.log(`<${this.birdName}>이 <${sound}>거리며 날아갑니다.`);
    }
}

let deliciousChicken = new Chicken("치킨", "교촌치킨");
deliciousChicken.fly();
deliciousChicken.getHabitat();