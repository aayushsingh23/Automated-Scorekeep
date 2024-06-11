pipeline {
    agent any
    
    tools {
        // Specify the correct Node.js installation name
        nodejs 'NodeJS-22.2.0'
    }
    
    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Define the Node.js version to install
                    def nodejsVersion = '22.2.0'
                    
                    // Check if Node.js is already installed
                    def nodeHome = tool name: "NodeJS-${nodejsVersion}", type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    
                    // If Node.js is not installed, install it
                    if (nodeHome == null) {
                        // Install Node.js using the 'NodeJS' tool name
                        nodeHome = tool 'NodeJS'
                    }
                    
                    // Set the environment variable for NODE_HOME
                    env.NODE_HOME = nodeHome

                    sh 'node --version'
                    sh 'npm --version'
                }
            }
        }
        // stage('Checkout') {
        //     steps {
        //         checkout scm
        //     }
        // }
        // stage('Setup Node.js') {
        //     steps {
        //         script {
        //             def nodeHome = tool name: 'NodeJS-22.2.0', type: 'NodeJSInstallation'
        //             env.PATH = "${nodeHome}/bin:${env.PATH}"
        //         }
        //     }
        // }
        stage('Create package.json') {
            steps {
                // Create package.json using npm init with default options
                sh 'npm init -y'
                // Verify package.json creation
                sh 'cat package.json'
            }
        }
        stage('Add Dependencies') {
            steps {
                // Install express as a dependency
                sh 'npm install express'
                // Verify the dependencies
                sh 'cat package.json'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start Server') {
            steps {
                sh 'node server.js'
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
