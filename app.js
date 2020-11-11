function callApi(stateCodes, limit) {
  const APIKEY = "Gdeh0SE7874tZwUPggm9JbIfdvrUKdAGrlac8JSx";
  const url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCodes}&api_key=${APIKEY}&limit=${limit}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayResults(data));
}

function displayResults(results) {
  $("#results").html("");
  for (let i = 0; i < results.data.length; i++) {
    $("#results").append(`
        <div class="result">
            <h3>${results.data[i].fullName}</h3>
            <p>${results.data[i].description}</p>
            <a href="${results.data[i].url}" target="_blank">Website</a>
        </div>
      `);
  }
}

function watchForm() {
  $("form").submit(function (e) {
    e.preventDefault();
    const states = $("#stateInput").val();
    const limit = $("#limitInput").val();
    callApi(states, limit);
  });
}

$(watchForm);
