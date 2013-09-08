BrandiBalentine::Application.routes.draw do

root to: 'home#index'
match '/about', to: 'home#about'
match '/experience', to: 'home#experience'
match '/projects', to: 'home#portfolio'
match '/contact', to: 'home#contact'
match '/tweet_me', to: 'contact#tweet', via: :post

end
