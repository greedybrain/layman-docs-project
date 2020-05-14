class PostsController < ApplicationController
     before_action :require_login, except: [:index, :create, :get_doc_by_url, :url_and_section_association_check]

     def index 
          posts = Post.all.order("language_or_framework")
          render json: {
               posts: PostSerializer.new(posts).serializable_hash,
               message: "Index of all posts reached"
          }, status: :ok
     end

     def get_doc_by_url
          Post.get_doc_content_by(params[:url])
     end

     def url_and_section_association_check
          Post.validate_url_and_section_association(params[:doc_url], params[:section_of_concern])     
     end

     def create 
          if params[:layman_id]
               layman = Layman.find(params[:layman_id])
               post = layman.posts.build(post_params)
               if post.save 
                    render json: {
                         post: PostSerializer.new(post).serializable_hash,
                         message: "Post created successfully"
                    }
               else
                    render json: {
                         message: "Something went wrong."
                    }
               end
          end
     end

     private 

     def post_params
          params.permit(:language_or_framework, :doc_url, :doc_title, :section_of_concern)
     end

end
