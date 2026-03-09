import { useState } from 'react';
import { Search, Filter, Download, TrendingUp, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

interface CertificateRecord {
  id: string;
  studentName: string;
  institution: string;
  status: 'valid' | 'fake' | 'suspicious';
  trustScore: number;
  dateSubmitted: string;
  location: string;
}

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data
  const certificates: CertificateRecord[] = [
    {
      id: 'AVA-001',
      studentName: 'Alice Johnson',
      institution: 'MIT',
      status: 'valid',
      trustScore: 94,
      dateSubmitted: '2024-01-15',
      location: 'Boston, MA'
    },
    {
      id: 'AVA-002',
      studentName: 'Bob Smith',
      institution: 'Stanford University',
      status: 'fake',
      trustScore: 12,
      dateSubmitted: '2024-01-14',
      location: 'San Francisco, CA'
    },
    {
      id: 'AVA-003',
      studentName: 'Carol Davis',
      institution: 'Harvard University',
      status: 'suspicious',
      trustScore: 67,
      dateSubmitted: '2024-01-13',
      location: 'Cambridge, MA'
    },
    {
      id: 'AVA-004',
      studentName: 'David Wilson',
      institution: 'UC Berkeley',
      status: 'valid',
      trustScore: 89,
      dateSubmitted: '2024-01-12',
      location: 'Berkeley, CA'
    },
    {
      id: 'AVA-005',
      studentName: 'Eva Martinez',
      institution: 'Unknown Institution',
      status: 'fake',
      trustScore: 8,
      dateSubmitted: '2024-01-11',
      location: 'Houston, TX'
    }
  ];

  const monthlyData = [
    { month: 'Jan', valid: 1240, fake: 89, suspicious: 67 },
    { month: 'Feb', valid: 1389, fake: 123, suspicious: 78 },
    { month: 'Mar', valid: 1567, fake: 156, suspicious: 89 },
    { month: 'Apr', valid: 1678, fake: 134, suspicious: 95 },
    { month: 'May', valid: 1823, fake: 167, suspicious: 102 },
    { month: 'Jun', valid: 1956, fake: 189, suspicious: 87 }
  ];

  const statusDistribution = [
    { name: 'Valid', value: 87.3, color: 'hsl(var(--success))' },
    { name: 'Fake', value: 8.2, color: 'hsl(var(--destructive))' },
    { name: 'Suspicious', value: 4.5, color: 'hsl(var(--warning))' }
  ];

  const heatmapData = [
    { location: 'California', attempts: 234, risk: 'high' },
    { location: 'Texas', attempts: 189, risk: 'high' },
    { location: 'New York', attempts: 156, risk: 'medium' },
    { location: 'Florida', attempts: 134, risk: 'medium' },
    { location: 'Illinois', attempts: 87, risk: 'low' }
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || cert.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const classes = {
      valid: 'status-valid',
      fake: 'status-fake',
      suspicious: 'status-suspicious'
    };
    return classes[status as keyof typeof classes];
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'fake':
        return <XCircle className="w-4 h-4 text-destructive" />;
      case 'suspicious':
        return <AlertCircle className="w-4 h-4 text-warning" />;
      default:
        return null;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor certificate verification activity and detect suspicious patterns
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card-elevated p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Verified</p>
                <p className="text-2xl font-bold text-foreground">18,766</p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-success mr-1" />
              <span className="text-success">+12.5%</span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Fake Detected</p>
                <p className="text-2xl font-bold text-foreground">1,538</p>
              </div>
              <XCircle className="w-8 h-8 text-destructive" />
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-destructive mr-1" />
              <span className="text-destructive">+8.3%</span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Suspicious</p>
                <p className="text-2xl font-bold text-foreground">847</p>
              </div>
              <AlertCircle className="w-8 h-8 text-warning" />
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-warning mr-1" />
              <span className="text-warning">+3.2%</span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                <p className="text-2xl font-bold text-foreground">96.8%</p>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">AI</span>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-success mr-1" />
              <span className="text-success">+0.4%</span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Trends */}
          <div className="card-elevated p-6">
            <h2 className="font-heading font-semibold text-xl text-foreground mb-6">
              Monthly Verification Trends
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="valid" fill="hsl(var(--success))" name="Valid" />
                <Bar dataKey="fake" fill="hsl(var(--destructive))" name="Fake" />
                <Bar dataKey="suspicious" fill="hsl(var(--warning))" name="Suspicious" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Status Distribution */}
          <div className="card-elevated p-6">
            <h2 className="font-heading font-semibold text-xl text-foreground mb-6">
              Status Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Percentage']}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              {statusDistribution.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fake Attempt Heatmap */}
        <div className="card-elevated p-6 mb-8">
          <h2 className="font-heading font-semibold text-xl text-foreground mb-6">
            Fake Attempt Heatmap by Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {heatmapData.map((location, index) => (
              <div key={index} className="card-hero p-4 text-center">
                <h3 className="font-semibold text-foreground mb-2">{location.location}</h3>
                <div className="text-2xl font-bold text-foreground mb-2">{location.attempts}</div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(location.risk)}`}>
                  {location.risk.toUpperCase()} RISK
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Records Table */}
        <div className="card-elevated p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="font-heading font-semibold text-xl text-foreground mb-4 sm:mb-0">
              Recent Certificate Records
            </h2>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search records..."
                  className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Filter */}
              <select
                className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="valid">Valid</option>
                <option value="fake">Fake</option>
                <option value="suspicious">Suspicious</option>
              </select>

              <button className="btn-secondary flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Student Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Institution</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Trust Score</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Location</th>
                </tr>
              </thead>
              <tbody>
                {filteredCertificates.map((cert) => (
                  <tr key={cert.id} className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">{cert.id}</td>
                    <td className="py-3 px-4">{cert.studentName}</td>
                    <td className="py-3 px-4">{cert.institution}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(cert.status)}
                        <span className={getStatusBadge(cert.status)}>
                          {cert.status.toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              cert.trustScore >= 80
                                ? 'bg-success'
                                : cert.trustScore >= 50
                                ? 'bg-warning'
                                : 'bg-destructive'
                            }`}
                            style={{ width: `${cert.trustScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{cert.trustScore}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{cert.dateSubmitted}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{cert.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;