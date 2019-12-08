# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users=User.create([
  {
    username: "kahil",
    email:"kahilnayton@gmail.com",
    password:"qweqwe"
  },
  {
    username: "tim",
    email:"timnayton@yahoo.com",
    password:"123456"
  },
  {
    username: "alina",
    email:"alinanayton@gmail.com",
    password:"qwerty"
  }
])
puts users[0].username
animals = Animal.create([
  {
    title: "Labrador Retriever",
    description: "Found on the streets of Brooklyn, needs a good home. No signes of agression",
    age: 3,
    sex:"Female",
    default_image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231410/Labrador-Retriever-On-White-01.jpg',
    user_id: 1
  },
  {
    title: "Pug",
    description: "He's a bit grumpy, but generally a good boy",
    age: 1,
    sex:"Male",
    default_image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Mops_oct09_cropped2.jpg',
    user_id: 1
  },
  {
    title: "Bengal Cat",
    description: "Bit my hand once, but I think he was just hungry",
    age: 6,
    sex:"Male",
    default_image: 'https://vetstreet.brightspotcdn.com/dims4/default/4f4dea1/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F31%2F1ba400a28511e087a80050568d634f%2Ffile%2FBengal-3-645mk062211.jpg',
    user_id: 3
  },
  {
    title: "Persian Cat",
    description: "Super fluffy... maybe a little tooooo fluffy",
    age: 27,
    sex:"Male",
    default_image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg',
    user_id: 2
  },
])

AnimalImage.create([
{
  image_url: "https://www.thesprucepets.com/thmb/qP6SYSoepyKZaDzJKcRDPB1yDV4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/50122757_393198351489429_2336461074070557448_n-5c4cf69f46e0fb00014a2b9f.jpg",
  animal_id: 4
},
{
  image_url: "https://www.pets4homes.co.uk/images/articles/4396/large/five-personality-traits-of-the-persian-cat-59cbc0cd0f41c.jpg",
  animal_id: 4
},
{
  image_url: "https://vetstreet.brightspotcdn.com/dims4/default/8ab3754/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Ff7%2F3b%2Fa9263b9846c7a943e56b9c10f099%2FPersian-AP-0IUWP7-645sm3614.jpg",
  animal_id: 4
},
{
  image_url: "https://canna-pet.com/wp-content/uploads/2017/07/pug-2498523_1280-e1501624125740.jpg",
  animal_id: 2
},
{
  image_url: "https://media.healthday.com/Images/icimages/pug25.jpg",
  animal_id: 2
},
{
  image_url: "https://petcentral.chewy.com/wp-content/uploads/pug-2-940x529.jpg",
  animal_id: 2
}
])

SavedAnimal.create([
  {
    animal_id: 1,
    user_id: 2
  },
  {
    animal_id: 4,
    user_id: 1
  },
  {
    animal_id: 4,
    user_id: 2
  }
])