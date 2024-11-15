// ==UserScript==
// @name         blender
// @namespace    https://ducky4life.github.io/tgw
// @version      1.0.1
// @description  highlights and hides raider owned/not tagged regions on puree from a given list
// @author       Ducky
// @match        *://esfalsa.github.io/puree/*
// @match        *://esfalsa.github.io//puree/*
// @grant        none
// ==/UserScript==



// Configuration

// the script works on https://esfalsa.github.io/puree/ automatically
// press 'a' to toggle between modes
// press 's' to start the script on the list generator (https://esfalsa.github.io/puree/list)


// 'link' mode replaces regions in the list with the red links of the regions
// if you turn this off, the regions will be replaced with '(raider owned)' in red text
// turning this on gives more information, but is more distracting
// you can toggle between the modes by pressing 'a'
const linkMode = "on" // on/off


// region list, not case sensitive, seperate each word using spaces
const regions = [
    "Rosartemis",
    "abancay",
    "Alksearia",
    "The City of London",
    "Midnight Vales",
    "Frontier Alpha",
    "qosqo",
    "Separatist Alliance",
    "The Connector",
    "Rosacorp",
    "Raxus puppet storage",
    "One Collective Brain Cell",
    "Orca Farm",
    "Midnight Vale",
    "Regional Officers",
    "Ecclesia Sancti Georgii",
    "inkaa imperio",
    "Malphe",
    "Violet Irises",
    "Paichnidi",
    "Devide by Zero",
    "BBC",
    "Praeterea",
    "Chronicles",
    "Kyorgia puppet storage",
    "The City of Ba Sing Se",
    "Arstotskiano",
    "lil timmyland",
    "City of Berta",
    "region with the word Tractor in it",
    "gm19",
    "TrOwOns",
    "Sraqn Genc",
    "Nations Against Furries",
    "AntiAntifa",
    "Halcyona",
    "Listening to Creed in the garage at 3am",
    "United Fascist Territory of Waschuster",
    "Tropicana",
    "Portugal Livre",
    "Skibidi By Blood",
    "Mobius Prime",
    "Holy John Three",
    "The Dragons Bless",
    "The Colony of Yadom Kamus",
    "Freeland RP",
    "The United Oppressive Nations",
    "Anticentrism Union",
    "Pink Pandas",
    "LONG LIVE THE MINKEY GODS",
    "SPTOS",
    "Chessboard",
    "Organzation of Islamic and Turkic states",
    "Las tierras Eternas",
    "Free Ocala",
    "North Africa",
    "Black Roses",
    "ben",
    "gdpoper",
    "Neu Mittleleuropa",
    "Jimothy",
    "Global Third Position",
    "lets see how fast rosa snatches this",
    "Arda en Estel",
    "Tushonka",
    "Hyperion"
];



// Code

// /(https:\/\/www\.nationstates\.net\/.*)/ : all region pages
// /(https:\/\/www\.nationstates\.net\/region=)/ : excluding region names
// /(.*\(raider owned\).*)/ : everything surrounding (raider owned)


var toggler = "off"


// auto
if (linkMode === "on") { // off to link
    document.querySelectorAll("a").forEach((link) => {
        const regionReg = `.*${regions.join("|.*")}`
        var raider = link.innerHTML.replace(RegExp(regionReg, "i"), '<i style="color: red">' + link + '</i>')
        toggler = "atLink"
        link.innerHTML = raider
    });
}

else { // off to raider
  document.querySelectorAll("a").forEach((link) => {
      link.innerHTML = link.innerHTML.replace(RegExp(`${regions.join("|")}`, "i"), '<i style="color: red">(raider owned)</i>')
      toggler = "atRaider"
  });
}



// toggle/list generator
document.addEventListener("keyup", function (event) {
	if (event.shiftKey || event.ctrlKey || event.altKey || document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
		return;
	} else {
		switch (event.code) {


            // toggle
            case "KeyA":

            if (toggler === "atLink") { // raider to link
                document.querySelectorAll("a").forEach((link) => {
                    var raider = link.innerHTML.replace(/(https:\/\/www\.nationstates\.net\/.*)/, '<i style="color: red">(raider owned)</i>')
                    toggler = "atRaider"
                    link.innerHTML = raider
                });
            }

            else { // link to raider
                document.querySelectorAll("a").forEach((link) => {
                    link.innerHTML = link.innerHTML.replace(/(.*\(raider owned\).*)/, '<i style="color: red">' + link + '</i>')
                    toggler = "atLink"
                });
            }
            break;



            // list generator
            case "KeyS":

            if (linkMode !== "on") { // off to raider
                document.querySelectorAll("a").forEach((link) => {
                    const regionReg = `.*${regions.join("|.*")}`
                    var raider = link.innerHTML.replace(RegExp(regionReg, "i"), '<i style="color: red">(raider owned)</i>')
                    toggler = "atRaider"
                    link.innerHTML = raider
                });
            }

            else if (linkMode === "on") { // off to link
                document.querySelectorAll("a").forEach((link) => {
                    const regionReg = `.*${regions.join("|.*")}`
                    link.innerHTML = link.innerHTML.replace(RegExp(regionReg, "i"), '<i style="color: red">' + link + '</i>')
                    toggler = "atLink"
                });
            }
            break;
        }
	}
});
