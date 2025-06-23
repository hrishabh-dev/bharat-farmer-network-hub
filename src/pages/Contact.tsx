import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Clock,
  Send,
  Headphones,
  Users,
  Building
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      description: 'Speak directly with our team',
      contact: '+91 8874443283',
      availability: 'Mon-Sat, 9 AM - 7 PM'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your queries anytime',
      contact: 'ranvijayprksh@gmail.com',
      availability: 'We respond within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick support via WhatsApp',
      contact: '+91 8874443283',
      availability: 'Available 24/7'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      description: 'Visit us at our headquarters',
      contact: 'Kisan Mitra Technologies Pvt. Ltd.',
      availability: 'Phulpur, Prayagraj, India'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const departments = [
    {
      icon: Users,
      title: 'Farmer Support',
      email: 'ranvijayprksh@gmail.com',
      description: 'Agricultural guidance and technical support'
    },
    {
      icon: Building,
      title: 'Partnerships',
      email: 'ranvijayprksh@gmail.com',
      description: 'Collaboration and partnership inquiries'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      email: 'ranvijayprksh@gmail.com',
      description: 'Web platform issues and technical assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Whether you're a farmer seeking support, a partner exploring collaboration, 
            or an investor interested in our mission, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="font-medium text-gray-900 mb-1">
                    {method.contact}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {method.availability}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Your full name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+91 8874443283" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Select a subject</option>
                      <option>Farmer Support</option>
                      <option>Partnership Inquiry</option>
                      <option>Investment Opportunity</option>
                      <option>Technical Support</option>
                      <option>Media Inquiry</option>
                      <option>General Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location/State
                  </label>
                  <Input placeholder="Your state or city" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please describe your inquiry in detail. If you're a farmer, mention your crops and challenges. If you're a partner/investor, describe your interest and goals..."
                    rows={5}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Subscribe to our newsletter for agricultural tips and updates
                  </label>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Department-Specific Support
            </h2>
            <p className="text-xl text-gray-600">
              Contact the right department for faster, more specialized assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <dept.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {dept.description}
                  </p>
                  <p className="font-medium text-blue-600">
                    {dept.email}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Office Hours
              </h2>
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">Emergency Support</span>
                </div>
                <p className="text-green-700 text-sm">
                  For urgent agricultural emergencies, farmers can reach us 24/7 via WhatsApp at +91 8874443283
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Kisan Mitra Technologies Pvt. Ltd.</p>
                    <p className="text-gray-600">
                      Phulpur, Prayagraj<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Visit us at our Phulpur office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly do you respond to inquiries?
                </h3>
                <p className="text-gray-600">
                  We typically respond to emails within 24 hours on business days. Phone and WhatsApp queries 
                  are usually answered within a few hours during office hours.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you provide support in regional languages?
                </h3>
                <p className="text-gray-600">
                  Yes! Our support team can assist you in Hindi, English, and several regional languages 
                  including Punjabi, Marathi, Gujarati, Tamil, and Telugu.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I visit your office?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We welcome visitors to our Phulpur, Prayagraj office. Please call ahead to schedule 
                  an appointment so we can ensure someone is available to meet with you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
