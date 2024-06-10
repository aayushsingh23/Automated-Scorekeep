pipeline {
    agent any
    
    tools {
        // Specify the correct Node.js installation name
        nodejs 'Node.js'
    }
    
    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Define the Node.js version to install
                    def nodejsVersion = '14.17.0'
                    
                    // Check if Node.js is already installed
                    def nodeHome = tool name: "NodeJS-${nodejsVersion}", type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    
                    // If Node.js is not installed, install it
                    if (nodeHome == null) {
                        // Install Node.js using the 'NodeJS' tool name
                        nodeHome = tool 'NodeJS'
                    }
                    
                    // Set the environment variable for NODE_HOME
                    env.NODE_HOME = nodeHome
                }
            }
        }

        stage('Build') {
            steps {
                 sh '${NODE_HOME}/bin/node --version'
                sh '${NODE_HOME}/bin/npm --version'
                // Add more build steps as needed
            }
        }
    }
}
