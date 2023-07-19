import {Animation, AnimationFrame} from "./cat-animations";

export class AnimationPlayer {
    currentFrameIndex = 0;
    frameStartTime: number | null = null;
    currentAnimation: Animation;

    constructor(initialAnimation: Animation) {
        this.currentAnimation = initialAnimation;
    }

    update(time: number): boolean {
        if (this.frameStartTime === null) {
            this.frameStartTime = time;
        }

        const delta = time - this.frameStartTime;

        if (delta < this.currentAnimation.frames[this.currentFrameIndex].delay) {
            return false;
        }

        this.frameStartTime = time;

        if (this.currentFrameIndex === this.currentAnimation.frames.length - 1) {
            if (this.currentAnimation.options?.mode === 'loop') {
                this.currentFrameIndex = this.currentAnimation.options.loopStart ?? 0;
                return false;
            }

            return true;
        }

        this.currentFrameIndex++;
        return false;
    }

    setAnimation(animation: Animation, time: number) {
        this.currentFrameIndex = 0;
        this.frameStartTime = time;
        this.currentAnimation = animation;
    }

    getFrame(): AnimationFrame {
        return this.currentAnimation.frames[this.currentFrameIndex];
    }
}
