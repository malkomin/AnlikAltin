import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Güven Gold Kuyumculuk Kişisel Verilerin Korunması ve İşlenmesi Politikası

1. Amaç ve Kapsam

Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, Güven Gold Kuyumculuk ("Şirket") tarafından kişisel verilerin korunması ve işlenmesi süreçlerine ilişkin usul ve esasları belirlemektedir.

2. Kişisel Verilerin Toplanması ve İşlenmesi

Şirketimiz, müşterilerimize daha iyi hizmet sunabilmek amacıyla kişisel verilerinizi toplamakta ve işlemektedir. Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:

Hizmetlerimizin sunulması ve geliştirilmesi
Müşteri memnuniyetinin artırılması
Yasal yükümlülüklerin yerine getirilmesi
Pazarlama ve reklam faaliyetlerinin yürütülmesi
3. Kişisel Verilerin Aktarılması

Kişisel verileriniz, yasal zorunluluklar veya hizmetlerimizin sunulması amacıyla iş ortaklarımız, tedarikçilerimiz ve yetkili kamu kurumları ile paylaşılabilir. Bu paylaşım, KVKK'ya uygun olarak gerçekleştirilecektir.

4. Veri Güvenliği

Şirketimiz, kişisel verilerinizi korumak için gerekli teknik ve idari tedbirleri almaktadır. Veri güvenliği önlemlerimiz, yetkisiz erişim, kayıp, çalınma veya zarar görme risklerine karşı kişisel verilerinizi korumak amacıyla sürekli olarak gözden geçirilmekte ve güncellenmektedir.

5. Veri Sahibinin Hakları

KVKK kapsamında, kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:

Kişisel verilerinizin işlenip işlenmediğini öğrenme
Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme
Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme
Kişisel verilerinizin silinmesini veya yok edilmesini isteme
Kişisel verilerinizin düzeltilmesi, silinmesi veya yok edilmesi halinde bu işlemlerin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme
İşlenen verilerin münhasıran otomatik sistemler aracılığıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme
6. İletişim

Kişisel verilerinizle ilgili her türlü soru, görüş veya talepleriniz için aşağıdaki iletişim bilgilerini kullanarak bizimle irtibata geçebilirsiniz:

Güven Gold Kuyumculuk
Adres: [Adresinizi buraya ekleyin]
Telefon: [Telefon numaranızı buraya ekleyin]
E-posta: [E-posta adresinizi buraya ekleyin]

7. Politika Değişiklikleri

Şirketimiz, bu politikada değişiklik yapma hakkını saklı tutar. Politika üzerinde yapılan değişiklikler, güncellenmiş politika metninin web sitemizde yayımlanması ile yürürlüğe girer.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PrivacyPolicyScreen;
