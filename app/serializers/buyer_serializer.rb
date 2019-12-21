class BuyerSerializer < ActiveModel::Serializer
	attributes :id, :email, :name, :category, :company
	has_many :coffees
	has_many :tastings
end
