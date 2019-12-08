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

rails g scaffold User username:string email:string password_digest:string 
rails g scaffold Animal title description age:integer sex:string default_image user:references
rails g scaffold AnimalImage image_url:text animal:references
rails g model SavedAnimal user:references animal:references

rails db:migrate
rails db:seed 
bundle 


