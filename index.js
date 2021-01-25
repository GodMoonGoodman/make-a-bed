const axios = require('axios')
require('dotenv').config()

const payload = {
  text: '오늘도 이불을 개자!'
}

axios.post(process.env.WEBHOOK_URL, payload)