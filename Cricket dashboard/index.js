let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeCount = 0
let guestCount = 0

function addh1() {
    homeCount += 1
    homeEl.textContent = homeCount
}
function addh2() {
    homeCount += 2
    homeEl.textContent = homeCount
}
function addh4() {
    homeCount += 4
    homeEl.textContent = homeCount
}
function addh6() {
    homeCount += 6
    homeEl.textContent = homeCount
}
function addg1() {
    guestCount += 1
    guestEl.textContent = guestCount
}
function addg2() {
    guestCount += 2
    guestEl.textContent = guestCount
}
function addg4() {
    guestCount += 4
    guestEl.textContent = guestCount
}
function addg6() {
    guestCount += 6
    guestEl.textContent = guestCount
}

function clearb() {
    guestCount = 0
    homeCount = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}