import mongoose from 'mongoose'
import UsersSchema from '../schemas/users' //拿到导出的数据集模块
let Users = mongoose.model('Users', UsersSchema) // 编译生成Movie 模型
 
module.exports = Users