// function swap(arr: number[], j: number): void {
//     if (arr[j] > arr[j + 1]) {
//         const tmp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = tmp
//     }
// }

// export default function bubble_sort(arr: number[]): void {
//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = 0; j < arr.length - 1 - i; ++j) {
//             swap(arr, j)
//         }
//     }
// }

function swap(arr: number[], j: number) {
    if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
}

export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            swap(arr, j)
        }
    }
}
