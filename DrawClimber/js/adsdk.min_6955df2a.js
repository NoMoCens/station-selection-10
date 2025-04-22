function adService() {
    this.loadRewardState = -1;
    this.n = -1; // No ad
    this.a = 1;  // Loading
    this.o = 2;  // Loaded
    this.l = 3;  // (Unused in your current code)
}

adService.prototype.startPreLoad = function() {
    // Ad logic removed; rewards are instant, so no preloading needed
};

adService.prototype.checkHasAd = function() {
    // No ad logic; do nothing
};

adService.prototype.loadRewardedVideo = function(e) {
    // Instantly "load" the reward
    this.loadRewardState = this.o;
};

adService.prototype.showRewardedVideo = function(e, t) {
    var i = this;
    return new Promise(function(ts, rs) {
        // Instantly resolve and give reward
        ts();
        i.loadRewardState = i.n;
    });
};
