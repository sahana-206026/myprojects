import { Shield, Target, Eye, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const problems = [
    'Rising incidents of fake academic certificates in job markets',
    'Difficulty in verifying authenticity of foreign educational credentials',
    'Manual verification processes are time-consuming and error-prone',
    'Lack of standardized verification systems across institutions'
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Advanced AI Detection',
      description: 'Machine learning algorithms trained on thousands of authentic certificates'
    },
    {
      icon: Target,
      title: 'Tamper Detection',
      description: 'Sophisticated analysis of fonts, seals, and document structures'
    },
    {
      icon: Eye,
      title: 'Real-time Verification',
      description: 'Instant validation with comprehensive reporting and analytics'
    },
    {
      icon: Globe,
      title: 'Global Database',
      description: 'Connected network of verified institutions and their certificate formats'
    }
  ];

  const futureScope = [
    {
      title: 'Employment Certificates',
      description: 'Expand verification to work experience letters and employment certificates'
    },
    {
      title: 'Medical Certifications',
      description: 'Validate medical licenses, vaccination certificates, and health records'
    },
    {
      title: 'Government Documents',
      description: 'Authenticate government-issued certificates and official documents'
    },
    {
      title: 'Professional Licenses',
      description: 'Verify professional certifications, licenses, and accreditations'
    },
    {
      title: 'Digital Credentials',
      description: 'Support for blockchain-based and digital-first certification systems'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl text-foreground mb-6">
            About <span className="gradient-text">AVA</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authenticity Validator for Academia (AVA) is a cutting-edge platform designed to 
            combat certificate fraud and ensure the integrity of academic credentials worldwide.
          </p>
        </div>

        {/* Problem Statement */}
        <section className="mb-16">
          <div className="card-elevated p-8">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">
              The Problem We Solve
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              In today's digital age, certificate fraud has become a significant concern across 
              industries, undermining trust in educational achievements and professional qualifications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  </div>
                  <p className="text-foreground">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Our Solution
            </h2>
            <p className="text-lg text-muted-foreground">
              AVA leverages advanced artificial intelligence and machine learning to provide 
              instant, accurate certificate verification with unprecedented reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="card-elevated p-6 hover-lift">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg mb-4">
                  <solution.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="card-hero p-8">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-8 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">96.8% Accuracy</h3>
                <p className="text-sm text-muted-foreground">Industry-leading accuracy in certificate validation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Secure Processing</h3>
                <p className="text-sm text-muted-foreground">End-to-end encryption and secure data handling</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Real-time Analysis</h3>
                <p className="text-sm text-muted-foreground">Instant verification with detailed reporting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Scope */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Future Vision
            </h2>
            <p className="text-lg text-muted-foreground">
              Our roadmap extends beyond academia to create a comprehensive verification 
              ecosystem for all types of official documents and certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureScope.map((item, index) => (
              <div key={index} className="card-elevated p-6 hover-lift">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section>
          <div className="card-hero p-8 text-center">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
              Our Mission
            </h2>
            <blockquote className="text-lg text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
              "To build a world where trust in credentials is absolute, where verification 
              is instant, and where the integrity of achievements is never questioned. 
              AVA represents our commitment to creating a more transparent and trustworthy 
              global certification ecosystem."
            </blockquote>
            <div className="mt-8 flex items-center justify-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">AVA Team</div>
                <div className="text-sm text-muted-foreground">Authenticity Validators</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;