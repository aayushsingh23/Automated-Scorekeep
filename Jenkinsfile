pipeline {
    agent any
    
    stages {
        stage('Run Shell Commands in Project Directory') {
            steps {
                // Change to your project directory
                dir('/home/aayush2503/my_project') {
                    // Execute shell commands here
                    sh '''
                        PID=$(lsof -t -i:3000)

                        if [ -n "$PID" ]; then
                            echo "PID of server running on port 3000: $PID"
                            kill "$PID"
                        else
                            echo "No server found running on port 3000"
                        fi
                    '''
                }
            }
        }
    }
}
