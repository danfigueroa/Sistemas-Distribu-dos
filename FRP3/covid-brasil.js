function covid() {
  const ufInput = document.getElementById('userUf').value

  const api_url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/' + ufInput

  async function getInfoCovid() {
    const response = await fetch(api_url)
    const data = await response.json()
    const { uf, cases, deaths, suspects, refuses, datetime } = data

    document.getElementById('uf').textContent = uf
    document.getElementById('cases').textContent = cases
    document.getElementById('deaths').textContent = deaths
    document.getElementById('suspects').textContent = suspects
    document.getElementById('refuses').textContent = refuses
    document.getElementById('datetime').textContent = datetime

  }
  getInfoCovid()
}


