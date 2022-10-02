let URL = "http://127.0.0.1:5000/"

var link_json_array = getURLs();

checkGPC(URL, link_json_array)
    .then(res => res.json())
    .then(data => {
        insert_gpc_icon(data);
    })
    .catch((error) => {
        console.error(error);
    });


async function checkGPC(url, links) {
    console.log("links")
    console.log(links)
    console.log("url")
    console.log(url)
    var response = await fetch(url, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: links
    })
    console.log("response")
    console.log(response)
    return response;
}
