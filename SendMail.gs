function doGet(e) {
  MailApp.sendEmail(PropertiesService.getScriptProperties().getProperty("TO"), "File Upload Notification", "Google Cloud Storageにファイルがアップロードされました。");
}
