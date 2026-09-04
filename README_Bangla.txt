# প্রসেনজিৎ অনলাইন শপ - Biodata Form

## ZIP ফাইল GitHub-এ আপলোড করার আগে

এই ফাইলগুলো আছে:
- index.html = Biodata Form
- style.css = ডিজাইন
- script.js = Google Sheet সংযোগ
- Code.gs = Google Apps Script কোড

## ধাপ ১: Google Sheet তৈরি করুন
1. Google Drive খুলুন
2. New > Google Sheets
3. নাম দিন: Prasenjit Employee Biodata

## ধাপ ২: Apps Script খুলুন
Google Sheet থেকে:
Extensions > Apps Script

পুরোনো কোড মুছে Code.gs ফাইলের কোড Paste করুন।

## ধাপ ৩: Deploy করুন
1. Deploy > New deployment
2. Select type > Web app
3. Execute as: Me
4. Who has access: Anyone
5. Deploy
6. Authorization Allow করুন
7. Web App URL Copy করুন

## ধাপ ৪: script.js-এ URL বসান
এই লাইনটি খুঁজুন:

const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

PASTE_YOUR... এর জায়গায় আপনার Web App URL বসান।

## ধাপ ৫: GitHub-এ Upload
GitHub Repository খুলুন:
https://github.com/kalimata352-blip/Prasenjit-online-shop-

Add file > Upload files

এই ZIP Extract করে index.html, style.css, script.js আপলোড করুন।

তারপর Commit changes করুন।

## মোবাইল থেকে Google Sheet পরিচালনা
Google Sheets App ইনস্টল করুন।
সব Biodata সেখানে Row হিসেবে জমা হবে।

নোট:
Apps Script-এ নতুন পরিবর্তন করলে আবার Deploy > Manage deployments থেকে নতুন version Deploy করতে হতে পারে।
