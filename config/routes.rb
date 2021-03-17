Rails.application.routes.draw do
  get '/dashboard', to: "posts#dashboard"
  get '/infiniteScrolling', to: "posts#infiniteScrolling"
  resources :posts 
end