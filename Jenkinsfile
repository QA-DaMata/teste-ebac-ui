pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/QA-DaMata/teste-ebac-ui.git'
                bat 'npm install'
            }
        }
        stage('Executar teste') {
            steps {
               bat 'npx cypress run'
            }
        }
    }
}