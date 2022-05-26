// ==UserScript==
// @name         TeamsAutoJoin
// @description  AutoJoin meetings in Microsoft Teams Web once meeting link is activated, and once joined, configure settings automatically.
// @version      0.3
// @author       Calvin Tomkins
// @match        https://teams.microsoft.com/_
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/CalvT/TeamsAutoJoin/main/TeamsAutoJoin.user.js
// @updateURL    https://raw.githubusercontent.com/CalvT/TeamsAutoJoin/main/TeamsAutoJoin.user.js
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

    function activateinputs() {
        let videoa = document.getElementById('video-button').getAttribute('aria-label');
        let mica = document.getElementById('microphone-button').getAttribute('aria-label');
        if(videoa == 'Turn camera on') {
            document.getElementById('video-button').click();
        }
        if(mica == 'Unmute') {
            document.getElementById('microphone-button').click();
        }
    }

    async function setView() {
        await sleep(10000);
        document.getElementById("callingButtons-showMoreBtn").click();
        await sleep(2000);
        document.getElementById("grid-switch-layout-button").click();
        await sleep(2000);
        activateinputs();
    }

    var joinloopcheck = setInterval(function () {
        if (joina < 1) {
            joincheck();
        } else {
            clearInterval(joinloopcheck);
            document.getElementsByClassName("join-btn")[0].click();;
            setView();
        }
    }, 1000);

})();
