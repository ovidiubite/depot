require 'test_helper'

class ProductTest < ActiveSupport::TestCase
	fixtures :products
   test "product attributes must not be empty" do
     product= Product.new
     assert product.invalid?
     assert product.errors[:title].any?
     assert product.errors[:description].any?
     assert product.errors[:price].any?
     assert product.errors[:image_url].any?
    end

    test "product price must be positive" do
    	product = Product.new(title: "My book is pretty fly for a ..",
    						  description: "orice",
    						  image_url: "zzzz.jpg")

    	product.price = -1
    	assert product.invalid?
    	assert_equal ["must be greater than or equal to 0.01"],
    		product.errors[:price]

    	product.price = 0
    	assert product.invalid?
    	assert_equal ["must be greater than or equal to 0.01"],
    		product.errors[:price]

    	product.price = 1
    	assert product.valid?
    	
    	
    end

    def new_product(image_url)
    	Product.new( title: "My book is pretty fly for a ..",
    				 description: "yuuuhuuu!",
    				 price: 1,
    				 image_url: image_url)
    end

    test "image_url" do
    	ok = %w{fred.jpg fred.png fred.gif FRED.JPG FRED.Jpg http://a.b.c/x/y/z/fred.gif }
    	bad= %w{fred.doc fred.gif/more fred.jpg.more}

    	ok.each do |name|
    		assert new_product(name).valid?, "#{name} should be valid"
    	end
    	bad.each do |name|
    		assert new_product(name).invalid?, "#{name} shouldn't be valid"
    	end
    end

    test "product is not valid without a unique title" do 
    	product = Product.new(title: products(:ruby).title,
    						  description: "yyy",
    						  price: 1,
    						  image_url: "fred.gif")
    	assert product.invalid?
    	assert_equal ["has already been taken"], product.errors[:title]
    end

   test "product is not valid if length is small than 10" do
    	product = Product.new(title: "Ceva!",
    						  description: "yyy",
    						  price: 1,
    						  image_url: "fred.gif")
    	assert product.invalid?
    	assert_equal ["Please enter a title greater than 10!"], product.errors[:title]
    	
    end 
end


