const yup = require('yup')

const articleSchema = yup.object().shape({
  article: yup.string().trim().required().min(2).max(1000)
})

module.exports = { articleSchema }