var hotel = new Object();

hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked = 25;

hotel.name = "Frank";
// delete hotel.name;


hotel.checkAvailability = function(){
  return this.rooms - this.booked;
}

var hotelName = document.getElementById('hotelName');
hotelName.textContent = hotel.name;
//
// var hotelrooms = document.getElementById('rooms');
// rooms.textContent = hotel.rooms;
//
// var bookedRooms = document.getElementById('bookedRooms');
// bookedRooms.textContent = hotel.booked;

var availableRooms = document.getElementById('availableRooms');
availableRooms.textContent = hotel.checkAvailability();
