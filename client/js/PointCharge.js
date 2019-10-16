import {drawCircle} from './drawShapes.js'

const POINT_RADIUS         = 5;        
const PLUS_CHARGE_COLOR    = 'red';
const MINUS_CHARGE_COLOR   = 'skyblue';
const NEUTRAL_CHARGE_COLOR = 'white';

/** Represents an electrical point charge */
export class PointCharge {
    /** @param {Object} info - contains fields mass, charge, position, velocity
      * (Default velocity is 0)
      */
    constructor(info) {
        this.mass     = info.mass;
        this.charge   = info.charge;
        this.position = info.pos;
        this.velocity = info.velocity || 0;
        
        const charge = this.charge;
        Object.defineProperties(this, {
            radius: {value: POINT_RADIUS},
            color:  {value: charge >= 0 ? charge == 0 ? NEUTRAL_CHARGE_COLOR : MINUS_CHARGE_COLOR : PLUS_CHARGE_COLOR}
        });                         // read only properties
    }

    /** @param {CanvasRenderingContext2d} context */
    render(context) {               // drawing context, obtained from canvas
        drawCircle(context, this.position, this.radius, {
            fill:   {color: this.color},
            stroke: null
        });
    }

   
}

