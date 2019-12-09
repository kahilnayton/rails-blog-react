# Foster meow!

![cat-hand](client/src/cat-hand.png)

An app where people can foster animals

## Stack
- Rails
- React.js
- PostgresQL


## ERD
![foster-meow-erd](https://media.git.generalassemb.ly/user/19642/files/17c04000-19e2-11ea-9082-001e0b4b9a25)


## Backend
rails g controller Authentication

rails g scaffold User username:string email:string password_digest:string location:string
rails g scaffold Animal title description age:integer sex:string default_image user:references
rails g scaffold AnimalImage image_url:text animal:references
rails g model SavedAnimal user:references animal:references

rails db:migrate
rails db:seed 
bundle 

## MVP 
Get everything working so you can:
  - See all the listings
  - Add a listing to your favorites
  - Delete a favorite listing
  - Create a listing 
  - Edit your own listing

## MVP 2 
Create a Locations table 
  - rake db:rollback
  - rails destroy scaffold User
  - rails destroy scaffold Animal
  - rails destroy scaffold AnimalImages
  - rails destroy model SavedAnimals

This time add 
  - rails g nifty:scaffold Location address:string latitude:float longitude:float

These parameters are what Geocoder gem is expecting

https://www.youtube.com/watch?v=f7QMdH9IMdI


