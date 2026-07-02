`
 given
     collection_1 already sorted from max to min
     collection_2, collection_3 already sorted from min(0) to max
`

const collection_1: number[] = [5,4,3,2,1]
const collection_2: number[] = [1,2,3,4], collection_3: number[] = [1,2,3]

export function mergeSort(arr1:number[], arr2: Array<number>,arr3: Array<number>) {

    let mergeArray = []

    mergeArray = [...collection_1, ...collection_2, ...collection_3]

    return bubbleSort(mergeArray)
}


export function bubbleSort(array: number[]): number[] {

    let temp = 0

    for(let i=0;i<array.length; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j]>array[j+1]){
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }

    return array;
}

console.log(mergeSort(collection_1,collection_2,collection_3))