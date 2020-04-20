pipeline{
  agent any
  
  stages{
    stage('check'){
      steps{
        echo 'params=${params}'
      }
    }
  }
  


}
