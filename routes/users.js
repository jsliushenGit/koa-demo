const router = require('koa-router')()

router.prefix('/users')

const {
  User
} = require('../models/index')

router.get('/list', async (ctx) => {
  let params = {}
  ctx.request.query.age && (params.age = ctx.request.query.age)
  try {
    const data = await User.find(params)
    let resultData = data.map(item => {
      return {
        id: item._id,
        userName: item.userName,
        age: item.age
      }
    })
    ctx.body = {
      code: 200,
      data: resultData
    }
  } catch (error) {
    ctx.body = {
      code: -1,
      msg: error
    }
  }
})

module.exports = router
