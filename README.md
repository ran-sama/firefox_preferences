# firefox_preferences
Optimize your settings that privacy comes first again and not second.

## Installation and directories:
on Windows
```
%appdata%\Mozilla\Firefox\profiles\
```
on Linux
```
~/.mozilla/firefox/<profile directory>
```

1) Close Firefox and move the user.js in your profile directory where the pref.js resides.
2) On the next start Firefox parses the settings of the user.js and writes them into your prefs.js 

## Fix Firefox Tabs on bottom and Megabar

https://github.com/Aris-t2/CustomCSSforFx

## Useful Addons / Extensions

#### 1. uBlock Origin ([link](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/))
The last uncompromised adblocker.

#### 2. Temporary Containers ([link](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/))
Prevent tracking by isolating tabs (and trackers inside them) from each other. Superior at clearing supercookies.

#### 3. uMatrix ([link](https://addons.mozilla.org/en-US/firefox/addon/umatrix/))
Powerful matrix based content blocker. For advanced users due to initial effort after installation.

#### 4. HTTPS Everywhere ([link](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/))
Use encryption wherever possible.

#### 5. Smart Referer ([link](https://addons.mozilla.org/en-US/firefox/addon/smart-referer/))
Scrubs information from what website your request came. For average users, can interfere with noscript-captchas.

#### 6. I don't care about cookies ([link](https://addons.mozilla.org/en-US/firefox/addon/i-dont-care-about-cookies/))
Must have for EU users, can automatically click GDPR cookie warnings now on sites that won't load without consent.

#### 7. Decentraleyes ([link](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/))
Prevent tracking trough CDNs delivering JS. For experienced users since rare site breakage when loading JS with CORS requests.

#### 8. Tampermonkey ([link](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/))
Userscript manager with the best interface and editor. Use Greasemonkey if you want a FLOSS alternative.

#### 9. Default Bookmark Folder ([link](https://addons.mozilla.org/en-US/firefox/addon/default-bookmark-folder/))
Fix for when Mozilla decided to store new bookmarks in a very unpopular directory.

#### 10. New Tab Override ([link](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/))
Fix for when Mozilla decided to hijack the new tab page to push their activity stream and pocket reader.

#### 11. Authenticator ([link](https://addons.mozilla.org/en-US/firefox/addon/auth-helper/))
Generate login tokens based on HMAC (keyed-hash message authentication code). Has integrated QR reader to add accounts.

#### 12. Downloads sidebar ([link](https://addons.mozilla.org/en-US/firefox/addon/downloads-sidebar/))
Fix for when Mozilla decided it was a good idea to kill the sidebar for downloads.

#### 13. Reload All Tabs ([link](https://addons.mozilla.org/en-US/firefox/addon/reload-all-tabs/))
Fix for when mozilla decided to break workflow by doubling the amount of clicks to reload all tabs.

#### 14. Cookie Quick Manager ([link](https://addons.mozilla.org/en-US/firefox/addon/cookie-quick-manager/))
Fix for when mozilla decided it was a good idea to make the user not see the content of individual cookies.

#### 15. mozlz4-edit ([link](https://addons.mozilla.org/en-US/firefox/addon/mozlz4-edit/))
Fix for when Mozilla prevented users from editing JSON files by creating an almost-proprietary LZ4 implementation.

#### 16. British English Dictionary ([link](https://addons.mozilla.org/en-US/firefox/addon/british-english-dictionary-2/))
Actively updated.

## Structure of the profile directory

If you ever want to clean your profile, all of your important data can be reduced down to these files:

![alt text](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/profile_structure_1.png)

Directories:
* chrome - stores Cascading Style Sheets that can alter the look of the UI and/or websites
* extensions - stores XPI archives (ZIP compressed) that contains your addons
* gmp-widevine - (optional) proprietary Digital Restrictions Management binaries for Netflix
* storage - important sqlite structure that contains all settings and data of your addons

Files:
* cert9.db - client certificates and CA certificates
* key4.db - contains data required to decrypt your stored passwords
* prefs.js - browser settings
* extension-settings.json - controls activation state of addons
* logins.json - stores all your saved passwords
* xulstore.json - controls placements of UI elements like buttons of addons
* addonStartup.json.lz4 - compressed path info for extensions
* search.json.mozlz4 - search providers compressed with mozilla's near proprietary implementation of LZ4
* cert_override.txt - (optional) surpresses certificate errors for sites you manually added as trustworthy
* favicons.sqlite - bookmark icons
* places.sqlite - bookmark database

![alt text](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/profile_structure_2.png)

* userChrome.css - changes the style of the browser's UI
* userContent.css - changes styles of websites, like userthemes

## License
Licensed under the WTFPL license.
