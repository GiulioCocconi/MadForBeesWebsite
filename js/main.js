var kit_version = "beta"
var code_version = "beta"

function init() {
	console.log("INIT")
	console.log("kit latest version: " + kit_version)
	console.log("code latest version: " + code_version)
}

function downloadKit() {
	var link = document.createElement("a");
	link.setAttribute('download', "MFB_kit_" + kit_version + ".zip");
	link.href = "/kits/" + kit_version;
	document.body.appendChild(link);
	link.click();
	link.remove();
}
