const userAgent = new UAParser()

const userAgentResult = userAgent.getResult()

fetch("http://localhost:8000/visit-site", {
  method: "POST",
  body: JSON.stringify(userAgentResult),
  headers: {
    "Content-Type": "application/json",
  },
})
