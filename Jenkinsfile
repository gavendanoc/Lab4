pipeline {
  agent any
  stages {
    stage('fabrica') {
      parallel {
        stage('Sensores') {
          steps {
            echo 'sensor motor'
          }
        }

        stage('actuador') {
          steps {
            echo 'servo motor'
          }
        }

      }
    }

    stage('planta') {
      parallel {
        stage('Test sensores') {
          steps {
            echo 'sensor presion'
          }
        }

        stage('Test actuador') {
          steps {
            echo 'Test actuadores'
          }
        }

        stage('análisis de datos') {
          steps {
            echo 'analizar datos de los sensores'
          }
        }

      }
    }

    stage('Bus') {
      steps {
        echo 'Bus sensores'
        echo 'Bus actuador'
      }
    }

    stage('Almacenamiento') {
      parallel {
        stage('almacenamiento sensores') {
          steps {
            echo 'sensores '
          }
        }

        stage('almacenamiento actuadores') {
          steps {
            echo 'actuadores'
          }
        }

      }
    }

    stage('Distribuidor') {
      steps {
        echo 'vender'
      }
    }

  }
}