import { assert, expect, test} from "vitest" ;
import useFormatPrice from"../useFormatPrice";

const rl = 1000.0
const r2 = 12345.54321
const r3 = 500

test( "Testing useFormatPrice", () => {
    expect(useFormatPrice(rl)).toEqual("$ 1000.00") 
    expect(useFormatPrice(r2)).toBe("$ 12345.54") 
    expect(useFormatPrice(r3)).toStrictEqual("$ 500.00") 
})
