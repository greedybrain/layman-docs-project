Rails.application.routes.draw do
  post "/signup", to: "registrations#create"
  post "/login", to: "sessions#create"

  root "laymen#index"
end
