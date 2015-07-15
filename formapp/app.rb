require 'sinatra'
require 'sinatra/activerecord'
require './models'

#configure(:development){set :database, "sqlite3:flash.sqlite3"}
set :database, "sqlite3:flash.sqlite3"

set :sessions, true

post '/register' do
  User.create(params)

  @users = User.all

  erb :dashboard
end

get '/register' do
  erb :register
end


get '/pair' do
  erb :pair_programming
end

get '/login' do
  erb :form
end

post '/login' do
  @user = User.where(email: params[:email]).first
  if @user.password == params[:password]
     redirect '/'
  else
     redirect '/login-failed'
  end
end
