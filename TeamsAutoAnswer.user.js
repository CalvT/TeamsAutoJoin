// ==UserScript==
// @name         TeamsAutoAnswer
// @version      0.1
// @author       Calvin Tomkins
// @match        https://teams.microsoft.com/_
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/CalvT/TeamsAutoAnswer/main/TeamsAutoAnswer.user.js
// @updateURL    https://raw.githubusercontent.com/CalvT/TeamsAutoAnswer/main/TeamsAutoAnswer.user.js
// ==/UserScript==

(function() {
    'use strict';

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let joina = 0;

    function joincheck() {
        let joinb = document.getElementsByClassName("join-btn");
        joina = joinb.length;
    }

    async function setView() {
        await sleep(10000);
        document.getElementById("callingButtons-showMoreBtn").click();
        await sleep(2000);
        document.getElementById("grid-switch-layout-button").click();
    }

    var repeater = setInterval(function () {
        if (joina < 1) {
            joincheck();
        } else {
            clearInterval(repeater);
            document.getElementsByClassName("join-btn")[0].click();;
            setView();
        }
    }, 1000);

})();
