const convertBtn = document.getElementById("convert-btn")
const inputNum = document.getElementById("input-num")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    let input = Number(inputNum.value)
    
    let metersToFeet = (input * 3.281).toFixed(3)
    let feetToMeters = (input / 3.281).toFixed(3)

    let litersToGallons = (input * 0.264).toFixed(3)
    let gallonsToLiters = (input / 0.264).toFixed(3)

    let kilosToPounds = (input * 2.204).toFixed(3)
    let poundsToKilos = (input / 2.204).toFixed(3)

    lengthEl.textContent = `${input} meters = ${metersToFeet} feet | ${input} feet = ${feetToMeters} meters`
    volumeEl.textContent = `${input} liters = ${litersToGallons} gallons | ${input} gallons = ${gallonsToLiters} liters`
    massEl.textContent = `${input} kilos = ${kilosToPounds} pounds | ${input} pounds = ${poundsToKilos} kilos`
})

