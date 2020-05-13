class Layman < ApplicationRecord
     has_secure_password

     validates :name, presence: true
     validates :email,
          presence: true,
          uniqueness: true

     has_many :posts, dependent: :destroy 
end
