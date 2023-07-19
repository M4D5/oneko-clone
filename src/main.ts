// @ts-ignore
import spriteSheet from './oneko.gif';

import {AnimationFrame, catAnimations} from "./cat-animations";
import {Cat} from "./cat";
import {AnimationPlayer} from "./animation-player";
import {Vec2} from "./vec2";

const cat = new Cat();

function main() {
    const targetElement = document.getElementById('oneko-clone-container');

    if (!targetElement) {
        return;
    }

    const animationPlayer = new AnimationPlayer(catAnimations.idle);

    cat.currentPosition = [Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight)];

    const catElement = document.createElement('div');
    catElement.style.width = '32px';
    catElement.style.height = '32px';
    catElement.style.position = 'fixed';
    catElement.style.top = '0';
    catElement.style.left = '0';
    catElement.style.backgroundImage = `url(${spriteSheet})`;
    catElement.style.backgroundPositionX = '0';
    catElement.style.backgroundPositionY = '0';
    catElement.style.backgroundRepeat = 'no-repeat';
    targetElement.appendChild(catElement);

    window.requestAnimationFrame(time => step(catElement, animationPlayer, time, performance.now()));
}

function setElementTranslation(element: HTMLElement, [x, y]: Vec2) {
    element.style.transform = `translate(${x}px, ${y}px)`;
}

function setBackgroundPosition(element: HTMLElement, {x, y}: AnimationFrame) {
    element.style.backgroundPositionX = -x * 32 + 'px';
    element.style.backgroundPositionY = -y * 32 + 'px';
}

function step(catElement: HTMLElement, animationPlayer: AnimationPlayer, time: number, prevTime: number) {
    const deltaTime = time - prevTime;

    cat.update(deltaTime);

    const catAnimation = cat.getAnimation();

    if (catAnimation !== animationPlayer.currentAnimation) {
        animationPlayer.setAnimation(catAnimation, time);
    }

    const animationOver = animationPlayer.update(time);

    if (animationOver) {
        cat.onAnimationComplete();
    }

    setBackgroundPosition(catElement, animationPlayer.getFrame());
    setElementTranslation(catElement, cat.currentPosition);

    window.requestAnimationFrame(newTime => step(catElement, animationPlayer, newTime, time))
}

main();

window.onmouseup = function (mouseEvent: MouseEvent) {
    cat.onMouseUp(mouseEvent);
}

window.onmousemove = function (mouseEvent: MouseEvent) {
    cat.onMouseMove(mouseEvent);
}
