

// const decoder = code => {
//     let splitString = code.split('')
//     let result = ''

//     for (let i = 0; i < splitString.length; i++) {
//         if (!isNaN(+splitString[i])) {
//             i += +splitString[i]
//         } else {
//             result += splitString[i]
//         }
//     }
//     return result
// }

// decoder('123ng9opisdnfowi8320jflk93jn9h')

function decoder(code) {
    let endResult = ""
    let i = 0
    while (i < code.length) {
        let currentChar = code[i]
        if (!isNaN(code[i])) {
            i = i + (+code[i])
        } else {
            endResult += code[i]
        }
    }
    return endResult
}
console.log(decoder('dkljfoi3jifjlkjf39908098oij2oij3jf'))

