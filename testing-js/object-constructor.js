var hotel = new Object();

hotel.name = "Park";
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
};


var hotelName_h1 = document.getElementById('hotelName');
hotelName_h1.textContent = hotel.name;

var availableRooms_h1 = document.getElementById('availableRooms');
availableRooms_h1.textContent = hotel.checkAvailability();
