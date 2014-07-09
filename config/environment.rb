# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Depot::Application.initialize!

#config.action_mailer.delivery_method = :smtp

Depot::Application.configure do 
	config.action_mailer.delivery_method = :test

	config.action_mailer.smtp_settings = {
		address:  				"smtp.gmail.com",
		port:  					587,
		domain: 				"domain.of.sender.net",
		authentication: 		"palin",
		user_name:  			"dave",	
		password:  				"secret",
		enable_starttls_auto:  	true  
	}



end