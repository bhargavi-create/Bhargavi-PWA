if("serviceWorker" in navigator){
    navigator.serviceWorker.register("/sw.js")
    .then((reg) => console.log("Service worker registerd"))
    .catch((err) => console.log("Service worker not working"))
}