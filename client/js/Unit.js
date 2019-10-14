/** Represents measurements, which involve both value and unit
  * @example
  * const radius   = new Unit(5.0, 'metre');
  * const position = new Unit({x:1, y:2}, 'metre');
  */
export class Unit {
    /** @param value - Number or number-like object (such as 2d vector)
      * @param {string} unit
      */
    constructor(value, unit) {
        this.value = value;
        this.unit  = unit.toLowerCase();
    }

    /** @param {string} unit
      * @return {number} - Value in given unit
      */
    as(unit) {
        if (this.unit == unit.toLowerCase())
            return this.value;
        throw new TypeError(`Cannot convert ${this} to value of unit ${unit}`);
    }

    /** @return {string} */
    toString() {
        return `Unit {value=${this.value}, unit=${this.unit}}`;
    }
}