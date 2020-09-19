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
  var copyText = document.getElementById("qr-code")
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
handleChange();
