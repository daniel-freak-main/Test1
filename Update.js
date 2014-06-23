worker.onmessage = function(){
	while(true){
		sleep(1000);
		worker.postMessage();
	}
}
