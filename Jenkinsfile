pipeline {
    agent any

    stages {
        stage('Take Down Server') {
            steps {
                script {
                    // Using ss to find and kill the process on port 3000
                    sh '''
                        PID=$(ss -tuln | grep ':3000 ' | awk '{print $6}' | cut -d',' -f2)
                        if [ -n "$PID" ]; then
                            kill -9 $PID
                            echo "server taken down"
                        fi
                    '''
                }
            }
        }
    }
}
