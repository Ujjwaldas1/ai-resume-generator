# AI Resume Maker

A modern, AI-powered resume builder that helps users create professional resumes using natural language descriptions and advanced AI technology.

## Features

- 🤖 **AI-Powered Resume Generation**: Describe yourself and let our AI create a professional resume
- 📄 **Multiple Templates**: Choose from various professionally designed templates
- ✏️ **Easy Editing**: Intuitive form-based editing after AI generation
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 💾 **PDF Download**: Download your resume as a professional PDF
- 🎯 **ATS-Friendly**: Optimized for Applicant Tracking Systems

## Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client for API calls
- **html-to-image & jsPDF** - PDF generation

### Backend
- **Spring Boot 3.5.3** - Java-based backend framework
- **Spring AI** - AI integration with Ollama
- **Java 21** - Latest LTS version
- **Maven** - Dependency management and build tool

## Prerequisites

- **Node.js** (v18 or higher)
- **Java 21** (JDK)
- **Maven** (v3.6 or higher)
- **Ollama** (for AI model)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Resume-Maker
```

### 2. Backend Setup

```bash
cd resume-ai-backend

# Install dependencies and compile
mvn clean install

# Run the application
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 3. Frontend Setup

```bash
cd resume_frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will start on `http://localhost:5173`

### 4. AI Model Setup

1. Install Ollama from [https://ollama.ai](https://ollama.ai)
2. Run the setup script:
   ```bash
   # Windows
   setup-ollama.bat
   
   # Or manually pull the model:
   ollama pull tinyllama:latest
   ```
3. Start Ollama service

**Note**: If you encounter CUDA out of memory errors, try these solutions:
- Use a smaller model: `tinyllama:latest` (default) or `llama2:7b`
- Close other GPU-intensive applications
- Increase your system's virtual memory
- Use CPU-only mode by setting `OLLAMA_HOST=0.0.0.0:11434` environment variable

## Usage

1. **Visit the Application**: Open `http://localhost:5173` in your browser
2. **Generate Resume**: Click "Get Started" and describe your background
3. **Edit Resume**: Customize the AI-generated content using the form
4. **Download**: Save your resume as a PDF

## API Endpoints

### POST `/api/v1/resume/generate`
Generates a resume based on user description.

**Request Body:**
```json
{
  "userDescription": "Your professional background description"
}
```

**Response:**
```json
{
  "data": {
    "personalInformation": { ... },
    "summary": "...",
    "skills": [ ... ],
    "experience": [ ... ],
    "education": [ ... ],
    "projects": [ ... ],
    "certifications": [ ... ],
    "languages": [ ... ],
    "interests": [ ... ]
  }
}
```

## Project Structure

```
Resume-Maker/
├── resume_frontend/          # React frontend
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── api/             # API service layer
│   │   └── utils/           # Utility functions
│   └── public/              # Static assets
├── resume-ai-backend/        # Spring Boot backend
│   ├── src/main/java/
│   │   └── com/resume/backend/
│   │       ├── controller/   # REST controllers
│   │       ├── service/      # Business logic
│   │       └── model/        # Data models
│   └── src/main/resources/   # Configuration files
└── README.md
```

## Development

### Frontend Development

```bash
cd resume_frontend

# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Development

```bash
cd resume-ai-backend

# Run tests
mvn test

# Build JAR file
mvn clean package

# Run with specific profile
mvn spring-boot:run -Dspring.profiles.active=dev
```

## Configuration

### Backend Configuration (`application.properties`)

```properties
spring.application.name=resume-ai-backend
spring.ai.ollama.chat.model=deepseek-r1:7b
server.port=8080
```

### Frontend Configuration

Update the API base URL in `src/api/ResumeService.js` if needed:

```javascript
export const baseURL = "http://localhost:8080";
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@airesumemaker.com or create an issue in the repository.

## Acknowledgments

- Spring AI team for the AI integration framework
- Ollama team for the local AI model hosting
- DaisyUI team for the beautiful component library
