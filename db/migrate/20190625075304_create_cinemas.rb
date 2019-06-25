class CreateCinemas < ActiveRecord::Migration[5.2]
  def change
    create_table :cinemas do |t|
      t.string :name
      t.string :address
      t.string :photo
      t.integer :number_of_seats
      t.string :description
      t.string :url_cinema

      t.timestamps
    end
  end
end
