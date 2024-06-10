pipeline {
    agent any
        tools {
        // Specify the correct Node.js installation name
        nodejs 'Node.js'
    }
    // environment {
    //     // Define NODEJS_HOME directly
    //     NODEJS_HOME = tool name: 'Node.js', type: 'hudson.plugins.nodejs.tools.NodeJSInstallation'
    // }
    
    stages {
        // stage('Install Node.js') {
        //     steps {
        //         script {
        //             // Set PATH to include Node.js binaries
        //             env.PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
        //         }
        //     }
        // }

        stage('Build') {
            steps {
                echo "Print Hora"
                // Add more build steps as needed
            }
        }
    }
}
