BrandiBalentine::Application.routes.draw do

root to: 'home#index'
match '/about', to: 'home#about'
match '/experience', to: 'home#experience'

end
