pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Take Down Server') {
            steps {
                script {
                    // Using ss to find and kill the process on port 3000
                    sh '''
                        PID=$(ss -tuln | grep ':3000 ' | awk '{print $6}' | cut -d',' -f2)
                        if [ -n "$PID" ]; then
                            kill -9 $PID
                        fi
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Start Server') {
            steps {
                script {
                    // Start the server in the background
                    sh 'nohup node server.js &'
                }
            }
        }
    }
}
