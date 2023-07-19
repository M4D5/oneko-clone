export type Vec2 = [number, number];

export function vec2Add(v1: Vec2, v2: Vec2): Vec2 {
    return [v2[0] + v1[0], v2[1] + v1[1]];
}

export function vec2Sub(v1: Vec2, v2: Vec2): Vec2 {
    return vec2Add(v1, vec2Multiply(v2, -1));
}

export function vec2Multiply(v: Vec2, factor: number): Vec2 {
    return [v[0] * factor, v[1] * factor];
}

export function vec2Magnitude(v: Vec2): number {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

export function vec2DistBetween(v1: Vec2, v2: Vec2): number {
    return vec2Magnitude(vec2Sub(v1, v2));
}

export function vec2Normalize(v: Vec2): Vec2 {
    return vec2Multiply(v, 1 / vec2Magnitude(v));
}

export function vec2ArcTan2(v: Vec2): number {
    return Math.atan2(v[0], v[1]);
}
