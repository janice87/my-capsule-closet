# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data..."

user1 = User.create(name: "Janice", email: "janice@gmail.com", password: "123456")

item1 = Item.create(item_name: "Turtleneck Sweater", brand: "Aritzia", price: 158, category: "Blouses & Tops", image: "https://aritzia.scene7.com/is/image/Aritzia/f21_01_a03_82571_15104_off_a?wid=1200", user_id: user1.id)
item2 = Item.create(item_name: "Vneck Cardigan", brand: "Aritzia", price: 138, category: "Blouses & Tops", image: "https://aritzia.scene7.com/is/image/Aritzia/f22_01_a03_79410_7325_off_a?wid=1200", user_id: user1.id)
item3 = Item.create(item_name: "Black Crewneck", brand: "Everlane", price: 30, category: "Blouses & Tops", image: "https://media.everlane.com/image/upload/c_fill,w_1920,ar_1:1,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/f595ef28_7656", user_id: user1.id)
item4 = Item.create(item_name: "Cashmere Turtleneck", brand: "Everlane", price: 195, category: "Blouses & Tops", image: "https://media.everlane.com/image/upload/c_fill,w_1920,ar_1:1,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/1a6ae4a8_d828", user_id: user1.id)
item5 = Item.create(item_name: "Merino Cami", brand: "Everlane", price: 58, category: "Blouses & Tops", image: "https://media.everlane.com/image/upload/c_fill,w_640,ar_1:1,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/41eae6e2_67e9", user_id: user1.id)

item6 = Item.create(item_name: "High Waist Jeans", brand: "Abercrombie & Fitch", price: 90, category: "Bottoms", image: "https://img.abercrombie.com/is/image/anf/KIC_155-2645-2983-278_prod1?policy=product-large", user_id: user1.id)
item7 = Item.create(item_name: "Ankle Jeans", brand: "Everlane", price: 98, category: "Bottoms", image: "https://i.s-madewell.com/is/image/madewell/NG367_DM5703_ld?wid=830&hei=1054&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0", user_id: user1.id)
item8 = Item.create(item_name: "Wide Leg Pants", brand: "Abercrombie & Fitch", price: 90, category: "Bottoms", image: "https://img.abercrombie.com/is/image/anf/KIC_156-2302-0765-178_prod1?policy=product-large", user_id: user1.id)

item9 = Item.create(item_name: "Oversized Wool Blazer", brand: "& Other Stories", category: "Coats", price: 219, image: "https://lp.stories.com/app005prod?set=source[/ff/13/ff13f00eb55f57aa3bd7cd5bb9e411956439e9d0.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]", user_id: user1.id)
item10 = Item.create(item_name: "Oversized Plaid Blazer", brand: "Everlane", category: "Coats", price: 228, image: "https://media.everlane.com/image/upload/c_fill,w_1080,ar_1:1,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/0ad050d9_c530", user_id: user1.id)
item11 = Item.create(item_name: "Beige Coat", brand: "Mango", category: "Coats", price: 130, image: "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17085133_09_B.jpg?ts=1630601138382&imwidth=276&imdensity=2", user_id: user1.id)
item12 = Item.create(item_name: "Leather Jacket", brand: "Madewell", category: "Coats", price: 525, image: "https://i.s-madewell.com/is/image/madewell/E0488_BK5229_ld?wid=830&hei=1054&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0", user_id: user1.id)

item13 = Item.create(item_name: "Midi Dress", brand: "Aritzia", price: 128, category: "Dresses", image: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_01_a08_76635_1274_off_a.jpg", user_id: user1.id)

item14 = Item.create(item_name: "Classic Flap Bag", brand: "Chanel", price: 8200, category: "Handbags", image: "https://www.chanel.com/images//t_one///e_brightness:-3/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1240/small-classic-handbag-black-grained-calfskin-gold-tone-metal-grained-calfskin-gold-tone-metal-packshot-other-a01113y01864c3906-8855283204126.jpg", user_id: user1.id)
item15 = Item.create(item_name: "Box Bag", brand: "Chanel", price: 3950, category: "Handbags", image: "https://twicpics.celine.com/product-prd/images/large/189173DLS.04FG_2_LIBRARY_85087.jpg?twic=v1/cover=1:1/resize-max=720", user_id: user1.id)
item16 = Item.create(item_name: "Quilted Backpack", brand: "Chanel", price: 7200, category: "Handbags", image: "https://prod-images.fashionphile.com/thumb/28a1cf6f1e3858642a4f3380c566b025/797533d8f72564ced3e7aa9f95284a84.jpg", user_id: user1.id)

item17 = Item.create(item_name: "White Sneakers", brand: "Adidas", price: 90, category: "Shoes", image: "https://i.s-madewell.com/is/image/madewell/AH776_EB6025_d2?wid=830&hei=1054&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0", user_id: user1.id)
item18 = Item.create(item_name: "Black Leather Boots", brand: "All Saints", price: 299, category: "Shoes", image: "https://images.allsaints.com/products/900/WF069Z/5/WF069Z-5-1.jpg", user_id: user1.id)

capsule1 = Capsule.create(capsule_name: "Fall 2022 Capsule Wardrobe")

outfit1 = Outfit.create(outfit_name: "Fall Casual Outfit 1", capsule_id: capsule1.id)
outfit2 = Outfit.create(outfit_name: "Fall Casual Outfit 2", capsule_id: capsule1.id)

puts "Creating outfits..."

outfit_item1 = OutfitItem.create(outfit_id: outfit1.id, item_id: item1.id)
outfit_item2 = OutfitItem.create(outfit_id: outfit1.id, item_id: item6.id)
outfit_item3 = OutfitItem.create(outfit_id: outfit1.id, item_id: item12.id)
outfit_item4 = OutfitItem.create(outfit_id: outfit1.id, item_id: item14.id)
outfit_item5 = OutfitItem.create(outfit_id: outfit1.id, item_id: item17.id)

outfit_item6 = OutfitItem.create(outfit_id: outfit2.id, item_id: item5.id)
outfit_item7 = OutfitItem.create(outfit_id: outfit2.id, item_id: item9.id)
outfit_item8 = OutfitItem.create(outfit_id: outfit2.id, item_id: item15.id)
outfit_item9 = OutfitItem.create(outfit_id: outfit2.id, item_id: item18.id)
