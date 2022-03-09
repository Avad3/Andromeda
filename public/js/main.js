var corrosionproxy = window.location.protocol + "//" + window.location.hostname + "/palladium/gateway?url="

var palladiumproxy = window.location.protocol + "//" + window.location.hostname + "/corrosion/gateway?url="

function getproxy(url) {
    var currentproxy = localStorage.getItem("proxy")
    if (currentproxy == "Palladium") {
    return palladiumproxy + url
    } else if (currentproxy == "Corrosion") {
    return corrosionproxy + url
    }
}

function open(url) {
    if (localStorage.getItem("proxy") !== null) {
    var site = document.getElementById("site");
    var closesite = document.getElementById("closesite");
    var reloadsite = document.getElementById("reloadsite");
    site.style.display = "initial";
    closesite.style.display = "initial";
    reloadsite.style.display = "initial";
    site.setAttribute("src", getproxy(url));
    document.getElementById("search").value = "";
    }
}

window.onload = function() {
    search = document.getElementById("search");
    search.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        go(search.value)}
    });
};

function closesurf() {
    var site = document.getElementById("site");
    var closesite = document.getElementById("closesite");
    var reloadsite = document.getElementById("reloadsite");
    site.style.display = "none";
    closesite.style.display = "none";
    reloadsite.style.display = "none";
    site.setAttribute("src", "");
    }
    
    function reloadsurf() {
    var site = document.getElementById("site");
    site.contentWindow.location.reload()
    }

    window.addEventListener('load', function() {
        var currentproxy = localStorage.getItem("proxy")
        var palladium = document.getElementById("palladium")
        var corrosion = document.getElementById("corrosion")
        
        if (localStorage.getItem("proxy") !== null) {
        var currentproxy2 = currentproxy.toLowerCase()
        document.getElementById(currentproxy2).classList.add("proxysel")
        }
        
        })
        
        function setproxy(proxy) {
        localStorage.setItem("proxy", proxy)
        if (proxy == "Palladium") {
        palladium.classList.add("proxysel")
        corrosion.classList.remove("proxysel")
        } else if (proxy == "Corrosion") {
        palladium.classList.remove("proxysel")
        corrosion.classList.add("proxysel")
        }
        }