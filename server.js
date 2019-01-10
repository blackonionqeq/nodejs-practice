var http = require("http")
var url = require('url')

function start(route, handle){
  function onRequest(request, response) {
    // var postData = ''
    var pathName = url.parse(request.url).pathname
    // cancel the request for favicon.ico
    if(pathName == '/favicon.ico')
      return
    console.log('Request for ' + pathName + ' received.')

    // request.setEncoding('utf8')

    // request.addListener('data', function(postDataChunk) {
    //   postData += postDataChunk
    //   console.log('Received POST data chunk' + postDataChunk + '.')
    // })

    // request.addListener('end', function() {
    //   route(handle, pathName, response, postData)
    // })

    route(handle, pathName, response, request)

  // response.writeHead(200, {"Content-Type": "text/plain"})
    // let content = route(handle, pathName)
    // response.write(content)
    // response.end();
  }
  http.createServer(onRequest).listen(8888)
  console.log("Server has started.")
}

exports.start = start