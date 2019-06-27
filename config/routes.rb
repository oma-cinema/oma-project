Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  scope '(:locale)', locale: /fr|es/ do
  root to: 'pages#home'
  get 'contact', to: 'pages#contact', as: :contact
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :articles
  resources :cinemas do
    resources :reviews, only: [ :new, :create ]
  end
end
end
