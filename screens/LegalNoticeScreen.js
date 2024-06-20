import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LegalNoticeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Güven Gold Kuyumculuk Yasal Uyarı Metni

1. Bilgi ve İçerik

Güven Gold Kuyumculuk ("Şirket") olarak, web sitemizde ve uygulamalarımızda sunulan altın ve döviz kurları ile ilgili bilgilerin doğruluğunu ve güncelliğini sağlamak için azami gayreti göstermekteyiz. Ancak, bu bilgiler yalnızca bilgilendirme amaçlı olup, yatırım, ticaret veya başka herhangi bir finansal işlem yapmak amacıyla kullanılmamalıdır. Kurlarda meydana gelebilecek değişikliklerden Şirketimiz sorumlu değildir.

2. Yatırım ve Ticaret Kararları

Web sitemizde ve uygulamalarımızda sunulan altın ve döviz kurları, doğrudan veya dolaylı olarak yatırım kararlarınızda kullanılmamalıdır. Kullanıcılar, finansal kararlarını almadan önce bağımsız ve profesyonel bir danışmandan yardım almalıdır. Şirketimiz, yatırım veya ticaret kararlarından doğabilecek herhangi bir zarardan sorumlu tutulamaz.

3. Üçüncü Taraf Bağlantıları

Web sitemiz ve uygulamalarımızda üçüncü taraf internet sitelerine yönlendiren bağlantılar bulunabilir. Bu bağlantılar, kullanıcıya kolaylık sağlamak amacıyla sunulmakta olup, içeriklerinden veya güvenilirliklerinden Şirketimiz sorumlu değildir. Üçüncü taraf internet sitelerindeki içeriklerden doğabilecek herhangi bir zarardan Şirketimiz sorumlu tutulamaz.

4. Sorumluluğun Sınırlandırılması

Şirketimiz, altın ve döviz kurları ile ilgili bilgilerin doğruluğu, eksiksizliği veya güncelliği konusunda herhangi bir garanti vermez. Bu bilgilerin kullanımı sonucu doğabilecek doğrudan veya dolaylı zararlar için Şirketimiz sorumlu tutulamaz. Kullanıcılar, web sitemizi ve uygulamalarımızı kullanırken bu riskleri kabul etmiş sayılır.

5. Değişiklik ve Güncellemeler

Şirketimiz, bu yasal uyarı metninde değişiklik yapma hakkını saklı tutar. Metin üzerinde yapılan değişiklikler, güncellenmiş metnin web sitemizde yayımlanması ile yürürlüğe girer. Kullanıcıların, bu yasal uyarıyı düzenli olarak kontrol etmeleri tavsiye edilir.</Text>
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

export default LegalNoticeScreen;
