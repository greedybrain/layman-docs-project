Rails.application.routes.draw do
  resources :laymen, only: [:index, :show] do 
    resources :posts, only: [:create, :destroy]
  end

  post "/signup", to: "registrations#create"
  post "/login", to: "sessions#create"
  get "/auto_login", to: "sessions#auto_login"

  post "/get_doc", to: "posts#get_doc_by_url"
  post "/section_check", to: "posts#valid_section_check"

  # root "laymen#index"
end
