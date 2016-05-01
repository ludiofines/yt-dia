if (document.getElementById('yt-dialog-bg') != null)
{
	document.getElementById('yt-dialog-bg').remove();
}
if (document.getElementById('yt-consent-dialog') != null)
{
	document.getElementById('yt-consent-dialog').remove();
}
if (document.getElementById('feed-privacy-lb') != null)
{
	document.getElementById('feed-privacy-lb').remove();
}
if (document.getElementById('consent-bump') != null)
{
	document.getElementById('consent-bump').remove();
}
if (document.getElementsByClassName('gb_Ia').length > 0)
{
	var i;
	var ilen=document.getElementsByClassName('gb_Ia').length;
	var c=document.getElementsByClassName('gb_Ia');
	for (i=0;i<ilen;i++)
		c[i].remove();
}
if (document.getElementById('lb') != null)
{
	document.getElementById('lb').remove();
}
