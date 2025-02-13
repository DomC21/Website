interface ProjectMetrics {
  cagr: string;
  sharpeRatio: string;
  maxDrawdown: string;
}

interface ProjectData {
  date: string;
  actual: number;
  predicted?: number;
}

interface PerformanceData {
  period: string;
  return: number;
  benchmark?: number;
}

interface Project {
  id: string;
  title: string;
  description: string;
  icon: 'neural-networks' | 'lukz' | 'zom-ai';
  features: string[];
  metrics: ProjectMetrics;
  priceData: ProjectData[];
  performanceData: PerformanceData[];
  roadmap: string[];
}

export const projects: Project[] = [
  {
    id: 'neural-networks',
    title: 'Neural Networks and Data Pipeline',
    description: 'A robust trading tool integrating neural networks and a structured data pipeline to analyze stock price trends.',
    icon: 'neural-networks',
    features: [
      'Advanced neural network architecture',
      'Real-time data processing',
      'Trend analysis algorithms',
      'Structured data pipeline'
    ],
    metrics: {
      cagr: '35.2%',
      sharpeRatio: '2.9',
      maxDrawdown: '-11.2%'
    },
    priceData: [
      { date: '2024-01', actual: 100, predicted: 102 },
      { date: '2024-02', actual: 105, predicted: 107 },
      { date: '2024-03', actual: 110, predicted: 112 }
    ],
    performanceData: [
      { period: '1M', return: 8.5, benchmark: 2.1 },
      { period: '3M', return: 15.2, benchmark: 5.8 },
      { period: '6M', return: 28.4, benchmark: 12.3 }
    ],
    roadmap: [
      'Enhanced model architecture - Q2 2024',
      'Multi-asset support - Q3 2024',
      'Real-time backtesting - Q4 2024',
      'Advanced risk metrics - Q1 2025'
    ]
  },
  {
    id: 'lukz',
    title: 'Lukz',
    description: 'A financial analytics platform leveraging API integration for features like Greek flow data and Congressional trades.',
    icon: 'lukz',
    features: [
      'Greek flow data analysis',
      'Congressional trade tracking',
      'API integration',
      'Real-time analytics'
    ],
    metrics: {
      cagr: '28.7%',
      sharpeRatio: '2.4',
      maxDrawdown: '-15.2%'
    },
    priceData: [
      { date: '2024-01', actual: 100 },
      { date: '2024-02', actual: 108 },
      { date: '2024-03', actual: 115 }
    ],
    performanceData: [
      { period: '1M', return: 7.2, benchmark: 2.1 },
      { period: '3M', return: 14.8, benchmark: 5.8 },
      { period: '6M', return: 25.6, benchmark: 12.3 }
    ],
    roadmap: [
      'Options flow integration - Q2 2024',
      'Machine learning signals - Q3 2024',
      'Social sentiment analysis - Q4 2024',
      'Advanced portfolio analytics - Q1 2025'
    ]
  },
  {
    id: 'zom-ai',
    title: 'Zom AI',
    description: 'A cutting-edge stock analysis tool offering real-time updates and ChatGPT-powered insights.',
    icon: 'zom-ai',
    features: [
      'Real-time market updates',
      'ChatGPT-powered analysis',
      'Predictive insights',
      'Market trend visualization'
    ],
    metrics: {
      cagr: '35.2%',
      sharpeRatio: '2.6',
      maxDrawdown: '-13.8%'
    },
    priceData: [
      { date: '2024-01', actual: 100, predicted: 103 },
      { date: '2024-02', actual: 112, predicted: 110 },
      { date: '2024-03', actual: 118, predicted: 115 }
    ],
    performanceData: [
      { period: '1M', return: 9.1, benchmark: 2.1 },
      { period: '3M', return: 16.5, benchmark: 5.8 },
      { period: '6M', return: 30.2, benchmark: 12.3 }
    ],
    roadmap: [
      'Enhanced AI models - Q2 2024',
      'Custom chatbot training - Q3 2024',
      'Multi-language support - Q4 2024',
      'Advanced visualization tools - Q1 2025'
    ]
  }
]

export const getProjectById = (id: string): Project | undefined => 
  projects.find(project => project.id === id)
