import {Unit} from './Unit.js'
import {drawCircle} from './drawShapes.js'

const DEFAULT_LENGTH_UNIT  = 'pixel';

const POINT_RADIUS         = new Unit(5, DEFAULT_LENGTH_UNIT);        
const PLUS_CHARGE_COLOR    = 'red';
const MINUS_CHARGE_COLOR   = 'skyblue';
const NEUTRAL_CHARGE_COLOR = 'white';

/** Represents an electrical point charge */
export class PointCharge {
    constructor(info) {
        this.mass     = info.mass;
        this.charge   = info.charge;
        this.pos      = info.pos;
        this.velocity = info.velocity;
        
        const charge = this.charge.as('coulumb');
        Object.defineProperties(this, {
            radius: {value: POINT_RADIUS},
            color:  {value: charge >= 0 ? charge == 0 ? NEUTRAL_CHARGE_COLOR : MINUS_CHARGE_COLOR : PLUS_CHARGE_COLOR}
        });                         // read only properties
    }

    /** @param {CanvasRenderingContext2d} context */
    render(context) {               // drawing context, obtained from canvas
        drawCircle(context, this.pos.as(DEFAULT_LENGTH_UNIT), this.radius.as(DEFAULT_LENGTH_UNIT), {
            fill:   {color: this.color},
            stroke: null
        });
    }

    accelerate
}

