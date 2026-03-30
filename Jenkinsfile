pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        APP_NAME = 'grandiosoft-tech'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/RareBreedxx/grandiosoft-tech.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Grandiosoft Tech build completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}
