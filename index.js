// class Prom {
//     then (cb) {
//         setTimeout(() => {
//         cb() 
//         }, 3000
//     )
//     }
//     catch (cb) {

//     }
// }

// const prom = new Prom()

// prom.then(() => {
//     console.log('callback called')
// })

function handlesSomeTask(isCool) {
    return new Promise((resolve, reject) => {
        if (isCool) {
            resolve()
        } else {
            reject()
        }
    })
}

handlesSomeTask()
    .then(() => {
        console.log('all good')
    })
    .catch(() => {
        console.log('all bad')
    })