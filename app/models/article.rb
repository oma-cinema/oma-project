class Article < ApplicationRecord
  acts_as_taggable_on :tags
  mount_uploader :photo, PhotoUploader
end
