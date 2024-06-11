pipeline {
    agent any
    
    tools {
        // Specify the correct Node.js installation name
        nodejs 'NodeJS-22.2.0'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }
        stage('Setup Node.js') {
            steps {
                script {
                    // Set up Node.js
                    def nodeHome = tool name: 'NodeJS-22.2.0', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start Server') {
            steps {
                sh 'node server.js'
            }
        }
    }
}
