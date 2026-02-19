function showGreeting() {
    const greetingElement = document.getElementById ("greeting");
    const greetingMessageEl = document.getElementById("greetingMessage");

    let greetingText = "";
    let messageText = "";

  const now = new Date();
  const hours = now.getHours();

  if (hours >= 5 && hours < 12) {
    greetingText = "Good Morning 🌅";
    messageText = "Start your day with a fresh cup of coffee and breakfast!";
  } else if (hours >= 12 && hours < 17) {
    greetingText = "Good Afternoon 🌞";
    messageText = "Enjoy a delicious lunch from our menu.There is really alot to choose from!";
  } else if (hours >= 17 && hours < 21) {
    greetingText = "Good Evening 🌇";
    messageText = "Time for a relaxing dinner and a treat maybe bring a date too!";
  } else {
    greetingText = "Hello Night person 🌚";
    messageText = "Craving a late snack or dessert? We've got you covered!";
  }
  
  greetingElement.textContent = greetingText;
  greetingMessageEl.textContent = messageText;
}
window.addEventListener("DOMContentLoaded", function show() {
  showGreeting();
});






