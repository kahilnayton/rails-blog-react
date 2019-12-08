Rails.application.routes.draw do
  resources :animal_images
  resources :animals
  # resources :useritems
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  get 'users/:id/savedItems', to: 'users#show_saved_Items'
  get 'users/:id/items', to: 'users#show_items'
  post 'users/savedItems/:itemId', to: 'users#add_saved_Item'
  delete 'users/savedItems/:itemId', to: 'users#delete_saved_Item'
  get 'items/:id/images', to: 'items#show_images'

end
