interface Project {
  id: string;
  title: string;
  description: string;
  icon: 'neural-networks' | 'lukz' | 'zom-ai';
}

export const projects: Project[] = [
  {
    id: 'neural-networks',
    title: 'Neural Networks and Data Pipeline',
    description: 'A robust trading tool integrating neural networks and a structured data pipeline to analyze stock price trends.',
    icon: 'neural-networks'
  },
  {
    id: 'lukz',
    title: 'Lukz',
    description: 'A financial analytics platform leveraging API integration for features like Greek flow data and Congressional trades.',
    icon: 'lukz'
  },
  {
    id: 'zom-ai',
    title: 'Zom AI',
    description: 'A cutting-edge stock analysis tool offering real-time updates and ChatGPT-powered insights.',
    icon: 'zom-ai'
  }
]

export const getProjectById = (id: string): Project | undefined => 
  projects.find(project => project.id === id)
