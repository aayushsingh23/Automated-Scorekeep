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
        // stage('Install Node.js') {
        //     steps {
        //         script {
        //             // Define the Node.js version to install
        //             def nodejsVersion = '22.2.0'
                    
        //             // Check if Node.js is already installed
        //             def nodeHome = tool name: "NodeJS-${nodejsVersion}", type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    
        //             // If Node.js is not installed, install it
        //             if (nodeHome == null) {
        //                 // Install Node.js using the 'NodeJS' tool name
        //                 nodeHome = tool 'NodeJS'
        //             }
                    
        //             // Set the environment variable for NODE_HOME
        //             env.NODE_HOME = nodeHome

        //             sh 'node --version'
        //             sh 'npm --version'
        //         }
        //     }
        // }
       // stage('Create package.json') {
       //      steps {
       //          // Create package.json using npm init with default options
       //          sh 'npm init -y'
       //          // Verify package.json creation
       //          sh 'cat package.json'
       //      }
       //  }
       //  stage('Add Dependencies') {
       //      steps {
       //          // Install express as a dependency
       //          sh 'npm install express'
       //          // Verify the dependencies
       //          sh 'cat package.json'
       //      }
       //  }
        
        // stage('Install lsof') {
        //     steps {
        //         script {
        //             // Install lsof tool on Jenkins
        //             tool name: 'lsof', type: 'hudson.plugins.toolenv.ToolEnvBuildWrapper'
        //         }
        //     }
        // }
        
        stage('Kill Server') {
            steps {
                script {
                    // Find the process ID (PID) using ss
                    def port = 3000 // Example port number
                    def pid = sh(script: "ss -ltn | grep ':${port}' | awk '{print \$6}' | cut -d'=' -f2", returnStdout: true).trim()
                    
                    if (pid) {
                        // Kill the process
                        sh "kill ${pid}"
                        echo "Server process running on port ${port} has been killed."
                    } else {
                        echo "No server process is listening on port ${port}."
                    }
                }
            }
        }
stage('Start Server') {
    steps {
        // sh 'npm install express'
        sh 'node server.js > server.log 2>&1 &'
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
