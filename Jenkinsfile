pipeline {
    agent any
    
    triggers {
        cron('H * * * *') // Runs every hour
    }

    stages {
        stage('Take Down Server') {
            steps {
                script {
                    // Find the PID of the Node.js server process
                    sh 'pid=$(pgrep -f "node server.js")'
                    // Stop the server process using its PID
                    sh 'kill $pid'
                }
            }
        }
    }

}
