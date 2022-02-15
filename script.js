// Variable declaration

let input = document.querySelector("#input");
let output = document.querySelector("#output");
let checkBox = document.querySelector("#remove-numbers");
let separateWithDash = document.querySelector("#dash");
let separateWithUnderscore = document.querySelector("#underscore");
let generateSlug = document.querySelector("#generate-slug");
let clear = document.querySelector("#clear");
let reset = document.querySelector("#reset");
let copy = document.querySelector("#copy-button");
let copiedMessage = document.querySelector(".copied");

// Slug generator function

generateSlug.addEventListener("click", () => {
  let inputValue = input.value;

  //   removing all the spaces at he beginning and at the end

  inputValue = inputValue.replace(/^\s+|\s+$/g, "");

  //   Transforming all the text into lowercase

  inputValue = inputValue.toLowerCase();

  //   removing numbers and invalid characters if Remove numbers is checked, otherwise only the invalid characters

  if (checkBox.checked == true) {
    inputValue = inputValue.replace(/[^a-z -]/g, "");
  } else {
    inputValue = inputValue.replace(/[^a-z0-9 -]/g, "");
  }

  //   adding dash or underscore based on what is selected in the place of spaces

  if (separateWithDash.checked == true) {
    inputValue = inputValue.replace(/\s+/g, "-");
  } else {
    inputValue = inputValue.replace(/\s+/g, "_");
  }

  //   removing dash from the beginning and the end

  inputValue = inputValue.replace(/^-+/, "");
  inputValue = inputValue.replace(/-+$/, "");

  output.classList.remove("hide");
  output.value = inputValue;
});

// clear function

clear.addEventListener("click", () => {
  input.value = "";
  output.value = "";
  output.classList.add("hide");
});

// reset function

reset.addEventListener("click", () => {
  checkBox.checked = false;
  separateWithDash.checked = true;
  separateWithUnderscore.checked = false;
});

// copy function

copy.addEventListener("click", () => {
  /* Select the text field */

  output.select();

  /* Copy the text inside the text field */

  navigator.clipboard.writeText(output.value);

  /* Alert the copied text */

  copy.innerHTML = "<i class='fa-solid fa-clipboard'></i> COPIED";

  copiedMessage.innerHTML = "copied: " + output.value;

  copiedMessage.classList.add("show");

  setTimeout(function () {
    copiedMessage.classList.remove("show");
  }, 1000);
});
