# totoro

### 基本アーキ
https://www.slideshare.net/kenichinagaoka3/serverless-architectures-112608331<br>
の最後のページ「Appendix」

### 操作手順

1. Google Cloud Storageへアクセス<br>
　　https://console.cloud.google.com/storage/browser/totoro-storage?project=adroit-solstice-211516&authuser=2
  
2. 任意のファイルをアップロード

3. 2の操作で「cloud functions/index.js」が起動しそこからSendMail.gasがコールされる（メール通知される）
