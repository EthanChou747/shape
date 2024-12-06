namespace Polygons {
    // 面積群組
    //% block="三角形 面積 底 %base 高 %height"
    //% group="面積"
    //% block.loc.zh-tw="三角形 面積 底 %base 高 %height"
    export function triangleArea(base: number, height: number): number {
        return (base * height) / 2;
    }

    //% block="正方形 面積 邊長 %side"
    //% group="面積"
    //% block.loc.zh-tw="正方形 面積 邊長 %side"
    export function squareArea(side: number): number {
        return side * side;
    }

    //% block="長方形 面積 長 %length 寬 %width"
    //% group="面積"
    //% block.loc.zh-tw="長方形 面積 長 %length 寬 %width"
    export function rectangleArea(length: number, width: number): number {
        return length * width;
    }

    //% block="平行四邊形 面積 底 %base 高 %height"
    //% group="面積"
    //% block.loc.zh-tw="平行四邊形 面積 底 %base 高 %height"
    export function parallelogramArea(base: number, height: number): number {
        return base * height;
    }

    //% block="梯形 面積 上底 %a 下底 %b 高 %height"
    //% group="面積"
    //% block.loc.zh-tw="梯形 面積 上底 %a 下底 %b 高 %height"
    export function trapezoidArea(a: number, b: number, height: number): number {
        return ((a + b) / 2) * height;
    }

    //% block="菱形 面積 對角線1 %d1 對角線2 %d2"
    //% group="面積"
    //% block.loc.zh-tw="菱形 面積 對角線1 %d1 對角線2 %d2"
    export function rhombusArea(d1: number, d2: number): number {
        return (d1 * d2) / 2;
    }

    //% block="圓形 面積 半徑 %radius"
    //% group="面積"
    //% block.loc.zh-tw="圓形 面積 半徑 %radius"
    export function circleArea(radius: number): number {
        return Math.PI * radius * radius;
    }

    // 周長群組
    //% block="三角形 周長 邊1 %a 邊2 %b 邊3 %c"
    //% group="周長"
    //% block.loc.zh-tw="三角形 周長 邊1 %a 邊2 %b 邊3 %c"
    export function trianglePerimeter(a: number, b: number, c: number): number {
        return a + b + c;
    }

    //% block="正方形 周長 邊長 %side"
    //% group="周長"
    //% block.loc.zh-tw="正方形 周長 邊長 %side"
    export function squarePerimeter(side: number): number {
        return 4 * side;
    }

    //% block="長方形 周長 長 %length 寬 %width"
    //% group="周長"
    //% block.loc.zh-tw="長方形 周長 長 %length 寬 %width"
    export function rectanglePerimeter(length: number, width: number): number {
        return 2 * (length + width);
    }

    //% block="平行四邊形 周長 邊1 %a 邊2 %b"
    //% group="周長"
    //% block.loc.zh-tw="平行四邊形 周長 邊1 %a 邊2 %b"
    export function parallelogramPerimeter(a: number, b: number): number {
        return 2 * (a + b);
    }

    //% block="梯形 周長 邊1 %a 邊2 %b 邊3 %c 邊4 %d"
    //% group="周長"
    //% block.loc.zh-tw="梯形 周長 邊1 %a 邊2 %b 邊3 %c 邊4 %d"
    export function trapezoidPerimeter(a: number, b: number, c: number, d: number): number {
        return a + b + c + d;
    }

    //% block="菱形 周長 邊長 %side"
    //% group="周長"
    //% block.loc.zh-tw="菱形 周長 邊長 %side"
    export function rhombusPerimeter(side: number): number {
        return 4 * side;
    }

    //% block="圓形 周長 半徑 %radius"
    //% group="周長"
    //% block.loc.zh-tw="圓形 周長 半徑 %radius"
    export function circlePerimeter(radius: number): number {
        return 2 * Math.PI * radius;
    }
}
