chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt2);
	const x = document.getElementById("org-repositories");
	if (typeof(x) != undefined && x != null) {
	let repo = x.getElementsByTagName("li");
		for (let i = 0; i < repo.length; i++) {
			if (i % 2 == 0) {
				repo[i].style['background-color'] = '#003366';
				} else {
					repo[i].style['background-color'] = '#660066';
					}
			}
        } else {
            const y = document.getElementById("user-repositories-list");
            if (typeof(y) != undefined && y != null) {
                let repo_u = y.getElementsByTagName("li");
                for (let i = 0; i < repo_u.length; i++) {
                    if (i % 2 == 0) {
                        repo_u[i].style['background-color'] = '#003366';
                    } else {
                        repo_u[i].style['background-color'] = '#660066';
					}
				}
            } 
        }
}