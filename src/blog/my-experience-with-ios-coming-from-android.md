---
title: "My Experience with iOS Coming from Android"
pubDate: 2024-07-17
description: "I've mentioned below the advantages and disadvantages of iOS. Suggestions and corrections are welcome!"
tags: ["ios", "android", "mobile"]
updatedDate: 2026-03-25
image: "/assets/ios-from-android.jpeg"
---

## Neutral points

- Calls in iOS, no matter the app, 'go through' the Phone app, and show up in the recents/history of the Phone app. For example, every Google Meet or Discord call will be accompanied by an ongoing call screen of the Phone app.

- On iOS, opening the Notification Center requires a pull down gesture from the left-side of the status bar, and on the right for the Control Center. Android has both in one, called Quick Settings; opens by pulling down from anywhere on the status bar.

- When the text input field is for sensitive data (such as for the lock screen password), iOS requires you to use iOS's keyboard, instead of the default. Android always uses the default keyboard everywhere.

- On Android, saving an image is simply writing it to a folder on the file system, making no distinction between a photo and any other file. On iOS, the two are treated as separate concepts, where the share sheet explicitly presents "Save Photo" and "Save to Files" as distinct actions.

- Apps cannot access storage as there is no storage permission in iOS. Apps can instead create and access their own app folder. You can select and share a file with an app, or add files directly to the app's folder. This, however, means no third-party file management on iOS.

- Both Android and iOS support app sandboxing. iOS almost entirely restricts app sideloading, while Android doesn't restrict it as much. Worth pointing out that Android has in-place some pretty easy-to-understand warnings when the user tries to sideload an app.

- Most modern iPhones have a security co-processor. Only the Pixels have something equivalent (The Titan chip). Knox (by Samsung) is also somewhat viable.

- iOS has good software update support. Some Android vendors, especially Google and Samsung, have long support periods as well.

- iOS doesn't have as robust a concept of background functionality as Android does. This translates to somewhat better performance and battery-life. The trade-off is a lack of certain features in some cases (eg. uploading a file to a cloud storage app would require you to keep the app open).

## Advantages of iOS

- The implementation of animations is superior to that of Android in general. This is true for non-system apps as well.

- Exclusive features. Relevant when the people you are close to use iOS as well (FaceTime and iMessage for example). High relevancy in the US due to large market share.

## Disadvantages of iOS

- Text selection is limited to dragging only, which is cumbersome compared to direct cursor placement on-tap.

- iOS has no clipboard history.

- All browsers are locked into WebKit, and WebKit is not particularly great as every so often images on a website would render in an unusual manner. At times the same goes for scrolling behavior.

- Lack of control with Lockdown Mode. Presently follows an all-or-nothing approach.

- Lockdown mode allowlist is locked to Safari.

- Web apps can only be created with Safari. The web app itself though will open with your default browser. This behaviour cannot be changed. You cannot open certain web apps with a certain browser. On Android, a web-app opens in the browser used for creating it.

- The developer fees for the App Store are considerably higher than the Play Store. In addition, Google charges only a one-time fee. The high cost leaves barely any indie apps or games on the App Store. It has for the most part only the big players. The yearly fee that Apple charges, can pressure the devs of indie apps that do exist on the App Store, to charge for features that don't need to be.

- Your ratings for apps on the App Store will 'disappear'. There is no obvious indicator as to whether your rating was saved or not.

- App Store has no app wishlisting feature.

- No third party launcher support.

- iOS hotspot does not allow accessing the local IP (localhost) from other devices connected to the network.

- iOS hotspot automatically turns into a hidden network after some time. It disables itself as soon as the last device disconnects, and disables itself after an interval when no device connects for a period of time. This behavior cannot be changed.

- VPNs that change the host's IP-address tend to not work on devices connected to iOS hotspot.

- The Notification Center does not have a clear all option. Notifications are clustered into groups based on some criteria (most likely on a per-app basis), so you can clear all notifications for each group, but not everything in one go.

- iOS does not have a Universal Back gesture. iOS requires you to navigate strictly as per the app's UI. This causes navigation gestures to be inconsistent across apps. On Android, swiping on either side of the screen will always take you one step back.

- The clock app on iOS does not support custom music selection through local sound files (.mp3, .m4a, etc). You will need to either subscribe to Apple Music, or buy a song from iTunes. The same goes for most other music/alarm apps on the App Store, but luckily there are exceptions.

- Changing System-level App settings on iOS requires you to open the Settings app, and navigate to the "Apps" category. On Android, it is just a click or long-press away.

- iOS has no support for scrolling screenshots. Safari has a Full-Page screenshot feature, but that is nowhere near as useful as a universal scrolling screenshot.

- iOS has no support for USB tethering.

- iOS does not support Split Screen.

- Live notifications, especially those for music, can't be dismissed on iOS. You need to clear the app from recents, or wait until the notification goes away by itself. Android has a system of persistent and non-persistent notifications that the app developer controls. So depending on the app, you can pause the music and swipe to dismiss the notification.

- There is no volume separation for media, ringtone, alarm, etc.

- Most games do not play any audio when in Silent mode.

- The keyboard doesn't have a hide button, unlike Android which does. App developers can provide a hide keyboard option, a custom 'Done' option, a Back button, or something similar. But when that isn't the case, you will have to swipe down to hide the keyboard. If the content of the app you're on at the time is scrollable... you get the idea.

- The status bar on Android shows app icons for notifications. iOS doesn't, hence there is no clear way to know whether or not you have notifications, especially if you missed the banner.

- The lack of a status bar when viewing content in landscape (viewing a video or playing a game) means you cannot look at the time unless you pull the Notification Center down (though not necessarily all the way).

- Games and apps tend to pause when the Notification Center is pulled down. For example, if you play a video through the Photos app and pull the Notification center down, the video will pause.

- No straightforward way to quickly change screen timeout. If Attention Aware Features on iOS is on, the phone will not auto-lock if the user is looking at the screen. On Android, however, certain apps named Caffeine or similar are available, which can be added to Quick Settings. When enabled, the screen will not auto-lock until disabled, which makes things very convenient in certain situations, such as when the phone is on a table and not directly facing you.

- If an entire block of text has already been selected (say in a ChatGPT response), to undo the selection, you will have to tap on a non-text area.

- The keypad of the Phone app doesn't have a cursor. Making a mistake mid-way means re-entering the whole thing.

- The permission list of an app in Settings will not show every permission it can attempt to request for, unless the app actually requests it. For example, the Google News app supports location, however the list will not mention that until the app itself requests it for the first time.

- Having the ability to clear an app's cache is a nice thing to have. This is because in the rare occurrence of when an app stops working even after killing and re-opening it, all you can do on iOS is re-install the app to fix the problem.

- On Android, apps can declare support for certain URLs and the user can toggle these on in the app's settings, causing those URLs to automatically open in the app whenever they are clicked anywhere on the system. For example, NewPipe can be set to automatically intercept YouTube links. On iOS, this is not possible; links always open in their default app or browser unless the developer of the service itself has set up the integration.

---

I will be keeping this post up to date if something new comes up, or if newer iOS versions change things that are relevant to this post.
