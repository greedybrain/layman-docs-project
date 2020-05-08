Rails.application.routes.draw do
  post "/signup", to: "registrations#create"
  post "/login", to: "sessions#create"
  get "/auto_login", to: "sessions#auto_login"

  root "laymen#index"
end
