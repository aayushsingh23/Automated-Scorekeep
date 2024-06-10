pipeline {
    agent any
    
    stages {
        stage('Take Down Server') {
            steps {
                script {
                    // Find the PID of the process running on port 3000
                    def pidOutput = sh(script: '/usr/bin/lsof -ti :3000', returnStdout: true).trim()
                    
                    if (pidOutput) {
                        // Stop the process using its PID
                        sh "kill $pidOutput"
                        echo "Process running on port 3000 (PID: $pidOutput) has been stopped."
                    } else {
                        echo "No process found running on port 3000."
                    }
                }
            }
        }
    }
}
