class Article < ApplicationRecord
  acts_as_taggable_on :tags
  mount_uploader :photo, PhotoUploader
  mount_uploader :source, SourceUploader
end
