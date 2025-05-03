<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional home nursing and elderly care services in Bhubaneswar and Cuttack. Offering in-home nursing, elder care, post-hospitalization support, physiotherapy, and chronic illness management.">
    <title>Care Comfort - Home Nursing Services in Bhubaneswar & Cuttack</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .hero-section {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/api/placeholder/1200/600');
            background-size: cover;
            background-position: center;
        }
        .testimonial-bg {
            background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/api/placeholder/800/400');
            background-size: cover;
        }
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .service-icon {
            transition: all 0.3s ease;
        }
        .service-card:hover .service-icon {
            color: #4F46E5;
        }
    </style>
</head>
<body class="font-sans antialiased text-gray-800">
    <!-- Navigation -->
    <nav class="bg-white shadow-md fixed w-full z-10">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center">
                    <a href="#" class="text-2xl font-bold text-indigo-600">Care<span class="text-purple-600">Comfort</span></a>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
                    <a href="#about" class="text-gray-700 hover:text-indigo-600 font-medium">About Us</a>
                    <a href="#services" class="text-gray-700 hover:text-indigo-600 font-medium">Services</a>
                    <a href="#testimonials" class="text-gray-700 hover:text-indigo-600 font-medium">Testimonials</a>
                    <a href="#careers" class="text-gray-700 hover:text-indigo-600 font-medium">Careers</a>
                    <a href="#contact" class="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
                </div>
                <div class="hidden md:flex items-center space-x-4">
                    <a href="#contact" class="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300">Book Consultation</a>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-gray-700 hover:text-indigo-600 focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="md:hidden hidden py-4 border-t border-gray-200">
                <a href="#home" class="block py-2 text-gray-700 hover:text-indigo-600">Home</a>
                <a href="#about" class="block py-2 text-gray-700 hover:text-indigo-600">About Us</a>
                <a href="#services" class="block py-2 text-gray-700 hover:text-indigo-600">Services</a>
                <a href="#testimonials" class="block py-2 text-gray-700 hover:text-indigo-600">Testimonials</a>
                <a href="#careers" class="block py-2 text-gray-700 hover:text-indigo-600">Careers</a>
                <a href="#contact" class="block py-2 text-gray-700 hover:text-indigo-600">Contact</a>
                <a href="#contact" class="block py-2 mt-2 bg-indigo-600 text-white text-center rounded-full hover:bg-indigo-700 transition duration-300">Book Consultation</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section pt-28 pb-20 flex items-center min-h-screen">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="bg-white bg-opacity-90 p-8 md:p-12 rounded-lg shadow-lg max-w-3xl">
                <h1 class="text-3xl md:text-5xl font-bold text-indigo-600 mb-4">Compassionate In-Home Nursing Care in Bhubaneswar & Cuttack</h1>
                <p class="text-xl md:text-2xl mb-8 text-gray-700">Professional and personalized healthcare services delivered to your doorstep.</p>
                <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
                    <a href="#contact" class="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition duration-300 text-center">Book a Free Consultation</a>
                    <a href="#services" class="bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-50 transition duration-300 text-center">Our Services</a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div class="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm text-center">
                        <p class="text-3xl font-bold text-indigo-600 mb-2">500+</p>
                        <p class="text-gray-700">Families Served Across Odisha</p>
                    </div>
                    <div class="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm text-center">
                        <p class="text-3xl font-bold text-indigo-600 mb-2">100%</p>
                        <p class="text-gray-700">Certified & Experienced Nurses</p>
                    </div>
                    <div class="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm text-center">
                        <p class="text-3xl font-bold text-indigo-600 mb-2">24/7</p>
                        <p class="text-gray-700">Support and Care</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                <div class="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">Delivering compassionate care and professional nursing services to enhance the quality of life for our patients in the comfort of their homes.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="/api/placeholder/600/400" alt="Our nursing team" class="rounded-lg shadow-lg w-full">
                </div>
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                    <p class="text-gray-600 mb-6">To provide exceptional healthcare services with compassion, dignity, and respect, enabling our patients to maintain independence and quality of life in the familiar surroundings of their own homes.</p>
                    
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Our Approach</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Dietary guidance and nutrition
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition duration-300">Learn More</a>
                    </div>
                </div>

                <!-- Palliative Care -->
                <div class="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                                <i class="fas fa-hands text-2xl text-indigo-600 service-icon"></i>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-800 mb-4">Specialized Care</h3>
                        <p class="text-gray-600 mb-4">Compassionate and specialized care for patients requiring additional attention and support.</p>
                        <ul class="text-gray-600 mb-6 space-y-2">
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Pain management
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Emotional support for patients and families
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Specialized medical assistance
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition duration-300">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16 testimonial-bg">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Testimonials</h2>
                <div class="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">See what our clients have to say about our services and the difference we've made in their lives.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex justify-center mb-4">
                        <img src="/api/placeholder/80/80" alt="Client" class="h-16 w-16 rounded-full object-cover">
                    </div>
                    <p class="text-gray-600 italic mb-4">"The nursing staff from CareComfort has been exceptional in caring for my elderly mother. Their professionalism, compassion, and attention to detail have given our family peace of mind."</p>
                    <div class="text-center">
                        <h4 class="font-semibold text-gray-800">Rajesh Patel</h4>
                        <p class="text-sm text-gray-500">Bhubaneswar</p>
                        <div class="flex justify-center mt-2">
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex justify-center mb-4">
                        <img src="/api/placeholder/80/80" alt="Client" class="h-16 w-16 rounded-full object-cover">
                    </div>
                    <p class="text-gray-600 italic mb-4">"After my surgery, the post-hospitalization care I received was outstanding. The nurses were knowledgeable, caring, and helped me recover much faster than I expected."</p>
                    <div class="text-center">
                        <h4 class="font-semibold text-gray-800">Priya Sharma</h4>
                        <p class="text-sm text-gray-500">Cuttack</p>
                        <div class="flex justify-center mt-2">
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex justify-center mb-4">
                        <img src="/api/placeholder/80/80" alt="Client" class="h-16 w-16 rounded-full object-cover">
                    </div>
                    <p class="text-gray-600 italic mb-4">"The physiotherapy services provided at home have been transformative for my father's mobility. The therapist is skilled, patient, and truly cares about his progress."</p>
                    <div class="text-center">
                        <h4 class="font-semibold text-gray-800">Amit Mishra</h4>
                        <p class="text-sm text-gray-500">Bhubaneswar</p>
                        <div class="flex justify-center mt-2">
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <a href="#" class="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">Read More Testimonials →</a>
            </div>
        </div>
    </section>

    <!-- Careers Section -->
    <section id="careers" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
                <div class="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">We're looking for passionate healthcare professionals to join our team and make a difference in people's lives.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="/api/placeholder/600/400" alt="Nursing team" class="rounded-lg shadow-lg w-full">
                </div>
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Why Work With Us?</h3>
                    <div class="space-y-4 mb-6">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 text-gray-600">Competitive compensation and benefits</p>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 text-gray-600">Flexible scheduling options</p>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 text-gray-600">Ongoing professional development and training</p>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 text-gray-600">Supportive work environment</p>
                        </div>
                    </div>
                    
                    <h4 class="text-xl font-semibold text-gray-800 mb-4">Open Positions:</h4>
                    <ul class="space-y-3 mb-6">
                        <li class="bg-white p-4 rounded-md shadow-sm">
                            <h5 class="font-semibold">Registered Nurses</h5>
                            <p class="text-sm text-gray-600">Full-time and part-time positions available</p>
                        </li>
                        <li class="bg-white p-4 rounded-md shadow-sm">
                            <h5 class="font-semibold">Physiotherapists</h5>
                            <p class="text-sm text-gray-600">Full-time positions</p>
                        </li>
                        <li class="bg-white p-4 rounded-md shadow-sm">
                            <h5 class="font-semibold">Caregivers</h5>
                            <p class="text-sm text-gray-600">Full-time and part-time positions available</p>
                        </li>
                    </ul>
                    
                    <a href="#contact" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">Apply Now</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <div class="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">Have questions or ready to book a consultation? Reach out to us today.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <form class="bg-white p-8 rounded-lg shadow-lg">
                        <div class="mb-6">
                            <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                            <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        </div>
                        <div class="mb-6">
                            <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        </div>
                        <div class="mb-6">
                            <label for="service" class="block text-gray-700 font-medium mb-2">Service Interested In</label>
                            <select id="service" name="service" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="" selected disabled>Select a service</option>
                                <option value="in-home-nursing">In-Home Nursing</option>
                                <option value="elder-care">Elder Care</option>
                                <option value="post-hospitalization">Post-Hospitalization Support</option>
                                <option value="physiotherapy">Physiotherapy</option>
                                <option value="chronic-illness">Chronic Illness Management</option>
                                <option value="specialized-care">Specialized Care</option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 font-medium mb-2">Your Message</label>
                            <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
                    </form>
                </div>
                
                <div>
                    <div class="bg-white p-8 rounded-lg shadow-lg mb-8">
                        <h3 class="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-map-marker-alt text-indigo-600 text-xl w-6"></i>
                                </div>
                                <div class="ml-4">
                                    <p class="text-gray-700">123 Healthcare Avenue, Bhubaneswar, Odisha 751001</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-phone-alt text-indigo-600 text-xl w-6"></i>
                                </div>
                                <div class="ml-4">
                                    <p class="text-gray-700">+91 98765 43210</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-envelope text-indigo-600 text-xl w-6"></i>
                                </div>
                                <div class="ml-4">
                                    <p class="text-gray-700">info@carecomfort.com</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-clock text-indigo-600 text-xl w-6"></i>
                                </div>
                                <div class="ml-4">
                                    <p class="text-gray-700">24/7 Support Available</p>
                                    <p class="text-gray-600">Office Hours: 9:00 AM - 6:00 PM (Mon-Sat)</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-6">
                            <h4 class="font-semibold text-gray-800 mb-3">Connect With Us:</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition duration-300">
                                    <i class="fab fa-facebook-f text-indigo-600"></i>
                                </a>
                                <a href="#" class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition duration-300">
                                    <i class="fab fa-twitter text-indigo-600"></i>
                                </a>
                                <a href="#" class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition duration-300">
                                    <i class="fab fa-instagram text-indigo-600"></i>
                                </a>
                                <a href="#" class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition duration-300">
                                    <i class="fab fa-whatsapp text-indigo-600"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <h3 class="text-xl font-bold text-gray-800 mb-4">Service Areas</h3>
                        <ul class="space-y-2">
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Bhubaneswar
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Cuttack
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Puri
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Khordha
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Surrounding areas (within 50km radius)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">CareComfort</h3>
                    <p class="text-gray-400 mb-4">Professional and compassionate in-home nursing and care services in Bhubaneswar, Cuttack, and surrounding areas.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#home" class="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                        <li><a href="#about" class="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                        <li><a href="#testimonials" class="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
                        <li><a href="#careers" class="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Services</h3>
                    <ul class="space-y-2">
                        <li><a href="#services" class="text-gray-400 hover:text-white transition duration-300">In-Home Nursing</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition duration-300">Elder Care</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition duration-300">Post-Hospitalization Support</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition duration-300">Physiotherapy</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition duration-300">Chronic Illness Management</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition duration-300">Specialized Care</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact Information</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 text-gray-600">Personalized care plans tailored to individual needs</p>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 text-gray-600">Highly trained and compassionate healthcare professionals</p>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 text-gray-600">Continuous monitoring and care coordination</p>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 text-gray-600">Regular communication with family members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
                <div class="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive healthcare solutions tailored to meet your specific needs, delivered with professionalism and compassion.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- In-Home Nursing -->
                <div class="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                                <i class="fas fa-user-nurse text-2xl text-indigo-600 service-icon"></i>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-800 mb-4">In-Home Nursing</h3>
                        <p class="text-gray-600 mb-4">Our certified nurses provide medical care at home, including medication administration, wound care, and health monitoring.</p>
                        <ul class="text-gray-600 mb-6 space-y-2">
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Medication management
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Wound dressing and care
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Vital signs monitoring
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition duration-300">Learn More</a>
                    </div>
                </div>
                
                <!-- Elder Care -->
                <div class="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                                <i class="fas fa-hand-holding-heart text-2xl text-indigo-600 service-icon"></i>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-800 mb-4">Elder Care</h3>
                        <p class="text-gray-600 mb-4">Dedicated support for seniors, focusing on daily activities, companionship, and overall well-being.</p>
                        <ul class="text-gray-600 mb-6 space-y-2">
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Personal hygiene assistance
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Meal preparation
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Companionship and emotional support
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition duration-300">Learn More</a>
                    </div>
                </div>
                
                <!-- Post-Hospitalization Support -->
                <div class="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                                <i class="fas fa-hospital-user text-2xl text-indigo-600 service-icon"></i>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-800 mb-4">Post-Hospitalization Support</h3>
                        <p class="text-gray-600 mb-4">Assistance with recovery after hospital discharge, ensuring a smooth transition and continuous care.</p>
                        <ul class="text-gray-600 mb-6 space-y-2">
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Recovery monitoring
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Medication management
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Doctor appointment coordination
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition duration-300">Learn More</a>
                    </div>
                </div>
                
                <!-- Physiotherapy -->
                <div class="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                                <i class="fas fa-walking text-2xl text-indigo-600 service-icon"></i>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-800 mb-4">Physiotherapy</h3>
                        <p class="text-gray-600 mb-4">Professional physiotherapy sessions at home to aid in rehabilitation and mobility improvement.</p>
                        <ul class="text-gray-600 mb-6 space-y-2">
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Customized exercise programs
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Mobility assistance
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Pain management techniques
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition duration-300">Learn More</a>
                    </div>
                </div>
                
                <!-- Chronic Illness Management -->
                <div class="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                                <i class="fas fa-heartbeat text-2xl text-indigo-600 service-icon"></i>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-800 mb-4">Chronic Illness Management</h3>
                        <p class="text-gray-600 mb-4">Comprehensive care plans for managing chronic conditions, tailored to individual needs.</p>
                        <ul class="text-gray-600 mb-6 space-y-2">
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Condition-specific care plans
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Regular health assessments
                            </li>
                            <li class="flex items-center">
                                <svg class="h-4 w-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3
