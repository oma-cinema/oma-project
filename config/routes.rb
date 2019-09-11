Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  scope '(:locale)', locale: /fr|es/ do
  get 'contact-me', to: 'messages#new', as: 'new_message'
  post 'contact-me', to: 'messages#create', as: 'create_message'
  root to: 'pages#home'
  get 'contact', to: 'pages#contact', as: :contact
  get 'ōma', to: 'pages#ōma', as: :oma
  get 'experience', to: 'pages#experience', as: :experience
  get 'soon', to: 'pages#soon', as: :soon
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :articles
  resources :cinemas do
    resources :reviews, only: [ :new, :create ]
  end
end
end
