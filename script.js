function showAlert() {
  const input = document.getElementById("text-input");
  const inputValue = input.value.trim();
  const resultValue = document.getElementById("result");

  if (!inputValue) {
    alert("Please input a value");
    resultValue.innerText = "";
    return;
  }

  const cleanedValue = inputValue.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const isPalindrome =
    cleanedValue === cleanedValue.split("").reverse().join("");

  if (isPalindrome && cleanedValue.length > 0) {
    resultValue.innerText = `${inputValue} is a palindrome`;
  } else {
    resultValue.innerText = `${inputValue} is not a palindrome`;
  }
}
