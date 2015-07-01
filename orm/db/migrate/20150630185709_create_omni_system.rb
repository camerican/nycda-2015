class CreateOmniSystem < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password
      t.datetime :date_created
    end

    create_table :posts do |t|
      t.string :title
      t.text  :body
      t.integer :user_id
      t.datetime :post_time
    end

    create_table :profiles do |t|
      t.integer :user_id
      t.string  :hometown
      t.string  :occupation
      t.datetime  :birthday
      t.string  :favorite_color
    end

    create_table :rooms do |t|
      t.string :name
      t.integer :max_occupants
    end

    create_table :user_rooms do |t|
      t.integer :user_id
      t.integer :room_id
    end
  end
end
