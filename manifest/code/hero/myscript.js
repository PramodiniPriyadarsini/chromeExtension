var url=chrome.extension.getURL('toolbar.html'),
	height="35px",
	iframe="<iframe src='"+url+"' id='myhero' style='height:"+height+"'></iframe>";

$('html').append(iframe);

$('body').css({
	'transform':'translateY('+height+')'
})