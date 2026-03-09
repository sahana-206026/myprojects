import { Link } from 'react-router-dom';
import { FileCheck, Shield, BarChart3, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import heroImage from '@/assets/hero-certificate.jpg';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Military-grade encryption and tamper detection algorithms protect against forgery.'
    },
    {
      icon: FileCheck,
      title: 'Instant Verification',
      description: 'Upload and verify certificates in seconds with our AI-powered validation system.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track verification trends and detect suspicious patterns with detailed analytics.'
    }
  ];

  const stats = [
    { icon: CheckCircle, label: 'Valid Certificates', value: '15,847', color: 'text-success' },
    { icon: XCircle, label: 'Fake Detected', value: '2,341', color: 'text-destructive' },
    { icon: AlertTriangle, label: 'Suspicious Cases', value: '578', color: 'text-warning' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-accent-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Authenticity Validator for 
                <span className="gradient-text"> Academia</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ensuring authenticity, empowering trust. Advanced AI-powered certificate 
                validation with tamper detection and real-time verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/verify" className="btn-hero">
                  <FileCheck className="w-5 h-5 mr-2" />
                  Upload Certificate for Verification
                </Link>
                <Link to="/dashboard" className="btn-outline">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Dashboard
                </Link>
              </div>
            </div>
            <div className="animate-slide-up lg:block">
              <div className="card-elevated p-8 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <img 
                  src={heroImage} 
                  alt="Certificate validation technology" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="card-elevated p-6 text-center animate-scale-in hover-lift">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Why Choose <span className="gradient-text">AVA</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our cutting-edge technology ensures the highest level of certificate authentication 
              with unparalleled accuracy and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="card-elevated p-8 text-center hover-lift animate-fade-in">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary-foreground mb-6">
              Ready to Validate Your Certificates?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of institutions and individuals who trust AVA for secure, 
              reliable certificate validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/verify" 
                className="bg-card text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-card/90 transition-all duration-200 flex items-center justify-center space-x-2 hover-lift"
              >
                <FileCheck className="w-5 h-5" />
                <span>Start Verification</span>
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground hover:text-primary transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;