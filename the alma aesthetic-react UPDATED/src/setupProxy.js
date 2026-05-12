const express = require('express')

module.exports = function setupProxy(app) {
  const router = express.Router()
  router.use(express.json({ limit: '48kb' }))
  router.post('/booking', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ ok: true, dev: true })
  })
  app.use('/api', router)
}
