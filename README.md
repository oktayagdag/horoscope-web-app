# Burçlar Web Uygulaması
Burçlar hakkında bilgilere ulaşıp, yorum yapabiliceğiniz web uygulaması.

## Kullanılan Teknolojiler ve Kütüphaneler
ReactJS,SQlite <br/>
Axios,Bootstrap,Mdb (Bootstrap ve MaterialDesign Birleşimi)

## Projenin Çalıştırılması
Proje 2 farklı dosyadan oluştuğu için önce back end dosyası içinde, daha sonra frontend dosyası içinde <br/>
`npm start`
<br/> Komutu ile dosyalar çalışır.

## Projeye Genel Bakış
Proje 2 dosyadan oluşmaktadır. Frontend ve Backend.

Frontend tarafı 3000 portunda web site arayüzünü çalıştırır.
Hazırladığım zodiacs.json dosyasından çekilen burç bilgilerini anasayfada listeler.
Anasayfada listelenen bu burçlara tıklandığında burç detayları sayfasını açar.
Burç detayları sayfasında burç özellikleri ve detayları ile ilgili bir takım bloklar ve sayfa sonunda "yorum yapma" alanı bulunmaktadır.

İşte bu noktada Backend dosyasında 8000 portunda çalışan apimiz devreye girerek yaptığımız yorumları veritabanına aktarmayı ve diğer ziyaretçiler tarafından yapılan yorumların  görüntülenmesini sağlar.


## Proje Kodlarının İşleyişi ve Önemli Kod Parçacıkları (Detaylı Anlatım)
Aşağıdaki linke tıklayarak detaylara ulaşabilirsiniz. <br/>
[Proje Detayları](https://sites.google.com/view/oktayagdag-projectdetails/ana-sayfa)
