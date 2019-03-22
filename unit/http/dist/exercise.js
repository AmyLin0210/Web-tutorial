$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()
    // Step 9 and step 10 code goes here

    /* Step 9:
    * edit the `$.get()` in the last code snippet with this code snippet
    * edit [element selector]s to appropriate values
    * the second argument of `$.get()` specifies the data sent to server
    * notice the link from html `fName` to server `fname`
    *  `fName` in `./dist/exercise.html` vs. `fname` in `./ser.js`
    *  packing data explicitly is troublesome, but it brings flexibility
    * open `[host]:[port]/exercise.html` in a browser and open the network tab of the developer console
    * click the ajax submit button and see the request
    * 修改上一個程式碼片段的 `$.get()` ，加上下面的程式碼的內容
    * 修改 `element selector` 成適合的值
    *  `$.get()` 的第二個參數，用來將資料送給伺服器
    * 特別注意 html 中的 `fName` 和伺服器端的 `fname` 兩者之間的連結
    *  `./dist/exercise.html` 中的 `fName` vs. `./ser.js` 中的 `fname`
    *  明確的打包資料確實很麻煩，但是他能夠帶來更大的延展性
    * 在瀏覽器中打開 `[host]:[port]/exercise.html` ，開啟開發者工具（F12）並切到 network 的分頁，觀察開發者日誌
    * 點擊 ajax 的提交按鈕，並且觀察 request
    */
    $.get('./step5', {
      fname: $("#ajax-form")[0][0].value,
      lname: $("#ajax-form")[0][1].value,
    })

    /* Step 10:
    * edit the `$.get()` in the code snippet of step 9 with this code snippet
    * the third argument of `$.get()` is a callback function, which is called whenever server responses
    * the first argument of the callback function is the data retruned by server
    * edit [show data in div#ajax-output] to an appropriate
    * open `[host]:[port]/exercise.html` in a browser, click the ajax submit button and see the result
    */
    $.get('./step5', {
      fname: $("#ajax-form")[0][0].value,
      lname: $("#ajax-form")[0][1].value,
    }, (data) => {
      $("#ajax-output").text( data );
    })


    $.get('./step5')

    // Step 11 code goes here

    /* Step 11:
    * edit [timeout] to an appropriate value
    * if you don't know which code snippet (last or this) update `div#ajax-output` first, that is asyncronous
    */
    setTimeout(() => {
      $('#ajax-output').html('loading')
    }, 1000)
  })
});
