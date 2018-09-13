function doGet(e) {

  MailApp.sendEmail("kenichi.nagaoka@gmail.com", "File Upload Notification", "Google Cloud Storageにファイルがアップロードされました。");
}
