import {Animation, catAnimations} from "./cat-animations";
import {Vec2, vec2Add, vec2ArcTan2, vec2DistBetween, vec2Magnitude, vec2Multiply, vec2Normalize, vec2Sub} from "./vec2";

const mouseDistanceTargetPositionUpdateThreshold = 100;
const movementSpeed = 150;

export class Cat {
    static readonly directionAnimations: Animation[] = [
        catAnimations.runN,
        catAnimations.runNE,
        catAnimations.runE,
        catAnimations.runSE,
        catAnimations.runS,
        catAnimations.runSW,
        catAnimations.runW,
        catAnimations.runNW
    ];

    readonly mode: 'click' | 'move' = 'click';

    state: 'IDLE' | 'RUNNING' | 'SURPRISE' = 'IDLE';
    currentPosition: Vec2 = [0, 0];
    targetPosition: Vec2 = [0, 0];

    directionAnimation: Animation = catAnimations.runN;

    constructor() {


    }

    update(deltaTime: number) {
        const deltaSeconds = deltaTime / 1000;

        if (this.state === 'RUNNING') {
            const targetVector = vec2Sub(this.targetPosition, this.currentPosition)

            if (vec2Magnitude(targetVector) < 1) {
                this.currentPosition = this.targetPosition;
                this.state = 'IDLE';
                return;
            }

            const normalizedTargetVector = vec2Normalize(targetVector);
            const deltaPosition = vec2Multiply(normalizedTargetVector, deltaSeconds * movementSpeed);
            this.currentPosition = vec2Add(this.currentPosition, deltaPosition);

            const dir = (3 * Math.PI - vec2ArcTan2(normalizedTargetVector)) / (2 * Math.PI);
            const directionIndex = Math.floor(((dir * 8) + 0.5) % 8);
            this.directionAnimation = Cat.directionAnimations[directionIndex];
        }
    }

    onMouseUp(mouseEvent: MouseEvent) {
        if (this.mode !== 'click') {
            return;
        }

        this.setTargetPosition([mouseEvent.clientX, mouseEvent.clientY]);
    }

    onMouseMove(mouseEvent: MouseEvent) {
        if (this.mode !== 'move') {
            return;
        }

        const mousePosition: Vec2 = [mouseEvent.clientX, mouseEvent.clientY];

        if (this.state !== 'RUNNING' && vec2DistBetween(this.targetPosition, mousePosition) < mouseDistanceTargetPositionUpdateThreshold) {
            return;
        }

        this.setTargetPosition(mousePosition);
    }

    setTargetPosition(newTargetPosition: Vec2) {
        this.targetPosition = newTargetPosition;

        if (this.state === 'IDLE') {
            this.state = 'SURPRISE';
        }
    }

    onAnimationComplete() {
        if (this.state === 'SURPRISE') {
            this.state = 'RUNNING';
        }
    }

    getAnimation(): Animation {
        switch (this.state) {
            case "SURPRISE":
                return catAnimations.surprise;
            case "RUNNING":
                return this.directionAnimation;
            default:
                return catAnimations.idle;
        }
    }
}
