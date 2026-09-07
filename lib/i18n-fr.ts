// Fransızca içerik sözlüğü.
//
// Panelde her metin TR / EN olarak girilir; Fransızca için ayrı alan yoktur.
// Bu sözlük Türkçe kaynak metni anahtar alarak Fransızca karşılığını verir
// (bkz. lib/l10n.ts → t()). Sözlükte karşılığı olmayan metinler önce İngilizceye,
// o da boşsa Türkçeye düşer — yani yeni içerik eklendiğinde site bozulmaz,
// yalnızca o metin İngilizce görünür.
//
// Yeni bir metnin Fransızcası için: Türkçe kaynağı birebir (noktalama dahil)
// anahtar olarak ekleyin. Anahtar bire bir eşleşmezse çeviri kullanılmaz.

export const frContent: Record<string, string> = {
  // ---------- Ana sayfa / genel ----------
  "Sürdürülebilir Ambalaj,\nGüçlü Etki": "Emballage durable,\nimpact puissant",
  "Sürdürülebilir Ambalaj, Güçlü Etki": "Emballage durable, impact puissant",
  "Sürdürülebilir Ambalaj Çözümleri\nDoğal Güçle Üretildi":
    "Des solutions d’emballage durables\nfaçonnées par la force naturelle",
  "Ambalajda Doğal Güç": "La force naturelle de l’emballage",
  "Kraftora | Ambalajda doğal güç": "Kraftora | La force naturelle de l’emballage",
  "Kraftora | Ambalajda Doğal Güç": "Kraftora | La force naturelle de l’emballage",
  "Ürün Ambalajı için en iyi çözümünüz biziz":
    "Nous sommes votre meilleure solution en matière d’emballage produit",
  "Ürün Ambalajı": "Emballage produit",
  "Hayalinizdeki ambalaja ulaşmak için birden fazla kaynağa gitme derdine son.":
    "Fini les allers-retours entre plusieurs prestataires pour obtenir l’emballage de vos rêves.",
  "Uzman Destek Ekibi": "Équipe d’experts dédiée",
  "Ürün uzmanlarımızın sınırsız desteğiyle daha bilinçli kararlar verin.":
    "Prenez des décisions plus éclairées grâce au soutien illimité de nos spécialistes produit.",
  "Uçtan Uca Çözüm": "Solution de bout en bout",
  "Konseptten kapınıza kadar her adımı biz üstlenerek projenizi kolaylaştırıyoruz.":
    "Du concept à votre porte, nous simplifions votre projet en prenant tout en charge.",
  "Özel Ölçü": "Dimensions sur mesure",
  "Ambalajınızın ölçülerini hiçbir sınırlama olmadan ürününüze göre belirleyin.":
    "Définissez les dimensions de votre emballage selon votre produit, sans aucune limite.",
  "Ürünlerimiz": "Nos produits",
  "Ürününüzü korumak için tasarlanan kraft ambalaj çözümlerimizin tamamını keşfedin":
    "Découvrez toute notre gamme de solutions d’emballage kraft conçues pour protéger votre produit",
  "Ambalaj ihtiyaçlarınızı karşılayan hizmetler":
    "Des services qui répondent à tous vos besoins d’emballage",
  "Markanıza özel kraft ambalaj çözümleri.":
    "Des solutions d’emballage kraft personnalisées pour votre marque.",
  "Kraftora: pizza kutusu, hamburger kutusu, kraft çanta ve e-ticaret kutusu gibi %100 geri dönüştürülebilir, markanıza özel baskılı kraft ambalaj çözümleri.":
    "Kraftora : des solutions d’emballage kraft 100 % recyclables et personnalisées à votre marque — boîtes à pizza, boîtes à burger, sacs kraft et boîtes e-commerce.",
  "Ürünlerinizi koruyan, markanızı yükselten ve gezegene saygı duyan sürdürülebilir, özel kraft ambalaj çözümleri üretiyoruz.":
    "Nous produisons des solutions d’emballage kraft durables et sur mesure qui protègent vos produits, valorisent votre marque et respectent la planète.",
  "Tüm ürünlerimiz %100 geri dönüştürülebilir ve biyolojik olarak çözünebilir malzemelerden üretilir.":
    "Tous nos produits sont fabriqués à partir de matériaux 100 % recyclables et biodégradables.",

  // ---------- Süreç / hizmetler ----------
  Danışmanlık: "Conseil",
  Tasarım: "Conception",
  Prototip: "Prototype",
  Üretim: "Production",
  Optimizasyon: "Optimisation",
  Lojistik: "Logistique",
  "İhtiyaç Analizi": "Analyse des besoins",
  "Ürün ölçülerinizi, sevkiyat gereksinimlerinizi ve pazar konumunuzu analiz ederek en doğru ambalaj stratejisini öneriyoruz.":
    "Nous analysons les dimensions de votre produit, vos contraintes d’expédition et votre positionnement afin de recommander la stratégie d’emballage la plus adaptée.",
  "Malzeme Önerileri": "Recommandations matériaux",
  "Gramaj, dayanıklılık ve çevresel etki konusunda uzman tavsiyesiyle kraft, geri dönüştürülmüş veya özel kağıtlar arasından seçim yapın.":
    "Choisissez parmi les papiers kraft, recyclés ou spéciaux, avec un conseil d’expert sur le grammage, la résistance et l’impact environnemental.",
  "Sürdürülebilirlik Hedefleri": "Objectifs de durabilité",
  "Geri dönüştürülebilir malzemeler, soya bazlı mürekkepler ve düşük karbon ayak izi çözümleriyle çevre dostu ambalaja geçin.":
    "Passez à un emballage écologique avec des matériaux recyclables, des encres à base de soja et des solutions à faible empreinte carbone.",
  "Yapısal Tasarım": "Conception structurelle",
  "Hassas ölçüler, sap yerleşimi ve körük yapılandırmasıyla ürününüz için kusursuz ambalaj yapısını tasarlayın.":
    "Concevez la structure parfaite pour votre produit : cotes précises, positionnement des poignées et configuration du soufflet.",
  "Özel Tasarım": "Création graphique",
  "Tasarım ekibimiz marka kimliğinizi kusursuz yansıtan dikkat çekici görseller ve baskıya hazır dosyalar oluşturur.":
    "Notre équipe de design crée des visuels percutants et des fichiers prêts à imprimer qui reflètent parfaitement votre identité de marque.",
  "Marka Uyumu": "Cohérence de marque",
  "Ambalaj tasarımınızın marka kılavuzunuz, renk paletiniz ve pazarlama hedeflerinizle kusursuz uyum içinde olmasını sağlayın.":
    "Assurez-vous que votre emballage s’aligne parfaitement sur votre charte graphique, votre palette de couleurs et vos objectifs marketing.",
  "Numune ve Prototip": "Échantillons et prototypes",
  "Üretime geçmeden önce numunelerle ambalaj ve baskı tasarımlarınızı test edip ince ayar yaparak vizyonunuzu hayata geçirin.":
    "Testez et affinez vos maquettes d’emballage et d’impression sur échantillons afin de concrétiser votre vision avant la production.",
  "Ambalaj Testleri": "Tests d’emballage",
  "Düşme ve ezilme gibi kritik testlerle ambalajınızın farklı koşullara dayanıklılığını doğrulayın.":
    "Validez la résistance de votre emballage grâce à des tests critiques de chute et d’écrasement.",
  "Seri Üretim": "Production en série",
  "Son teknoloji üretim tesislerimizle ambalajınızı küçük partilerden yüksek hacimli siparişlere ölçeklendirin.":
    "Passez de petites séries aux commandes à fort volume grâce à nos unités de production de dernière génération.",
  "Kalite Kontrol": "Contrôle qualité",
  "Çok aşamalı titiz denetim süreci, her partinin sevkiyattan önce kalite standartlarımızı karşılamasını sağlar.":
    "Un processus d’inspection rigoureux en plusieurs étapes garantit que chaque lot répond à nos standards de qualité avant expédition.",
  "Verimli Üretim": "Production efficiente",
  "Optimize edilmiş iş akışları ve ileri makine parkuru, kısa teslim süreleriyle tutarlı sonuçlar sunar.":
    "Des flux de production optimisés et un parc machines avancé assurent des résultats constants dans des délais maîtrisés.",
  "Maliyet Optimizasyonu": "Optimisation des coûts",
  "Akıllı malzeme seçimi ve toplu üretim stratejileriyle kaliteyi en üst düzeye çıkarırken birim maliyetlerinizi düşürün.":
    "Maximisez la qualité tout en réduisant votre coût unitaire grâce à un choix de matériaux intelligent et à des stratégies de production en volume.",
  "Malzeme Optimizasyonu": "Optimisation matière",
  "Yapısal mühendislerimizle malzeme kullanımını en aza indirerek gereksiz ambalaj atığını ve maliyetleri azaltın.":
    "Réduisez les déchets d’emballage superflus et les coûts en minimisant l’usage de matière avec nos ingénieurs structure.",
  "Sürekli İyileştirme": "Amélioration continue",
  "Pazar trendleri ve müşteri beklentilerine ayak uydurmak için ambalajınızı sürekli değerlendirip geliştiriyoruz.":
    "Nous évaluons et faisons évoluer en permanence votre emballage pour suivre les tendances du marché et les attentes de vos clients.",
  "Küresel Sevkiyat": "Expédition mondiale",
  "Tam takip, gümrük işlemleri ve takviminize uygun esnek sevkiyat seçenekleriyle dünya çapında güvenilir teslimat.":
    "Une livraison fiable partout dans le monde, avec suivi complet, gestion douanière et options d’expédition adaptées à votre calendrier.",
  Depolama: "Stockage",
  "Envanter yönetimiyle güvenli depolama çözümleri; ambalajınız ihtiyaç duyduğunuz an hazır.":
    "Des solutions de stockage sécurisées avec gestion des stocks : votre emballage est prêt dès que vous en avez besoin.",
  "Tedarik Zinciri Yönetimi": "Gestion de la chaîne d’approvisionnement",
  "Üretim hattından deponuzun kapısına kadar koordineli planlama ile uçtan uca tedarik zinciri görünürlüğü.":
    "Une visibilité de bout en bout sur la chaîne d’approvisionnement, avec une planification coordonnée de la ligne de production à la porte de votre entrepôt.",

  // ---------- Hakkımızda ----------
  Hikayemiz: "Notre histoire",
  Misyonumuz: "Notre mission",
  "Neden Kraftora": "Pourquoi Kraftora",
  "Bizi Farklı Kılan Nedir": "Ce qui nous distingue",
  "Kraftora Güvencesi": "L’engagement Kraftora",
  "Güvenilir Ambalaj Ortağınız": "Votre partenaire emballage de confiance",
  "Kraftora'nın İçinden": "Au cœur de Kraftora",
  "Kraftora net bir misyonla kuruldu: işletmelere tasarımdan ve dayanıklılıktan ödün vermeyen, yüksek kaliteli ve çevre dostu kraft ambalajlar sunmak.":
    "Kraftora est née d’une mission claire : offrir aux entreprises des emballages kraft écologiques et de haute qualité, sans compromis sur le design ni sur la résistance.",
  "Bugün gıda servisi, perakende, e-ticaret ve daha pek çok sektördeki müşterilerimize, her markanın kendine özgü ihtiyaçlarına tam uyumlu özel ambalaj çözümleri sunuyoruz. Konseptten teslimata kadar her adımı titizlikle yönetiyoruz.":
    "Aujourd’hui, nous accompagnons des clients de la restauration, du commerce de détail, du e-commerce et bien d’autres secteurs avec des solutions d’emballage sur mesure, parfaitement adaptées aux besoins de chaque marque. Du concept à la livraison, nous pilotons chaque étape avec rigueur.",
  "İyi bir ambalajın korumaktan fazlasını yapması gerektiğine inanıyoruz: hikayenizi anlatmalı, unutulmaz bir deneyim yaratmalı ve çevrede iz bırakmamalı.":
    "Nous croyons qu’un bon emballage doit faire bien plus que protéger : il doit raconter votre histoire, créer une expérience mémorable et ne laisser aucune trace sur l’environnement.",
  "Biz yalnızca kutu ve çanta üretmiyoruz; kalite, şeffaflık ve yenilik üzerine kurulu ambalaj ortaklıkları inşa ediyoruz.":
    "Nous ne fabriquons pas seulement des boîtes et des sacs : nous construisons des partenariats d’emballage fondés sur la qualité, la transparence et l’innovation.",
  "Ürettiğimiz her ürün, sürdürülebilir kaynaklardan elde edilen, tamamen geri dönüştürülebilir kraft kağıttan yapılır. Modern baskı teknolojisini çevre bilinçli malzemelerle birleştirerek müşterilerinizin seveceği ve gezegenin size teşekkür edeceği ambalajlar üretiyoruz.":
    "Chacun de nos produits est fabriqué en papier kraft entièrement recyclable, issu de sources durables. En associant technologies d’impression modernes et matériaux respectueux de l’environnement, nous créons des emballages que vos clients adoreront et dont la planète vous sera reconnaissante.",
  "Tamamen Özel": "Entièrement sur mesure",
  "Her ürün tam olarak sizin özelliklerinize göre üretilir: ölçü, malzeme, baskı ve yüzey işlemi. Şablon yok, sınır yok.":
    "Chaque produit est fabriqué exactement selon vos spécifications : dimensions, matériau, impression et finition. Aucun gabarit, aucune limite.",
  "Çevre Dostu Malzemeler": "Matériaux écologiques",
  "Tüm malzemeler geri dönüştürülebilir, biyolojik olarak çözünür ve sürdürülebilir kaynaklıdır; müşterilerinizin ve gezegenin takdir edeceği ambalajlar.":
    "Tous nos matériaux sont recyclables, biodégradables et issus de sources durables : des emballages que vos clients comme la planète sauront apprécier.",
  "Hızlı Teslimat": "Délais rapides",
  "Verimli üretim ve lojistik sayesinde ambalajınız her seferinde planlanan zamanda teslim edilir; gecikme yok, bahane yok.":
    "Grâce à une production et une logistique efficaces, votre emballage est livré à la date prévue, à chaque fois : aucun retard, aucune excuse.",
  "Verimli üretim sürecimiz sayesinde özel ambalajınız her zaman tam zamanında teslim edilir.":
    "Notre processus de production optimisé garantit la livraison de votre emballage sur mesure toujours dans les temps.",
  "Uzman Rehberliği": "Accompagnement expert",
  "Kişisel ambalaj uzmanınız ilk görüşmeden son teslimata kadar tüm süreçte size rehberlik eder.":
    "Votre expert emballage dédié vous accompagne du premier échange jusqu’à la livraison finale.",
  "Kalite Garantisi": "Qualité garantie",
  "Çok aşamalı kalite kontrol, her partinin tesisimizden çıkmadan önce en yüksek standartları karşılamasını sağlar.":
    "Un contrôle qualité en plusieurs étapes garantit que chaque lot répond aux standards les plus élevés avant de quitter notre site.",
  "Her siparişte en yüksek kalitede ürün ve müşteri deneyimini garanti ediyoruz.":
    "Nous garantissons la meilleure qualité de produit et d’expérience client à chaque commande.",
  "Küresel Teslimat": "Livraison mondiale",
  "30'dan fazla ülkeye tam lojistik destek, gümrük işlemleri ve her siparişte gerçek zamanlı takip ile sevkiyat yapıyoruz.":
    "Nous expédions dans plus de 30 pays avec un accompagnement logistique complet, la gestion douanière et un suivi en temps réel sur chaque commande.",
  "Özel Destek": "Support dédié",
  "Markanız ve Gezegen İçin Üretildi": "Conçu pour votre marque et pour la planète",
  "Kraftora üretim tesisi": "Site de production Kraftora",
  "Hassasiyetin sürdürülebilirlikle buluştuğu üretim tesisimizin perde arkasına bir bakış.":
    "Un aperçu des coulisses de notre site de production, là où la précision rencontre la durabilité.",
  "Daha Fazlasını Görmek İster misiniz?": "Envie d’en voir davantage ?",
  "Tesisimizde sanal bir tur planlamak ya da ambalaj projenizi görüşmek için bize ulaşın.":
    "Contactez-nous pour organiser une visite virtuelle de notre site ou pour discuter de votre projet d’emballage.",
  "Kusursuz Ambalajınızı Oluşturmaya Hazır mısınız?":
    "Prêt à créer votre emballage idéal ?",
  "Ürün ve marka gereksinimlerinize en uygun çözümleri keşfetmek için ambalaj uzmanlarımızla görüşün.":
    "Échangez avec nos spécialistes de l’emballage pour découvrir les solutions les mieux adaptées à votre produit et à votre marque.",
  "Ürünlerimize göz atın ya da bize ulaşın; markanız için ideal çözümü birlikte bulalım.":
    "Parcourez nos produits ou contactez-nous : trouvons ensemble la solution idéale pour votre marque.",

  // ---------- İletişim ----------
  "Bize Ulaşın": "Contactez-nous",
  "Sizden haber almaktan mutluluk duyarız. Ürünlerimiz, fiyatlandırma ya da başka bir konuda sorunuz varsa ekibimiz yardıma hazır.":
    "Nous serions ravis d’avoir de vos nouvelles. Une question sur nos produits, nos tarifs ou tout autre sujet ? Notre équipe est à votre disposition.",
  Ofisimiz: "Notre bureau",
  Telefon: "Téléphone",
  "E-posta": "E-mail",
  "Bizi Takip Edin": "Suivez-nous",
  "Yeni ürünler ve ilham veren içerikler için sosyal medya hesaplarımızı takip edin.":
    "Suivez nos réseaux sociaux pour découvrir nos nouveaux produits et du contenu inspirant.",
  "Bize Mesaj Gönderin": "Envoyez-nous un message",
  "Aşağıdaki formu doldurun, en kısa sürede size dönüş yapalım.":
    "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.",
  "Özel Ambalaj Teklifi mi Gerekiyor?": "Besoin d’un devis d’emballage sur mesure ?",
  "Ürün yelpazemize göz atın ve herhangi bir ürün sayfasından doğrudan size özel teklif isteyin.":
    "Parcourez notre gamme et demandez un devis personnalisé directement depuis n’importe quelle fiche produit.",
  "Mansuroğlu Mah. 286/1 Sk. No: 1 İç Kapı No: 215 Bayraklı / İzmir":
    "Mansuroğlu Mah. 286/1 Sk. No: 1 Porte intérieure No: 215 Bayraklı / İzmir, Türkiye",
  "Bayraklı, İzmir": "Bayraklı, İzmir",
  "Pzt – Cum, 09:00 – 18:00": "Lun – Ven, 09h00 – 18h00",
  "24 saat içinde yanıt veriyoruz": "Nous répondons sous 24 heures",

  // ---------- Blog ----------
  Blog: "Blog",
  "Sürdürülebilir ambalaj, malzeme seçimi, baskı teknikleri ve sektör trendleri hakkında içgörüler ve ipuçları; markanız ve gezegen için daha akıllı kararlar vermenize yardımcı oluyoruz.":
    "Analyses et conseils sur l’emballage durable, le choix des matériaux, les techniques d’impression et les tendances du secteur, pour vous aider à prendre de meilleures décisions pour votre marque et pour la planète.",
  "Kraft Ambalaj Neden Sürdürülebilir İşletmelerin Geleceği":
    "Pourquoi l’emballage kraft est l’avenir des entreprises durables",
  "Tüketiciler çevre dostu çözümler talep ettikçe kraft ambalaj, kaliteden ve marka çekiciliğinden ödün vermeden atığı azaltmak isteyen işletmelerin ilk tercihi haline geliyor.":
    "Alors que les consommateurs réclament des solutions écologiques, l’emballage kraft s’impose comme le choix privilégié des entreprises souhaitant réduire leurs déchets sans sacrifier la qualité ni l’attrait de leur marque.",
  "Gıda İşletmeniz İçin Doğru Ambalajı Nasıl Seçersiniz":
    "Comment choisir le bon emballage pour votre activité de restauration",
  "Doğru gıda ambalajını seçmek, ürün tazeliğinden müşteri algısına kadar her şeyi etkiler. Menünüz ve markanız için mükemmel uyumu bulmanın pratik rehberi.":
    "Le choix du bon emballage alimentaire influe sur tout, de la fraîcheur du produit à la perception client. Voici un guide pratique pour trouver la solution idéale pour votre carte et votre marque.",
  "Kraft Kağıt Üzerine Özel Baskı: Bilmeniz Gerekenler":
    "Impression personnalisée sur papier kraft : ce qu’il faut savoir",
  "Özel baskı, sade kraft ambalajı güçlü bir markalaşma aracına dönüştürür. Teknikler, baskıya hazırlık ve en iyi sonucu almak için bilmeniz gereken her şey burada.":
    "L’impression personnalisée transforme un emballage kraft neutre en un puissant outil de marque. Voici tout ce qu’il faut savoir sur les techniques, la préparation des fichiers et l’obtention du meilleur résultat.",

  // ---------- Yasal ----------
  "KVKK Aydınlatma Metni": "Note d’information KVKK (protection des données)",
  "## Veri Sorumlusu\n\nKraftora, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemektedir.\n\n## İşlenen Veriler ve Amaçlar\n\nİletişim ve teklif formları aracılığıyla paylaştığınız ad, soyad, e-posta, telefon ve firma bilgileri; taleplerinizi yanıtlamak, teklif hazırlamak ve sizinle iletişim kurmak amacıyla işlenir.\n\n## Haklarınız\n\nKVKK'nın 11. maddesi kapsamındaki haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.":
    "## Responsable du traitement\n\nKraftora traite vos données personnelles en qualité de responsable du traitement, au sens de la loi turque n° 6698 sur la protection des données personnelles (KVKK).\n\n## Données traitées et finalités\n\nLes nom, prénom, adresse e-mail, numéro de téléphone et informations d’entreprise que vous communiquez via les formulaires de contact et de devis sont traités afin de répondre à vos demandes, d’établir un devis et de communiquer avec vous.\n\n## Vos droits\n\nPour exercer les droits prévus à l’article 11 de la KVKK, vous pouvez nous contacter.",
  "Gizlilik Politikası": "Politique de confidentialité",
  "Kraftora olarak gizliliğinize önem veriyoruz. Web sitemiz üzerinden paylaştığınız bilgiler yalnızca taleplerinizi karşılamak amacıyla kullanılır ve üçüncü taraflarla paylaşılmaz.\n\nSorularınız için info@kraftora.com adresinden bize ulaşabilirsiniz.":
    "Chez Kraftora, nous attachons de l’importance à votre vie privée. Les informations que vous nous communiquez via notre site web sont utilisées uniquement pour répondre à vos demandes et ne sont jamais partagées avec des tiers.\n\nPour toute question, vous pouvez nous écrire à info@kraftora.com.",
  "Çerez Politikası": "Politique de cookies",
  "Web sitemiz, düzgün çalışması için yalnızca zorunlu çerezleri kullanır. Bu çerezler kişisel veri toplamaz ve tarayıcı ayarlarınızdan yönetilebilir.":
    "Notre site web utilise uniquement les cookies strictement nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle et peuvent être gérés depuis les paramètres de votre navigateur.",

  // ---------- Ürün adları ----------
  "Kraft Pizza Kutusu": "Boîte à pizza kraft",
  "Kraft Hamburger Kutusu": "Boîte à burger kraft",
  "Kraft Patates Kutusu": "Boîte à frites kraft",
  "Kraft Döner Kutusu": "Boîte à döner kraft",
  "Kraft Nata Kutusu": "Boîte à pastéis de nata kraft",
  "Kraft Kağıt Kase": "Bol en papier kraft",
  "Kraft Tabak": "Barquette kraft",
  "Kraft Kağıt Torba": "Sac en papier kraft",
  "Kraft Düz Kağıt Torba": "Sachet plat en papier kraft",
  "Kraft Alışveriş Çantası": "Sac shopping kraft",
  "Burgu Saplı Kraft Kağıt Çanta": "Sac kraft à poignées torsadées",
  "Düz Saplı Kraft Kağıt Çanta": "Sac kraft à poignées découpées",
  "Kraft E-Ticaret Kutusu": "Boîte e-commerce kraft",
  "Kraft Koli": "Caisse carton kraft",
  "Kraft Kağıt Separatör": "Séparateurs en carton kraft",

  // ---------- Teklif formu başlıkları ----------
  "Kraft Pizza Kutusu - Teklif Formu": "Boîte à pizza kraft — Demande de devis",
  "Kraft Hamburger Kutusu - Teklif Formu": "Boîte à burger kraft — Demande de devis",
  "Kraft Patates Kutusu - Teklif Formu": "Boîte à frites kraft — Demande de devis",
  "Kraft Döner Kutusu - Teklif Formu": "Boîte à döner kraft — Demande de devis",
  "Kraft Nata Kutusu - Teklif Formu": "Boîte à pastéis de nata kraft — Demande de devis",
  "Kraft Kağıt Kase - Teklif Formu": "Bol en papier kraft — Demande de devis",
  "Kraft Tabak - Teklif Formu": "Barquette kraft — Demande de devis",
  "Kraft Kağıt Torba - Teklif Formu": "Sac en papier kraft — Demande de devis",
  "Kraft Düz Kağıt Torba - Teklif Formu": "Sachet plat en papier kraft — Demande de devis",
  "Kraft Alışveriş Çantası - Teklif Formu": "Sac shopping kraft — Demande de devis",
  "Burgu Saplı Kraft Kağıt Çanta - Teklif Formu":
    "Sac kraft à poignées torsadées — Demande de devis",
  "Düz Saplı Kraft Kağıt Çanta - Teklif Formu":
    "Sac kraft à poignées découpées — Demande de devis",
  "Kraft E-Ticaret Kutusu - Teklif Formu": "Boîte e-commerce kraft — Demande de devis",
  "Kraft Koli - Teklif Formu": "Caisse carton kraft — Demande de devis",
  "Kraft Kağıt Separatör - Teklif Formu": "Séparateurs en carton kraft — Demande de devis",

  // ---------- Teklif formu alanları ----------
  "Uzunluk (cm)": "Longueur (cm)",
  "Genişlik (cm)": "Largeur (cm)",
  "Yükseklik (cm)": "Hauteur (cm)",
  "Çap (cm)": "Diamètre (cm)",
  "Derinlik (cm)": "Profondeur (cm)",
  "Derinlik / Körük (cm)": "Profondeur / soufflet (cm)",
  "Yuva Sayısı": "Nombre d’alvéoles",
  "Hacim / Porsiyon": "Volume / portion",
  "Kutu Uzunluğu (cm)": "Longueur de la boîte (cm)",
  "Kutu Genişliği (cm)": "Largeur de la boîte (cm)",
  "Bölme Yüksekliği (cm)": "Hauteur de séparation (cm)",
  "Yaldız Baskı": "Marquage à chaud",
  Kabartma: "Gaufrage en relief",
  "Gofre (Çukur Baskı)": "Gaufrage en creux",
  "Yağ Geçirmez Kaplama": "Revêtement anti-graisse",
  "Havalandırma Delikleri": "Trous d’aération",
  "Kolay Kilit Kapak": "Fermeture à clip",
  "Kapak İsteniyor": "Couvercle souhaité",
  "Yağ Geçirmez Astar": "Doublure anti-graisse",
  "Tel Kilit Sap": "Poignée à verrou métallique",
  "Etiket Mühür": "Sceau autocollant",
  "Güçlendirilmiş Taban": "Fond renforcé",
  Selefon: "Pelliculage",
  "Geçmeli Yuvalar": "Alvéoles emboîtables",
  "Güçlendirilmiş Kenarlar": "Bords renforcés",
  "Özel Hücre Ölçüleri": "Dimensions d’alvéoles sur mesure",
  "El Delikleri": "Poignées découpées",
  "Güçlendirilmiş Köşeler": "Coins renforcés",
  "İstifleme Dayanım Testi": "Test de résistance à l’empilage",
  "Palete Uygun Ölçü": "Format adapté aux palettes",

  // ---------- Ürün kısa açıklamaları ----------
  "Özel baskılı, havalandırmalı pizza ambalajı.":
    "Emballage à pizza ventilé et imprimé sur mesure.",
  "Yağa dayanıklı, güvenli hamburger ambalajı.":
    "Emballage à burger anti-graisse et sécurisé.",
  "Kompakt, yağ geçirmez patates kapları.":
    "Contenants à frites compacts et anti-graisse.",
  "Dürüm ve porsiyonlar için ısıya dayanıklı kutular.":
    "Boîtes résistantes à la chaleur pour wraps et portions.",
  "Zarif, yastık formunda hamur işi tutucular.":
    "Élégants supports à pâtisserie en forme de coussin.",
  "Sıcak ve soğuk yemekler için sızdırmaz kaseler.":
    "Bols étanches pour plats chauds et froids.",
  "Atıştırmalıklar ve yemekler için çok amaçlı tabaklar.":
    "Barquettes polyvalentes pour en-cas et repas.",
  "Katlanır kapaklı dayanıklı torbalar.": "Sachets résistants à rabat de fermeture.",
  "Hızlı servis için sade, sapsız torbalar.":
    "Sachets simples et sans poignées pour le service rapide.",
  "Kesme saplı sağlam alışveriş çantaları.":
    "Sacs shopping robustes à poignées découpées.",
  "Burgu kağıt saplı premium çantalar.":
    "Sacs premium à poignées en corde de papier torsadée.",
  "Entegre düz saplı şık çantalar.": "Sacs élégants à poignées découpées intégrées.",
  "Markalı kutu açma deneyimi sunan premium e-ticaret kutusu.":
    "Boîte e-commerce premium offrant une expérience de déballage à votre marque.",
  "Endüstriyel dayanıklılıkta premium koli.":
    "Caisse carton premium à résistance industrielle.",
  "Hassas bölmeli premium separatörler.":
    "Séparateurs premium à compartiments ajustés au millimètre.",

  // ---------- Ürün liste açıklamaları ----------
  "Fırından kapıya kadar hamuru çıtır tutan havalandırmalı, tamamen özel baskılı pizza kutuları.":
    "Des boîtes à pizza ventilées et entièrement personnalisables qui gardent la pâte croustillante du four jusqu’à la porte du client.",
  "Ürününüzü güvende, markanızı ön planda tutan yağa dayanıklı hamburger kutuları.":
    "Des boîtes à burger anti-graisse qui protègent votre produit et mettent votre marque en avant.",
  "Hızlı servis ve zahmetsiz marka görünürlüğü için kompakt, yağ geçirmez patates kutuları.":
    "Des boîtes à frites compactes et anti-graisse, conçues pour un service rapide et une visibilité de marque sans effort.",
  "Dürüm, noodle ve pilav porsiyonları için tasarlanmış, ısıya dayanıklı iç yüzeyli katlanabilir döner kutuları.":
    "Des boîtes à döner pliables à intérieur résistant à la chaleur, conçues pour les wraps, les nouilles et les portions de riz.",
  "Pastéis de nata'yı güvenle yerinde tutan, yastık formlu zarif hamur işi kutuları.":
    "D’élégantes boîtes en forme de coussin qui maintiennent parfaitement en place vos pastéis de nata.",
  "Çorba, salata ve yemekler için özel kraft kaseler: sızdırmaz, kapak uyumlu ve tamamen markalanabilir.":
    "Des bols kraft sur mesure pour soupes, salades et plats : étanches, compatibles couvercle et entièrement personnalisables.",
  "Sokak lezzetleri, açık büfe ve paket servis için temiz, doğal görünümlü çok amaçlı kraft tabaklar.":
    "Des barquettes kraft polyvalentes à l’aspect naturel et soigné, pensées pour la street food, les buffets et la vente à emporter.",
  "Geniş körüklü tabanıyla fırın, perakende ve gıda servisi için ideal, dayanıklı kraft kağıt torbalar.":
    "Des sachets en papier kraft résistants à large fond à soufflet, parfaits pour les boulangeries, le commerce de détail et la restauration.",
  "Fırınlar, eczaneler ve hızlı servis gıda ambalajı için ideal, sade ve sapsız kraft torbalar.":
    "Des sachets kraft simples et sans poignées, idéaux pour les boulangeries, les pharmacies et l’emballage alimentaire en service rapide.",
  "Kesme saplı, dayanıklı ve modern görünümlü kraft alışveriş çantaları; perakende, gıda ve etkinlik ambalajı için ideal.":
    "Des sacs shopping kraft résistants au look moderne, avec poignée découpée : parfaits pour le retail, la restauration et l’événementiel.",
  "El burgusu kağıt ip saplı, premium hissiyatlı kraft çantalar; perakende, hediye ve etkinlik ambalajı için ideal.":
    "Des sacs kraft au toucher premium, à poignées en corde de papier torsadée à la main : idéals pour le retail, le cadeau et l’événementiel.",
  "Entegre düz saplı, ilk bakışta markanızı yükselten premium kraft çantalar.":
    "Des sacs kraft premium à poignée plate intégrée qui valorisent votre marque dès le premier regard.",
  "Depolama, sevkiyat ve lojistik için ağır hizmet tipi oluklu kraft koliler; özel ölçü, baskı ve taşıma sembolleriyle.":
    "Des caisses en carton kraft ondulé haute résistance pour le stockage, l’expédition et la logistique, avec dimensions, impression et pictogrammes de manutention sur mesure.",
  "Güvenli sevkiyat ve depolama için üretilmiş ağır hizmet tipi oluklu kutular.":
    "Des caisses ondulées haute résistance conçues pour une expédition et un stockage en toute sécurité.",
  "Şişe, kozmetik, cam ve kırılgan ürünler için hassas bölmeli, her kutu formatına uyan kraft separatörler.":
    "Des séparateurs kraft à compartiments ajustés, adaptés à tout format de boîte, pour bouteilles, cosmétiques, verrerie et produits fragiles.",

  // ---------- Ürün tanıtım metinleri ----------
  "Kraftora pizza kutuları gıdaya uygun kraft kartondan üretilir. Özel tam renkli baskı, ölçüye özel üretim ve havalandırma tasarımıyla pizzanız taze, markanız akılda kalır.":
    "Les boîtes à pizza Kraftora sont fabriquées en carton kraft de qualité alimentaire. Impression quadrichromie sur mesure, dimensions personnalisées et système d’aération : votre pizza reste fraîche et votre marque, mémorable.",
  "Kraftora hamburger kutuları gıdaya uygun kraft ve beyaz kartondan üretilir. Özel baskı seçenekleri ve ölçüye özel üretimle hamburgeriniz müşterinize kusursuz bir sunumla ulaşır.":
    "Les boîtes à burger Kraftora sont produites en carton kraft et blanc de qualité alimentaire. Grâce aux options d’impression personnalisée et aux dimensions sur mesure, votre burger arrive chez le client dans une présentation impeccable.",
  "Kraftora patates kutuları, patatesinizi sıcak ve çıtır tutmak üzere gıdaya uygun kraft kartondan üretilir. Özel baskı ve ölçü seçenekleriyle her servis, müşterilerinizin yanında taşıdığı bir marka fırsatına dönüşür.":
    "Les boîtes à frites Kraftora sont façonnées en carton kraft de qualité alimentaire pour garder vos frites chaudes et croustillantes. Avec l’impression et les dimensions sur mesure, chaque portion devient une opportunité de marque que vos clients emportent avec eux.",
  "Kraftora döner kutuları, kolay açılır ve yeniden kapanabilir üst kapaklı, gıdaya uygun kartondan üretilir. Döner, dürüm, noodle ve pilav porsiyonları için ideal olan kutular, her birinde yer alan özel baskıyla marka görünürlüğünüzü artırır.":
    "Les boîtes à döner Kraftora sont fabriquées en carton de qualité alimentaire avec un rabat supérieur facile à ouvrir et refermable. Idéales pour le döner, les wraps, les nouilles et les portions de riz, elles renforcent votre visibilité grâce à l’impression personnalisée présente sur chaque boîte.",
  "Kraftora nata kutuları, pastéis de nata'larınızı güvenle yerinde tutan özgün yastık formlu bir yapıyla tasarlanmıştır. Özel baskı seçenekli, gıdaya uygun kartondan üretilen kutular her servisi zarif bir marka vitrinine dönüştürür.":
    "Les boîtes à nata Kraftora sont dotées d’une structure originale en forme de coussin qui maintient vos pastéis de nata parfaitement en place. Réalisées en carton de qualité alimentaire avec options d’impression personnalisée, elles transforment chaque service en une élégante vitrine de votre marque.",
  "Kraftora kraft kağıt kaseler, sıcak ve soğuk yemekler için gıda güvenliği standartlarına uygun üretilir. Özel baskı ve ölçü seçenekleriyle salata, çorba, makarna ve bowl menülerinizi şık biçimde sunun.":
    "Les bols en papier kraft Kraftora sont produits conformément aux normes de sécurité alimentaire, pour les plats chauds comme froids. Avec les options d’impression et de dimensions sur mesure, présentez avec élégance vos salades, soupes, pâtes et bowls.",
  "Kraftora kraft tabaklar atıştırmalıklardan ana yemeklere kadar çok yönlü kullanım sunar. Gıdaya uygun malzemelerden üretilen tabaklarımız, markanıza özel baskı ve ölçü seçenekleriyle servis noktasında öne çıkar.":
    "Les barquettes kraft Kraftora offrent un usage polyvalent, des en-cas aux plats principaux. Fabriquées à partir de matériaux de qualité alimentaire, elles se distinguent au point de service grâce à l’impression et aux dimensions adaptées à votre marque.",
  "Kraftora kraft kağıt torbalar, güvenli katlanır kapaklı, yüksek mukavemetli ve gıdaya uygun kraft kağıttan üretilir. Özel baskı ve etiket mühür seçenekleri, sade bir torbayı fırınlar, kafeler ve perakende mağazaları için güçlü bir marka aracına dönüştürür.":
    "Les sachets en papier kraft Kraftora sont fabriqués en papier kraft haute résistance de qualité alimentaire, avec un rabat de fermeture sécurisé. Les options d’impression personnalisée et de sceau autocollant transforment un simple sachet en un puissant outil de marque pour boulangeries, cafés et boutiques.",
  "Kraftora düz kağıt torbalar; fırınlar, eczaneler, perakende mağazaları ve gıda servisi için temiz ve minimal bir ambalaj çözümü sunar. Özel baskı seçenekli, gıdaya uygun kraft kağıttan üretilen torbalar sade ve işlevsel bir formatta zahmetsiz markalaşma sağlar.":
    "Les sachets plats Kraftora offrent une solution d’emballage épurée et minimaliste pour les boulangeries, pharmacies, commerces et la restauration. Fabriqués en papier kraft de qualité alimentaire avec options d’impression personnalisée, ils permettent un marquage sans effort dans un format simple et fonctionnel.",
  "Kraftora kağıt alışveriş çantaları dayanıklılığı şık ve modern bir görünümle birleştirir. Rahat taşıma için kesme saplı, yüksek mukavemetli kraft kağıttan üretilen çantalar perakende, gıda servisi ve etkinlik ambalajı için mükemmeldir. Özel baskı her çantayı markanız için yürüyen bir reklam panosuna dönüştürür.":
    "Les sacs shopping en papier Kraftora allient résistance et esthétique moderne. Fabriqués en papier kraft haute résistance avec une poignée découpée pour un portage confortable, ils sont parfaits pour le retail, la restauration et l’événementiel. L’impression personnalisée transforme chaque sac en panneau publicitaire ambulant pour votre marque.",
  "Kraftora burgu saplı kağıt çantalar, premium bir his için el burgusu kağıt ip saplı, yüksek mukavemetli kraft kağıttan üretilir. Tüm yüzeye özel baskı markanızı maksimum etkiyle sergilemenizi sağlar; perakende, hediye ve etkinlik ambalajı için idealdir.":
    "Les sacs à poignées torsadées Kraftora sont réalisés en papier kraft haute résistance, avec des poignées en corde de papier torsadée à la main pour un rendu premium. L’impression personnalisée sur toute la surface met votre marque en valeur avec un impact maximal : idéal pour le retail, le cadeau et l’événementiel.",
  "Kraftora düz saplı kağıt çantalar, şık ve modern bir görünüm için entegre kesme saplı premium kraft kağıttan üretilir. Özel tam renkli baskı ve çeşitli boyut seçenekleriyle perakende, gıda servisi ve promosyon ambalajında markanızı ilk bakışta yükseltir.":
    "Les sacs à poignées plates Kraftora sont fabriqués en papier kraft premium avec une poignée découpée intégrée, pour un rendu élégant et moderne. Impression quadrichromie sur mesure et large choix de tailles : de quoi valoriser votre marque dès le premier regard, en retail, en restauration et en emballage promotionnel.",
  "Kraftora e-ticaret kutuları, kapatmak için bant veya yapıştırıcı gerektirmeyen kendinden kilitli kapaklı oluklu kraft kartondan üretilir. Hem dış hem iç yüzeye uygulanan özel baskı, her teslimatı müşterileriniz için unutulmaz bir markalı kutu açma deneyimine dönüştürür.":
    "Les boîtes e-commerce Kraftora sont construites en carton kraft ondulé avec un couvercle autobloquant qui ne nécessite ni ruban adhésif ni colle. L’impression personnalisée, à l’extérieur comme à l’intérieur, transforme chaque livraison en une expérience de déballage mémorable aux couleurs de votre marque.",
  "Kraftora koliler, her sektörde depolama, sevkiyat ve lojistik ihtiyaçlarını karşılamak üzere ağır hizmet tipi oluklu kraft mukavvadan üretilir. Özel ölçü, baskı ve taşıma sembolleri gönderilerinizin güvenli, düzenli ve markanıza uygun biçimde ulaşmasını sağlar.":
    "Les caisses Kraftora sont fabriquées en carton kraft ondulé haute résistance, conçues pour répondre aux besoins de stockage, d’expédition et de logistique de tous les secteurs. Dimensions, impression et pictogrammes de manutention sur mesure garantissent des expéditions sûres, ordonnées et fidèles à votre marque.",
  "Kraftora kraft kağıt separatörler, depolama ve taşıma sırasında ürünlerin birbirine çarpmasını önleyen bağımsız bölmeler oluşturmak üzere dayanıklı kartondan hassas kesimle üretilir. Izgara boyutu ve hücre ölçüleri tamamen özelleştirilebilir; şişe, kozmetik, cam eşya ve kırılgan ürünler için her kutu formatına kusursuz uyum sağlar.":
    "Les séparateurs en carton kraft Kraftora sont découpés avec précision dans un carton résistant afin de créer des compartiments individuels qui empêchent les produits de s’entrechoquer pendant le stockage et le transport. Entièrement personnalisables en taille de grille et en dimensions d’alvéoles, ils s’adaptent parfaitement à tout format de boîte pour bouteilles, cosmétiques, verrerie et produits fragiles.",

  // ---------- Ürün özellik başlıkları ve metinleri ----------
  "Tasarımla Gelen Tazelik": "La fraîcheur par le design",
  "Pizza kutularımız teslimat ve istifleme sırasında formunu koruyan dayanıklı bir yapıya sahiptir. Entegre havalandırma sistemi nem birikimini önleyerek hamurun fırından kapıya kadar çıtır kalmasını sağlar.":
    "Nos boîtes à pizza présentent une structure résistante qui conserve sa forme pendant la livraison et l’empilage. Le système d’aération intégré empêche l’accumulation d’humidité et garde la pâte croustillante du four jusqu’à la porte.",
  "Doğası Gereği Yeşil": "Écologique par nature",
  "%100 geri dönüştürülebilir ve biyolojik olarak çözünebilir malzemelerden üretilen pizza kutularımız, çevreye duyarlı bir marka inşa etmenize yardımcı olur. Sağlam yapısı paket servis, yerinde tüketim ve kurye teslimatında güvenilir performans sunar.":
    "Fabriquées à partir de matériaux 100 % recyclables et biodégradables, nos boîtes à pizza vous aident à construire une marque respectueuse de l’environnement. Leur construction robuste assure des performances fiables en vente à emporter, sur place et en livraison.",
  "Temiz ve Yağ Geçirmez": "Propre et anti-graisse",
  "Yağa ve neme dayanıklı iç kaplamasıyla hamburger kutularımız ürününüzü korurken dış yüzeyi temiz ve düzgün tutar. Kolay kilit kapak sistemi hem mutfakta hem de servis alanında pratik kullanım sağlar.":
    "Dotées d’un revêtement intérieur résistant à la graisse et à l’humidité, nos boîtes à burger protègent votre produit tout en gardant l’extérieur propre et net. Le système de fermeture à clip garantit une utilisation pratique en cuisine comme en salle.",
  "Çevre Dostu ve Dayanıklı": "Écologique et résistant",
  "%100 geri dönüştürülebilir malzemelerden üretilen hamburger kutularımız, çevreye duyarlı bir marka imajı yansıtmanıza yardımcı olur. Sağlam yapısı teslimat ve kurye taşımacılığında dayanıklılığını korur; müşterinize profesyonel bir deneyim sunar.":
    "Fabriquées à partir de matériaux 100 % recyclables, nos boîtes à burger vous aident à projeter une image de marque responsable. Leur construction solide résiste à la livraison et au transport par coursier, offrant à votre client une expérience professionnelle.",
  "Yağ Geçirmez Koruma": "Protection anti-graisse",
  "Yağa dayanıklı iç kaplamasıyla patates kutularımız yağın dışarı sızmasını önlerken temiz ve profesyonel bir dış görünüm sağlar. Açık üst tasarımı kolay erişim sunar ve servisinize premium bir sokak lezzeti estetiği katar.":
    "Grâce à leur revêtement intérieur anti-graisse, nos boîtes à frites empêchent l’huile de traverser tout en conservant un extérieur propre et professionnel. Le design à ouverture supérieure facilite l’accès et apporte à votre service une esthétique street food haut de gamme.",
  "Sürdürülebilir Hızlı Servis": "Service rapide et durable",
  "%100 geri dönüştürülebilir malzemelerden üretilen patates kutularımız kaliteden ödün vermeden sürdürülebilirlik hedeflerinizi destekler. Kompakt, iç içe geçebilir yapısı depolama alanını en aza indirir ve yoğun saatlerde yüksek hacimli servisi hızlandırır.":
    "Fabriquées à partir de matériaux 100 % recyclables, nos boîtes à frites soutiennent vos objectifs de durabilité sans compromis sur la qualité. Leur structure compacte et emboîtable réduit l’encombrement au stockage et fluidifie le service à fort volume aux heures de pointe.",
  "Güvenli Teslimat İçin Kapalı Yapı": "Fermeture sûre pour la livraison",
  "Yağa ve ısıya dayanıklı iç kaplamasıyla döner kutularımız paket servis ve kurye teslimatında temiz bir deneyim sunar. Metal tel kilit mekanizması kutuyu taşıma boyunca güvenle kapalı tutar.":
    "Dotées d’un revêtement intérieur résistant à la graisse et à la chaleur, nos boîtes à döner assurent une expérience propre en vente à emporter et en livraison. Le verrou métallique maintient la boîte fermée en toute sécurité pendant tout le transport.",
  "Kompakt ve Çevreye Duyarlı": "Compact et responsable",
  "%100 geri dönüştürülebilir malzemelerden üretilen döner kutularımız çevre dostu marka imajınızı güçlendirir. Kompakt, iç içe geçebilir tasarımı depolama alanından tasarruf sağlar; farklı porsiyon boyutları her operasyona uygun seçenek sunar.":
    "Fabriquées à partir de matériaux 100 % recyclables, nos boîtes à döner renforcent votre image de marque écologique. Leur design compact et emboîtable économise l’espace de stockage, et les différentes tailles de portion conviennent à chaque type d’exploitation.",
  "Hassas Tutuşlu Sunum": "Maintien précis et mise en valeur",
  "Hassas kesimli tutucu yuvalar her nata'yı tam yerinde tutar; hareketi önler ve narin hamur işini taşıma sırasında korur. Açık üst sergileme tasarımı müşterilerinizin ürünü anında görmesini sağlayarak al-git deneyimini güçlendirir.":
    "Les alvéoles découpées avec précision maintiennent chaque nata parfaitement en place, évitant tout mouvement et préservant la délicatesse de la pâtisserie pendant le transport. Le design à dessus ouvert permet à vos clients de voir le produit immédiatement et renforce l’expérience de vente à emporter.",
  "Sürdürülebilir ve Yerden Tasarruflu": "Durable et peu encombrant",
  "%100 geri dönüştürülebilir malzemelerden üretilen nata kutularımız sürdürülebilirliği zarafetle birleştirir. Düz sevk edilen katlanabilir yapısı depolama alanından tasarruf sağlar ve hızlı kurulum sunar; yoğun fırınlar, kafeler ve paket servis tezgâhları için idealdir.":
    "Fabriquées à partir de matériaux 100 % recyclables, nos boîtes à nata allient durabilité et élégance. Leur structure pliable, livrée à plat, économise l’espace de stockage et se monte rapidement : idéales pour les boulangeries, cafés et comptoirs à emporter très fréquentés.",
  "Sızdırmaz Performans": "Performance étanche",
  "Sızdırmaz iç kaplamasıyla kraft kaselerimiz sulu yemekler için idealdir. Ergonomik formu rahat bir tutuş sağlarken kapak uyumlu tasarımı paket serviste dökülmeyi önler.":
    "Avec leur revêtement intérieur étanche, nos bols kraft sont parfaits pour les plats liquides. Leur forme ergonomique offre une bonne prise en main, et leur compatibilité avec les couvercles évite tout renversement en vente à emporter.",
  "Hafif ve İstiflenebilir": "Léger et empilable",
  "Premium bir görünüm sunan doğal kraft dokusuyla kağıt kaselerimiz %100 geri dönüştürülebilir malzemeden üretilir. Mikrodalgaya uygun ve istiflenebilir tasarımıyla hem mutfakta hem de depolamada pratiklik sağlar.":
    "Avec leur finition kraft naturelle au rendu premium, nos bols en papier sont fabriqués à partir de matériaux 100 % recyclables. Compatibles micro-ondes et empilables, ils apportent une réelle praticité en cuisine comme au stockage.",
  "Her Menüye Uygun": "Adapté à toutes les cartes",
  "Yağa ve neme dayanıklı iç kaplamasıyla kraft tabaklarımız soslu ve yağlı yiyecekler için mükemmeldir. Açık büfelere, festivallere, sokak lezzeti tezgâhlarına ve paket servise zahmetsizce uyum sağlar.":
    "Avec leur revêtement intérieur résistant à la graisse et à l’humidité, nos barquettes kraft sont parfaites pour les plats en sauce et gras. Elles s’adaptent sans effort aux buffets, festivals, stands de street food et à la vente à emporter.",
  "Doğal Görünüm, Pratik Kullanım": "Aspect naturel, usage pratique",
  "Doğal kraft dokusuyla modern ve zarif bir sunum sunan tabaklarımız %100 geri dönüştürülebilir malzemeden üretilir. Hafif ve iç içe geçebilir yapısı minimum depolama alanı kaplar ve günlük operasyonu kolaylaştırır.":
    "Offrant une présentation moderne et élégante grâce à leur texture kraft naturelle, nos barquettes sont fabriquées à partir de matériaux 100 % recyclables. Légères et emboîtables, elles occupent un minimum d’espace de stockage et simplifient les opérations quotidiennes.",
  "Dengeli ve Güçlendirilmiş": "Stable et renforcé",
  "Denge için geniş körüklü tabanla tasarlanan kraft kağıt torbalarımız dolduğunda dik durur; ekmek, hamur işi, sandviç ve paket siparişler için mükemmeldir. Güçlendirilmiş taban, ağır içeriklerde bile güvenilir performans sağlar.":
    "Conçus avec un large fond à soufflet pour la stabilité, nos sachets en papier kraft tiennent debout une fois remplis : parfaits pour le pain, les viennoiseries, les sandwichs et les commandes à emporter. Le fond renforcé assure une tenue fiable, même avec des contenus lourds.",
  "Çevre Dostu ve İstiflenebilir": "Écologique et empilable",
  "%100 geri dönüştürülebilir ve biyolojik olarak çözünebilir kraft kağıttan üretilen torbalarımız işletmenizin çevresel ayak izini azaltmasına yardımcı olur. İsteğe bağlı yağ geçirmez astarlı farklı boyut seçenekleriyle her ürüne ve servis tarzına uyum sağlar.":
    "Fabriqués en papier kraft 100 % recyclable et biodégradable, nos sachets aident votre entreprise à réduire son empreinte environnementale. Disponibles en plusieurs tailles avec doublure anti-graisse en option, ils s’adaptent à chaque produit et à chaque style de service.",
  "Hızlı Doldurma, Kolay Kullanım": "Remplissage rapide, usage simple",
  "Hızlı doldurma ve kolay erişim için açık üst tasarımıyla sapsız kağıt torbalarımız yüksek hacimli operasyonlarda hız için üretilmiştir. Geniş yan körük, hacimli ürünlere yer açarken torbanın paketleme sırasında dik ve dengeli kalmasını sağlar.":
    "Avec leur dessus ouvert pour un remplissage rapide et un accès facile, nos sachets sans poignées sont pensés pour la vitesse dans les opérations à fort volume. Le large soufflet latéral s’élargit pour accueillir des articles volumineux tout en gardant le sachet droit et stable pendant le conditionnement.",
  "Sürdürülebilir ve Verimli": "Durable et efficace",
  "%100 geri dönüştürülebilir ve biyolojik olarak çözünebilir kraft kağıttan üretilen düz torbalarımız sürdürülebilirlik taahhütlerinizle uyumludur. Hafif ve istiflenerek kolayca depolanan torbalar, gıda uygulamaları için isteğe bağlı yağ geçirmez astarla farklı boyutlarda sunulur.":
    "Fabriqués en papier kraft 100 % recyclable et biodégradable, nos sachets plats s’inscrivent dans vos engagements de durabilité. Légers et faciles à stocker empilés, ils sont proposés en plusieurs tailles avec doublure anti-graisse en option pour les usages alimentaires.",
  "Güçlü ve Rahat Taşıma": "Portage solide et confortable",
  "Tek parça kesme sap, yapıştırma veya zımba gerektirmeden rahat ve güvenli bir tutuş sunar; temiz ve kesintisiz bir tasarım ortaya çıkar. Güçlendirilmiş körüklü taban çantayı dik ve dengeli tutar, taşıma sırasında ağır ürünleri güvenle destekler.":
    "La poignée découpée d’une seule pièce offre une prise confortable et sûre, sans collage ni agrafage, pour un design net et continu. Le fond à soufflet renforcé maintient le sac droit et stable et supporte sans souci les articles lourds pendant le transport.",
  "Ölçeklenebilir ve Geri Dönüştürülebilir": "Évolutif et recyclable",
  "%100 geri dönüştürülebilir ve biyolojik olarak çözünebilir kraft kağıttan üretilen alışveriş çantalarımız sürdürülebilirlik taahhüdünüzü yansıtır. Düz katlanan tasarımı verimli depolama ve sevkiyat sağlarken farklı boyutlar ve isteğe bağlı selefon her ürün ve her etkinlik için doğru seçeneği sunar.":
    "Fabriqués en papier kraft 100 % recyclable et biodégradable, nos sacs shopping reflètent votre engagement en faveur de la durabilité. Leur pliage à plat permet un stockage et une expédition efficaces, tandis que le choix de tailles et le pelliculage en option garantissent la bonne solution pour chaque produit et chaque occasion.",
  "Rahat ve Güvenli Tutuş": "Prise confortable et sûre",
  "Güçlendirilmiş burgu saplar çantanın içine güvenle sabitlenir; ağır içeriklerde bile rahat ve güvenilir bir tutuş sağlar. Geniş körüklü taban çantaya raftan müşteriye kadar formunu koruyan dengeli, kendi başına duran bir yapı kazandırır.":
    "Les poignées torsadées renforcées sont solidement ancrées à l’intérieur du sac, offrant une prise confortable et fiable même avec des contenus lourds. Le large fond à soufflet donne au sac une structure stable et autoportante qui conserve sa forme du rayon jusqu’au client.",
  "Zarafet ve Çevre Sorumluluğu": "Élégance et responsabilité",
  "%100 geri dönüştürülebilir ve biyolojik olarak çözünebilir kraft kağıttan üretilen burgu saplı çantalarımız zarafeti çevre sorumluluğuyla birleştirir. Geniş boyut ve gramaj seçenekleriyle butik alışveriş çantalarından büyük perakende taşıyıcılara kadar her ihtiyaca uyar.":
    "Fabriqués en papier kraft 100 % recyclable et biodégradable, nos sacs à poignées torsadées allient élégance et responsabilité environnementale. Disponibles dans un large éventail de tailles et de grammages, ils conviennent aussi bien aux sacs de boutique qu’aux grands sacs de distribution.",
  "Tek Parça Kesintisiz Tutuş": "Prise d’un seul tenant",
  "Entegre kesme sap, ek bağlantı gerektirmeden güvenli ve rahat bir tutuş sağlar; tek parça kesintisiz bir yapı oluşturur. Güçlendirilmiş taban körüğü çantanın formunu korumasını ve taşıma sırasında ağır içerikleri desteklemesini sağlar.":
    "La poignée découpée intégrée assure une prise sûre et confortable sans aucun élément rapporté, pour une construction d’une seule pièce, sans rupture. Le soufflet de fond renforcé permet au sac de conserver sa forme et de supporter des contenus lourds pendant le transport.",
  "Sürdürülebilir ve Çok Yönlü": "Durable et polyvalent",
  "%100 geri dönüştürülebilir ve biyolojik olarak çözünebilir kraft kağıttan üretilen düz saplı çantalarımız sürdürülebilirlik taahhüdünüzü gösterir. Düz katlanan yapısı toplu depolama ve sevkiyatta verimlilik sağlarken isteğe bağlı selefon ve yağ geçirmez astar kullanımını gıda ve gıda dışı uygulamalara genişletir.":
    "Fabriqués en papier kraft 100 % recyclable et biodégradable, nos sacs à poignées plates témoignent de votre engagement en faveur de la durabilité. Leur pliage à plat garantit un stockage et une expédition en volume efficaces, tandis que le pelliculage et la doublure anti-graisse en option étendent leur usage aux applications alimentaires et non alimentaires.",
  "Sevkiyata Hazır Yapı": "Construction prête à expédier",
  "Kurye ve posta ağlarının zorlu koşullarına dayanacak şekilde tasarlanan e-ticaret kutularımız çift duvarlı oluklu kenarlara ve ezilmeye ve sıkışmaya direnen sert bir yapıya sahiptir. Sıkı geçmeli kapak, ek bir kapatma olmaksızın içeriği elleçleme ve taşıma boyunca güvende tutar.":
    "Conçues pour résister aux contraintes des réseaux de messagerie et postaux, nos boîtes e-commerce présentent des bords en carton ondulé double cannelure et une structure rigide qui résiste à l’écrasement et à la compression. La fermeture à emboîtement serré protège le contenu pendant toute la manutention et le transport, sans scellage supplémentaire.",
  "Düz Sevkiyat ve Geri Dönüştürülebilir": "Livré à plat et recyclable",
  "%100 geri dönüştürülebilir kraft kartondan üretilen e-ticaret kutularımız profesyonel düzeyde koruma sunarken sürdürülebilirlik hedeflerinizi destekler. Düz sevk edilen tasarımı depo alanını ve nakliye maliyetlerini azaltır; kozmetikten elektroniğe her ürüne uygun geniş boyut seçenekleri sunar.":
    "Fabriquées en carton kraft 100 % recyclable, nos boîtes e-commerce soutiennent vos objectifs de durabilité tout en offrant une protection de niveau professionnel. Leur conception livrée à plat réduit l’encombrement en entrepôt et les coûts de transport, avec un large choix de tailles adaptées à tous les produits, des cosmétiques à l’électronique.",
  "Ağır Hizmet Koruması": "Protection haute résistance",
  "Çok katmanlı oluklu duvarlarla üretilen kolilerimiz depolama ve uzun mesafe taşımacılıkta üstün ezilme direnci ve istifleme mukavemeti sunar. Güçlendirilmiş kapak kilitleri tüm tedarik zinciri boyunca basınç altında sağlam kalan güvenli bir kapanış sağlar.":
    "Construites avec des parois ondulées multicouches, nos caisses offrent une résistance à l’écrasement et une tenue à l’empilage supérieures pour l’entreposage et le transport longue distance. Les rabats de fermeture renforcés assurent une fermeture sûre qui tient sous pression tout au long de la chaîne d’approvisionnement.",
  "Sürdürülebilir ve Sağlam": "Durable et robuste",
  "%100 geri dönüştürülebilir oluklu krafttan üretilen kolilerimiz her yük gereksinimine uygun geniş ölçü ve duvar kalınlığı seçenekleriyle sunulur. Düz sevkiyat depolama maliyetlerini düşük tutar ve paketleme hattında hızlı kurulum sağlar.":
    "Fabriquées en carton kraft ondulé 100 % recyclable, nos caisses sont disponibles dans une gamme complète de dimensions et d’épaisseurs de cannelure pour répondre à toute exigence de charge. La livraison à plat maintient les coûts de stockage bas et permet un montage rapide sur la ligne de conditionnement.",
  "Darbe Emici Izgara": "Grille absorbant les chocs",
  "Geçmeli yuva tasarımı alet gerektirmeden hızlı kurulum sağlar ve darbeyi emip ağırlığı eşit dağıtan sert bir ızgara yapısı oluşturur. Her hücre ürünü tek tek izole edip yastıklayarak tedarik zinciri boyunca çizik, kırık ve hasarı ortadan kaldırır.":
    "Le système d’alvéoles emboîtables permet un montage rapide sans outil et forme une grille rigide qui absorbe les chocs et répartit uniformément le poids. Chaque alvéole isole et amortit individuellement le produit, éliminant rayures, éclats et casse tout au long de la chaîne d’approvisionnement.",
  "Düz Sevkiyat ve Markalanabilir": "Livré à plat et personnalisable",
  "%100 geri dönüştürülebilir kraft kartondan üretilen separatörlerimiz plastik ve köpük dolgulara sürdürülebilir bir alternatif sunar. Düz sevk edilen tasarımı verimli taşıma ve depolama sağlar; dış kutuya uygulanan özel baskı işlevsel ambalajı markalı bir kutu açma deneyimine dönüştürür.":
    "Fabriqués en carton kraft 100 % recyclable, nos séparateurs offrent une alternative durable aux calages en plastique et en mousse. Leur conception livrée à plat permet un transport et un stockage efficaces, et l’impression personnalisée sur la boîte extérieure transforme un emballage fonctionnel en une expérience de déballage à votre marque.",

  // ---------- Diğer ----------
  "%100 Çevre Dostu": "100 % écologique",
  "Kraft kağıdımız %100 geri dönüştürülebilir ve biyolojik olarak çözünür; çevresel ayak izinizi azaltmanıza yardımcı olur.":
    "Notre papier kraft est 100 % recyclable et biodégradable : il vous aide à réduire votre empreinte environnementale.",
  "**360° Kraftora yaklaşımımız**, ürünlerinizin ve işletmenizin ihtiyaç duyduğu en iyi ambalaj çözümlerini oluşturmak ve **tam ambalaj başarısına** ulaşmak için gereken tüm hizmetleri sunar.":
    "**Notre approche Kraftora 360°** réunit tous les services nécessaires pour concevoir les meilleures solutions d’emballage dont vos produits et votre entreprise ont besoin et atteindre une **réussite d’emballage totale**.",
};
