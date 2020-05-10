Rails.application.routes.draw do
  resources :laymen, only: [:index, :show]

  post "/signup", to: "registrations#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auto_login", to: "sessions#auto_login"

  # root "laymen#index"
end
