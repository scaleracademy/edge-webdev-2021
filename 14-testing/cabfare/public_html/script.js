const dispFare = document.getElementById('dispFare');
const inpKm = document.getElementById('inpKm');
const inpMin = document.getElementById('inpMin');
const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.onclick = function () {
  const kms = inpKm.value;
  const mins = inpMin.value;

  axios.get(`/fare?kms=${kms}&mins=${mins}`)
    .then((resp) => {
      dispFare.innerText = `Fare : Rs. ${resp.data.fare}`
    });
};