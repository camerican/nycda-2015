require './app'

User.create( id: 1, first_name: "Cam", last_name: "Crews", email: "cam@nycda.com")
User.create( id: 2, first_name: "Jimmy", last_name: "Newton", email: "jimmy@newton.com")
User.create( id: 3, first_name: "George", last_name: "Kostanza", email: "gk@nyyankees.com")
User.create( id: 4, first_name: "Brian", last_name: "Regan", email: "brian@brianregan.com")
User.create( id: 5, first_name: "Barack", last_name: "Obama", email: "potus@whitehouse.gov")

Profile.create( user_id: 1, hometown: "New York, NY", favorite_color: "blue")
Profile.create( user_id: 2, hometown: "Nashville, TN", favorite_color: "yellow")
Profile.create( user_id: 3, hometown: "New York, NY", favorite_color: "white")

Post.create( user_id: 1, title: "Why I like Philly", body: "What a great town this is. I like Le Bus sandwiches, I am hip to City Veg, I can Shake Shack, and Trade with Joe.")
Post.create( user_id: 1, title: "Rain!", body: "There is rain here, there is rain there, there is rain everywhere.")
Post.create( user_id: 3, title: "Eternal Guilt", body: "I can't believe that I cheaped out on wedding invitation stationary and it resulted in the death of my betrothed. I feel oddly at ease with the situation.")
Post.create( user_id: 3, title: "Pinstripe Pride", body: "The Yankees have been my home for over two decades now. I've built a great workstation that allows me to nap underneath it in comfort.  The franchise could not run without my help.")
Post.create( user_id: 2, title: "I am the best in the world", body: "Jimmy Newton here.  I just wanted to let you know that I look down upon everyone else.")

Room.create( id: 1, name: "Lounge", max_occupants: 25 )
Room.create( id: 2, name: "Ruby", max_occupants: 12 )
Room.create( id: 3, name: "JavaScript", max_occupants: 12)
Room.create( id: 4, name: "HTML", max_occupants: 25)

UserRoom.create( user_id: 1, room_id: 1 )
UserRoom.create( user_id: 2, room_id: 1 )
UserRoom.create( user_id: 3, room_id: 1 )
UserRoom.create( user_id: 4, room_id: 1 )
UserRoom.create( user_id: 5, room_id: 1 )
UserRoom.create( user_id: 1, room_id: 2 )
UserRoom.create( user_id: 1, room_id: 3 )
UserRoom.create( user_id: 1, room_id: 4 )
UserRoom.create( user_id: 2, room_id: 2 )