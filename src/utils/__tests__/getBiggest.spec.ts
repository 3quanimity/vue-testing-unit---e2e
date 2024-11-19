import { assert, expect, test} from "vitest" ;
import useGetBiggest from"../useGetBiggest";

const input = {
    name: "Sample",
    val1: 42,
    val2: 22,
    val3: 2,
}

test( "Testing useGetBiggest", () => {
    expect(useGetBiggest(input)).toEqual(42) 

    input.val2 = 100
    expect(useGetBiggest(input)).toEqual(100) 
})
