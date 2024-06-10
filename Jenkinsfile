pipeline {
    agent any
    
    stages {
        stage('Take Down Server') {
            steps {
                script {
                    // Find the PID of the Node.js server process
                    def pidOutput = sh(script: 'pgrep -f "node server.js"', returnStdout: true).trim()
                    
                    if (pidOutput) {
                        // Extract PID from the output
                        def pid = pidOutput.tokenize()[0]
                        
                        // Stop the server process using its PID
                        sh "kill $pid"
                        echo "Node.js server process (PID: $pid) has been stopped."
                    } else {
                        echo "Node.js server process is not running."
                    }
                }
            }
        }
    }
}
