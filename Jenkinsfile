pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Started'
      }
    }

    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            echo 'Test completed'
          }
        }

        stage('Time Limit') {
          steps {
            timeout(time: 30) {
              echo 'Time limit pass'
            }

          }
        }

        stage('Junit') {
          steps {
            junit(allowEmptyResults: true, testResults: 'true')
          }
        }

        stage('Archivo index') {
          steps {
            fileExists 'Index.html'
          }
        }

      }
    }

    stage('Browser Test') {
      parallel {
        stage('Browser Test') {
          steps {
            echo 'Browser Test'
          }
        }

        stage('Retry body') {
          steps {
            retry(count: 4) {
              echo 'Retry 4 times the body sucessful'
            }

          }
        }

      }
    }

    stage('Production') {
      steps {
        echo 'Product ready'
      }
    }

  }
}