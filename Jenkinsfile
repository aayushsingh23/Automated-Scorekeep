pipeline {
    agent any

    stages {
        stage('Install Prerequisites') {
            steps {
                script {
                    // Install ss and npm if they are not already installed
                    sh '''
                        if ! command -v ss &> /dev/null; then
                            echo "Installing iproute2..."
                            sudo apt-get update && sudo apt-get install -y iproute2
                        fi
                        if ! command -v npm &> /dev/null; then
                            echo "Installing Node.js and npm..."
                            curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
                            sudo apt-get install -y nodejs
                        fi
                    '''
                }
            }
        }

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
