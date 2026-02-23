# Deployment Documentation

## CI/CD Pipelines

Our CI/CD pipeline uses GitHub Actions to automate the deployment process. The following key workflows are involved:

### Build
- Triggered on each push to the main branch.
- Uses a Docker container for building the application.
- Runs unit tests to ensure code quality.

### Test
- Automated tests are run on the latest build.
- Any failures will block the merge to the main branch.

### Deploy
- After a successful test, the application is deployed automatically to our production environment.
- SSH keys and environment variables are securely managed via GitHub Secrets.

## Environment Setup

### Development Environment
1. Clone the repository:  `git clone https://github.com/Fallenproud/CopilotKit.git`
2. Install dependencies:  `npm install`
3. Create a `.env` file based on `.env.example` and configure the necessary environment variables.
4. Start the development server:  `npm run dev`

### Production Environment
1. Ensure you have the production server ready (Ubuntu recommended).
2. Set up Node.js and/or Docker as per the application requirements.
3. Configure environment variables based on your production settings.
4. You may use the following command to start the service:  `npm start` or Docker run command based on your configuration.

## Deployment Instructions
1. Ensure that your local branch is up to date with `git pull origin main`.
2. Once changes are made and committed, push to the main branch with `git push origin main`.
3. Monitor GitHub Actions for the build and deployment process.
4. Verify the deployment by checking the production URL or service status.

For any issues, refer to the [Troubleshooting Guide](./TROUBLESHOOTING.md) or raise an issue on the repository.