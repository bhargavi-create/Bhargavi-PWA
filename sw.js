self.addEventListener("install", evt => {
    console.log("Service Worker is installed")
});
self.addEventListener("active", evt => {
    console.log("Service worker activated")
});
self.addEventListener("fetch", evt => {
    console.log("Service worker is fetched")
});