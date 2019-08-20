node {
	stage('check') {
		echo("check");
		git url: 'git@github.com:zhangzhiwei321/www-react.git', branch: 'dev'
	}
	stage('install') {
		echo("install")
		echo("${install}")
		if (params.install) {
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


