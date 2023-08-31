function loadScript(src, callback){
	let script = document.createElement('script')
	script.src = src
	script.onload = () => callback(script)
	document.head.append(script)
}


function hello(){
    alert('Helloo World');
}

function goodMorning(){
    alert('good Morning');
}
loadScript("")