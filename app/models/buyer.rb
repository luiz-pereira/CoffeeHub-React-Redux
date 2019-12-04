class Buyer < User
	has_many :tastings
	has_many :saved_coffees
	has_many :coffees, through: :saved_coffees
end

