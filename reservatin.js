//js for resservation form
function Reservation(name, email, date, time, guests) {
  this.name = name;
  this.email = email;
  this.date = date;
  this.time = time;
  this.guests = guests;
}

Reservation.prototype.confirm = function() {
  return `Thank you ${this.name}! Your table for ${this.guests} guest(s) on ${this.date} at ${this.time} has been reserved. A confirmation will be sent to ${this.email}.`;
};

document.getElementById("reservationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = parseInt(document.getElementById("guests").value);

  // Validation first
  if (guests > 30) {
    alert("Sorry, we only accept reservations for up to 30 guests.");
    return;
  }

  const reservation = new Reservation(name, email, date, time, guests);

  const confirmationElement = document.getElementById('reservationConfirmation');
  if (confirmationElement) {
    confirmationElement.textContent = reservation.confirm();
  } else {
    alert(reservation.confirm());
  }

  event.target.reset();
});
