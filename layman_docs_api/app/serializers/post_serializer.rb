class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :language_or_framework, :doc_url, :doc_title, :section_of_concern
end
