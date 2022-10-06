Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/rider_create", to: "riders#create"
  delete "/rider_delete", to: "riders#destroy"
  get "/riders_show", to: "riders#index"
  get "/rider_show", to: "riders#show"
  post "/horse_create", to: "horses#create"
  get "/horses_show", to: "horses#index"
  get "/horse_show", to: "horses#show"
  post "event_create", to: "events#create"
  get "/events_show", to: "events#index"
  get "/event_show", to: "events#show"
  # patch "/event_update", to "events#update"
  # delete "/event_delete", to: "events#destroy"
  resources :events
  resources :riders 
  resources :horses 
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  # get '/hello', to: 'application#hello_world'

  # get '*path',
  # to: 'fallback#index',
  # constraints: ->(req) { !req.xhr? && req.format.html? }

end
