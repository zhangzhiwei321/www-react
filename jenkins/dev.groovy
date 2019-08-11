node {
	stage('check') {
		echo("check");
		sh 'ls'
		sh 'git pull origin dev'
		sh 'git pull origin dev'
		sh 'git status'
		sh 'git branch'
		sh 'git checkout dev'
	}
	stage('install') {
		echo("install")
		echo(${parameter_name});
		try{
		echo("${install}");
		}catch(e){
			echo("${test}");
		}		
		if (install) {
			sh "rm -rf node_modules*"
			sh "cnpm i"
		}
	}
	stage('build') {
		echo("build")
		sh "npm run build"
	}

	stage("release") {
		echo("release")
		sh "rm -rf /www/*"
		sh "mv ./build/* /www"
	}
}
