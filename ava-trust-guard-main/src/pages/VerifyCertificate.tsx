import { useState, useRef } from 'react';
import { Upload, FileCheck, Download, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface VerificationResult {
  status: 'valid' | 'fake' | 'suspicious';
  trustScore: number;
  details: string[];
  tamperDetection: boolean;
}

const VerifyCertificate = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setResult(null);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const simulateVerification = () => {
    setIsVerifying(true);
    
    // Simulate processing time
    setTimeout(() => {
      const scenarios = [
        {
          status: 'valid' as const,
          trustScore: 94,
          details: [
            'Digital signature verified',
            'Institution seal authentic',
            'Font consistency confirmed',
            'No tampering detected'
          ],
          tamperDetection: false
        },
        {
          status: 'fake' as const,
          trustScore: 12,
          details: [
            'Invalid digital signature',
            'Suspicious font variations',
            'Missing security features',
            'Institution seal mismatch'
          ],
          tamperDetection: true
        },
        {
          status: 'suspicious' as const,
          trustScore: 67,
          details: [
            'Partial signature verification',
            'Minor font inconsistencies detected',
            'Requires manual review',
            'Institution confirmed but formatting unusual'
          ],
          tamperDetection: true
        }
      ];

      const randomResult = scenarios[Math.floor(Math.random() * scenarios.length)];
      setResult(randomResult);
      setIsVerifying(false);
    }, 3000);
  };

  const downloadReport = () => {
    // Simulate PDF download
    alert('Downloading validation report...');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid':
        return <CheckCircle className="w-8 h-8 text-success" />;
      case 'fake':
        return <XCircle className="w-8 h-8 text-destructive" />;
      case 'suspicious':
        return <AlertTriangle className="w-8 h-8 text-warning" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'valid':
        return 'status-valid';
      case 'fake':
        return 'status-fake';
      case 'suspicious':
        return 'status-suspicious';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl text-foreground mb-4">
            Certificate Verification
          </h1>
          <p className="text-xl text-muted-foreground">
            Upload your certificate for instant authenticity validation
          </p>
        </div>

        {/* Upload Section */}
        <div className="card-elevated p-8 mb-8">
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              file ? 'border-primary bg-primary-light' : 'border-border hover:border-primary'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {file ? (
              <div className="animate-scale-in">
                <FileCheck className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">File Selected</h3>
                <p className="text-muted-foreground mb-4">{file.name}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={simulateVerification}
                    disabled={isVerifying}
                    className="btn-hero"
                  >
                    {isVerifying ? 'Verifying...' : 'Start Verification'}
                  </button>
                  <button
                    onClick={() => {
                      setFile(null);
                      setResult(null);
                      if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                      }
                    }}
                    className="btn-secondary"
                  >
                    Choose Different File
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  Upload Certificate
                </h3>
                <p className="text-muted-foreground mb-4">
                  Drag and drop your certificate here, or click to browse
                </p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="btn-hero"
                >
                  Choose File
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileSelect}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                />
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Supported formats: PDF, JPG, PNG (Max size: 10MB)
          </p>
        </div>

        {/* Verification Progress */}
        {isVerifying && (
          <div className="card-elevated p-8 mb-8 text-center animate-fade-in">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Analyzing Certificate
            </h3>
            <p className="text-muted-foreground">
              Running security checks, tamper detection, and authenticity validation...
            </p>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="space-y-6 animate-fade-in">
            {/* Main Result */}
            <div className="card-elevated p-8">
              <div className="text-center mb-6">
                {getStatusIcon(result.status)}
                <h2 className="font-heading font-bold text-2xl text-foreground mt-4 mb-2">
                  Certificate is {result.status.toUpperCase()}
                </h2>
                <div className={`inline-block ${getStatusClass(result.status)}`}>
                  Authenticity Score: {result.trustScore}%
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Trust Score */}
                <div className="card-hero p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-4">Trust Score</h3>
                  <div className="relative">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div
                        className={`h-4 rounded-full ${
                          result.trustScore >= 80
                            ? 'bg-success'
                            : result.trustScore >= 50
                            ? 'bg-warning'
                            : 'bg-destructive'
                        }`}
                        style={{ width: `${result.trustScore}%` }}
                      ></div>
                    </div>
                    <div className="text-right mt-2 font-semibold">
                      {result.trustScore}%
                    </div>
                  </div>
                </div>

                {/* Tamper Detection */}
                <div className="card-hero p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-4">Tamper Detection</h3>
                  <div className="flex items-center space-x-2">
                    {result.tamperDetection ? (
                      <>
                        <AlertTriangle className="w-6 h-6 text-warning" />
                        <span className="text-warning font-semibold">Issues Detected</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-6 h-6 text-success" />
                        <span className="text-success font-semibold">No Tampering</span>
                      </>
                    )}
                  </div>
                  {result.tamperDetection && (
                    <div className="mt-4 p-3 bg-warning-light rounded-lg border border-warning/20">
                      <p className="text-sm text-warning-foreground">
                        Red highlight boxes show suspicious areas detected in the certificate
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="card-elevated p-8">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                Verification Details
              </h3>
              <div className="space-y-3">
                {result.details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                <button onClick={downloadReport} className="btn-hero flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Report</span>
                </button>
                <button
                  onClick={() => {
                    setFile(null);
                    setResult(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  className="btn-secondary"
                >
                  Verify Another Certificate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyCertificate;