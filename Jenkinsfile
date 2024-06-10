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
                     sh 'pid=$(ps aux | grep "node server.js" | grep -v grep | awk "{print \$2}")'
                    // Stop the server process using its PID
                    if (pid) {
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
