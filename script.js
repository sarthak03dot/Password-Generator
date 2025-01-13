function generatePassword(length) {
  if (length < 4) {
    throw new Error("Password length must be at least $ character.");
  }

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const special = "!@#$%^&*_+|;:,.<>?/";
  const allCharacter = lower + upper + digits + special;

  let password = [
    lower[Math.floor(Math.random() * lower.length)],
    upper[Math.floor(Math.random() * upper.length)],
    digits[Math.floor(Math.random() * digits.length)],
    special[Math.floor(Math.random() * special.length)],
  ];

  for (let i = 4; i < length; i++) {
    password.push(
      allCharacter[Math.floor(Math.random() * allCharacter.length)]
    );
  }

  password = password.sort(() => {
    Math.random() - 0.5;
  });
  return password.join("");
}

function generatePasswordHandler() {
  const password = generatePassword(10);
  document.getElementById("password").value = password;
}
document
  .querySelector("button")
  .addEventListener("click", generatePasswordHandler);

function copyPassword() {
  const filledPassword = document.getElementById("password");
  filledPassword.select();
  navigator.clipboard
    .writeText(filledPassword.value)
    .then(() => {
      alert("Password copied to clipboard!.");
    })
    .catch((err) => {
      alert("Failed to copy password:", err);
    });
}
