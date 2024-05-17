const charge = $.querySelector(".charge span")
const chargeIcon = $.querySelector(".charge i")

let userBattery = navigator.getBattery().then((res) => showUserCharge(res))

const showUserCharge = (data) => {
  setInterval(() => {
    if (data) {
      const chargePercent = (data.level * 100).toFixed(0)
      const isCharging = data.charging

      charge.innerHTML = chargePercent + "%"

      chargeIcon.className = isCharging
        ? "bi bi-battery-charging"
        : chargePercent < 20
        ? "bi bi-battery"
        : "bi bi-battery-half"

      if (chargePercent < 20) {
        charge.style.color = "#F60002"
        chargeIcon.style.color = "#F60002"
      } else if (chargePercent == 100) {
        charge.style.color = "#00BE00"
        chargeIcon.style.color = "#00BE00"
      }
    }
  }, 1000)
}
