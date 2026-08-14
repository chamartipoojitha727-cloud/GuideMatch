import { FacultyGuide, ProjectProposal, MentorshipRequest, ActiveMentee, MilestoneItem } from '../types';

export const INITIAL_GUIDES: FacultyGuide[] = [
  {
    id: 'guide-1',
    name: 'Dr. Marcus Thorne',
    title: 'Associate Professor & Lab Director',
    department: 'Department of Computer Science',
    campus: 'Silicon Valley Campus',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    email: 'm.thorne@stanford.edu',
    bio: 'Leading researcher in Spatio-temporal Deep Learning, Graph Neural Networks, and Intelligent Transportation Systems. 12+ years directing the Urban AI Lab with 45+ peer-reviewed papers in top-tier conferences.',
    researchPhilosophy: 'I mentor students by grounding theoretical advancements in high-impact physical applications. We emphasize reproducibility, solid software engineering, and conference-ready writing.',
    matchScore: 94,
    capacity: {
      current: 3,
      max: 5,
    },
    availabilityStatus: 'High',
    experienceYears: 12,
    rating: 4.9,
    reviewCount: 38,
    publicationsCount: 45,
    citationsCount: 1850,
    successRate: 96,
    meetingCadence: 'Weekly 1-on-1 & Bi-weekly Lab Sync',
    primaryDomain: 'Deep Learning & Smart Cities',
    researchInterests: [
      'Spatio-Temporal Graph Neural Networks',
      'Intelligent Transportation & Traffic Flow',
      'Urban Sensor Networks & Edge IoT',
      'Autonomous Fleet Routing Algorithms'
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'GeoPandas', 'ROS2', 'CUDA'],
    whyMatchReason: 'Expertise directly aligns with Spatio-temporal LSTM modeling and real-time sensor streams required for urban traffic prediction.',
    pastSupervisedProjects: [
      'Multi-modal Congestion Forecasting using Graph Transformers (NeurIPS Workshop)',
      'Decentralized EV Charging Grid Optimization (Best Capstone Award 2024)',
      'Sub-second Anomaly Detection in High-velocity Transit Streams'
    ],
    publications: [
      {
        id: 'pub-1',
        title: 'DeepST-GNN: Scalable Spatio-Temporal Graph Networks for Citywide Traffic Forecasting',
        conference: 'IEEE Transactions on Intelligent Transportation Systems (T-ITS)',
        year: 2024,
        citations: 340,
        abstract: 'A unified spatio-temporal framework that combines adaptive graph diffusion convolutions with multi-head attention mechanisms to predict arterial traffic speeds up to 6 hours ahead.',
        tags: ['GNN', 'Traffic Prediction', 'PyTorch']
      },
      {
        id: 'pub-2',
        title: 'Edge-Assisted Sensor Fusion for Autonomous Urban Intersections',
        conference: 'ACM SenSys',
        year: 2023,
        citations: 195,
        abstract: 'Deploying quantized neural networks to roadside edge compute units for ultra-low latency vehicle-to-infrastructure telemetry routing.',
        tags: ['Edge Computing', 'IoT', 'Sensor Fusion']
      },
      {
        id: 'pub-3',
        title: 'Reinforcement Learning for Dynamic Traffic Light Phasing in Dense Corridors',
        conference: 'AAAI Conference on Artificial Intelligence',
        year: 2022,
        citations: 412,
        abstract: 'Multi-agent deep Q-learning algorithm addressing non-stationary transit demand across interconnected multi-signal arterial road corridors.',
        tags: ['Reinforcement Learning', 'Smart Cities']
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        studentName: 'Emma Watson',
        studentMajor: 'M.S. Computer Science',
        year: '2024',
        projectTitle: 'Real-time Arterial Congestion Engine',
        rating: 5,
        comment: 'Dr. Thorne provides unparalleled guidance on model architectures and experimental rigour. Our work ended up getting published at IEEE ITS!',
        date: 'June 2024'
      },
      {
        id: 'rev-2',
        studentName: 'David Zhang',
        studentMajor: 'B.S. Data Science',
        year: '2023',
        projectTitle: 'Graph Neural Networks for Transit Hubs',
        rating: 5,
        comment: 'Very approachable, holds regular weekly meetings, and provided compute clusters that were instrumental for training our heavy models.',
        date: 'Dec 2023'
      }
    ]
  },
  {
    id: 'guide-2',
    name: 'Dr. Elena Rostova',
    title: 'Professor & Chair of Computer Vision',
    department: 'Department of Electrical & Computer Engineering',
    campus: 'Main Research Campus',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    email: 'elena.rostova@university.edu',
    bio: 'Pioneering researcher in Edge Computer Vision, Autonomous Robotics Perception, and Embedded Neural Acceleration. Former Senior Staff AI Scientist at Tesla Autopilot.',
    researchPhilosophy: 'I love working with self-motivated students who want to bridge software theory with physical hardware deployment. We build systems that run in the real world.',
    matchScore: 88,
    capacity: {
      current: 2,
      max: 4,
    },
    availabilityStatus: 'High',
    experienceYears: 14,
    rating: 4.8,
    reviewCount: 42,
    publicationsCount: 62,
    citationsCount: 3200,
    successRate: 98,
    meetingCadence: 'Weekly Progress Review & Code Sprint',
    primaryDomain: 'Computer Vision & Robotics',
    researchInterests: [
      'Edge Video Analytics & Object Tracking',
      'Multi-spectral Vision for Autonomous UAVs',
      'Hardware-Aware Model Compression & TensorRT',
      'Real-time Visual SLAM'
    ],
    technologies: ['C++', 'Python', 'OpenCV', 'PyTorch', 'TensorRT', 'ROS2', 'CUDA'],
    whyMatchReason: 'Strong alignment on real-time stream processing, low-latency inferencing, and embedded camera telemetry.',
    pastSupervisedProjects: [
      'Autonomous Drone Obstacle Avoidance via Depth Map Prediction (ICRA 2023)',
      'Sub-millisecond License Plate & Vehicle Classifier on Jetson Orin',
      'Thermal Imaging Wildfire Perimeter Tracking UAV'
    ],
    publications: [
      {
        id: 'pub-4',
        title: 'MicroSLAM: Real-time Visual Odometry on Micro-UAVs under Extreme Bandwidth Limits',
        conference: 'IEEE ICRA',
        year: 2023,
        citations: 210,
        abstract: 'Ultra-lightweight optical flow integration capable of sustaining 60 FPS trajectory estimation on ARM Cortex-A53 processors.',
        tags: ['SLAM', 'Robotics', 'Embedded AI']
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        studentName: 'Julian Alvarez',
        studentMajor: 'B.S. Robotics',
        year: '2024',
        projectTitle: 'Stereo-Vision Drone Navigation',
        rating: 5,
        comment: 'Dr. Rostova connected me directly with hardware testbeds and helped me secure an internship after our project demo!',
        date: 'May 2024'
      }
    ]
  },
  {
    id: 'guide-3',
    name: 'Dr. Sarah Chen',
    title: 'Assistant Professor',
    department: 'Department of Computer Science',
    campus: 'Silicon Valley Campus',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    email: 'sarah.chen@university.edu',
    bio: 'Researcher focused on Large Language Models, Multi-agent Reasoning, and Retrieval-Augmented Generation for Scientific Discovery. NSF CAREER Awardee 2023.',
    researchPhilosophy: 'Empowering students to push boundaries in natural language understanding with rigorous benchmarking and human-in-the-loop evaluations.',
    matchScore: 91,
    capacity: {
      current: 1,
      max: 3,
    },
    availabilityStatus: 'High',
    experienceYears: 7,
    rating: 4.9,
    reviewCount: 24,
    publicationsCount: 31,
    citationsCount: 1420,
    successRate: 94,
    meetingCadence: 'Bi-weekly Deep Dive & Asynchronous Code Review',
    primaryDomain: 'Natural Language Processing & LLMs',
    researchInterests: [
      'RAG & Vector Knowledge Graphs',
      'Multi-Agent Collaborative Problem Solving',
      'Factuality & Hallucination Mitigation in LLMs',
      'AI-assisted Scientific Literature Synthesis'
    ],
    technologies: ['Python', 'HuggingFace', 'LangChain', 'vLLM', 'PyTorch', 'FastAPI'],
    whyMatchReason: 'Extensive experience in semantic data pipelines, large model fine-tuning, and scalable API integrations.',
    pastSupervisedProjects: [
      'Automated Medical Trial Synthesizer with BioBERT (EMNLP 2023)',
      'Contextual Code Generation Assistant for Legacy Codebases'
    ],
    publications: [
      {
        id: 'pub-5',
        title: 'Agentic-RAG: Self-Reflective Knowledge Retrieval over Dynamic Knowledge Graphs',
        conference: 'ACL 2024',
        year: 2024,
        citations: 280,
        abstract: 'Dynamic graph traversal algorithm that empowers LLM agents to verify factual premises before generation.',
        tags: ['LLM', 'RAG', 'Agents']
      }
    ],
    reviews: [
      {
        id: 'rev-4',
        studentName: 'Kavita Rao',
        studentMajor: 'M.S. AI Systems',
        year: '2024',
        projectTitle: 'Legal Contract Parsing with Attention',
        rating: 5,
        comment: 'Dr. Chen is fantastic! Her feedback on our paper drafts made all the difference in getting accepted to ACL.',
        date: 'Aug 2024'
      }
    ]
  },
  {
    id: 'guide-4',
    name: 'Dr. James Lin',
    title: 'Associate Professor of Systems',
    department: 'Department of Computer Science',
    campus: 'Downtown Engineering Center',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    email: 'james.lin@university.edu',
    bio: 'Specialist in Cloud Native Computing, High-throughput Distributed Data Engines, and Stream Processing. 15+ years in industry and academia.',
    researchPhilosophy: 'Systems research requires clean code, deep OS understanding, and measurable latency benchmarks under heavy load.',
    matchScore: 82,
    capacity: {
      current: 4,
      max: 5,
    },
    availabilityStatus: 'Medium',
    experienceYears: 15,
    rating: 4.7,
    reviewCount: 31,
    publicationsCount: 50,
    citationsCount: 2400,
    successRate: 92,
    meetingCadence: 'Weekly Systems Architecture Review',
    primaryDomain: 'Distributed Systems & Cloud',
    researchInterests: [
      'Kafka / Flink Streaming Pipeline Optimization',
      'Kubernetes Orchestration for Heterogeneous GPU Clusters',
      'Fault-Tolerant Consensus in Geo-Distributed Databases',
      'Serverless Microsecond Cold-Start Optimizations'
    ],
    technologies: ['Go', 'Rust', 'Kubernetes', 'Apache Kafka', 'C++', 'Redis', 'Docker'],
    whyMatchReason: 'Relevant for the backend telemetry streaming and Redis/Kafka pub-sub layer of real-time urban telemetry.',
    pastSupervisedProjects: [
      'High-throughput Telemetry Ingestion Engine (10M events/sec)',
      'Sub-millisecond Serverless Runtime for WASM Functions'
    ],
    publications: [
      {
        id: 'pub-6',
        title: 'FlowScale: Dynamic Workload Partitioning for Multi-Tenant Stream Engines',
        conference: 'VLDB 2023',
        year: 2023,
        citations: 160,
        abstract: 'An adaptive load balancer that partitions partition keys dynamically according to skew distribution.',
        tags: ['Distributed Systems', 'Stream Processing']
      }
    ],
    reviews: [
      {
        id: 'rev-5',
        studentName: 'Robert Vance',
        studentMajor: 'B.S. Computer Engineering',
        year: '2023',
        projectTitle: 'Ultra-low Latency Market Feed Pipeline',
        rating: 5,
        comment: 'Learned more about Linux kernel tuning and concurrency from Dr. Lin than anywhere else!',
        date: 'Nov 2023'
      }
    ]
  },
  {
    id: 'guide-5',
    name: 'Dr. Emily Rodriguez',
    title: 'Associate Professor & AI Ethics Lead',
    department: 'Data Science & Informatics Institute',
    campus: 'Silicon Valley Campus',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80',
    email: 'emily.rodriguez@university.edu',
    bio: 'Focuses on Machine Learning Interpretability, Algorithmic Fairness, and Health Informatics. Co-chair of FAT/ML workshop.',
    researchPhilosophy: 'Model transparency is essential for AI systems making high-stakes public safety and civic resource decisions.',
    matchScore: 85,
    capacity: {
      current: 2,
      max: 4,
    },
    availabilityStatus: 'High',
    experienceYears: 9,
    rating: 4.9,
    reviewCount: 29,
    publicationsCount: 38,
    citationsCount: 1620,
    successRate: 95,
    meetingCadence: 'Weekly 1-on-1 Mentorship Check-in',
    primaryDomain: 'Data Science & Analytics',
    researchInterests: [
      'Explainable AI (XAI) & SHAP / LIME Extensions',
      'Fairness in Predictive Public Infrastructure',
      'Healthcare Diagnostics & Time-Series Anomaly Detection',
      'Differential Privacy in Demographic Datasets'
    ],
    technologies: ['Python', 'Scikit-learn', 'PyTorch', 'SHAP', 'Pandas', 'R'],
    whyMatchReason: 'Ideal for ensuring fairness and explainability in transit routing allocations and public congestion telemetry.',
    pastSupervisedProjects: [
      'Fairness-Aware Predictive Policing & Transit Routing Auditing',
      'Explainable Sepsis Early-Warning in Intensive Care'
    ],
    publications: [
      {
        id: 'pub-7',
        title: 'Counterfactual Explanations for Complex Time-Series Deep Classifiers',
        conference: 'KDD 2024',
        year: 2024,
        citations: 115,
        abstract: 'Perturbation algorithm that discovers minimal actionable alterations in spatio-temporal inputs.',
        tags: ['XAI', 'Time-Series', 'Fairness']
      }
    ],
    reviews: [
      {
        id: 'rev-6',
        studentName: 'Zoe Martinez',
        studentMajor: 'M.S. Data Science',
        year: '2024',
        projectTitle: 'Equitable Urban Infrastructure Allocation',
        rating: 5,
        comment: 'Dr. Rodriguez challenged us to think deeply about real-world societal impact beyond raw accuracy metrics.',
        date: 'May 2024'
      }
    ]
  },
  {
    id: 'guide-6',
    name: 'Prof. Michael Chen',
    title: 'Professor of Robotics & Automation',
    department: 'Department of Mechanical & Aerospace Engineering',
    campus: 'West Campus Technology Park',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    email: 'm.chen@eng.university.edu',
    bio: 'Leading innovator in Multi-Robot Swarm Coordination, Autonomous Navigation in GPS-Denied Environments, and Field Robotics.',
    researchPhilosophy: 'Theory is tested in the simulator, but validated in the wind tunnel and physical arena.',
    matchScore: 78,
    capacity: {
      current: 3,
      max: 3,
    },
    availabilityStatus: 'Full',
    experienceYears: 18,
    rating: 4.7,
    reviewCount: 45,
    publicationsCount: 88,
    citationsCount: 4900,
    successRate: 97,
    meetingCadence: 'Bi-weekly Lab Sync & Weekly Hardware Lab Hours',
    primaryDomain: 'Robotics & Autonomous Systems',
    researchInterests: [
      'Swarm Robotics & Distributed Consensus',
      'UAV Flight Dynamics in Turbulent Weather',
      'Sensor Fusion with LiDAR & Radar',
      'Physical Testbed Deployment'
    ],
    technologies: ['C++', 'ROS2', 'Gazebo', 'MATLAB', 'PX4', 'Python'],
    whyMatchReason: 'Complementary expertise if extending traffic routing to physical autonomous vehicle testbeds.',
    pastSupervisedProjects: [
      'Subterranean Cave Exploration Swarm (DARPA Challenge Semi-Finalist)',
      'Autonomous High-Speed Highway Platooning System'
    ],
    publications: [
      {
        id: 'pub-8',
        title: 'Resilient Consensus for Autonomous Vehicle Platoons under Cyber-Physical Disruptions',
        conference: 'IEEE Trans. Robotics (T-RO)',
        year: 2023,
        citations: 310,
        abstract: 'Nonlinear control theory ensuring collision avoidance even during intermittent packet dropouts.',
        tags: ['Robotics', 'Control Theory', 'ROS2']
      }
    ],
    reviews: [
      {
        id: 'rev-7',
        studentName: 'Tariq Al-Mansoor',
        studentMajor: 'Ph.D. Robotics',
        year: '2023',
        projectTitle: 'High-speed Swarm Obstacle Maneuvers',
        rating: 5,
        comment: 'Incredible lab equipment and funding support. Prof. Chen connects you with industry partners instantly.',
        date: 'Sept 2023'
      }
    ]
  }
];

export const CURRENT_STUDENT_PROJECT: ProjectProposal = {
  id: 'proj-1',
  title: 'Real-time Traffic Prediction using LSTM & Spatio-Temporal Graph Networks',
  domain: 'Deep Learning & AI',
  timeline: '2 Semesters',
  academicLevel: 'Undergraduate Capstone',
  problemStatement: 'Modern urban centers suffer severe traffic congestion due to static signal timings and inadequate sub-hour flow forecasts. Existing approaches fail to capture dynamic cross-intersection dependencies during sudden weather changes or emergency disruptions.',
  methodology: 'We propose a hybrid pipeline integrating Spatio-Temporal Graph Neural Networks (ST-GNN) with Bidirectional LSTM layers. The model ingests live sensor feeds from 120 city loop detectors via Redis streams, executing 15-minute ahead speed and queue forecasts.',
  technologies: ['Python', 'PyTorch', 'TensorFlow', 'GIS Data', 'Redis Streams', 'FastAPI', 'Docker'],
  preferredGuideLevel: 'Academic Researcher',
  mentorshipStyle: 'Hands-on Weekly',
  completionPercentage: 65,
  status: 'In Progress',
  submittedDate: 'Sep 10, 2024',
  assignedGuideId: 'guide-1',
  assignedGuideName: 'Dr. Marcus Thorne',
  nextMilestone: {
    name: 'Mid-term Benchmark & GPU Cluster Evaluation',
    dueDate: 'Nov 18, 2024'
  }
};

export const SAMPLE_AI_ANALYSIS: Record<string, any> = {
  'proj-1': {
    projectId: 'proj-1',
    projectTitle: 'Real-time Traffic Prediction using LSTM & Spatio-Temporal Graph Networks',
    complexityLevel: 4,
    complexityLabel: 'Level 4: Advanced Capstone / Graduate Tier',
    theoreticalDepth: 88,
    practicalImplementation: 92,
    detectedDomains: ['Deep Learning', 'Smart City Tech', 'Spatio-Temporal Analysis', 'IoT Sensor Streaming'],
    requiredTechnologies: ['Python', 'PyTorch', 'GIS Data', 'Redis Streams'],
    recommendedTechnologies: ['GeoPandas', 'CUDA Acceleration', 'Docker Containerization', 'MLflow Tracking'],
    summary: 'High-impact computational project with strong mathematical foundations in graph topology and temporal sequence modeling. Project demonstrates exceptional technical maturity with immediate municipal applicability.',
    methodologyStrengths: [
      'Combines spatial graph convolutional filters with temporal recurrence for realistic non-Euclidean urban grids',
      'Real-time streaming pipeline design with sub-second latency target',
      'Realistic multi-variable validation dataset encompassing 120 live sensors'
    ],
    recommendedImprovements: [
      'Incorporate weather telemetry covariates (precipitation, visibility) into the node feature matrix',
      'Establish a baseline ablation study against standard ARIMA and XGBoost regressors',
      'Formulate a memory-efficient graph sampling strategy for larger 1,000+ node city expansions'
    ],
    idealGuideCriteria: [
      'Ph.D. in Computer Science or Data Science with focus on Spatio-temporal AI',
      'Experience with Urban Planning & Intelligent Transportation Systems',
      'Published peer-reviewed research in GIS data integration and Graph Neural Networks',
      'Access to GPU compute clusters for multi-node training runs'
    ],
    estimatedCompletionWeeks: 24,
    topRecommendedGuideIds: ['guide-1', 'guide-2', 'guide-3', 'guide-5']
  }
};

export const INITIAL_REQUESTS: MentorshipRequest[] = [
  {
    id: 'req-1',
    projectId: 'proj-1',
    projectTitle: 'Real-time Traffic Prediction using LSTM & ST-GNN',
    projectDomain: 'Deep Learning & Smart Cities',
    studentId: 'stud-1',
    studentName: 'Alex Johnson',
    studentMajor: 'Computer Science B.S.',
    studentGpa: '3.92',
    studentYear: 'Senior Year',
    studentAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
    guideId: 'guide-1',
    guideName: 'Dr. Marcus Thorne',
    guideTitle: 'Associate Professor & Lab Director',
    guideAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    guideDepartment: 'Department of Computer Science',
    matchScore: 94,
    message: "Dear Dr. Thorne, I have been following your lab's papers on Spatio-Temporal Graph Networks. I have built an initial prototype streaming 120 intersection detectors and would be honored to have your mentorship for our Senior Capstone.",
    submittedDate: '2 days ago',
    status: 'Pending'
  },
  {
    id: 'req-2',
    projectId: 'proj-1',
    projectTitle: 'Autonomous Drone Navigation in GPS-Denied Corridors',
    projectDomain: 'Computer Vision & Robotics',
    studentId: 'stud-2',
    studentName: 'Sarah Jenkins',
    studentMajor: 'Robotics Engineering M.S.',
    studentGpa: '3.88',
    studentYear: 'Graduate 1st Year',
    studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    guideId: 'guide-1',
    guideName: 'Dr. Marcus Thorne',
    guideTitle: 'Associate Professor',
    guideAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    guideDepartment: 'Department of Computer Science',
    matchScore: 92,
    message: 'Hello Dr. Thorne, I am looking for a co-advisor specializing in spatio-temporal graph routing for multi-drone search-and-rescue fleets.',
    submittedDate: 'Yesterday at 3:45 PM',
    status: 'Pending'
  },
  {
    id: 'req-3',
    projectId: 'proj-old-1',
    projectTitle: 'Campus Energy Footprint Optimization via Reinforcement Learning',
    projectDomain: 'Smart Cities & IoT',
    studentId: 'stud-1',
    studentName: 'Alex Johnson',
    studentMajor: 'Computer Science B.S.',
    studentGpa: '3.92',
    studentYear: 'Senior Year',
    studentAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
    guideId: 'guide-5',
    guideName: 'Dr. Emily Rodriguez',
    guideTitle: 'Associate Professor',
    guideAvatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80',
    guideDepartment: 'Data Science & Informatics Institute',
    matchScore: 85,
    message: 'Requesting guidance on energy grid fairness and time-series model interpretability.',
    submittedDate: 'Sep 15, 2024',
    status: 'Accepted',
    scheduledInterview: 'Every Tuesday 2:00 PM PST',
    feedbackNotes: 'Project scope accepted. Alex is enthusiastic and possesses strong Python fundamentals.'
  },
  {
    id: 'req-4',
    projectId: 'proj-comp-1',
    projectTitle: 'High-throughput Microservice Benchmark Engine',
    projectDomain: 'Distributed Systems',
    studentId: 'stud-1',
    studentName: 'Alex Johnson',
    studentMajor: 'Computer Science B.S.',
    studentGpa: '3.92',
    studentYear: 'Senior Year',
    studentAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
    guideId: 'guide-4',
    guideName: 'Dr. James Lin',
    guideTitle: 'Associate Professor',
    guideAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    guideDepartment: 'Department of Computer Science',
    matchScore: 82,
    message: 'Completed Junior research seminar on gRPC microservice latency optimizations.',
    submittedDate: 'May 04, 2024',
    status: 'Completed',
    feedbackNotes: 'Successfully delivered and published technical report.'
  }
];

export const FACULTY_ACTIVE_MENTEES: ActiveMentee[] = [
  {
    id: 'mentee-1',
    name: 'Emma Lopez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    projectTitle: 'Multi-modal Arterial Congestion Engine',
    degree: 'M.S. Computer Science (2nd Year)',
    progress: 60,
    lastCheckIn: 'Oct 08, 2024',
    nextDeadline: 'Oct 24 (Draft Paper Submission)',
    status: 'On Track'
  },
  {
    id: 'mentee-2',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    projectTitle: 'Real-time Traffic Prediction using ST-GNN',
    degree: 'B.S. Computer Science (Senior Capstone)',
    progress: 65,
    lastCheckIn: 'Oct 04, 2024',
    nextDeadline: 'Oct 18 (GPU Cluster Benchmark)',
    status: 'On Track'
  },
  {
    id: 'mentee-3',
    name: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    projectTitle: 'Decentralized EV Charging Grid Balancing',
    degree: 'B.S. Data Science (Senior Capstone)',
    progress: 25,
    lastCheckIn: 'Sep 29, 2024',
    nextDeadline: 'Oct 15 (Dataset Formulation)',
    status: 'Needs Review'
  }
];

export const UPCOMING_MILESTONES: MilestoneItem[] = [
  {
    id: 'ms-1',
    title: 'Draft Project Proposal Due',
    dueDate: 'Oct 12, 2024',
    type: 'Proposal',
    studentName: 'David Chen',
    completed: true
  },
  {
    id: 'ms-2',
    title: 'Literature Review & Prior Art Report',
    dueDate: 'Oct 15, 2024',
    type: 'Literature Review',
    studentName: 'Alex Johnson',
    completed: false
  },
  {
    id: 'ms-3',
    title: 'Data Collection & Sensor Pipeline Demonstration',
    dueDate: 'Oct 22, 2024',
    type: 'Code Demo',
    studentName: 'Emma Lopez',
    completed: false
  },
  {
    id: 'ms-4',
    title: 'Mid-term Prototype Validation & Defense',
    dueDate: 'Nov 14, 2024',
    type: 'Defense',
    studentName: 'Alex Johnson',
    completed: false
  }
];

export const STUDENT_PROFILE = {
  id: 'stud-1',
  name: 'Elena Rodriguez',
  preferredName: 'Alex Johnson',
  email: 'alex.j@stanford.edu',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop&q=80',
  degree: 'Computer Science B.S.',
  academicLevel: 'Junior / Senior Year',
  graduationYear: 'Class of 2025',
  gpa: '3.92 / 4.0',
  campus: 'Silicon Valley Campus',
  bio: 'Undergraduate researcher passionate about applied machine learning, spatio-temporal systems, and intelligent transit infrastructure. Seeking faculty mentorship for Senior Honors Capstone.',
  github: 'https://github.com/alexjohnson-ai',
  linkedin: 'https://linkedin.com/in/alex-johnson-stanford',
  scholar: 'https://scholar.google.com',
  technicalSkills: ['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'GIS Data', 'Redis', 'Docker', 'C++', 'SQL'],
  researchInterests: ['Deep Learning', 'Intelligent Transportation Systems', 'Graph Neural Networks', 'Edge AI', 'Smart Cities'],
  careerInterests: ['AI Research Scientist', 'Machine Learning Infrastructure Engineer', 'PhD in Computer Science'],
  preferredDomains: ['Deep Learning & AI', 'Smart Cities & IoT', 'Distributed Systems & Cloud']
};
