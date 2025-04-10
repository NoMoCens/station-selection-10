
function unblockedGetParentUrl() {
	var isInIframe = (parent !== window), parentUrl = null;
	if (isInIframe) {
		parentUrl = document.referrer;
	}
	if (parentUrl != null && !parentUrl.includes("http")) {
		return null;
	}
	return parentUrl;
}

const xr = "unblocked-games.s3.amazonaws.com";
const xr2 = "www.onlinegames.io";
const xr3 = "d9k5uuutyxogn.cloudfront.net";
const xr4 = "freezenova.github.io";
const xr5 = "sites.google.com";
const xr6 = "www.gstatic.com";
const xr7 = "dnrweqffuwjtx.cloudfront.net";
const xr8 = "totallyscience.co";
const xr9 = "cloud.totallyscience.co";
const xr10 = "cloud.onlinegames.io";
const xr11 = "cloud.freezenova.com";
const xr12 = "freezenova.com";

// Original site lock domains (not needed anymore if you're disabling it)
const currentIframeHref = unblockedGetParentUrl();
if (currentIframeHref != null) {
	var referrer = new URL(currentIframeHref).hostname;
	var iframeDomain = window.location.hostname;

	if (referrer !== iframeDomain) {
		console.log("Bypassed Sitelock ;3")
	}
}


