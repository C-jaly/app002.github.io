import { Server } from 'http'
import Express from 'express'

const app = new Express()
const server = new Server(app)
server.listen(8000, (err) => {
  if (err) {
    console.error(err.stack || err)
    process.exit(0)
  }
  console.info('===> open http://127.0.0.1:8000 in a browser to view app')
});
process.on('uncaughtException', (e) => {
  console.error(e.stack)
});
app.get('/', (req,res) => {
  res.send('success') 
})