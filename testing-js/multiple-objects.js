function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function(){
  return this.rooms - this.booked;
  };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel(' Park', 120, 77);

var details1 = quayHotel.name + ' Available rooms: ';
details1 += quayHotel.checkAvailability();

var hotelName_h1 = document.getElementById('hotelName');
hotelName_h1.textContent = details1;
