// Below are customized settings for myself, edit them to your liking before you enable
//user_pref("browser.download.dir", "D:\\sorting");
//user_pref("browser.startup.homepage", "https://www.google.cl/?hl=de&nfpr=1");
//user_pref("browser.uidensity", 1);
//user_pref("browser.urlbar.autoFill", false);
//user_pref("lightweightThemes.selectedThemeID", "firefox-compact-dark@mozilla.org");
//user_pref("browser.cache.disk.parent_directory", "C:\\\\Users\\\\Censored\\\\AppData\\\\Local\\\\Temp\\\\firefox_cache");
//user_pref("ui.systemUsesDarkTheme", 0);
//user_pref("network.protocol-handler.external.mailto", false);

// Mitigate settings treating the user like a child
user_pref("browser.search.update", false);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.urlbar.trimURLs", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("general.smoothScroll", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("security.dialog_enable_delay", 0);
user_pref("security.family_safety.mode", 0);
user_pref("sidebar.position_start", false);
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("security.secure_connection_icon_color_gray", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.disableResetPrompt", true);

// Stop data leaks from HTML5 beacons, search suggestions, geolocation, webRTC and link prefetching
user_pref("beacon.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.geoip.url", "");
user_pref("geo.wifi.uri", "");
user_pref("geo.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("dom.battery.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("network.trr.mode", 0);

// Disable the forced welcome page, "studies/experiments" and captive portal scanner
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.optoutstudies.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.laterrun.enabled", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("media.peerconnection.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);

// Disable bad extensions
user_pref("browser.onboarding.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.webcompat-reporter.enabled", false);

// Disable risky in browser PDF and allow only latin charset URLs, spellcheck everything
user_pref("layout.spellcheckDefault", 2);
user_pref("network.IDN_show_punycode", true);
user_pref("pdfjs.disabled", true);

// No crash or error reporting
user_pref("browser.chrome.errorReporter.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
user_pref("datareporting.healthreport.service.enabled", false);

// Disable the pingsender.exe and telemetry
user_pref("browser.send_pings", false);
user_pref("browser.ping-centre.production.endpoint", "");
user_pref("browser.ping-centre.staging.endpoint", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.rejected", true);

// Don't leak history on screen when typing into URL bar or taskbar right click
user_pref("browser.urlbar.searchSuggestionsChoice", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);

// No Google "safebrowsing" spying
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.enabled", false);

// Clean history on exit, disable garbage tracking protection and header that increase the digital fingerprint
user_pref("browser.contentblocking.category", "custom");
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("pref.privacy.disable_button.change_blocklist", false);
user_pref("pref.privacy.disable_button.tracking_protection_exceptions", false);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// Fake being a burger friend for less exposure
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("general.useragent.locale", "en-US");
user_pref("intl.accept_languages", "en-US, en");
user_pref("intl.locale.requested", "en-US");
user_pref("intl.regional_prefs.use_os_locales", false);
user_pref("javascript.use_us_english_locale", true);

// Stop annoying the user when they send a password over unecrypted connections in LAN to their router
user_pref("security.insecure_field_warning.contextual.enabled", false);

// Only send the HTTP-referrer without its query string regardless of origin
user_pref("network.http.referer.trimmingPolicy", 1);

// Custom startpage and download dir
user_pref("browser.download.folderList", 2);

// Prevent stealth installations of browser "features" in the profile directory
user_pref("extensions.systemAddon.update.url", "");

// Allow cookies as they are cleared on exit and by addons anyway
user_pref("network.cookie.cookieBehavior", 0);

// Autoplay if tab gets into focus
user_pref("media.autoplay.default", 0);

// Get rid of their forced newtab page where they have advertisers put up links
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
user_pref("browser.newtabpage.activity-stream.impressionId", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 1);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.enhanced", false);

// Disables tooltips, privacy leaking thumbnails, screenshots are local without upload, coverage ping
user_pref("browser.discovery.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);

/* Prevent TLS 1.3 replay attacks through 0-RTT data, important read:
https://labs.portcullis.co.uk/presentations/playback-a-tls-1-3-story-2/
Also never downgrade your secure Firefox certs to Windows certs and AV vendor certs */
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
user_pref("security.enterprise_roots.enabled", false);

// Disable annoying suggestions in the URLbar to use their Sync cloud
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.history", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.history.onlyTyped", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.searches", false);

// Careful, this will DISABLE your MICROPHONE, WEBCAM and SCREENSHARING in Firefox
user_pref("media.navigator.enabled", false);
user_pref("media.peerconnection.enabled", false);
//user_pref("media.getusermedia.audiocapture.enabled", false);
//user_pref("media.getusermedia.screensharing.enabled", false);
//user_pref("permissions.default.camera", 2);
//user_pref("permissions.default.microphone", 2);

// Firefox 69-77 changes
user_pref("browser.urlbar.openViewOnFocus", false);
user_pref("browser.urlbar.update1", false);
user_pref("browser.urlbar.update1.interventions", false);
user_pref("browser.urlbar.update1.searchTips", false);
user_pref("browser.urlbar.update1.view.stripHttps", false);

// Disable the disgusting pingsender in Windows task scheduler
user_pref("default-browser-agent.enabled", false);

// Make toolbar buttons accessible for keyboard
//user_pref("browser.urlbar.update1.restrictTabAfterKeyboardFocus", false);

// Firefox 78++ changes
user_pref("signon.includeOtherSubdomainsInLookup", false);
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("extensions.fxmonitor.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false);
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("geo.provider.network.url", "");
user_pref("geo.provider.network.compare.url", "");
user_pref("signon.management.page.breach-alerts.enabled", false);

// Disable intrusive lockwise random password generator
user_pref("signon.generation.enabled", false);
