Rails.application.routes.draw do
  resources :laymen, only: [:index, :show] do 
    resources :posts, only: [:index, :create, :destroy]
  end

  resources :posts, only: [:index]

  post "/signup", to: "registrations#create"
  post "/login", to: "sessions#create"
  get "/auto_login", to: "sessions#auto_login"

  post "/doc_fetch", to: "posts#get_doc_by_url"
  post "/validating", to: "posts#url_and_section_association_check"

  # root "laymen#index"
end
