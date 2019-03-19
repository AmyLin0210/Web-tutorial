/* Step 1:
 * edit [port] to an appropriate value
 * storing config to variables is a good practice, see `port` in the code
 * learn the syntax of string interpolation in js, see `${port}` in the code
 * 將 [port] 修改成合適的值
 * 將設定放在變數中是一種好習慣，參考程式中的 `port`
 * 學習 js 的 string interpolation 語法，參考程式中的 `${port}`
 */

// include `express`
// 載入 `express`
const express = require('express')

// create an express, aka web server, instance
// 建立一個 express (也就是網頁伺服器)實體
const app = express()

const port = 10283

// handle `/step1` url
// 處理 `/step1` 網址

app.get('/step1', (req, res) => {
    // response browser
    // 回應瀏覽器
    res.send('<h1> hello world </h1>')
})

// start the server
// 啟動伺服器
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

/* Step 3:
 * edit [path] to an appropriate value
 * notice that the static files are stored in `./dist/`
 * `express.static()` is used to server static files, google `express static` for more
 * `__dirname` is an environment variable in node.js, google `nodejs __dirname` for more
 * 將 [path] 修改成合適的值
 * 注意靜態檔案放在 `./dist` 目錄下
 * `express.static()` 專門用來處理靜態檔案，搜尋 `express static` 了解更多
 * `__dirname` 是 node.js 的環境變數，搜尋 `nodejs _-dirname` 了解更多
 */

// handle other urls
// 處理其它網址
app.use(express.static('dist'));

app.use(express.static(`${__dirname}/unit/index.html`))
