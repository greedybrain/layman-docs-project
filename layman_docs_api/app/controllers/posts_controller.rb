class PostsController < ApplicationController
     before_action :require_login, except: [:index, :create, :get_doc_by_url, :url_and_section_association_check]

     def index 
          if params[:layman_id]
               layman = Layman.find(params[:layman_id])
               posts = layman.posts.order("language_or_framework")
          else
               posts = Post.all.order("language_or_framework")
          end

          render json: {
               message: "Index of all posts reached",
               posts: PostSerializer.new(posts).serializable_hash,
          }, status: :ok
     end

     def get_doc_by_url
          doc = Post.get_doc_content_by(params[:doc_url])
          render json: doc
     end

     def url_and_section_association_check
          message = Post.validate_url_and_section_association(params[:doc_url], params[:section_of_concern])
          render json: {message: message}
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
          params.permit(:language_or_framework, :doc_url, :doc_title, :section_of_concern, :layman_id)
     end

end
