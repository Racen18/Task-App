require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('62c1795696efc8179a3a6baf').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('62c1775bdb09d2f27cadf6cd').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})