class Producer < User
	has_many :tastings
	has_many :coffees
end