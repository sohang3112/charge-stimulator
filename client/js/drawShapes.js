export function drawObjectWith(context, style, draw) {
    if (style) {
        context.beginPath();
        draw(context);
        if (style.fill) {
            context.fillStyle = style.fill.color;
            context.fill();
        }
        if (style.stroke) {
            context.strokeStyle = style.stroke.color;
            context.stroke();
        }
    }
}

export function drawCircle(context, centre, radius, style) {
    drawObjectWith(context, style, function(context) {
        context.arc(centre.x, centre.y, radius, 0, 2 * Math.PI, false);
    });
}
