class Article < ApplicationRecord
  acts_as_taggable_on :tags
  acts_as_taggable
  mount_uploader :photo, PhotoUploader
  mount_uploader :source, SourceUploader
end
