class ContactController < ApplicationController

  def tweet
    Twitter.configure do |config|
      config.consumer_key = "KIkyzBEqbfzi8UscZrqzfw"
      config.consumer_secret = "INTXU3pVVDXQJhr4cUDpMN4g3BNlrZOyn3h1VDDY"
      config.oauth_token = "209917781-7ZDAl6xMOGMVLgW07PWNvv7XqU8fYXymFhQhE1hO"
      config.oauth_token_secret = "SLRAhrieUJiPpJfAU2e0Q6qIrXWKmcwIReCj57Xm6IA"
    end

    tweet = Twitter.update(params[:tweet_body])
    render :json => tweet.to_json
  end

  def delete_tweet
  end

end
