Rails.application.routes.draw do
  post "/signup", to: "registrations#create"

  root "laymen#index"
end
