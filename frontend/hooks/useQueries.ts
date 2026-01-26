import { useState, useEffect } from 'react';

export interface DemoContent {
    type: string;
    title: string;
    description: string;
    preview: string;
}

export interface Persona {
    id: string;
    name: string;
    role: string;
    image: string;
    useCase: string;
    benefits: string[];
}

export interface PlatformFeature {
    name: string;
    concepto: boolean | string;
    chatgpt: boolean | string;
    khanAcademy: boolean | string;
    youtube: boolean | string;
}

export const useQueries = () => {
    const [demoContents] = useState<DemoContent[]>([
        {
            type: 'PDF Document',
            title: 'Research Paper Analysis',
            description: 'AI-powered extraction of key concepts, summaries, and insights',
            preview: '📄 Analyzing document structure and extracting main ideas...'
        },
        {
            type: 'Video',
            title: 'Lecture Understanding',
            description: 'Transcription, key moments, and concept mapping',
            preview: '🎥 Processing video content and identifying learning points...'
        },
        {
            type: 'Image',
            title: 'Visual Learning',
            description: 'Diagram analysis, text extraction, and visual explanations',
            preview: '🖼️ Analyzing visual elements and extracting information...'
        },
        {
            type: 'Web Article',
            title: 'Content Synthesis',
            description: 'Summarization, fact extraction, and knowledge organization',
            preview: '🌐 Processing article content and building knowledge graph...'
        }
    ]);

    const [personas] = useState<Persona[]>([
        {
            id: 'professional',
            name: 'Alex Chen',
            role: 'Software Engineer',
            image: '👨‍💻',
            useCase: 'Quickly understand technical documentation and research papers',
            benefits: [
                'Save 5+ hours per week on documentation review',
                'Extract actionable insights from technical content',
                'Build knowledge base from diverse sources'
            ]
        },
        {
            id: 'student',
            name: 'Maria Rodriguez',
            role: 'University Student',
            image: '👩‍🎓',
            useCase: 'Study more effectively with AI-powered learning assistance',
            benefits: [
                'Understand complex topics faster',
                'Create personalized study materials',
                'Get instant answers to learning questions'
            ]
        },
        {
            id: 'teacher',
            name: 'Dr. James Wilson',
            role: 'Educator',
            image: '👨‍🏫',
            useCase: 'Create engaging learning materials and assessments',
            benefits: [
                'Generate interactive content from any resource',
                'Adapt materials for different learning styles',
                'Track student comprehension effectively'
            ]
        },
        {
            id: 'researcher',
            name: 'Dr. Sarah Kim',
            role: 'Research Scientist',
            image: '👩‍🔬',
            useCase: 'Analyze and synthesize information from multiple sources',
            benefits: [
                'Process large volumes of research quickly',
                'Identify patterns and connections',
                'Generate comprehensive literature reviews'
            ]
        }
    ]);

    const [platformFeatures] = useState<PlatformFeature[]>([
        {
            name: 'Multi-format Resource Analysis',
            concepto: 'PDF, Video, Images, Web, Audio',
            chatgpt: 'Text only',
            khanAcademy: 'Video only',
            youtube: 'Video only'
        },
        {
            name: 'Interactive Learning Experience',
            concepto: true,
            chatgpt: 'Limited',
            khanAcademy: true,
            youtube: false
        },
        {
            name: 'Personalized Learning Paths',
            concepto: true,
            chatgpt: false,
            khanAcademy: 'Limited',
            youtube: false
        },
        {
            name: 'Knowledge Graph Building',
            concepto: true,
            chatgpt: false,
            khanAcademy: false,
            youtube: false
        },
        {
            name: 'Real-time Collaboration',
            concepto: true,
            chatgpt: false,
            khanAcademy: false,
            youtube: 'Comments only'
        },
        {
            name: 'Accessibility Features',
            concepto: 'Full support',
            chatgpt: 'Basic',
            khanAcademy: 'Moderate',
            youtube: 'Captions only'
        }
    ]);

    const [faqs] = useState([
        {
            question: 'What types of resources can Concepto analyze?',
            answer: 'Concepto can analyze PDFs, videos, images, web articles, audio files, and more. Our AI understands content across multiple formats and helps you learn from any source.'
        },
        {
            question: 'How does Concepto differ from ChatGPT?',
            answer: 'While ChatGPT is a conversational AI, Concepto is specifically designed for learning. We analyze your resources, create personalized learning paths, build knowledge graphs, and provide interactive experiences tailored to how you learn best.'
        },
        {
            question: 'Is Concepto suitable for all learning levels?',
            answer: 'Absolutely! Concepto adapts to your knowledge level and learning style. Whether you\'re a student, professional, educator, or researcher, our platform personalizes the experience to match your needs.'
        },
        {
            question: 'Can I collaborate with others on Concepto?',
            answer: 'Yes! Concepto supports real-time collaboration, allowing teams to learn together, share insights, and build collective knowledge bases.'
        },
        {
            question: 'What accessibility features does Concepto offer?',
            answer: 'Concepto is built with accessibility at its core. We offer screen reader support, keyboard navigation, customizable visual settings, audio descriptions, and multiple learning modalities to ensure everyone can learn effectively.'
        }
    ]);

    return {
        demoContents,
        personas,
        platformFeatures,
        faqs
    };
};
