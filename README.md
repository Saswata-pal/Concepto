# Concepto – AI-Powered Learning Platform

## 🎯 Product Overview

**Concepto** is an AI-powered learning platform that converts videos and documents into:
- 🎧 **Audio explanations** with human-style narration
- 🎨 **Comic-style visual learning** with diagrams
- 📚 **Concept-based summaries** for structured understanding

Built as a scalable AI service for **B2B clients** and **B2C end users** with enterprise-ready architecture.

---

## 🚀 Core Features

### 1. Universal Content-to-Concept Engine
Converts content into **structured human-understandable concepts**, not just summaries.

### 2. Adaptive Persona Learning (UNIQUE)
Same content, different explanations based on persona:
- 👨‍🎓 Student
- 👔 Professional
- 🎯 Beginner
- 🧠 Expert

### 3. Audio-First Explanation Engine
Human-style narration with adjustable tone and speed.

### 4. Visual Story Explainer
- Comics for intuition
- Diagrams for logic
- Flow visuals for processes

### 5. Recall & Reinforcement Engine
- Auto-generated questions
- Spaced repetition
- 30-sec revision cards

### 6. White-Label & Service Mode
Delivered as:
- Full white-label product
- API service
- Embedded widget

### 7. Concept Confusion Detector
Automatically detects and simplifies confusing concepts.

### 8. Explain-Like-I'm-X
Dynamic explanation slider for complexity control.

---

## 🏗️ Architecture

### Tech Stack
**Frontend:**
- Next.js 15+
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Zustand (State Management)

**Backend Microservices:**
- Node.js (Content, User, Whitelabel, Analytics)
- Python/FastAPI (Concept, Audio, Visual, Persona, Recall)

**AI Stack:**
- ASR: Whisper / Deepgram
- LLMs: GPT-4 / Claude / Mixtral
- Vision: Stable Diffusion
- Vector DB: Pinecone / Weaviate

**Databases:**
- PostgreSQL (Primary)
- MongoDB (Content metadata)
- Redis (Caching)
- TimescaleDB (Analytics)

**Infrastructure:**
- Docker & Docker Compose
- Kubernetes (Optional)
- Terraform (IaC)
- Nginx (Reverse Proxy)

---

## 📁 Project Structure

```
concepto/
├── frontend/              # Next.js frontend
├── services/             # Microservices
│   ├── content-service/
│   ├── concept-service/
│   ├── audio-service/
│   ├── visual-service/
│   ├── persona-service/
│   ├── recall-service/
│   ├── user-service/
│   ├── whitelabel-service/
│   └── analytics-service/
├── shared/               # Shared libraries
├── infrastructure/       # Docker, K8s, Terraform
├── database/            # DB scripts & migrations
├── scripts/             # Utility scripts
├── docs/                # Documentation
├── tests/               # E2E & integration tests
└── monitoring/          # Grafana, Prometheus
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- Docker & Docker Compose
- PostgreSQL
- Redis

### Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development environment
npm run dev

# Or using Docker
docker-compose up
```

---

## 💰 Monetization Strategy

### B2C
- Freemium model
- Pro subscription
- Exam packs

### B2B
- Per-seat licensing
- API usage pricing
- White-label deployments

---

## 📚 Documentation

- [System Design](./docs/architecture/system-design.md)
- [API Documentation](./docs/api/)
- [Local Development Guide](./docs/setup/local-development.md)
- [Deployment Guide](./docs/setup/deployment.md)

---


---

## 👥 Team

Built with ❤️ for revolutionizing learning

---

**Concepto** - Making Learning Simple, Engaging, and Human-Friendly
