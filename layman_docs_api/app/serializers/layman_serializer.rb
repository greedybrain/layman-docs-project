class LaymanSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
end
