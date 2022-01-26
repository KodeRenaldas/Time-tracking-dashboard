const dailyB = document.querySelector(".profile-link-daily")
const weeklyB = document.querySelector(".profile-link-weekly")
const monthlyB = document.querySelector(".profile-link-monthly")
const workDot = document.querySelector(".work-dot")
const playDot = document.querySelector(".play-dot")
const studyDot = document.querySelector(".study-dot")
const exerciseDot = document.querySelector(".exercise-dot")
const socialDot = document.querySelector(".social-dot")
const selfCareDot = document.querySelector(".self-care-dot")

/* HIDE CARD FUNCTION FOR EACH BUTTON */

function hideCardWork() {
  if (document.querySelector(".work-hours").classList.contains("displayNone") && document.querySelector(".work-last-week").classList.contains("displayNone")) {
    document.querySelector(".work-hours").classList.remove("displayNone")
    document.querySelector(".work-last-week").classList.remove("displayNone")
  }
  else {
    document.querySelector(".work-hours").classList.add("displayNone")
    document.querySelector(".work-last-week").classList.add("displayNone")
  }
}
function hideCardPlay() {
  if (document.querySelector(".play-hours").classList.contains("displayNone") && document.querySelector(".play-last-week").classList.contains("displayNone")) {
    document.querySelector(".play-hours").classList.remove("displayNone")
    document.querySelector(".play-last-week").classList.remove("displayNone")
  }
  else {
    document.querySelector(".play-hours").classList.add("displayNone")
    document.querySelector(".play-last-week").classList.add("displayNone")
  }
}
function hideCardStudy() {
  if (document.querySelector(".study-hours").classList.contains("displayNone") && document.querySelector(".study-last-week").classList.contains("displayNone")) {
    document.querySelector(".study-hours").classList.remove("displayNone")
    document.querySelector(".study-last-week").classList.remove("displayNone")
  }
  else {
    document.querySelector(".study-hours").classList.add("displayNone")
    document.querySelector(".study-last-week").classList.add("displayNone")
  }
}
function hideCardExercise() {
  if (document.querySelector(".exercise-hours").classList.contains("displayNone") && document.querySelector(".exercise-last-week").classList.contains("displayNone")) {
    document.querySelector(".exercise-hours").classList.remove("displayNone")
    document.querySelector(".exercise-last-week").classList.remove("displayNone")
  }
  else {
    document.querySelector(".exercise-hours").classList.add("displayNone")
    document.querySelector(".exercise-last-week").classList.add("displayNone")
  }
}
function hideCardSocial() {
  if (document.querySelector(".social-hours").classList.contains("displayNone") && document.querySelector(".social-last-week").classList.contains("displayNone")) {
    document.querySelector(".social-hours").classList.remove("displayNone")
    document.querySelector(".social-last-week").classList.remove("displayNone")
  }
  else {
    document.querySelector(".social-hours").classList.add("displayNone")
    document.querySelector(".social-last-week").classList.add("displayNone")
  }
}
function hideCardSelfCare() {
  if (document.querySelector(".self-care-hours").classList.contains("displayNone") && document.querySelector(".self-care-last-week").classList.contains("displayNone")) {
    document.querySelector(".self-care-hours").classList.remove("displayNone")
    document.querySelector(".self-care-last-week").classList.remove("displayNone")
  }
  else {
    document.querySelector(".self-care-hours").classList.add("displayNone")
    document.querySelector(".self-care-last-week").classList.add("displayNone")
  }
}
workDot.addEventListener("click", hideCardWork)
playDot.addEventListener("click", hideCardPlay)
studyDot.addEventListener("click", hideCardStudy)
exerciseDot.addEventListener("click", hideCardExercise)
socialDot.addEventListener("click", hideCardSocial)
selfCareDot.addEventListener("click", hideCardSelfCare)

/* DAILY NUM */

function dailyEvent() {
  dailyB.classList.add("active")
  weeklyB.classList.remove("active")
  monthlyB.classList.remove("active")
  fetch("data.json")
    .then(res => {
      if (!res.ok) {
        throw Error ("Could not load data")
      }
      return res.json()
    })
    .then(data => {
      document.querySelector(".work-hours").innerHTML = `${data[0].timeframes.daily.current}Hrs`
      document.querySelector(".work-last-week").innerHTML = `Last-week - ${data[0].timeframes.daily.previous}hrs`
      document.querySelector(".play-hours").innerHTML = `${data[1].timeframes.daily.current}Hrs`
      document.querySelector(".play-last-week").innerHTML = `Last-week - ${data[1].timeframes.daily.previous}hrs`
      document.querySelector(".study-hours").innerHTML = `${data[2].timeframes.daily.current}Hrs`
      document.querySelector(".study-last-week").innerHTML = `Last-week - ${data[2].timeframes.daily.previous}hrs`
      document.querySelector(".exercise-hours").innerHTML = `${data[3].timeframes.daily.current}Hrs`
      document.querySelector(".exercise-last-week").innerHTML = `Last-week - ${data[3].timeframes.daily.previous}hrs`
      document.querySelector(".social-hours").innerHTML = `${data[4].timeframes.daily.current}Hrs`
      document.querySelector(".social-last-week").innerHTML = `Last-week - ${data[4].timeframes.daily.previous}hrs`
      document.querySelector(".self-care-hours").innerHTML = `${data[5].timeframes.daily.current}Hrs`
      document.querySelector(".self-care-last-week").innerHTML = `Last-week - ${data[5].timeframes.daily.previous}hrs`
    })
    .catch(err => console.error(err))
}
dailyB.addEventListener("click", dailyEvent)

/* WEEKLY NUN */

function weeklyEvent() {
  weeklyB.classList.add("active")
  dailyB.classList.remove("active")
  monthlyB.classList.remove("active")
  fetch("data.json")
    .then(res => {
      if (!res.ok) {
        throw Error ("Could not load data")
      }
      return res.json()
    })
    .then(data => {
      document.querySelector(".work-hours").innerHTML = `${data[0].timeframes.weekly.current}Hrs`
      document.querySelector(".work-last-week").innerHTML = `Last-week - ${data[0].timeframes.weekly.previous}hrs`
      document.querySelector(".play-hours").innerHTML = `${data[1].timeframes.weekly.current}Hrs`
      document.querySelector(".play-last-week").innerHTML = `Last-week - ${data[1].timeframes.weekly.previous}hrs`
      document.querySelector(".study-hours").innerHTML = `${data[2].timeframes.weekly.current}Hrs`
      document.querySelector(".study-last-week").innerHTML = `Last-week - ${data[2].timeframes.weekly.previous}hrs`
      document.querySelector(".exercise-hours").innerHTML = `${data[3].timeframes.weekly.current}Hours`
      document.querySelector(".exercise-last-week").innerHTML = `Last-week - ${data[3].timeframes.weekly.previous}hrs`
      document.querySelector(".social-hours").innerHTML = `${data[4].timeframes.weekly.current}Hrs`
      document.querySelector(".social-last-week").innerHTML = `Last-week - ${data[4].timeframes.weekly.previous}hrs`
      document.querySelector(".self-care-hours").innerHTML = `${data[5].timeframes.weekly.current}Hrs`
      document.querySelector(".self-care-last-week").innerHTML = `Last-week - ${data[5].timeframes.weekly.previous}hrs`
    })
    .catch(err => console.error(err))
}
weeklyB.addEventListener("click", weeklyEvent)

/* MONTHLY NUM */

function monthlyEvent() {
  dailyB.classList.remove("active")
  weeklyB.classList.remove("active")
  monthlyB.classList.add("active")
  fetch("data.json")
    .then(res => {
      if (!res.ok) {
        throw Error ("Could not load data")
      }
      return res.json()
    })
    .then(data => {
      document.querySelector(".work-hours").innerHTML = `${data[0].timeframes.monthly.current}Hrs`
      document.querySelector(".work-last-week").innerHTML = `Last-week - ${data[0].timeframes.monthly.previous}hrs`
      document.querySelector(".play-hours").innerHTML = `${data[1].timeframes.monthly.current}Hrs`
      document.querySelector(".play-last-week").innerHTML = `Last-week - ${data[1].timeframes.monthly.previous}hrs`
      document.querySelector(".study-hours").innerHTML = `${data[2].timeframes.monthly.current}Hrs`
      document.querySelector(".study-last-week").innerHTML = `Last-week - ${data[2].timeframes.monthly.previous}hrs`
      document.querySelector(".exercise-hours").innerHTML = `${data[3].timeframes.monthly.current}Hrs`
      document.querySelector(".exercise-last-week").innerHTML = `Last-week - ${data[3].timeframes.monthly.previous}hrs`
      document.querySelector(".social-hours").innerHTML = `${data[4].timeframes.monthly.current}Hrs`
      document.querySelector(".social-last-week").innerHTML = `Last-week - ${data[4].timeframes.monthly.previous}hrs`
      document.querySelector(".self-care-hours").innerHTML = `${data[5].timeframes.monthly.current}Hrs`
      document.querySelector(".self-care-last-week").innerHTML = `Last-week - ${data[5].timeframes.monthly.previous}hrs`
    })
    .catch(err => console.error(err))
}
monthlyB.addEventListener("click", monthlyEvent)

//Need experimenting with, somehow make input box appear
async function getJson() {
  let response = await fetch("data.json")
  let hours = await response.json()
  hours[0].timeframes.daily.current = 21
  console.log(hours[0].timeframes.daily.current)
}
getJson()