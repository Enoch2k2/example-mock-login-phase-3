class UsersController < ApplicationController
  get '/users' do
    User.all.to_json
  end

  get '/users/:id' do
    user = User.find_by_id(params[:id])
    if user
      user.to_json
    else
      { message: "no users found"}
    end
  end

  post '/signup' do
    user = User.new(params)

    if user.save
      user.to_json
    else
      { message: user.errors.full_messages }.to_json
    end
  end
end