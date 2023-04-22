require("../models/database");
const Category = require("../models/Category");
const Location = require("../models/Location");
const Booking = require("../models/Booking");
const Cars = require("../models/Cars");
const Comment = require("../models/Comments");



// Get our homepage at /
exports.home = async (req, res) => {
  res.render("index", {css : "css/home.css", title: 'FZ Cars - Home'});
};


// Get our catalogue at /catalogue
exports.exploreCatalogue = async (req, res) => {

  try {
    const limitCategoriesNumber = 5;
    const categories = await Category.find().limit(limitCategoriesNumber);
    res.render("catalogue", { title: 'FZ Cars - Catalogue', categories});
  } catch (error) {
    res.satus(500).send({message: error.message || "Some error occurred while retrieving categories."});
  }
  
};

// Get our catalogue at /all-brands
exports.exploreAllBrands = async (req, res) => {

  try {
    const limitCategoriesNumber = 5;
    const categories = await Category.find().limit(limitCategoriesNumber);
    res.render("allBrands", { title: 'FZ Cars - Roaster', categories});
  } catch (error) {
    res.satus(500).send({message: error.message || "Some error occurred while retrieving categories."});
  }
  
};


async function addDummyData() {
  try {
    const location = new Location({
      city: 'New York City',
      state: 'New York',
      country: 'United States'
    });
  
    await location.save();
  
    const car1 = new Car({
      name: 'Ford Mustang',
      description: 'A classic American muscle car',
      location: location,
      brand: 'Ford',
      comments: null,
      availability: {
        isAvailable: true,
        user: null
      },
      bookingHistory: [
        {
          startDate: new Date('2023-05-01'),
          endDate: new Date('2023-05-05')
        },
        {
          startDate: new Date('2023-06-01'),
          endDate: new Date('2023-06-05')
        }
      ],
      numberOfTimesBooked: 2,
      image: 'ford-mustang.jpg'
    });
  
    const car2 = new Car({
      name: 'Tesla Model S',
      description: 'A high-performance electric car',
      location: location,
      brand: 'Tesla',
      comments: null,
      availability: {
        isAvailable: true,
        user: null
      },
      bookingHistory: [
        {
          startDate: new Date('2023-07-01'),
          endDate: new Date('2023-07-05')
        }
      ],
      numberOfTimesBooked: 1,
      image: 'tesla-model-s.jpg'
    });

    const car3 = new Car({
      name: 'Tesla model Y',
      description: 'Feel the electric going through your veins',
      location: location,
      brand: 'Tesla',
      comments: null,
      availability: {
        isAvailable: true,
        user: null
      },
      bookingHistory: [
        {
          startDate: new Date('2023-05-01'),
          endDate: new Date('2023-05-05')
        },
        {
          startDate: new Date('2023-06-01'),
          endDate: new Date('2023-06-05')
        }
      ],
      numberOfTimesBooked: 2,
      image: 'tesla-model-y.jpg'
    });

    const car4 = new Car({
      name: 'Toyota Camry',
      description: 'Brand New Toyota Camry Hybrid LE 2.5 Litre, 4-Cylinder, 7” Touch Screen, 6-Speakers, Leather Seat, Dual Zone Automatic Climate Control, Heated Power Adjustable 8-Way Driver Seat, Heated Manual 6-Way Front Passenger Seat, Keyless Entry with Trunk Release, 17” Aluminum Alloy Wheels & P215/55R17 All-Season Tires, LED Rear Combination Lamps with Black Accents, Daytime Running Lights, Clearance Lamps',
      location: location,
      brand: 'Toyota',
      comments: null,
      availability: {
        isAvailable: true,
        user: null
      },
      bookingHistory: [
        {
          startDate: new Date('2022-04-01'),
          endDate: new Date('2022-04-05')
        },
        {
          startDate: new Date('2022-06-01'),
          endDate: new Date('2022-06-05')
        }
      ],
      numberOfTimesBooked: 2,
      image: 'toyota-camry.jpg'
    });

    const car5 = new Car({
      name: 'Mercedes Benz C250',
      description: 'You know the feeling in a benzo',
      location: location,
      brand: 'Mercedes Benz',
      comments: null,
      availability: {
        isAvailable: true,
        user: null
      },
      bookingHistory: [
        {
          startDate: new Date('2022-04-01'),
          endDate: new Date('2022-04-05')
        },
        {
          startDate: new Date('2022-06-01'),
          endDate: new Date('2022-06-05')
        }
      ],
      numberOfTimesBooked: 2,
      image: 'mercedes-benz-c250.jpg'
    });
  
    await Cars.insertMany([car1, car2, car3, car4, car5]);
  
    console.log('Dummy data added successfully');
  } catch (error) {
    res.status(500).send({message: error.message || "Some error occurred while adding dummy data."});
  }
}