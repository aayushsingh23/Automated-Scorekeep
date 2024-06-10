pipeline {
    agent any
    
    triggers {
        cron('H * * * *') // Runs every hour
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                // Replace this with your actual build commands
                sh 'mvn clean install' // Example Maven build
            }
        }
    }
}
