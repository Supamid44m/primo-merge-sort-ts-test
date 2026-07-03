import {mergeAndSort} from "../index";


const collection_1: number[] = [5, 4, 3, 2, 1]
const collection_2: number[] = [1, 2, 3, 4], collection_3: number[] = [1, 2, 3]
const mergeAllCollection = [...collection_1,...collection_2,...collection_3]


describe('Merge and sort  Array', () => {
    it('should be merge all collection and sort ', () => {
        const result = mergeAndSort(collection_1, collection_2, collection_3)

        expect(result).toEqual(mergeAllCollection.sort((a, b) => a - b))
    })

    it('should merge collection 2 and 3', () => {
        const result = mergeAndSort([],collection_2, collection_3)

        expect(result).toEqual([...collection_2,...collection_3].sort((a, b) => a - b))
    })


    it('should return collection 1 with sorted', () => {
        const result = mergeAndSort(collection_1, [],[])
        expect(result).toEqual(collection_1.sort((a, b) => a - b))
    })

    it('should return collection2',()=>{
        const result = mergeAndSort([], collection_2, [])

        expect(result).toEqual(collection_2)
    })

    it('should return collection3',()=>{
        const result = mergeAndSort([],[],collection_3)
        expect(result).toEqual(collection_3)
    })

    it('should return empty array', () => {
        const result = mergeAndSort([],[],[])
        expect(result).toEqual([])
    })
})
