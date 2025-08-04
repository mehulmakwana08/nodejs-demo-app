# Node.js Demo App - CI/CD Pipeline

This is a sample Node.js application demonstrating automated CI/CD pipeline using GitHub Actions.

## Features

- Express.js web server
- Automated testing with Jest
- Docker containerization
- CI/CD pipeline with GitHub Actions
- Automated deployment to DockerHub

## Local Development

### Prerequisites
- Node.js 18+
- Docker
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/mehulmakwana08/nodejs-demo-app.git
cd nodejs-demo-app

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev

# Build Docker image
docker build -t nodejs-demo-app .

# Run Docker container
docker run -p 3000:3000 nodejs-demo-app
```

## CI/CD Pipeline

The pipeline automatically:

1. **Test Stage**: Runs unit tests and security audit
2. **Build Stage**: Creates Docker image and pushes to DockerHub
3. **Deploy Stage**: Deploys to staging environment (on main branch)

### Pipeline Triggers
- Push to `main` or `develop` branch
- Pull requests to `main` branch

### Required Secrets

Configure these secrets in your GitHub repository (Settings → Secrets and variables → Actions):

- `DOCKERHUB_USERNAME`: Your DockerHub username
- `DOCKERHUB_TOKEN`: Your DockerHub access token

### Troubleshooting GitHub Actions

If the GitHub Actions workflow is not working:

1. **Check workflow file exists**: Ensure `.github/workflows/ci-cd.yml` is in your repository
2. **Verify secrets**: Make sure `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` are set in repository secrets
3. **Check permissions**: Ensure the repository has Actions enabled (Settings → Actions → General)
4. **Branch protection**: If main branch has protection rules, ensure Actions can push
5. **View logs**: Check the Actions tab in your GitHub repository for detailed error logs

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint

## Docker

The application is containerized using Alpine Linux for minimal size and security.

Image available at: `your-actual-dockerhub-username/nodejs-demo-app`
