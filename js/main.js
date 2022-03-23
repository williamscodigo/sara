/*
Jose W. Rivas
*/

/* ON DOCUMENT LOAD COMPLETED
1) deside on initial navbar menu
2) get and display browser information
3) make a one time call to JSONPlaceholder to retrieve all resources
*/
window.onload = (e) => {

    //call initialNavbarMenu()
    initialNavbarMenu();

    //call displayBroserInfo()
    displayBrowserInfo();

    //call getJSONPlaceholderResources
    getJSONPlaceholderResources();
};

//NAVBARMENU (SECTION)

const mobileMenu = document.querySelector(".mobile-menu");
const desktopMenu = document.querySelector(".desktop-menu");
let windowWidth = 0;

function initialNavbarMenu() {
    /* find out if mobile size or desktop to display menu */
    windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (windowWidth > 768) {
        mobileMenu.classList.replace("visible", "hidden");
        desktopMenu.classList.replace("hidden", "visible");
    }
}


/* navbarMenu (window.onresize) - optimization debouncing - debouncing window.onresize 
will only call the event handler after the event has stopped firing for a certain 
amount of time. */

let timeout = false; //holder for timeout id
let delay = 250; //delay after event is "complete" to run callback

window.addEventListener('resize', () => {
    //clear the timeout
    clearTimeout(timeout);
    //start timing for event "completion"
    timeout = setTimeout(navbarMenu, delay);
});

function navbarMenu() {
    /* recalculate size on window.onresize (mobile or desktop) to display menu */
    windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (windowWidth > 768) {
        mobileMenu.classList.replace("visible", "hidden");
        desktopMenu.classList.replace("hidden", "visible");
    } else {
        mobileMenu.classList.replace("hidden", "visible");
        desktopMenu.classList.replace("visible", "hidden");
    }
}

/* hamburger-menu (toggle) */
const toggleMenu = document.querySelector("#toggle-menu");
const menuIcon = document.querySelector("#toggle-menu img");
const menu = document.querySelector(".mobile-menu .menu");

toggleMenu.addEventListener('click', () => {
    if (toggleMenu.classList.contains("active")) {
        menuIcon.src = "./icons/x-icon.svg";
        menu.classList.replace("hidden", "visible");
        toggleMenu.classList.replace("active", "inactive");
    } else {
        menuIcon.src = "./icons/hamburger-menu.svg";
        menu.classList.replace("visible", "hidden");
        toggleMenu.classList.replace("inactive", "active");
    }
});


//BROWSER (SECTION)

const browserInfo = document.querySelector("#browser-info");

function displayBrowserInfo() {

    browserInfo.innerHTML = `
    <ul>
        <li>
            <span>userAgent</span>
            <span>${browserUserAgent()}</pan>
        </li>
        <li>
            <span>Language</span>
            <span>${navigator.language}</pan>
        </li>
        <li>
            <span>innerHeight</span>
            <span>${window.innerHeight}</pan>
        </li>
        <li>
            <span>innerWidth</span>
            <span>${window.innerWidth}</pan>
        </li>
        <li>
            <span>hostname</span>
            <span>${location.hostname}</pan>
        </li>
        <li>
            <span>pathname</span>
            <span>${location.pathname}</pan>
        </li>
        <li>
            <span>protocol</span>
            <span>${location.protocol}</pan>
        </li>
    </ul>`;
}

//Mozilla MDN snippet (to narrow down browser user agent)
function browserUserAgent() {
    let sBrowser, sUsrAg = navigator.userAgent;

    // The order matters here, and this may report false positives for unlisted browsers.

    if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
        // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
        sBrowser = "Samsung Internet";
        // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
        sBrowser = "Opera";
        // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "Microsoft Internet Explorer";
        // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Microsoft Edge (Legacy)";
        // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Edg") > -1) {
        sBrowser = "Microsoft Edge (Chromium)";
        // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome or Chromium";
        // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
        // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
        sBrowser = "unknown";
    }

    return sBrowser;
}


//SEARCH (SECTION)

//one time call to JSONPlaceholder resource (/photos)
const url = 'https://jsonplaceholder.typicode.com/photos';

function getJSONPlaceholderResources() {

    if (localStorage.data === undefined) { //if undefined create it.
        fetch(url)
            .then((response) => response.json())
            //store the object locally
            .then((json) => localStorage.data = JSON.stringify(json))
            //catch any error that occur during the api call
            .catch((err) => console.log(err));
    }
}

const searchBox = document.querySelector("search-box");
const reportBox = document.querySelector("#report");

searchBox.addEventListener('search', doSearch);

function doSearch(e) {
    if (e.detail === "") return; //if detail property is empty do nothing.

    //retrieve data from localStorage
    let data = []; //create an empty array
    data = JSON.parse(localStorage.data);

    if (data.length === 0) { //if there is no data in local storage return
        reportBox.innerHTML = "<p style='color:red;'>error: NO DATA FOUND<p>";
        return;
    }

    // compare search query with data (USING ARRAY HIGH ORDER FUNCTION)
    data = data.filter(obj => obj.title.includes(e.detail));
    if (data.length === 0) { //if no items match
        reportBox.innerHTML = "<p style='color:blue;'>NO MATCH WAS FOUND<p>";
        return;
    }
    //restrict result to 20 
    if (data.length > 20) data = data.splice(0, 19); //if array bigger than 20 take only first 20 elements
    let report = ""; //build report
    data.forEach(element => {
        report += `<div class="card-report" style="overflow: auto;">
                   <ul>
                   <li>#: ${element.id}</li>
                   <li>title: ${element.title}</li>
                   <li>url: <a href="${element.url}" target="_blank">${element.url}</a></li>
                   </ul>
                   </div>`;
    })
    reportBox.innerHTML = report;
}