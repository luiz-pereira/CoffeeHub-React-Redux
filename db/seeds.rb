# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Coffee.delete_all

Buyer.create ({name: 'Luiz Pereira', email: 'luizfper@gmail.com', company: 'Whatever Co.', password: "123", category: "Buyer"})
pereira = Producer.create ({name: 'Luiz Pereira', email: 'luizfper@coffeeLab.com', company: 'Coffee Lab Co.', password: "123", category: "Producer"})
mafunfo = Producer.create ({name: 'Erika Mafunfo', email: 'erika@cerrado.com', company: 'Cerrado Coffee Co.', password: "123", category: "Producer"})
moriarty = Producer.create ({name: 'Olivia Moriarty', email: 'olivia@colombiacoffee.com', company: 'Colombia Coffee Co.', password: "123", category: "Producer"})

pereira.coffees.create ({name: "Monando", description: "This coffee is outstanding. Comes from a selected reserve. It is the best coffee you'll ever see", imagefile_id: '3', acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Brasilia', country: 'Brazil' })
pereira.coffees.create ({name: "Corencia", description: "I'm surprised you had the courage to take the responsibility yourself. Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid. I'm in it for the money.", imagefile_id: '4' , acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Brasilia', country: 'Brazil' })
pereira.coffees.create ({name: "Cerrado", description: "Partially, but it also obeys your commands. I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. Obi-Wan is here. The Force is with him. Red Five standing by. What?!", imagefile_id: '2', acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Belo Horizonte', country:'Brazil' })
pereira.coffees.create ({name: "Caribona", description: "The Force is strong with this one. I have you now. The Force is strong with this one. I have you now. I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. I have traced the Rebel spies to her. Now she is my only link to finding their secret base.", imagefile_id: '1', acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Pirituba', country: 'Brazil' })
pereira.coffees.create ({name: "Molicari", description: "Oh God, my uncle. How am I ever gonna explain this? Oh God, my uncle. How am I ever gonna explain this? No! Alderaan is peaceful. We have no weapons. You can't possibly… You're all clear, kid. Let's blow this thing and go home!", imagefile_id:'5' , acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Ouro Preto', country:'Brazil' })
pereira.coffees.create ({name: "Baixo de Minas", description: "Don't underestimate the Force. What?! Ye-ha! But with the blast shield down, I can't even see! How am I supposed to fight?", imagefile_id: '6', acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Ituiutaba', country: 'Brazil' })

mafunfo.coffees.create ({name: "Carulo", description: "I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. Obi-Wan is here. The Force is with him. I call it luck. You don't believe in the Force, do you? Red Five standing by.", imagefile_id:'7' , acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Varginha', country: 'Brazil' })
mafunfo.coffees.create ({name: "Bariali", description: "Don't underestimate the Force. Escape is not his plan. I must face him, alone. Hey, Luke! May the Force be with you. A tremor in the Force. The last time I felt it was in the presence of my old master.", imagefile_id: '8', acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Capile', country: 'Colombia' })
mafunfo.coffees.create ({name: "Combolecci", description: "What?! I find your lack of faith disturbing. I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it right now. It's such a long way from here.", imagefile_id: '9' , acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Sarida', country: 'Colombia' })
mafunfo.coffees.create ({name: "Soriado", description: "He is here. I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan-- Obi-Wan is here. The Force is with him. Red Five standing by. The Force is strong with this one. I have you now.", imagefile_id:'10' , acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Lima Duarte', country:'Brazil' })

moriarty.coffees.create ({name: "Folica", description: "I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan-- I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan", imagefile_id: '11', acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Medellin', country: 'Colombia' })
moriarty.coffees.create ({name: "Ciranda", description: "Still, she's got a lot of spirit. I don't know, what do you think? He is here. Hey, Luke! May the Force be with you. Still, she's got a lot of spirit. I don't know, what do you think? I care. So, what do you think of her, Han?", imagefile_id: '12', acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Sen Pho', country: 'Vietnam' })
moriarty.coffees.create ({name: "Orfeu", description: "Escape is not his plan. I must face him, alone. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. Obi-Wan is here. The Force is with him. I need your help, Luke. She needs your help. I'm getting too old for this sort of thing.", imagefile_id:'13' , acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Duband', country: 'Ethiopia' })
moriarty.coffees.create ({name: "Carimbo", description: "I'm surprised you had the courage to take the responsibility yourself. What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like…suicide.", imagefile_id:'14' , acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Para de Minas', country: 'Brazil' })
moriarty.coffees.create ({name: "Sertao", description: "You are a part of the Rebel Alliance and a traitor! Take her away! He is here. Ye-ha! I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me.", imagefile_id: '15', acidity: rand(20...100), sweetness: rand(20...100), body: rand(20...100), town: 'Formiga', country: 'Brazil' })






