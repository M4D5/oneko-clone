export interface AnimationFrame {
    x: number;
    y: number;
    delay: number;
}

export interface Animation {
    options?: { mode?: 'loop', loopStart?: number },
    frames: AnimationFrame[]
}

function runningAnimation(frame1Coords: [number, number], frame2Coords: [number, number]): Animation {
    return {
        options: {mode: 'loop'},
        frames: [
            {x: frame1Coords[0], y: frame1Coords[1], delay: 250},
            {x: frame2Coords[0], y: frame2Coords[1], delay: 250}
        ]
    };
}

export const catAnimations: { [key: string]: Animation } = {
    idle: {
        options: {mode: 'loop', loopStart: 3},
        frames: [
            {x: 3, y: 3, delay: 1500},
            {x: 3, y: 2, delay: 750},
            {x: 3, y: 3, delay: 500},
            {x: 2, y: 0, delay: 500},
            {x: 2, y: 1, delay: 500}
        ]
    },
    surprise: {
        frames: [{x: 7, y: 3, delay: 1000}]
    },
    runN: runningAnimation([1, 2], [1, 3]),
    runNE: runningAnimation([0, 2], [0, 3]),
    runE: runningAnimation([3, 0], [3, 1]),
    runSE: runningAnimation([5, 1], [5, 2]),
    runS: runningAnimation([7, 2], [6, 3]),
    runSW: runningAnimation([6, 1], [5, 3]),
    runW: runningAnimation([4, 2], [4, 3]),
    runNW: runningAnimation([1, 0], [1, 1]),
};
