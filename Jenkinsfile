pipeline {
    agent any
        tools {
        // Specify the correct Node.js installation name
        nodejs 'Node.js'
    }
    environment {
        // Define NODEJS_HOME directly
        NODEJS_HOME = tool name: 'Node.js', type: 'hudson.plugins.nodejs.tools.NodeJSInstallation'
    }
    
    stages {
stage('Install Node.js') {
            steps {
                // Use the tool step to install Node.js
                tool name: 'Node.js', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
            }
}
        stage('Build') {
            steps {
                echo "Print Hora"
                // Add more build steps as needed
            }
        }
    }
}
