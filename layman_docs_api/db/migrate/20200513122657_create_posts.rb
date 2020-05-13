class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :language_or_framework
      t.string :doc_url
      t.string :section_of_concern
      t.belongs_to :layman

      t.timestamps
    end
  end
end
