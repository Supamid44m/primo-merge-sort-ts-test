`
 given
     collection_1 already sorted from max to min
     collection_2, collection_3 already sorted from min(0) to max
`

const collection_1: number[] = [5,4,3,2,1,-1]
const collection_2: number[] = [1, 2, 3, 4], collection_3: number[] = [0,1,2,3,4,5]

export function mergeAndSort(arr1: number[], arr2: Array<number>, arr3: Array<number>) {

    let mergeArray = []

    if (arr1.length === 0 && arr2.length === 0 && arr3.length === 0) {
        return []
    }

    if (arr1.length === 0 && arr3.length === 0) {
        return arr2;
    }

    if (arr1.length === 0 && arr2.length === 0) {
        return arr3;
    }

    if (arr1.length===0) {
        return mergeSort2AscendingArray(arr2, arr3)
    }

    mergeArray = [...arr1, ...arr2, ...arr3]

    return bubbleSort(mergeArray)
}


export function mergeSort2AscendingArray(arr1: number[], arr2: number[]) {
    const mergeArray: number[] = []
    let i = 1
    let j = 1
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]

    if(arr1.length === 0 ) {
        return arr2
    }
    if(arr2.length ===0){
        return arr1
    }

    while (arr1Item !== undefined|| arr2Item !== undefined) {
        if(arr2Item === undefined ||arr1Item <= arr2Item) {
            mergeArray.push(arr1Item)
            arr1Item = arr1[i]
            i++
        }else{
            mergeArray.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }

    }
   return mergeArray
}

export function bubbleSort(array: number[]): number[] {
    let temp = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array;
}

console.log(mergeAndSort(collection_1, collection_2, collection_3))