pipeline {
    agent any

    triggers{
        cron('H * * * *')
    }
    tools {
        // Specify the correct Node.js installation name
        nodejs 'NodeJS-22.2.0'
    }

    stages {

        // stage('Install lsof') {
        //     steps {
        //         script {
        //             // Update the package list and install lsof
        //             sh '''
        //                 sudo apt-get update
        //                 sudo apt-get install -y lsof
        //             '''
        //         }
        //     }
        // }
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
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Setup Node.js') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS-22.2.0', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
            }
        }
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
        // stage('Stop Server'){
        //     steps{
        //         script{
        //             sh 'pkill node'
        //         }
        //     }
        // }
        // stage('Stop Process on Port 50000') {
        //     steps {
        //         script {
        //             // Find the process ID (PID) of the process using port 50000 and kill it
        //             // This example uses shell commands for Linux/Unix environments
        //             sh '''
        //                 PID=$(lsof -t -i:50000)
        //                 if [ -n "$PID" ]; then
        //                     echo "Killing process $PID running on port 50000"
        //                     kill -9 $PID
        //                 else
        //                     echo "No process running on port 50000"
        //                 fi
        //             '''
        //         }
        //     }
        // }
        stage('Start Server') {
            steps {
                // sh 'npm install express'
                sh 'node server.js'
            }
        }

        // stage('Stop Server') {
        //     steps {
        //         script {
        //             // Find the process ID (PID) of the server running on port 3000
        //             def pid = sh(script: 'lsof -t -i:3000', returnStdout: true).trim()
                    
        //             // If a process is found, kill it
        //             if (pid) {
        //                 sh "kill -9 ${pid}"
        //                 echo "Server on port 3000 has been stopped."
        //             } else {
        //                 echo "No server running on port 3000."
        //             }
        //         }
        //     }
        // }
        stage('Build') {
            steps {
                 sh '${NODE_HOME}/bin/node --version'
                sh '${NODE_HOME}/bin/npm --version'
                // Add more build steps as needed
            }
        }
    }
}
