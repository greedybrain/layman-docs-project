class Topic {
     constructor() {
          this.topicsUl = document.querySelector(".topics")
          this.topicItem = document.createElement("li")
     }

     static duplicates = []


     static fillTopicCont() {
          new PostsAdapter().indexPosts()
               .then(data => {
                    data.posts.data.forEach(post => {
                         new this().renderTopic(post)
                    })
               })
     }

     renderTopic(post) {
          let topic = new Topic().topicItem
          topic.title = post.attributes.language_or_framework.slice(0, 1).toUpperCase() + post.attributes.language_or_framework.slice(1)
          if (topic.title.length > 10) {
               topic.textContent = `${topic.title.slice(0, 10)} ...`
          } else {
               topic.textContent = topic.title
          }
          if (!Topic.duplicates.includes(post.attributes.language_or_framework)) {
               this.topicsUl.append(topic)
               Topic.duplicates.push(post.attributes.language_or_framework)
          }
     }
}