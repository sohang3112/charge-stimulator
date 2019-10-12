import {drawCircle} from './drawShapes.js'

const POINT_RADIUS         = 5;         // 5 pixels
const PLUS_CHARGE_COLOR    = 'red';
const MINUS_CHARGE_COLOR   = 'skyblue';
const NEUTRAL_CHARGE_COLOR = 'white';

export class PointCharge {
    constructor(info) {
        Object.assign(this, info);
        
        const charge = this.charge;
        Object.defineProperties(this, {
            radius: {value: POINT_RADIUS},
            color:  {value: charge >= 0 ? charge == 0 ? NEUTRAL_CHARGE_COLOR : MINUS_CHARGE_COLOR : PLUS_CHARGE_COLOR}
        });                         // read only properties
    }

    render(context) {               // drawing context, obtained from canvas
        drawCircle(context, this.pos, this.radius, {
            fill:   {color: this.color},
            stroke: null
        });
    }


}

