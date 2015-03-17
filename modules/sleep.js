function sleep(milliseconds){
	var start = new Date().getTime();
	while (new Date().getTime() < start + milliseconds ){}
}