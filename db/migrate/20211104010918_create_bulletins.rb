class CreateBulletins < ActiveRecord::Migration[6.1]
  def change
    create_table :bulletins do |t|
      t.string :title
      t.string :content
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :crypto, null: false, foreign_key: true
      t.timestamps
    end
  end
end
