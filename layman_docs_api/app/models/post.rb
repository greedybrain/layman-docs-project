class Post < ApplicationRecord
     validates :language_or_framework, presence: true
     validates :doc_url, presence: true
     validates :section_of_concern, presence: true

     belongs_to :layman, optional: true
end
