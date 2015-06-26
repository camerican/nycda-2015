require 'sinatra'
require 'mandrill'

get '/' do
  @q = params[:q]  
  erb :home
end

get '/contact' do
  erb :contact
end

post '/contact' do
  puts params.inspect

  email_thanks_feedback [{:email => params[:email], :name => params[:name]}], params[:message]

  "Thanks for your submission!"
end

get '/fake-form' do
  puts "my params are" + params.inspect
end

get '/sup' do
#  puts "I have discovered these params"
  puts params.inspect
end

get %r{/home[|\.html]?} do
  erb :home
end

get '/about' do

  erb :about

end

get '/something' do
<<CONTENT
<!DOCTYPE html>
<html>
  <head><title>Welcome Home</title></head>
  <body>
    <h1>Hey there!</h1>
    <p>Look at me now</p>
  </body>
</html>
CONTENT
end


def email_thanks_feedback recipients, message
  msg = Mandrill::API.new
  
  body = {
    :subject => "Thanks for your submission!",
    :from_name => "Cam Crews",
    :text => "We appreciate your submission, #{recipients[0][:name]}.  Your message was as follows:\n\n#{message}",  
    :to => recipients,
    :from_email => "cam@nycda.com"
  }
  msg.messages.send body
end

