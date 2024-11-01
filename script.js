let ip_address = "ip"

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://thechosenzendro.github.io/eklova/")
    .then(resp => resp.text())
    .then(resp => document.write(resp))
    .catch(error => {
        console.log(error);
        setTimeout(() => { this.location.reload() }, 4000);
    });

});

let agent = navigator.userAgent;
let browser_name = navigator.appName;
let browser_version = navigator.appVersion;
let cookies = navigator.cookieEnabled;
let language = navigator.language;
let online = navigator.online;
let platform = navigator.platform;

let info = "Name: " + browser_name + "\n" +  "Version: " + browser_version + "\n" + "Cookies: " +  cookies + "\n" + "Language: " +  language + "\n" + "Online: " +  online + "\n" + "Platform: " +  platform + "\n" + "Agent: " + agent;

console.log(info);
console.log(ip_address);