class AddDocTopicToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :doc_title, :string
  end
end
