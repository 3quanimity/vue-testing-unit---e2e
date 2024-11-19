export default function useGetBiggest(item : any) {
    const itemCopy = {...item};
    let val = 0;

    for (const property in itemCopy) {
        if (itemCopy[property]> val) {
            val = itemCopy[property];
        } 
    }

    return val

}