class SessionsController < ApplicationController

  post '/login' do
    user = User.find_by_username(params[:username])
    if user
      user.to_json
    else
      { message: "user doesn't exist or you typed something wrong"}.to_json
    end
  end
end