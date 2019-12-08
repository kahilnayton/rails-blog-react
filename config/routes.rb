Rails.application.routes.draw do
  resources :animal_images
  resources :animals
  # resources :useranimals
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  get 'users/:id/savedAnimals', to: 'users#show_saved_Animals'
  get 'users/:id/animals', to: 'users#show_animals'
  post 'users/savedAnimals/:animalId', to: 'users#add_saved_Animal'
  delete 'users/savedAnimals/:animalId', to: 'users#delete_saved_Animal'
  get 'animals/:id/images', to: 'animals#show_images'

end
