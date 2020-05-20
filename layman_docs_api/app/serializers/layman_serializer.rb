class LaymanSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :posts
  has_many :posts
end
