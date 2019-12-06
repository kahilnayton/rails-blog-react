Rails.application.routes.draw do
  resources :item_images
  resources :items
  # resources :useritems
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

end
