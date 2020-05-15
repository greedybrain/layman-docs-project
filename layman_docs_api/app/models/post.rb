require "nokogiri"
require "open-uri"

class Post < ApplicationRecord
     validates :language_or_framework, presence: true
     validates :doc_url, presence: true
     validates :doc_title, presence: true
     validates :section_of_concern, presence: true

     belongs_to :layman

     def self.get_doc_content_by(url)
          info = {}
          begin
               scraped_info = Nokogiri::HTML(open(url))
          rescue SocketError
               invalid_message = "That link doesn't exist"
               raise invalid_message
          rescue (Errno::ENOENT)
               invalid_message = "Please recheck that link and try again"
               raise invalid_message
          ensure
               if invalid_message
                    info[:error] = invalid_message
                    return info[:error]
               else
                    result = scraped_info
               end
          end

          textCollection = clean_up(scraped_info.css("*").collect{|el| el.text}.join('').split(' '))

          info[:title] = scraped_info.css('title').text
          info[:body] = textCollection
          info
     end
     
     def self.validate_url_and_section_association(url, section_paste)
          result = self.get_doc_content_by(url)
          
          section_pasted = clean_up(section_paste.split(' '))

          if result[:body]
               result = result[:body]
               if result.include?(section_pasted)
                    return "Documentation with that information was found!"
               else
                    return "You pasted invalid section information. Try again."
               end
          end
     end

     def self.clean_up(arr)
          toFilter = /[!@#$%^&*\(\)\\\/?\[\]<>,\.`~\{\}+=\-_œ∑´®†¥¨ˆøπ“‘«æ…¬˚∆˙©ƒ∂ßåΩ≈ç√∫˜µ≤≥÷≠–ºª•¶§∞¢£™¡"':;|]/
          arr.join(' ').gsub(/[^[:ascii:]]/, " ").gsub(toFilter, ' ').gsub(" ", "")
     end

end
