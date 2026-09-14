const animeDB = {
    JJK: {
        common: [
            { name: "Shoko", img: "jjk/shoko.jpg" }, { name: "Utahime", img: "jjk/utahime.jpg" },
            { name: "Miwa", img: "jjk/miwa.jpg" }, { name: "Mai", img: "jjk/mai.jpg" },
            { name: "Momo", img: "jjk/momo.jpg" }, { name: "Ranta", img: "jjk/ranta.jpg" },
            { name: "Haba", img: "jjk/haba.jpg" }, { name: "Hanyu", img: "jjk/hanyu.jpg" },
            { name: "Remi", img: "jjk/Remi.jpg" }, { name: "Riko", img: "jjk/riko.jpg" },
            { name: "Ui Ui", img: "jjk/ui ui.jpg" }, { name: "Haruta", img: "jjk/haruta.jpg" },
            { name: "Jiro", img: "jjk/jiro.jpg" }, { name: "Junpei", img: "jjk/junpei.jpg" },
            { name: "Eso", img: "jjk/eso.jpg" }, { name: "Kechizu", img: "jjk/kechizu.jpg" },
            { name: "Finger Bearer", img: "jjk/finger.jpg" }, { name: "Ogami", img: "jjk/ogami.jpg" }
        ],
        rare: [
            { name: "Angel", img: "jjk/angel.jpg" }, { name: "Nobara", img: "jjk/nobara.jpg" },
            { name: "Kirara", img: "jjk/kirara.jpg" }, { name: "Panda", img: "jjk/panda.jpg" },
            { name: "Inumaki Toge", img: "jjk/toge.jpg", trait: "speech", tip: "🗣️ Cursed Speech — can freeze enemies" }, { name: "Masamichi Yaga", img: "jjk/masamichi.jpg" },
            { name: "Kusakabe", img: "jjk/kusakabe.jpg" }, { name: "Gakuganji", img: "jjk/gakuganji.jpg" },
            { name: "Mechamaru", img: "jjk/mechamaru.jpg" }, { name: "Kamo", img: "jjk/kamo.jpg" },
            { name: "Miguel", img: "jjk/miguel.jpg" }, { name: "Hanami", img: "jjk/hanami.jpg", trait: "roots", rooted: false, tip: "🌿 Flower Field — roots adjacent tiles" },
            { name: "Takaba", img: "jjk/takaba.jpg" }, { name: "Ino", img: "jjk/ino.jpg" },
            { name: "Iori", img: "jjk/iori.jpg" }, { name: "Kurourushi", img: "jjk/Kurourushi.jpg" }
        ],
        epic: [
            { name: "Itadori", img: "jjk/itadori.jpg" }, { name: "Megumi", img: "jjk/megumi.jpg", trait: "mahoraga", tip: "🐍 Ten Shadows — can summon Mahoraga" },
            { name: "Todo", img: "jjk/todo.jpg", trait: "boogie", charges: 3, tip: "🤜 Boogie Woogie — swap positions (3 charges)" }, { name: "Uraume", img: "jjk/uraume.jpg" },
            { name: "Nanami", img: "jjk/nanami.jpg" }, { name: "Mei Mei", img: "jjk/mei mei.jpg", trait: "sniper", tip: "🐦 Bird Strike — can attack non-adjacent" },
            { name: "Naobito", img: "jjk/naobito.jpg" }, { name: "Naoya", img: "jjk/naoya.jpg" },
            { name: "Reggie", img: "jjk/reggie.jpg" }, { name: "Ryu", img: "jjk/ryu.jpg" },
            { name: "Uro", img: "jjk/uro.jpg" }, { name: "Dagon", img: "jjk/Dagon.jpg" },
            { name: "Jogo", img: "jjk/jogo.jpg" }, { name: "Mahito", img: "jjk/mahito.jpg" },
            { name: "Choso", img: "jjk/choso.jpg" }, { name: "Geto", img: "jjk/geto.jpg" }
        ],
        legendary: [
            { name: "Hakari", img: "jjk/hakari.jpg", tier: "legendary" }, { name: "Kashimo", img: "jjk/kashimo.jpg", tier: "legendary" },
            { name: "Higuruma", img: "jjk/higuruma.jpg", tier: "legendary" }, { name: "Yuki", img: "jjk/yuki.jpg", tier: "legendary" },
            { name: "Kenjaku", img: "jjk/kenjaku.jpg", tier: "legendary" }, { name: "Yorozu", img: "jjk/yarozu.jpg", tier: "legendary" },
            { name: "Toji", img: "jjk/toji.jpg", tier: "legendary" }, { name: "Maki", img: "jjk/maki.jpg", tier: "legendary" },
            { name: "Yuta", img: "jjk/yuta.jpg", tier: "legendary" }, { name: "Mahoraga", img: "jjk/Mahoraga.jpg", tier: "legendary" }
        ],
        ultra: [
            { name: "Sukuna", img: "jjk/sukuna.jpg", tier: "ultra" },
            { name: "Gojo", img: "jjk/gojo.jpg", tier: "ultra" }
        ]
    },
    Naruto: {
        common: [
            { name: "Iruka", img: "naruto2/iruka.jpg" }, { name: "Hanabi", img: "naruto2/hanabi.jpg" },
            { name: "Ebisu", img: "naruto2/ebisu.jpg" }, { name: "Baki", img: "naruto2/baki.jpg" },
            { name: "Konohamaru", img: "naruto2/konohamaru.jpg" }, { name: "Aoba", img: "naruto2/aoba.jpg" },
            { name: "Moegi", img: "naruto2/moegi.jpg" }, { name: "Kotetsu", img: "naruto2/kotetsu.jpg" },
            { name: "Ten Ten", img: "naruto2/ten ten.jpg" }, { name: "Ao", img: "naruto2/ao.jpg" },
            { name: "Anko", img: "naruto2/anko.jpg" }, { name: "Cee", img: "naruto2/cee.jpg" },
            { name: "Haku", img: "naruto2/haku.jpg" }, { name: "Choza", img: "naruto2/choza.jpg" },
            { name: "Shizune", img: "naruto2/shizune.jpg" }, { name: "Kin Tsuchi", img: "naruto2/kin.jpg" },
            { name: "Kurenai", img: "naruto2/kurenai.jpg" }, { name: "Guren", img: "naruto2/guren.jpg" },
            { name: "Genma", img: "naruto2/genma.jpg" }, { name: "Torune", img: "naruto2/torume.jpg" },
            { name: "Foo", img: "naruto2/fu.jpg" }, { name: "Dosu Kinuta", img: "naruto2/dosu.jpg" },
            { name: "Mizuki", img: "naruto2/mizuki.jpg" }, { name: "Dan Kato", img: "naruto2/dan.jpg" },
            { name: "Tayuya", img: "naruto2/tayuya.jpg" }, { name: "Karui", img: "naruto2/karui.jpg" },
            { name: "Shikaku", img: "naruto2/shikaku.jpg" }, { name: "Sakon/Ukon", img: "naruto2/akon and ukon.jpg" },
            { name: "Kidomaru", img: "naruto2/kidomaru.jpg" }, { name: "Jirobo", img: "naruto2/jirobo.jpg" },
            { name: "Omoi", img: "naruto2/omoi.jpg" }, { name: "Kimmimaro", img: "naruto2/kimmimaro.jpg" },
            { name: "Inoichi", img: "naruto2/inoichi.jpg" }, { name: "Zaku", img: "naruto2/zaku.jpg" }, 
            { name: "Hiashi Hyuga", img: "naruto2/hyuga.jpg" }, { name: "Mifune", img: "naruto2/mifune.jpg" }
        ],
        rare: [
            { name: "Ino", img: "naruto/ino.jpg" }, { name: "Temari", img: "naruto/temari.jpg" },
            { name: "Choji", img: "naruto/choji.jpg" }, { name: "Zabuza", img: "naruto/zabuza.jpg" },
            { name: "Asuma", img: "naruto/asuma.jpg" }, { name: "Kankuro", img: "naruto/kankuro.jpg" },
            { name: "Hinata", img: "naruto/hinata.jpg" }, { name: "Karin", img: "naruto/karin.jpg" },
            { name: "Kiba", img: "naruto/kiba.jpg" }, { name: "Suigetsu", img: "naruto/suigetsu.jpg" },
            { name: "Shino", img: "naruto/shino.jpg" }, { name: "Rin", img: "naruto/rin.jpg" },
            { name: "Neji", img: "naruto/neji.jpg" }, { name: "Yagura", img: "naruto/yagura.jpg" },
            { name: "Yugito", img: "naruto/yugito.jpg" }, { name: "Gaara", img: "naruto/gaara.jpg" },
            { name: "Chiyo", img: "naruto/chiyu.jpg" }, { name: "Utakata", img: "naruto/utakata.jpg" },
            { name: "Chojuro", img: "naruto/chojuro.jpg" }, { name: "Fuu", img: "naruto/fuu.jpg" },
            { name: "Roshi", img: "naruto/roshi.jpg" }, { name: "Hann", img: "naruto/han.jpg" },
            { name: "Juzo BIwa", img: "naruto/juzo.jpg" }, { name: "Might Dai", img: "naruto/mightdai.jpg" },
            { name: "Rock Lee", img: "naruto/rocklee.jpg" }, { name: "Kurotsuchi", img: "naruto/kurotsuchi.jpg" },
            { name: "Sasori", img: "naruto/sasori.jpg" }, { name: "Hidan", img: "naruto/hidan.jpg" },
            { name: "Yamato", img: "naruto/yamato.jpg" }, { name: "Sai", img: "naruto/sai.jpg" },
            { name: "Kushina", img: "naruto/kushina.jpg" }, { name: "Darui", img: "naruto/darui.jpg" },
            { name: "Mei", img: "naruto/mei.jpg" }, { name: "Deidara", img: "naruto/deidara.jpg" },
            { name: "Kinkaku", img: "naruto/kinkaku.jpg" }, { name: "Ginkaku", img: "naruto/ginkaku.jpg" },
            { name: "Konan", img: "naruto/konan.jpg" }, { name: "Zetsu", img: "naruto/zetsu.jpg" },
            { name: "Sakura", img: "naruto/sakura.jpg" }, { name: "Kakuzu", img: "naruto/kakuzu.jpg" }
        ],
        epic: [
            { name: "A", img: "naruto/a.jpg" },{ name: "Kisame", img: "naruto/kisame.jpg" },
            { name: "Shisui", img: "naruto/shisui.jpg" }, 
            { name: "Tsunade", img: "naruto/tsunade.jpg" }, { name: "Orochimaru", img: "naruto/orochimaru.jpg" },
            { name: "Shikamaru", img: "naruto/shikamaru.jpg" }, { name: "Danzo", img: "naruto/danzo.jpg" },
            { name: "Onoki", img: "naruto/onoki.jpg" }, { name: "Gengetsu", img: "naruto/gengetsu.jpg" },
            { name: "Muu", img: "naruto/muu.jpg" }, { name: "Third Raikage", img: "naruto/thirdraikage.jpg" },
            { name: "Hanzo", img: "naruto/hanzo.jpg" }, { name: "Jiraya", img: "naruto/jiraya.jpg" }
        ],
        mythic: [ 
            { name: "Hiruzen", img: "naruto/hiruzen.jpg", tier: "mythic" }, 
            { name: "Tobirama", img: "naruto/tobirama.jpg", tier: "mythic" },
            { name: "Killer Bee", img: "naruto/killer bee.jpg", tier: "mythic" }, 
            { name: "Kabuto", img: "naruto/kabuto.jpg", tier: "mythic" }, 
            { name: "Nagato", img: "naruto/nagato.jpg", tier: "mythic" }, 
            { name: "Itachi", img: "naruto/itachi.jpg", tier: "mythic" }
        ],
    legendary: [
        {name: "Ashura", img: "naruto/ashura.jpg" }, { name: "Indra", img: "naruto/indra.jpg" },
        {name: "Hamura", img: "naruto/hamura.jpg" },
        // Naruto Path
        { name: "Naruto (Base)", img: "naruto/naruto.jpg", nextForm: "Naruto (Sage)", cost: 1, tip: "⚡ AWAKENS → Naruto (Sage) [1 sacrifice]" },
        { name: "Naruto (Sage)", img: "naruto2/narutosage.jpg", nextForm: "Naruto (KSM)", cost: 1, tip: "⚡ AWAKENS → Naruto (KSM) [1 sacrifice]" },
        { name: "Naruto (KSM)", img: "naruto2/narutokcm.jpg", nextForm: "Naruto (Six Paths)", cost: 3, tip: "⚡ AWAKENS → Six Paths Naruto [3 sacrifices]" },
        { name: "Naruto (Six Paths)", img: "naruto2/narutosixpaths.jpg" }, 
        // Sasuke Path
        { name: "Sasuke (Hebi)", img: "naruto2/sasukehebi.jpg", nextForm: "Sasuke (MS)", cost: 1, tip: "⚡ AWAKENS → Sasuke (MS) [1 sacrifice]" },
        { name: "Sasuke (MS)", img: "naruto2/sasukems.jpg", nextForm: "Sasuke (Rinnegan)", cost: 3, tip: "⚡ AWAKENS → Sasuke (Rinnegan) [3 sacrifices]" },
        { name: "Sasuke (Rinnegan)", img: "naruto/sasuke.jpg" },

        // Madara Path
        { name: "Madara (Edo)", img: "naruto/madara.jpg", nextForm: "Madara (Six Paths)", cost: 3, tip: "⚡ AWAKENS → Madara (Six Paths) [3 sacrifices]" },
        { name: "Madara (Six Paths)", img: "naruto2/madarasixpaths.jpg" },

        // Other Potential Awakenings
        { name: "Kakashi", img: "naruto/kakashi.jpg", nextForm: "Kakashi (DMS)", cost: 3, tip: "⚡ AWAKENS → Kakashi (DMS) [3 sacrifices]" },
        {name: "Kakashi (DMS)", img: "naruto2/dmkakashi.jpg" },
        { name: "Might Guy", img: "naruto2/mightguybase.jpg", nextForm: "Guy (8 Gates)", cost: 3, tip: "⚡ AWAKENS → Guy (8 Gates) [3 sacrifices]" },
        {name: "Guy (8 Gates)", img: "naruto/mightguy.jpg", },
        { name: "Obito", img: "naruto/obito.jpg", nextForm: "Obito (Juubito)", cost: 3, tip: "⚡ AWAKENS → Obito (Juubito) [3 sacrifices]" },
        {name: "Obito (Juubito)", img: "naruto2/obitojuubi.jpg"},
        { name: "Minato", img: "naruto/minato.jpg", nextForm: "Minato (KCM)", cost: 3, tip: "⚡ AWAKENS → Minato (KCM) [3 sacrifices]" },
        {name: "Minato (KCM)", img: "naruto2/minatokcm.jpg" },
        { name: "Hashirama", img: "naruto/hashirama.jpg", nextForm: "Hashirama (Sage)", cost: 3, tip: "⚡ AWAKENS → Hashirama (Sage) [3 sacrifices]" },
        {name: "Hashirama (Sage)", img: "naruto2/hashiramasage.jpg" }       
    ],
    ultra: [
        { name: "Hagoromo", img: "naruto/hagoromo.jpg", tier: "ultra" },
        { name: "Kaguya", img: "naruto/kaguya.jpg", tier: "ultra" }
    ]
    },
    DemonSlayer: {
common: [
{name: "Murata", img: "ds/murata.jpg" }, { name: "Aoi", img: "ds/aoi.jpg" },
{name: "Ozaki", img: "ds/ozaki.jpg" }, { name: "Amane", img: "ds/amane.jpg" },
{name: "Masao", img: "ds/masao.jpg" }, { name: "Hotaru", img: "ds/hotaru.jpg" },
{name: "Spider Demon(Son)", img: "ds/spider_demon_son.jpg" }, { name: "Horned Demon", img: "ds/horned_demon.jpg" },
{name: "Spider Demon(Daughter)", img: "ds/spider_demon_daughter.jpg" }, { name: "Tongue Demon", img: "ds/tongue_demon.jpg" },
{name: "Spider Demon(Mother)", img: "ds/spider_demon_mother.jpg" }, { name: "Hand Demon", img: "ds/hand_demon.jpg" },
{name: "Spider Demon(Father)", img: "ds/spider_demon_father.jpg" }, { name: "Swamp Demon", img: "ds/swamp_demon.jpg" },
{name: "Makomo", img: "ds/makomo.jpg" }, { name: "Suma", img: "ds/suma.jpg" },
{name: "Makio", img: "ds/makio.jpg" }, { name: "Hinatsuru", img: "ds/hinatsuru.jpg" },
],
rare: [
{name: "Kaguya", img: "ds/kaguya.jpg" }, { name: "Yushiro", img: "ds/aoi.jpg" },
{name: "Tamayo", img: "ds/tamayo.jpg" }, { name: "Kamune", img: "ds/kamune.jpg" },
{name: "Rui", img: "ds/rui.jpg" }, { name: "Kyogai", img: "ds/kyogai.jpg" },
{name: "Yahaba", img: "ds/yahaba.jpg" }, { name: "Susamaru", img: "ds/susamaru.jpg" },
{name: "Mukago", img: "ds/mukago.jpg" }, { name: "Wakuraba", img: "ds/wakuraba.jpg" },
{name: "Rokuro", img: "ds/rokuro.jpg" }, { name: "Enmu", img: "ds/enmu.jpg" }, 
{name: "Nezuko", img: "ds/nezuko.jpg" }, { name: "Daki", img: "ds/daki.jpg" },
],
epic: [
{name: "Kanae", img: "ds/kanae.jpg" }, { name: "Shinjuro", img: "ds/shinjuro.jpg" },
{name: "Shinobu", img: "ds/shinobu.jpg" }, { name: "Urokodaki", img: "ds/urokodaki.jpg" },
{name: "Jigoro", img: "ds/jigoro.jpg" }, { name: "Zenitsu", img: "ds/zenitsu.jpg" },
{name: "Kanao", img: "ds/kanao.jpg" }, { name: "Inosuke", img: "ds/inosuke.jpg" },
{name: "Kaigaku", img: "ds/kaigaku.jpg" }, { name: "Genya", img: "ds/genya.jpg" },
{name: "Sabito", img: "ds/sabito.jpg" }, { name: "Tanjuro", img: "ds/tanjuro.jpg" },
],
mythic: [
{name: "Tengen", img: "ds/tengen.jpg" }, { name: "Gyokko", img: "ds/gyokko.jpg" },
{name: "Mitsuri", img: "ds/mitsuri.jpg" }, { name: "Hantengu", img: "ds/hantengu.jpg" },
{name: "Rengoku", img: "ds/rengoku.jpg" }, { name: "Nakime", img: "ds/nakime.jpg" },
{name: "Gyutaro", img: "ds/gyutaro.jpg" }, { name: "Obanai", img: "ds/obanai.jpg" },
{name: "Tanjiro", img: "ds/tanjiro.jpg" }, { name: "Muichiro", img: "ds/muichiro.jpg" },
],
legendary: [
{name: "Akaza", img: "ds/akaza.jpg" }, { name: "Douma", img: "ds/douma.jpg" },
{name: "Giyu", img: "ds/giyu.jpg" }, { name: "Gyomei", img: "ds/gyomei.jpg" },
{name: "Sanemi", img: "ds/sanemi.jpg" }, { name: "Kokushibo", img: "ds/kokushibo.jpg" },
],
ultra: [{name: "Yorichi", img: "ds/yorichi.jpg" }, { name: "Muzan", img: "ds/muzan.jpg" }]
},
    OnePiece: {
    common: [
        { name: "Buggy", img: "op1/buggy.jpg" },
        { name: "Kuro", img: "op1/kuro.jpg" },
        { name: "Django", img: "op1/django.jpg" },
        { name: "Gin", img: "op1/gin.jpg" },
        { name: "Krieg", img: "op1/krieg.jpg" },
        { name: "Arlong", img: "op1/arlong.jpg" },
        { name: "Hatchan", img: "op1/hatchan.jpg" },
        { name: "Wapol", img: "op1/wapol.jpg" },
        { name: "Foxy", img: "op1/foxy.jpg" },
        { name: "Duval", img: "op1/duval.jpg" },
        { name: "Pell", img: "op1/pell.jpg" },
        { name: "Chaka", img: "op1/chaka.jpg" },
        { name: "Mr. 5", img: "op1/mr5.jpg" },
        { name: "Miss Doublefinger", img: "op1/doublefinger.jpg" },
        { name: "Bellamy", img: "op1/Bellamy.jpg" },
        { name: "Perona", img: "op1/perona.jpg" },
        { name: "Absalom", img: "op1/absalom.jpg" },
        { name: "Baby 5", img: "op1/baby5.jpg" },
        { name: "Lao G", img: "op1/laog.jpg" },
        { name: "Gladius", img: "op1/gladius.jpg" },
        { name: "Machvise", img: "op1/machvise.jpg" },
        { name: "Dellinger", img: "op1/dellinger.jpg" },
        { name: "Vivi", img: "op1/vivi.jpg" },
        { name: "Fukurou", img: "op1/fukurou.jpg" },
        { name: "Bon Clay", img: "op1/bonclay.jpg" },
        { name: "Mr. 3", img: "op1/mr3.jpg" },
        { name: "Shirahoshi", img: "op1/shirahoshi.jpg" },
        { name: "Vegapunk Shaka", img: "op1/shaka.jpg" },
        { name: "Vegapunk Pythagoras", img: "op1/pythagoras.jpg" },
        { name: "Vegapunk Edison", img: "op1/edison.jpg" },
        { name: "Vegapunk Atlas", img: "op1/atlas.jpg" },
        { name: "Vegapunk Lilith", img: "op1/lilith.jpg" },
        {name: "Caribou", img: "op1/caribou.jpg"}
    ],

    rare: [
        { name: "Coby", img: "op1/coby.jpg" },
        { name: "Hody Jones", img: "op1/hody.jpg" },
        { name: "Caesar Clown", img: "op1/caesar.jpg" },
        { name: "Monet", img: "op1/monet.jpg" },
        { name: "Senor Pink", img: "op1/senorpink.jpg" },
        { name: "Trebol", img: "op1/trebol.jpg" },
        { name: "Diamante", img: "op1/diamante.jpg" },
        { name: "Pica", img: "op1/pica.jpg" },
        { name: "Smoker", img: "op1/smoker.jpg" },
        { name: "Tashigi", img: "op1/tashigi.jpg" },
        { name: "Avalo Pizarro", img: "op1/pizarro.jpg" },
        { name: "Nami", img: "op1/nami.jpg" },
        { name: "Usopp", img: "op1/usopp.jpg" },
        { name: "Jabra", img: "op1/jabra.jpg" },
        { name: "Kumadori", img: "op1/Kumadori.jpg" },
        { name: "Blueno", img: "op1/blueno.jpg" },
        { name: "Kalifa", img: "op1/kalifa.jpg" },
        { name: "Fisher Tiger", img: "op1/fishertiger.jpg" },
        { name: "Bege", img: "op1/bege.jpg" },
        { name: "Apoo", img: "op1/Apoo.jpg" },
        { name:  "Hawkins", img: "op1/hawkins.jpg" },
        { name: "Carrot", img: "op1/carrot.jpg" },
        {name: "Pedro", img: "op2/pedro.jpg"},
        { name: "Chopper", img: "op1/chopper.jpg" }
    ],

    epic: [
        { name: "Bonnie", img: "op1/bonnie.jpg", nextForm: "Bonnie (Awakened)", cost: 1, tip: "⚡ AWAKENS → Bonnie (Awakened) [1 sacrifice]" },
        { name: "Bonnie (Awakened)", img: "op1/bonnie1.jpg" },
        { name: "Don Chinjao", img: "op1/chinjao.jpg" },
        { name: "Laffitte", img: "op1/laffitte.jpg" },
        { name: "Sanjuan Wolf", img: "op1/sanjuanwolf.jpg" },
        { name: "Van Augur", img: "op1/vanaugur.jpg" },
        { name: "Doc Q", img: "op1/docq.jpg" },
        { name: "Jesus Burgess", img: "op1/burgess.jpg" },
        { name: "Catarina Devon", img: "op1/devon.jpg" },
        { name: "Brook", img: "op1/brook.jpg", nextForm: "Brook (Soul King)", cost: 1, tip: "⚡ AWAKENS → Brook (Soul King) [1 sacrifice]" },
        { name: "Brook (Soul King)", img: "op1/brook1.jpg" },
        { name: "Franky", img: "op1/franky.jpg", nextForm: "Franky (Shogun)", cost: 1, tip: "⚡ AWAKENS → Franky (Shogun) [1 sacrifice]" },
        { name: "Franky (Shogun)", img: "op1/franky1.jpg" },
        { name: "Robin", img: "op1/robin.jpg", nextForm: "Robin (Devil child)", cost: 1, tip: "⚡ AWAKENS → Robin (Devil child) [1 sacrifice]" },
        { name: "Robin (Devil child)", img: "op1/robin1.jpg" },
        { name: "Kuma", img: "op1/kuma.jpg" },
        { name: "Enel", img: "op1/enel.jpg" },
        { name: "Moria", img: "op1/moria.jpg" },
        { name: "Crocodile", img: "op1/crocodile.jpg", nextForm: "Crocodile (Awakened)", cost: 1, tip: "⚡ AWAKENS → Crocodile (Awakened) [1 sacrifice]" },
        { name: "Crocodile (Awakened)", img: "op1/crocodile1.jpg" },
        { name: "Doflamingo", img: "op1/doflamingo.jpg", nextForm: "Doflamingo (Awakened)", cost: 1, tip: "⚡ AWAKENS → Doflamingo (Awakened) [1 sacrifice]" },
        { name: "Doflamingo (Awakened)", img: "op1/doflamingo1.jpg" },
        { name: "Ivankov", img: "op1/ivankov.jpg" },
        { name: "Sentomaru", img: "op1/sentomaru.jpg" },
        { name: "Ace", img: "op1/ace.jpg" },
        { name: "Jinbe", img: "op1/jinbe.jpg" },
        { name: "Cracker", img: "op1/cracker.jpg" },
        { name: "Smoothie", img: "op1/smoothie.jpg" },
        { name: "Oven", img: "op1/oven.jpg" },
        { name: "Daifuku", img: "op1/daifuku.jpg" },
        { name: "Urouge", img: "op1/urouge.jpg" },
        { name: "Kaku", img: "op2/kaku.jpg", nextForm: "Kaku (Awakened)", cost: 1, tip: "⚡ AWAKENS → Kaku (Awakened) [1 sacrifice]" },
        { name: "Kaku (Awakened)", img: "op2/kaku1.jpg" },
        { name: "Killer", img: "op2/killer.jpg" },
        { name: "Rob Lucci", img: "op2/lucci.jpg", nextForm: "Rob Lucci (Awakened)", cost: 1, tip: "⚡ AWAKENS → Rob Lucci (Awakened) [1 sacrifice]" },
        { name: "Rob Lucci (Awakened)", img: "op2/roblucci1.jpg" },
        { name: "Weevil", img: "op1/weevil.jpg" }
    ],

    mythic: [
        { name: "S-Hawk", img: "op2/shawk.jpg" },
        { name: "S-Snake", img: "op2/ssnake.jpg" },
        { name: "S-Bear", img: "op2/sbear.jpg" },
        { name: "S-Shark", img: "op2/sshark.jpg" },
        { name: "Zoro", img: "op2/zoro.jpg", nextForm: "Zoro (Conqueror's Haki)", cost: 2, tip: "⚡ AWAKENS → Zoro (Conqueror's Haki) [2 sacrifices]" },
        { name: "Zoro (Conqueror's Haki)", img: "op2/zoro1.jpg" },
        { name: "Sanji", img: "op2/sanji.jpg", nextForm: "Sanji (Ifrit Jambe)", cost: 2, tip: "⚡ AWAKENS → Sanji (Ifrit Jambe) [2 sacrifices]" },
        { name: "Sanji (Ifrit Jambe)", img: "op2/sanji1.jpg" },
        { name: "Law", img: "op2/law.jpg", nextForm: "Law (Awakened)", cost: 1, tip: "⚡ AWAKENS → Law (Awakened) [1 sacrifice]" },
        { name: "Law (Awakened)", img: "op2/law1.jpg" },
        { name: "Kid", img: "op2/kid.jpg", nextForm: "Kid (Awakened)", cost: 1, tip: "⚡ AWAKENS → Kid (Awakened) [1 sacrifice]" },
        { name: "Kid (Awakened)", img: "op2/kid1.jpg" },
        { name: "Yamato", img: "op2/yamato.jpg" },
        { name: "Marco", img: "op2/marco.jpg" },
        { name: "Katakuri", img: "op2/katakuri.jpg", nextForm: "Katakuri (Awakened)", cost: 1, tip: "⚡ AWAKENS → Katakuri (Awakened) [1 sacrifice]" },
        { name: "Katakuri (Awakened)", img: "op2/katakuri1.jpg" },
        { name: "King", img: "op2/king.jpg" },
        { name: "Queen", img: "op2/queen.jpg" },
        { name: "Jack", img: "op2/jack.jpg" },
        { name: "Sabo", img: "op2/sabo.jpg", nextForm: "Sabo (Awakened)", cost: 1, tip: "⚡ AWAKENS → Sabo (Awakened) [1 sacrifice]" },
        { name: "Sabo (Awakened)", img: "op2/sabo1.jpg" },
        { name: "Fujitora", img: "op2/fujitora.jpg" },
        { name: "Ryoukugyu", img: "op2/ryoukugyu.jpg" },
        { name: "Shiryu", img: "op2/shiryu.jpg" },
        { name: "Kuzan", img: "op2/aokiji.jpg" },
        { name: "Kizaru", img: "op2/kizaru.jpg" },
        { name: "Oden", img: "op2/oden.jpg" },
        { name: "Sengoku", img: "op2/sengoku.jpg" }
    ],

    legendary: [
        { name: "Rayleigh", img: "op2/rayleigh.jpg" },
        { name: "Benn Beckman", img: "op2/beckman.jpg" },
        { name: "Saint Figarland Garling", img: "op2/garling.jpg" },
        { name: "Gorosei Saturn", img: "op2/saturn.jpg" },
        { name: "Gorosei Mars", img: "op2/mars.jpg" },
        { name: "Gorosei Ju Peter", img: "op2/jupiter.jpg" },
        { name: "Gorosei Warcury", img: "op2/warcury.jpg" },
        { name: "Gorosei Nusjuro", img: "op2/nusjuro.jpg" },
        { name: "Luffy", img: "op2/luffy.jpg", nextForm: "Luffy (Gear 2)", cost: 1, tip: "⚡ AWAKENS → Luffy (Gear 2) [1 sacrifices]" },
        { name: "Luffy (Gear 2&3)", img: "op2/luffy2.jpg", nextForm: "Luffy (Gear 3)", cost: 1, tip: "⚡ AWAKENS → Luffy (Gear 4(Bounceman)) [1 sacrifice]" },
        { name: "Luffy (Gear 4(Bounceman))", img: "op2/luffy3.jpg", nextForm: "Luffy (Gear 4)", cost: 1, tip: "⚡ AWAKENS → Luffy (Gear 4(Snakeman)) [1 sacrifice]" },
        { name: "Luffy (Gear 4(Snakeman))", img: "op2/luffy4.jpg", nextForm: "Luffy (Gear 5)", cost: 2, tip: "⚡ AWAKENS → Luffy (Gear 5) [2 sacrifices]" },
        { name: "Luffy (Gear 5)", img: "op2/luffy5.jpg" },
        { name: "Kaido", img: "op2/kaido.jpg", nextForm: "Kaido (Dragon)", cost: 1, tip: "⚡ AWAKENS → Kaido (Dragon) [1 sacrifices]" },
        { name: "Kaido (Dragon)", img: "op2/kaido1.jpg", nextForm: "Kaido (Awakened)", cost: 2, tip: "⚡ AWAKENS → Kaido (Awakened) [2 sacrifices]" },
        { name: "Kaido (Awakened)", img: "op2/kaido2.jpg" },
        { name: "Big Mom", img: "op2/bigmom.jpg", nextForm: "Big Mom (Awakened)", cost: 2, tip: "⚡ AWAKENS → Big Mom (Awakened) [2 sacrifices]" },
        { name: "Big Mom (Awakened)", img: "op2/bigmom1.jpg" },
        { name: "Blackbeard", img: "op2/blackbeard.jpg", nextForm: "Blackbeard (Awakened)", cost: 3, tip: "⚡ AWAKENS → Blackbeard (Awakened) [3 sacrifices]" },
        { name: "Blackbeard (Awakened)", img: "op2/blackbeard1.jpg" },
        { name: "Akainu", img: "op2/akainu.jpg" }
    ],

    ultra: [
        { name: "Roger", img: "op2/roger.jpg" },
        { name: "Dragon", img: "op2/dragon.jpg" },
        { name: "Mihawk", img: "op2/mihawk.jpg" },
        { name: "Shanks", img: "op2/shanks.jpg" },
        { name: "Whitebeard", img: "op2/whitebeard.jpg" },
        { name: "Rocks D. Xebec", img: "op2/rocks.jpg" },
        { name: "Garp", img: "op2/garp.jpg" }
    ],

    god: [
        { name: "Imu", img: "op2/imu.jpg" },
        { name: "Joy Boy", img: "op2/joyboy.jpg" }
    ]
    },
    HxH: {
        common: [
            { name: "Goreinu", img: "hxh/goreinu.jpg" },
            { name: "Ponzu", img: "hxh/Ponzu.jpg" },
            { name: "Pokkle", img: "hxh/pokkle.jpg" },
            { name: "Sadaso", img: "hxh/sadaso.jpg" },
            { name: "Gel", img: "hxh/gel.jpg" },
            { name: "Amane", img: "hxh/amane.jpg" },
            { name: "Welfin", img: "hxh/welfin.jpg" },
            { name: "Melody", img: "hxh/melody.jpg" },
            { name: "Menchi", img: "hxh/menchi.jpg" },
            { name: "Ginta", img: "hxh/ginta.jpg" },
            { name: "Milluki", img: "hxh/milluki.jpg" },
            { name: "Gotoh", img: "hxh/Gotoh.jpg" },
            { name: "Canary", img: "hxh/canary.jpg" },
            { name: "Kortopi", img: "hxh/kortopi.jpg" },
            { name: "Saiyu", img: "hxh/saiyu.jpg" },
            { name: "Komugi", img: "hxh/komugi.jpg" }
        ],
        rare: [
            { name: "Majtani", img: "hxh/majtani.jpg" },
            { name: "Wing", img: "hxh/wing.jpg" },
            { name: "Barbon", img: "hxh/Barbon.jpg" },
            { name: "Ikalgo", img: "hxh/Ikalgo.jpg" },
            { name: "Hanzo", img: "hxh/Hanzo.jpg" },
            { name: "Bodoro", img: "hxh/bonolenov.jpg" },
            { name: "Razor", img: "hxh/razor.jpg" },
            { name: "Shalnark", img: "hxh/shalnark.jpg" },
            { name: "Franklin", img: "hxh/franklin.jpg" },
            { name: "Machi", img: "hxh/machi.jpg" },
            { name: "Johnas", img: "hxh/johnas.jpg" },
            { name: "Satotz", img: "hxh/Satotz.jpg" },
            { name: "Pyon", img: "hxh/pyon.jpg" },
            { name: "Mizaistom", img: "hxh/mizaistom.jpg" },
            { name: "Saccho", img: "hxh/saccho.jpg" },
            { name: "Zushi", img: "hxh/zushi.jpg" },
            { name: "Cheadle", img: "hxh/cheadle.jpg" },
            { name: "Botobai", img: "hxh/botobai.jpg" },
            { name: "Palm", img: "hxh/palm.jpg" },
            { name: "Leroute", img: "hxh/leroute.jpg" }
        ],
        epic: [
            { name: "Morel", img: "hxh/morel.jpg" },
            { name: "Knov", img: "hxh/knov.jpg" },
            { name: "Shoot", img: "hxh/shoot.jpg" },
            { name: "Knuckle", img: "hxh/knuckle.jpg" },
            { name: "Meleoron", img: "hxh/meleoron.jpg" },
            { name: "Rammot", img: "hxh/rammot.jpg" },
            { name: "Zazan", img: "hxh/zazan.jpg" },
            { name: "Colt", img: "hxh/colt.jpg" },
            { name: "Bloster", img: "hxh/bloster.jpg" },
            { name: "Leorio", img: "hxh/leorio.jpg" },
            { name: "Shizuku", img: "hxh/shizuku.jpg" },
            { name: "Phinks", img: "hxh/phinks.jpg" },
            { name: "Leol", img: "hxh/leol.jpg" },
            { name: "Genthru", img: "hxh/genthru.jpg" },
            { name: "Bonolenov", img: "hxh/bonolenov.jpg" },
            { name: "Kanzai", img: "hxh/Kanzai.jpg" },
            { name: "Kalluto", img: "hxh/kalluto.jpg" },
            { name: "Pariston", img: "hxh/pariston.jpg" },
            { name: "Hazama", img: "hxh/hazama.jpg" },
            { name: "Biscuit", img: "hxh/biscuit.jpg", nextForm: "Biscuit (True Form)", cost: 1, tip: "⚡ AWAKENS → Biscuit (True Form) [1 sacrifice]" },
            { name: "Biscuit (True Form)", img: "hxh/biscuit1.jpg" },
            { name: "Ant Queen", img: "hxh/antqueen.jpg" },
            { name: "Tsezguerra", img: "hxh/tsezguerra.jpg" }
        ],
        mythic: [
            { name: "Illumi", img: "hxh/illumi.jpg" },
            { name: "Feitan", img: "hxh/feitan.jpg", nextForm: "Feitan (Pain Packer)", cost: 1, tip: "⚡ AWAKENS → Feitan (Pain Packer) [1 sacrifice]" },
            { name: "Feitan (Pain Packer)", img: "hxh/feitan1.jpg" },
            { name: "Kurapika", img: "hxh/kurapika.jpg", nextForm: "Kurapika (Emperor Time)", cost: 1, tip: "⚡ AWAKENS → Kurapika (Emperor Time) [1 sacrifice]" },
            { name: "Kurapika (Emperor Time)", img: "hxh/kurapika1.jpg" },
            { name: "Killua", img: "hxh/killua.jpg", nextForm: "Killua (Godspeed)", cost: 1, tip: "⚡ AWAKENS → Killua (Godspeed) [1 sacrifice]" },
            { name: "Killua (Godspeed)", img: "hxh/killua1.jpg" },
            { name: "Kite", img: "hxh/kite.jpg" },
            { name: "Ging", img: "hxh/ging.jpg" },
            { name: "Youpi", img: "hxh/youpi.jpg", nextForm: "Youpi (Rage)", cost: 2, tip: "⚡ AWAKENS → Youpi (Rage) [2 sacrifices]" },
            { name: "Youpi (Rage)", img: "hxh/youpi1.jpg" },
            { name: "Pitou", img: "hxh/pitou.jpg", nextForm: "Pitou (Doctor Blythe)", cost: 1, tip: "⚡ AWAKENS → Pitou (Doctor Blythe) [1 sacrifice]" },
            { name: "Pitou (Doctor Blythe)", img: "hxh/pitou1.jpg" },
            { name: "Shaiapouf", img: "hxh/shaiapouf.jpg", nextForm: "Shaiapouf (Full Form)", cost: 2, tip: "⚡ AWAKENS → Shaiapouf (Full Form) [2 sacrifices]" },
            { name: "Shaiapouf (Full Form)", img: "hxh/shaiapouf1.jpg" },
            { name: "Uvogin", img: "hxh/uvogin.jpg" },
        ],
        legendary: [
            { name: "Silva", img: "hxh/silva.jpg" },
            { name: "Hisoka", img: "hxh/hisoka.jpg" },
            { name: "Gon", img: "hxh/gon.jpg", nextForm: "Gon (Adult)", cost: 2, tip: "⚡ AWAKENS → Gon (Adult) [2 sacrifices]" },
            { name: "Gon (Adult)", img: "hxh/gon1.jpg" },
            { name: "Chrollo", img: "hxh/chrollo.jpg", nextForm: "Chrollo (Hatsu Unleashed)", cost: 2, tip: "⚡ AWAKENS → Chrollo (Hatsu Unleashed) [2 sacrifices]" },
            { name: "Chrollo (Hatsu Unleashed)", img: "hxh/chrollo1.jpg" },
            { name: "Zeno", img: "hxh/zeno.jpg", nextForm: "Zeno (Dragon Dive)", cost: 2, tip: "⚡ AWAKENS → Zeno (Dragon Dive) [2 sacrifice]" },
            { name: "Zeno (Dragon Dive)", img: "hxh/zeno1.jpg" },
            { name: "Alluka", img: "hxh/alluka.jpg" }
        ],
        ultra: [
            { name: "Meruem", img: "hxh/meruem.jpg", nextForm: "Meruem (Post-Rose)", cost: 3, tip: "⚡ AWAKENS → Meruem (Post-Rose) [3 sacrifices]" },
            { name: "Meruem (Post-Rose)", img: "hxh/meruem.jpg" },
            { name: "Netero", img: "hxh/netero.jpg", nextForm: "Netero (100-Type Guanyin)", cost: 3, tip: "⚡ AWAKENS → Netero (100-Type Guanyin) [2 sacrifices]" },
            { name: "Netero (100-Type Guanyin)", img: "hxh/netero.jpg" },
            ]
        },
        Bleach: {
    common: [
        { name: "Hanataro", img: "bleach/Hanataro.jpg" },
        { name: "Jinta", img: "bleach/jinta.jpg" },
        { name: "Giriko", img: "bleach/giriko.jpg" },
        { name: "Moe", img: "bleach/moe.jpg" },
        { name: "Jackie", img: "bleach/jackie.jpg" },
        { name: "Chad", img: "bleach/Chad.jpg" },
        { name: "Orihime", img: "bleach/orihime.jpg" },
        { name: "Ururu", img: "bleach/ururu.jpg" },
        { name: "Riruka", img: "bleach/riruka.jpg" },
        { name: "Yukio", img: "bleach/yukio.jpg" },
        { name: "Di Roy", img: "bleach/diroy.jpg" },
        { name: "Rudbornn", img: "bleach/rudbornn.jpg" },
        { name: "Pesche", img: "bleach/Pesche.jpg" },
        { name: "Dondochakka", img: "bleach/dondochakka.jpg" },
        { name: "Loly", img: "bleach/loly.jpg" },
        { name: "Hinamori", img: "bleach/hinamori.jpg" },
        { name: "Menoly", img: "bleach/menoly.jpg" },
        { name: "Ganju", img: "bleach/ganju.jpg" },
        { name: "Cirucci", img: "bleach/cirucci.jpg" },
        { name: "Edrad", img: "bleach/edrad.jpg" },
        { name: "Poww", img: "bleach/poww.jpg" },
        { name: "Shawlong", img: "bleach/shawlong.jpg" },
        { name: "Findorr", img: "bleach/findorr.jpg" }
    ],

    rare: [
        { name: "Kira", img: "bleach/kira.jpg", nextForm: "Kira (Bankai)", cost: 1, tip: "⚡ AWAKENS → Kira (Bankai) [1 sacrifice]" },
        { name: "Kira (Bankai)", img: "bleach/kira1.jpg" },
        { name: "Ikkaku", img: "bleach/ikkaku.jpg", nextForm: "Ikkaku (Bankai)", cost: 1, tip: "⚡ AWAKENS → Ikkaku (Bankai) [1 sacrifice]" },
        { name: "Ikkaku (Bankai)", img: "bleach/ikkaku1.jpg" },
        { name: "Yumichika", img: "bleach/Yumichika.jpg" },
        { name: "Rangiku", img: "bleach/rangiku.jpg"},
        { name: "Hisagi", img: "bleach/hisagi.jpg" },
        { name: "Nemu", img: "bleach/nemu.jpg" },
        { name: "Omaeda", img: "bleach/omaeda.jpg" },
        { name: "Iba", img: "bleach/iba.jpg" },
        { name: "Sasakibe", img: "bleach/sasakibe.jpg"},
        { name: "Hiyori", img: "bleach/hiyori.jpg" },
        { name: "Mashiro", img: "bleach/mashiro.jpg" },
        { name: "Love", img: "bleach/love.jpg" },
        { name: "Lisa", img: "bleach/lisa.jpg" },
        { name: "Hachigen", img: "bleach/hachigen.jpg" },
        { name: "Dordoni", img: "bleach/dordoni.jpg" },
        { name: "Charlotte", img: "bleach/charlotte.jpg" },
        { name: "Mila Rose", img: "bleach/milarose.jpg" },
        { name: "PePe", img: "bleach/pepe.jpg" },
        { name: "Luppi", img: "bleach/luppi.jpg" },
    ],

    epic: [
        { name: "Renji", img: "bleach/renji.jpg", nextForm: "Renji (Sōō Zabimaru)", cost: 1, tip: "⚡ AWAKENS → Renji (Sōō Zabimaru) [1 sacrifice]" },
        { name: "Renji (Sōō Zabimaru)", img: "bleach/renji1.jpg" },
        { name: "Rukia", img: "bleach/rukia.jpg", nextForm: "Rukia (Hakka no Togame)", cost: 1, tip: "⚡ AWAKENS → Rukia (Hakka no Togame) [1 sacrifice]" },
        { name: "Rukia (Hakka no Togame)", img: "bleach/rukia1.jpg" },
        { name: "Kensei", img: "bleach/kensei.jpg", nextForm: "Kensei (Tekken Tachikaze)", cost: 1, tip: "⚡ AWAKENS → Kensei (Tekken Tachikaze) [1 sacrifice]" },
        { name: "Kensei (Tekken Tachikaze)", img: "bleach/kensei1.jpg" },
        { name: "Rose", img: "bleach/rose.jpg", nextForm: "Rose (Kinshara Butōdan)", cost: 1, tip: "⚡ AWAKENS → Rose (Kinshara Butōdan) [1 sacrifice]" },
        { name: "Rose (Kinshara Butōdan)", img: "bleach/rose1.jpg" },
        { name: "Shinji", img: "bleach/shinji.jpg", nextForm: "Shinji (Sakashima Yokoshima)", cost: 1, tip: "⚡ AWAKENS → Shinji (Sakashima Yokoshima) [1 sacrifice]" },
        { name: "Shinji (Sakashima Yokoshima)", img: "bleach/shinji1.jpg" },
        { name: "Soi Fon", img: "bleach/soifon.jpg", nextForm: "Soi Fon (Jakuhō Raikōben)", cost: 1, tip: "⚡ AWAKENS → Soi Fon (Jakuhō Raikōben) [1 sacrifice]" },
        { name: "Soi Fon (Jakuhō Raikōben)", img: "bleach/soifon1.jpg" },
        { name: "Komamura", img: "bleach/Komamura.jpg", nextForm: "Komamura (Kokujō Tengen Myō'ō)", cost: 1, tip: "⚡ AWAKENS → Komamura (Kokujō Tengen Myō'ō) [1 sacrifice]" },
        { name: "Komamura (Kokujō Tengen Myō'ō)", img: "bleach/komamura1.jpg" },
        { name: "Gin", img: "bleach/gin.jpg", nextForm: "Gin (Kamishini no Yari)", cost: 1, tip: "⚡ AWAKENS → Gin (Kamishini no Yari) [1 sacrifice]" },
        { name: "Gin (Kamishini no Yari)", img: "bleach/gin1.jpg" },
        { name: "Tosen", img: "bleach/tosen.jpg", nextForm: "Tosen (Awakened)", cost: 1, tip: "⚡ AWAKENS → Tosen (Awakened) [1 sacrifice]" },
        { name: "Tosen (Awakened)", img: "bleach/tosen1.jpg" },
        { name: "Nnoitra", img: "bleach/nnoitra.jpg", nextForm: "Nnoitra (Santa Teresa)", cost: 1, tip: "⚡ AWAKENS → Nnoitra (Santa Teresa) [1 sacrifice]" },
        { name: "Nnoitra (Santa Teresa)", img: "bleach/nnoitra1.jpg" },
        { name: "Zommari", img: "bleach/Zommari.jpg", nextForm: "Zommari (Brujería)", cost: 1, tip: "⚡ AWAKENS → Zommari (Brujería) [1 sacrifice]" },
        { name: "Zommari (Brujería)", img: "bleach/zommari1.jpg" },
        { name: "Szayelaporro", img: "bleach/Szayelaporro.jpg", nextForm: "Szayelaporro (Fornicarás)", cost: 1, tip: "⚡ AWAKENS → Szayelaporro (Fornicarás) [1 sacrifice]" },
        { name: "Szayelaporro (Fornicarás)", img: "bleach/Szayelaporro1.jpg" },
        { name: "Aaroniero", img: "bleach/aaroniero.jpg", nextForm: "Aaroniero (Glotonería)", cost: 1, tip: "⚡ AWAKENS → Aaroniero (Glotonería) [1 sacrifice]" },
        { name: "Aaroniero (Glotonería)", img: "bleach/aaroniero1.jpg" },
        { name: "Yammy", img: "bleach/yammy.jpg", nextForm: "Yammy (Ira)", cost: 1, tip: "⚡ AWAKENS → Yammy (Ira) [1 sacrifice]" },
        { name: "Yammy (Ira)", img: "bleach/yammy1.jpg" },
        { name: "Ginjo", img: "bleach/ginjo.jpg" },
        { name: "Harribel", img: "bleach1/harribel.jpg", nextForm: "Harribel (Tiburón)", cost: 1, tip: "⚡ AWAKENS → Harribel (Tiburón) [1 sacrifice]" },
        { name: "Harribel (Tiburón)", img: "bleach1/harribel1.jpg" },
        { name: "Tsukishima", img: "bleach/tsukishima.jpg" },
        { name: "Cang Du", img: "bleach/cangdu.jpg" },
        { name: "BG9", img: "bleach/bg9.jpg" },
        { name: "Candice", img: "bleach/candice.jpg"},
        { name: "Meninas", img: "bleach/meninas.jpg"},
        { name: "Giselle", img: "bleach/giselle.jpg"},
        { name: "Bambietta", img: "bleach/bambietta.jpg"},
        { name: "Neliel", img: "bleach1/nelliel.jpg", nextForm: "Neliel (Gamuza)", cost: 1, tip: "⚡ AWAKENS → Neliel (Gamuza) [1 sacrifice]" },
        { name: "Neliel (Gamuza)", img: "bleach1/nelliel1.jpg" },
        { name: "Liltotto", img: "bleach/liltotto.jpg"},
        { name: "Robert", img: "bleach/robert.jpg" },
        { name: "NaNaNa", img: "bleach/nanana.jpg" },
        { name: "Driscoll", img: "bleach/driscoll.jpg" },
        { name: "Wonderweiss", img: "bleach1/Wonderweiss.jpg" },
        { name: "White Ichigo", img: "bleach1/white_ichigo.jpg" },
        { name: "Mask De Masculine", img: "bleach/mask.jpg" },
        { name: "As Nodt", img: "bleach/asnodt.jpg", nextForm: "As Nodt (Tatarforas)", cost: 1, tip: "⚡ AWAKENS → As Nodt (Tatarforas) [1 sacrifice]" },
        { name: "As Nodt (Tatarforas)", img: "bleach/asnodt1.jpg" },
        { name: "Quilge", img: "bleach/quilge.jpg", nextForm: "Quilge (Biskiel)", cost: 1, tip: "⚡ AWAKENS → Quilge (Biskiel) [1 sacrifice]" },
        { name: "Quilge (Biskiel)", img: "bleach/quilge1.jpg" }
    ],

    mythic: [
        { name: "Byakuya", img: "bleach1/byakuya.jpg", nextForm: "Byakuya (Senbonzakura Kageyoshi)", cost: 1, tip: "⚡ AWAKENS → Byakuya (Senbonzakura Kageyoshi) [1 sacrifice]" },
        { name: "Byakuya (Senbonzakura Kageyoshi)", img: "bleach1/byakuya1.jpg" },
        { name: "Hitsugaya", img: "bleach1/hitsugaya.jpg", nextForm: "Hitsugaya (Daiguren Hyōrinmaru)", cost: 1, tip: "⚡ AWAKENS → Hitsugaya (Daiguren Hyōrinmaru) [1 sacrifice]" },
        { name: "Hitsugaya (Daiguren Hyōrinmaru)", img: "bleach1/hitsugaya1.jpg" },
        { name: "Mayuri", img: "bleach1/mayuri.jpg", nextForm: "Mayuri (Konjiki Ashisogi Jizō)", cost: 1, tip: "⚡ AWAKENS → Mayuri (Konjiki Ashisogi Jizō) [1 sacrifice]" },
        { name: "Mayuri (Konjiki Ashisogi Jizō)", img: "bleach1/mayuri1.jpg" },
        { name: "Yoruichi", img: "bleach1/Yoruichi.jpg", nextForm: "Yoruichi (Awakened)", cost: 1, tip: "⚡ AWAKENS → Yoruichi (Awakened) [1 sacrifice]" },
        { name: "Yoruichi (Awakened)", img: "bleach1/yoruichi1.jpg" },
        { name: "Tokinada", img: "bleach1/Tokinada.jpg", nextForm: "Tokinada (Awakened)", cost: 1, tip: "⚡ AWAKENS → Tokinada (Awakened) [1 sacrifice]" },
        { name: "Tokinada (Awakened)", img: "bleach1/tokinada1.jpg" },
        { name: "Hikone", img: "bleach1/hikone.jpg", nextForm: "Hikone (Awakened)", cost: 1, tip: "⚡ AWAKENS → Hikone (Awakened) [1 sacrifice]" },
        { name: "Hikone (Awakened)", img: "bleach1/hikone1.jpg" },
        { name: "Isshin", img: "bleach1/isshin.jpg"},
        { name: "Ulquiorra", img: "bleach1/ulquiorra.jpg", nextForm: "Ulquiorra (Segunda Etapa)", cost: 1, tip: "⚡ AWAKENS → Ulquiorra (Segunda Etapa) [1 sacrifice]" },
        { name: "Ulquiorra (Segunda Etapa)", img: "bleach1/ulquiorra1.jpg" },
        { name: "Starrk", img: "bleach1/starrk.jpg", nextForm: "Starrk (Los Lobos)", cost: 1, tip: "⚡ AWAKENS → Starrk (Los Lobos) [1 sacrifice]" },
        { name: "Starrk (Los Lobos)", img: "bleach1/starrk1.jpg" },
        { name: "Barragan", img: "bleach1/barragan.jpg", nextForm: "Barragan (Arrogante)", cost: 1, tip: "⚡ AWAKENS → Barragan (Arrogante) [1 sacrifice]" },
        { name: "Barragan (Arrogante)", img: "bleach1/barragan1.jpg" },
        { name: "Grimmjow", img: "bleach1/Grimmjow.jpg", nextForm: "Grimmjow (Pantera)", cost: 1, tip: "⚡ AWAKENS → Grimmjow (Pantera) [1 sacrifice]" },
        { name: "Grimmjow (Pantera)", img: "bleach1/grimmjow1.jpg", nextForm: "Grimmjow (Pantera Segunda Etapa)", cost: 1, tip: "⚡ AWAKENS → Grimmjow (Pantera Segunda Etapa) [1 sacrifice]" },
        { name: "Grimmjow (Pantera Segunda Etapa)", img: "bleach1/grimmjow2.jpg" },
        { name: "Bazz-B", img: "bleach1/bazzb.jpg", nextForm: "Bazz-B (Awakened)", cost: 1, tip: "⚡ AWAKENS → Bazz-B (Awakened) [1 sacrifice]" },
        { name: "Bazz-B (Awakened)", img: "bleach1/bazzb1.jpg" },
        { name: "Gremmy", img: "bleach1/gremmy.jpg" },
        { name: "Kirio", img: "bleach1/kirio.jpg" },
        { name: "Tenjiro", img: "bleach1/tenjiro.jpg" },
        { name: "Pernida", img: "bleach1/pernida.jpg", nextForm: "Pernida (Awakened)", cost: 2, tip: "⚡ AWAKENS → Pernida (Awakened) [2 sacrifices]" },
        { name: "Pernida (Awakened)", img: "bleach1/pernida1.jpg" },
        { name: "Unohana", img: "bleach1/unohana.jpg", nextForm: "Unohana (Minazuki)", cost: 2, tip: "⚡ AWAKENS → Unohana (Minazuki) [2 sacrifices]" },
        { name: "Unohana (Minazuki)", img: "bleach1/unohana1.jpg" },
        { name: "Oetsu", img: "bleach1/oetsu.jpg" }
    ],

    legendary: [
        { name: "Askin", img: "bleach1/askin.jpg", nextForm: "Askin (Hasshain)", cost: 1, tip: "⚡ AWAKENS → Askin (Hasshain) [1 sacrifice]" },
        { name: "Askin (Hasshain)", img: "bleach1/askin1.jpg" },
        { name: "Shunsui", img: "bleach1/shunsui.jpg", nextForm: "Shunsui (Katen Kyokotsu)", cost: 2, tip: "⚡ AWAKENS → Shunsui (Katen Kyokotsu) [2 sacrifices]" },
        { name: "Shunsui (Katen Kyokotsu)", img: "bleach1/shunsui1.jpg" },
        { name: "Ukitake", img: "bleach1/ukitake.jpg", nextForm: "Ukitake (Mimihagi)", cost: 2, tip: "⚡ AWAKENS → Ukitake (Mimihagi) [2 sacrifices]" },
        { name: "Ukitake (Mimihagi)", img: "bleach1/ukitake1.jpg" },
        { name: "Zaraki", img: "bleach1/zaraki.jpg", nextForm: "Zaraki (Bankai)", cost: 2, tip: "⚡ AWAKENS → Zaraki (Bankai) [2 sacrifices]" },
        { name: "Zaraki (Bankai)", img: "bleach1/zaraki1.jpg" },
        { name: "Jugram", img: "bleach1/jugram.jpg", nextForm: "Jugram (Weiß)", cost: 2, tip: "⚡ AWAKENS → Jugram (Weiß) [2 sacrifices]" },
        { name: "Jugram (Weiß)", img: "bleach1/jugram1.jpg" },
        { name: "Uryu", img: "bleach1/uryu.jpg", nextForm: "Uryu (Quincy Fullbring)", cost: 2, tip: "⚡ AWAKENS → Uryu (Quincy Fullbring) [2 sacrifices]" },
        { name: "Uryu (Quincy Fullbring)", img: "bleach1/uryu1.jpg" },
        { name: "Lille Barro", img: "bleach1/lille.jpg", nextForm: "Lille Barro (Jilliel)", cost: 2, tip: "⚡ AWAKENS → Lille Barro (Jilliel) [2 sacrifices]" },
        { name: "Lille Barro (Jilliel)", img: "bleach1/lille1.jpg" },
        { name: "Gerard", img: "bleach1/gerard.jpg", nextForm: "Gerard (Aschetonig)", cost: 2, tip: "⚡ AWAKENS → Gerard (Aschetonig) [2 sacrifices]" },
        { name: "Gerard (Aschetonig)", img: "bleach1/gerard1.jpg" },
        { name: "Ichibe", img: "bleach1/ichibe.jpg", nextForm: "Ichibe (Shirafude Ichimonji)", cost: 2, tip: "⚡ AWAKENS → Ichibe (Shirafude Ichimonji) [2 sacrifices]" },
        { name: "Ichibe (Shirafude Ichimonji)", img: "bleach1/ichibe1.jpg" },
        { name: "Yamamoto", img: "bleach1/yamamoto.jpg", nextForm: "Yamamoto (Zanka no Tachi)", cost: 2, tip: "⚡ AWAKENS → Yamamoto (Zanka no Tachi) [2 sacrifices]" },
        { name: "Yamamoto (Zanka no Tachi)", img: "bleach1/yamamoto1.jpg" },
        { name: "Senjumaru", img: "bleach1/senjumaru.jpg", nextForm: "Senjumaru (Shatatsu Karagara Shigarami no Tsuji)", cost: 2, tip: "⚡ AWAKENS → Senjumaru (Shatatsu Karagara Shigarami no Tsuji) [2 sacrifices]" },
        { name: "Senjumaru (Shatatsu Karagara Shigarami no Tsuji)", img: "bleach1/senjumaru1.jpg" },
        { name: "Urahara", img: "bleach1/urahara.jpg", nextForm: "Urahara (Kannonbiraki Benihime Aratame)", cost: 2, tip: "⚡ AWAKENS → Urahara (Kannonbiraki Benihime Aratame) [2 sacrifices]" },
        { name: "Urahara (Kannonbiraki Benihime Aratame)", img: "bleach1/urahara1.jpg" },
    ],

    ultra: [
        { name: "Ichigo", img: "bleach1/ichigo.jpg", nextForm: "Ichigo (Tensa Zangetsu)", cost: 2, tip: "⚡ AWAKENS → Ichigo (Tensa Zangetsu) [1 sacrifices]" },
        { name: "Ichigo (Tensa Zangetsu)", img: "bleach1/ichigo1.jpg", nextForm: "Ichigo (Hollow Mask)", cost: 1, tip: "⚡ AWAKENS → Ichigo (Hollow Mask) [1 sacrifices]" },
        { name: "Ichigo (Hollow Mask)", img: "bleach1/ichigo2.jpg", nextForm: "Ichigo (Vasto Lorde)", cost: 1, tip: "⚡ AWAKENS → Ichigo (Vasto Lorde) [1 sacrifices]" },
        { name: "Ichigo (Vasto Lorde)", img: "bleach1/ichigo3.jpg", nextForm: "Ichigo (True Bankai)", cost: 2, tip: "⚡ AWAKENS → Ichigo (True Bankai) [2 sacrifices]" },
        { name: "Ichigo (True Bankai)", img: "bleach1/ichigo4.jpg" },
        { name: "Aizen", img: "bleach1/aizen.jpg", nextForm: "Aizen (Hōgyoku)", cost: 2, tip: "⚡ AWAKENS → Aizen (Hōgyoku) [2 sacrifices]" },
        { name: "Aizen (Hōgyoku)", img: "bleach1/aizen2.jpg", nextForm: "Aizen (Final Form)", cost: 3, tip: "⚡ AWAKENS → Aizen (Final Form) [3 sacrifices]" },
        { name: "Aizen (Final Form)", img: "bleach1/aizen3.jpg" },
        { name: "Yhwach", img: "bleach1/Yhwach.jpg", nextForm: "Yhwach (All Mighty)", cost: 4, tip: "⚡ AWAKENS → Yhwach (All Mighty) [4 sacrifices]" },
        { name: "Yhwach (All Mighty)", img: "bleach1/yhwach1.jpg" }
    ]
},
    MHA: {
        common: [
            { name: "Mineta", img: "mha/mineta.jpg" }, { name: "Sero", img: "mha/sero.jpg" },
            { name: "Aoyama", img: "mha/aoyama.jpg" }, { name: "Hagakure", img: "mha/hagakure.jpg" },
            { name: "Ojiro", img: "mha/ojiro.jpg" }, { name: "Koda", img: "mha/koda.jpg" },
            { name: "Sato", img: "mha/sato.jpg" }, { name: "Ashido", img: "mha/Ashido.jpg" },
            { name: "Awase", img: "mha/awase.jpg" }, { name: "Shoji", img: "mha/shoji.jpg" },
            { name: "Tsuyu", img: "mha/tsuyu.jpg" }, { name: "Uraraka", img: "mha/uraraka.jpg" },
            { name: "Iida", img: "mha/iida.jpg" }, { name: "Jirou", img: "mha/jirou.jpg" },
            { name: "Kaminari", img: "mha/kaminari.jpg" }, { name: "Yaoyorozu", img: "mha/yaoyorozu.jpg" },
            { name: "Yanagi", img: "mha/yanagi.jpg" }, { name: "Monoma", img: "mha/monoma.jpg" },
            { name: "Shishida", img: "mha/shishida.jpg" }, { name: "Tetsutetsu", img: "mha/tetsutetsu.jpg" }
        ],
        rare: [
            { name: "Gang Orca", img: "mha/gangorca.jpg" }, { name: "Wash", img: "mha/wash.jpg" },
            { name: "Kamui Woods", img: "mha/kamuiwoods.jpg" }, { name: "Mt. Lady", img: "mha/mtlady.jpg" },
            { name: "Midnight", img: "mha/midnight.jpg" }, { name: "Thirteen", img: "mha/thirteen.jpg" },
            { name: "Cementoss", img: "mha/cementoss.jpg" }, { name: "Present Mic", img: "mha/presentmic.jpg" },
            { name: "Ectoplasm", img: "mha/ectoplasm.jpg" }, { name: "Snipe", img: "mha/snipe.jpg" },
            { name: "Hound Dog", img: "mha/hounddog.jpg" }, { name: "Power Loader", img: "mha/power loader.jpg" },
            { name: "Spinner", img: "mha/spinner.jpg" }, { name: "Mustard", img: "mha/mustard.jpg" },
            { name: "Magne", img: "mha/magne.jpg" }, { name: "Twice", img: "mha/twice.jpg" },
            { name: "Toga", img: "mha/toga.jpg" }, { name: "Mr. Compress", img: "mha/mrcompress.jpg" },
            { name: "Moonfish", img: "mha/moonfish.jpg" }, { name: "Muscular", img: "mha/muscular.jpg"}
        ],
        epic: [
            { name: "Kirishima", img: "mha/kirishima.jpg" }, { name: "Tokoyami", img: "mha/tokoyami.jpg" },
            { name: "Kendo", img: "mha/kendo.jpg" }, { name: "Suneater", img: "mha/suneater.jpg" },
            { name: "Nejire", img: "mha/nejire.jpg" }, { name: "Lemillion", img: "mha/lemillion.jpg" },
            { name: "Mirko", img: "mha/mirko.jpg" },  { name: "Gran Torino", img: "mha/grantorino.jpg" },
            { name: "Gentle Criminal", img: "mha/gentle.jpg" }, { name: "Stain", img: "mha/stain.jpg" },
            { name: "Lady Nagant", img: "mha/ladynagant.jpg" }, { name: "Crust", img: "mha/crust.jpg" },
            { name: "Vlad King", img: "mha/vladking.jpg" }, { name: "Fat Gum", img: "mha/fatgum.jpg" }
        ],
        mythic: [
            { name: "Todoroki", img: "mha/todoroki.jpg", tier: "mythic" },
            { name: "Eraserhead", img: "mha/eraserhead.jpg", tier: "mythic" },
             { name: "Dabi", img: "mha/dabi.jpg" },
            { name: "Hawks", img: "mha/hawks.jpg", tier: "mythic" },
            { name: "Best Jeanist", img: "mha/bestjeanist.jpg", tier: "mythic" },
            { name: "Edgeshot", img: "mha/edgeshot.jpg", tier: "mythic" },
            { name: "Re-Destro", img: "mha/redestro.jpg", tier: "mythic" },
            { name: "Kurogiri", img: "mha/kurogiri.jpg", tier: "mythic" }
        ],
        legendary: [
            { name: "Star & Stripe", img: "mha/starandstripe.jpg", tier: "legendary" },
            { name: "Deku (OFA)", img: "mha/deku.jpg", tier: "legendary" },
            { name: "Bakugo", img: "mha/bakugo.jpg", tier: "lege" },
            { name: "Endeavor", img: "mha/endeavor.jpg", tier: "legendary" },
            { name: "Shigaraki", img: "mha/shigaraki.jpg", tier: "legendary" },
            { name: "Gigantomachia", img: "mha/gigantomachia.jpg", tier: "legendary" },
            { name: "Nine", img: "mha/nine.jpg", tier: "legendary" },
        ],
        ultra: [
            { name: "AFO", img: "mha/afo.jpg", tier: "ultra" },
            {name: "All Might", img: "mha/allmight.jpg", tier: "ultra" },
        ]
    },
    FireForce: {
        common: [
            { name:"Yu", img: "fireforce/Yu.jpg" },
            { name: "Conehead",    img: "fireforce/conehead.jpg" },
            { name:"Raffles III",       img: "fireforce/RafflesIII.jpg" },
            { name: "5th Angels Three",   img: "fireforce/5thAngels.jpg" },
            { name: "Amon",        img: "fireforce/amon.jpg" },
            { name: "Tojo",        img: "fireforce/Tojo.jpg" },
            { name: "Asako",       img: "fireforce/Asako.jpg" },
            { name: "Ooguro",     img: "fireforce/Ooguro.jpg" },
            { name: "Schop",       img: "fireforce/Schop.jpg" },
            { name: "Flail",       img: "fireforce/Flail.jpg" },
            { name: "Mamoru",      img: "fireforce/Mamoru.jpg" },
            { name: "Setsuo",      img: "fireforce/Setsuo.jpg" },
            { name: "Licht",       img: "fireforce/Licht.jpg" },
            { name: "Pan ko Paat", img: "fireforce/Pan.jpg" },
            { name: "Toru",        img: "fireforce/Toru.jpg" },
        ],
        rare: [
            { name:"Yata", img: "fireforce/Yata.jpg" },
            { name: "Haran", img: "fireforce/Haran.jpg" },
            { name:"Onyango", img: "fireforce/Onyango.jpg" },
            { name:"Dominions", img: "fireforce/Dominions.jpg" },
            { name: "Huo Yan Li", img: "fireforce/HuoYanLi.jpg" },
            { name: "Lisa",   img: "fireforce/Lisa.jpg" },
            { name: "Obi",    img: "fireforce/Obi.jpg" },
            { name: "Vulcan", img: "fireforce/Vulcan.jpg" },
            { name: "Iris",   img: "fireforce/Iris.jpg" },
            { name: "Karin",  img: "fireforce/Karin.jpg" },
            { name: "Kayoko", img: "fireforce/Kayoko.jpg" },
            { name: "Mirage", img: "fireforce/Mirage.jpg" },
            { name: "Sasori", img: "fireforce/Sasori.jpg" },
            { name: "Iron",   img: "fireforce/Iron.jpg" },
            { name: "Orochi", img: "fireforce/Orochi.jpg" },
            { name: "Rekka",  img: "fireforce/Rekka.jpg" },
        ],
        epic: [
            { name: "Honda",  img: "fireforce/Honda.jpg" },
            { name: "Maki",   img: "fireforce/Maki.jpg" },
            { name: "Karim",  img: "fireforce/Karim.jpg" },
            { name: "Nataku", img: "fireforce/Nataku.jpg" },
            { name: "Hibana", img: "fireforce/Hibana.jpg" },
            { name: "Tamaki", img: "fireforce/Tamaki.jpg" },
            { name: "Hinawa", img: "fireforce/Hinawa.jpg" },
            { name: "Takeru", img: "fireforce/Takeru.jpg" },
            { name: "Inca",   img: "fireforce/Inca.jpg" },
            { name: "Ogun",   img: "fireforce/Ogun.jpg" },
            { name: "Assault",img: "fireforce/Assault.jpg" },
            { name: "Ritsu",  img: "fireforce/Ritsu.jpg" },
        ],
        mythic: [
            { name: "Konro",    img: "fireforce/Konro.jpg",    tier: "mythic" },
            { name: "Giovanni", img: "fireforce/Giovanni.jpg", tier: "mythic" },
            { name: "Hauge",    img: "fireforce/Hauge.jpg",    tier: "mythic" },
            { name: "Kurono",   img: "fireforce/Kurono.jpg",   tier: "mythic" },
            { name: "Sumire",   img: "fireforce/Sumire.jpg",   tier: "mythic" },
            { name: "Arrow",    img: "fireforce/Arrow.jpg",    tier: "mythic" },
            { name: "Yona",     img: "fireforce/Yona.jpg",     tier: "mythic" },
            { name: "Gold",     img: "fireforce/Gold.jpg",     tier: "mythic" },
            { name: "Tempe",    img: "fireforce/tempe.jpg",    tier: "mythic" },
        ],
        legendary: [
            { name: "Joker",     img: "fireforce/Joker.jpg",    tier: "legendary" },
            { name: "Amaterasu", img: "fireforce/Amaterasu.jpg", tier: "legendary" },
            { name: "Charon",    img: "fireforce/Charon.jpg",   tier: "legendary" },
            { name: "Burns",     img: "fireforce/Burns.jpg",    tier: "legendary", nextForm: "Burns (Stage 5)", cost: 2, tip: "⚡ AWAKENS → Burns (Stage 5) [2 sacrifices]" },
            { name: "Burns (Adolla Burst)", img: "fireforce/burns1.jpg", tier: "legendary" },
            { name: "Sho",       img: "fireforce/Sho.jpg",      tier: "legendary" },
            { name: "Faerie",    img: "fireforce/Faerie.jpg",   tier: "legendary" },
            { name: "Hibachi",   img: "fireforce/Hibachi.jpg",  tier: "legendary", nextForm: "Hibachi (Doppleganger)", cost: 2, tip: "⚡ AWAKENS → Hibachi (Doppleganger) [2 sacrifices]" },
            { name: "Hibachi (Doppleganger)", img: "fireforce/Hibachi1.jpg", tier: "legendary" },
        ],
        ultra: [
            { name: "Shinra", img: "fireforce/Shinra.jpg", tier: "ultra", nextForm: "Shinra (Adolla Burst)", cost: 1, tip: "⚡ AWAKENS → Shinra (Adolla Burst) [1 sacrifices]" },
            { name: "Shinra (Adolla Burst)", img: "fireforce/shinra1.jpg", tier: "ultra", nextForm: "Shinrabanshōman", cost: 2, tip: "⚡ AWAKENS → Shinrabanshōman [2 sacrifices]" },
            { name: "Shinrabanshōman", img: "fireforce/shinra2.jpg", tier: "ultra" },
            { name: "Arthur", img: "fireforce/Arthur.jpg", tier: "ultra", nextForm: "Arthur (Knight King)", cost: 2, tip: "⚡ AWAKENS → Arthur (Knight King) [2 sacrifices]" },
            { name: "Arthur (Knight King)", img: "fireforce/Arthur1.jpg", tier: "ultra" },
            { name: "Benimaru", img: "fireforce/Benimaru.jpg", tier: "ultra", nextForm: "Benimaru (Nichirin Akatsuki)", cost: 2, tip: "⚡ AWAKENS → Benimaru (Nichirin Akatsuki) [2 sacrifices]" },
            { name: "Benimaru (Nichirin Akatsuki)", img: "fireforce/benimaru1.jpg", tier: "ultra" },
            { name: "Haumea",    img: "fireforce/Haumea.jpg",   tier: "ultra", nextForm: "Haumea (Final Form)", cost: 2, tip: "⚡ AWAKENS → Haumea (Final Form) [2 sacrifices]" },
            { name: "Haumea (Final Form)", img: "fireforce/Haumea1.jpg", tier: "ultra" },
            { name: "Dragon",    img: "fireforce/Dragon.jpg",    tier: "ultra", nextForm: "Dragon (Final Form)", cost: 2, tip: "⚡ AWAKENS → Dragon (Final Form) [2 sacrifices]"   },
            { name: "Dragon (Final Form)", img: "fireforce/Dragon1.jpg", tier: "ultra" }
        ]
    }
}

// =============================================================
// ABILITY MODE — character abilities lookup table
// Each entry: { icon, name, desc, type }
// Types:
//   dodge    — passive: X% chance to survive an incoming attack
//   shield   — passive: block first attack, then ability is gone
//   sniper   — active: attack any tile (not just adjacent)
//   swap     — active: swap this unit with any allied unit on board
//   freeze   — active: target enemy unit skips their next 1 turn
//   regen    — passive: when this unit wins an attack, draw 1 card
//   drain    — active: steal 1 card from opponent's hand
//   aoe      — active: attack an enemy AND deal damage to one random adjacent enemy too
//   revive   — passive: when eliminated, returns to hand once
//   copy     — active: clone the selected board enemy into your hand
//   immunity — passive: immune to freeze and drain
//   inspire  — active: any adjacent ally gets +1 free move this turn
// =============================================================
const ABILITIES = {
    // ═══════════════════════════════════════
    // JJK — ABILITY MODE ONLY (see JJK_ABILITIES below)
    // ═══════════════════════════════════════
    
    // ——— Demon Slayer ———
    "Zenitsu":        { icon:"⚡", name:"Thunderclap Flash",  desc:"DODGE — 45% dodge. Attacks before opponent.", type:"dodge", chance:0.45 },
    "Inosuke":        { icon:"🐗", name:"Beast Breathing",    desc:"AOE — Dual blades hit target + 1 adjacent enemy.", type:"aoe" },
    "Tanjiro":        { icon:"💧", name:"Water Breathing",    desc:"SHIELD — Constant Flux blocks one incoming attack.", type:"shield" },
    "Kanao":          { icon:"👁️", name:"Flower Breathing",  desc:"DODGE — 40% dodge chance.", type:"dodge", chance:0.40 },
    "Shinobu":        { icon:"🦋", name:"Wisteria Poison",    desc:"FREEZE — Poisons an enemy: they skip their next turn.", type:"freeze" },
    "Genya":          { icon:"🔫", name:"Demon Absorption",   desc:"SHIELD — Eats demon flesh: absorbs one hit.", type:"shield" },
    "Rengoku":        { icon:"🔥", name:"Flame Breathing",    desc:"AOE — Flame Pillar: hits target + all adjacent enemies.", type:"aoe" },
    "Muichiro":       { icon:"🌫️", name:"Mist Breathing",    desc:"DODGE — 50% dodge.", type:"dodge", chance:0.50 },
    "Mitsuri":        { icon:"💕", name:"Love Breathing",     desc:"SNIPER — Flexible blade: attack any enemy on the board.", type:"sniper" },
    "Obanai":         { icon:"🐍", name:"Serpent Breathing",  desc:"FREEZE — Twisting strike: target skips next turn.", type:"freeze" },
    "Gyomei":         { icon:"🪨", name:"Stone Breathing",    desc:"SHIELD — Stone-hard skin: immune to first 2 attacks.", type:"shield", charges:2 },
    "Sanemi":         { icon:"💨", name:"Wind Breathing",     desc:"AOE — Cyclone Cutter: hits target + 2 random adjacent enemies.", type:"aoe" },
    "Giyu":           { icon:"💧", name:"Dead Calm",          desc:"DODGE — 55% dodge chance.", type:"dodge", chance:0.55 },
    "Tengen":         { icon:"💥", name:"Sound Breathing",    desc:"AOE — Explosion: attack hits target + all adjacent.", type:"aoe" },
    "Akaza":          { icon:"🌸", name:"Compass Needle",     desc:"DODGE — 45% dodge. Regenerates: revives once.", type:"dodge", chance:0.45, revive:true },
    "Douma":          { icon:"❄️", name:"Cryogenic Aura",     desc:"FREEZE — Freezes target for 2 turns.", type:"freeze", turns:2 },
    "Kokushibo":      { icon:"🌙", name:"Moon Breathing",     desc:"AOE — Moon-Splitting Slash hits target + all adjacents.", type:"aoe" },
    "Yorichi":        { icon:"☀️", name:"Sun Breathing",      desc:"DODGE — 70% dodge. AOE on attack. Immune to all effects.", type:"dodge", chance:0.70, immunity:true },
    "Muzan":          { icon:"🩸", name:"Demon Blood Art",    desc:"DRAIN — Drains life: steal 1 card AND 50% dodge.", type:"drain", bonus:"dodge", chance:0.50 },
    "Nezuko":         { icon:"🎋", name:"Demon Art",          desc:"SHIELD — Bamboo muzzle: blocks first attack.", type:"shield" },
    "Daki":           { icon:"🎀", name:"Obi Sash Manipulation",desc:"FREEZE — Wraps an enemy: they skip next turn.", type:"freeze" },
    "Gyutaro":        { icon:"🩸", name:"Blood Sickles",      desc:"AOE — Poison arc: hits target + 1 adjacent.", type:"aoe" },

    // ——— One Piece ———
    "Luffy":          { icon:"👊", name:"Gomu Gomu no Mi",    desc:"DODGE — 40% dodge (rubber body deflects attacks).", type:"dodge", chance:0.40 },
    "Luffy (Gear 2&3)":{ icon:"💨", name:"Gear Second",      desc:"DODGE — 50% dodge + sniper range.", type:"dodge", chance:0.50 },
    "Luffy (Gear 4(Bounceman))":{ icon:"💪", name:"Gear Fourth", desc:"DODGE — 55% dodge + AOE on attack.", type:"dodge", chance:0.55 },
    "Luffy (Gear 5)": { icon:"🌀", name:"Gear Five",         desc:"DODGE — 65% dodge. Immune. AOE.", type:"dodge", chance:0.65, immunity:true },
    "Zoro":           { icon:"⚔️", name:"Three Sword Style",  desc:"AOE — Attacks target + 1 adjacent enemy.", type:"aoe" },
    "Zoro (Conqueror's Haki)": { icon:"👑", name:"King of Hell", desc:"AOE — Hits target + ALL adjacent. 40% dodge.", type:"aoe", bonus:"dodge", chance:0.40 },
    "Sanji":          { icon:"🦵", name:"Diable Jambe",       desc:"AOE — Flambage Shot hits target + 1 adjacent.", type:"aoe" },
    "Sanji (Ifrit Jambe)": { icon:"🔥", name:"Ifrit Jambe",  desc:"AOE — Blazing assault hits all adjacents.", type:"aoe" },
    "Law":            { icon:"🏥", name:"Op-Op Fruit",        desc:"SWAP — Room: swap any two units on the board.", type:"swap" },
    "Law (Awakened)": { icon:"⚡", name:"Awakened Op-Op",     desc:"COPY — Amputate & steal: copy any enemy into your hand.", type:"copy" },
    "Enel":           { icon:"⚡", name:"Goro Goro no Mi",    desc:"SNIPER — Lightning strike: attack any unit on the board.", type:"sniper" },
    "Doflamingo":     { icon:"🕸️", name:"Birdcage",          desc:"FREEZE — Trapped in Birdcage: target skips 1 turn.", type:"freeze" },
    "Doflamingo (Awakened)": { icon:"🕸️", name:"God Thread", desc:"FREEZE — ALL enemies skip their next turn.", type:"freeze" },
    "Crocodile (Awakened)": { icon:"🏜️", name:"Sables",      desc:"AOE — Sand storm: hits target + ALL adjacents.", type:"aoe" },
    "Katakuri":       { icon:"🔮", name:"Mochi Mochi",        desc:"DODGE — Future sight: 55% dodge.", type:"dodge", chance:0.55 },
    "Katakuri (Awakened)": { icon:"🔮", name:"Awakened Mochi",desc:"DODGE — 65% dodge. AOE on attack.", type:"dodge", chance:0.65 },
    "Big Mom":        { icon:"⚡", name:"Soul Soul Fruit",     desc:"DRAIN — Steals soul: steal 1 card from opponent.", type:"drain" },
    "Big Mom (Awakened)": { icon:"⚡", name:"Mama Hulk",     desc:"AOE + DRAIN — AOE attack AND steal 1 card.", type:"aoe" },
    "Kaido":          { icon:"🐉", name:"Dragon Dragon Fruit", desc:"SHIELD — Dragon scales: blocks first hit.", type:"shield" },
    "Kaido (Dragon)": { icon:"🐉", name:"Boro Breath",        desc:"AOE — Breath of fire hits all adjacents.", type:"aoe" },
    "Kaido (Awakened)":{ icon:"🌀", name:"Bolo Breath Ultra", desc:"DODGE — 50% dodge. AOE on attack.", type:"dodge", chance:0.50 },
    "Blackbeard":     { icon:"🌑", name:"Yami Yami no Mi",    desc:"DRAIN — Darkness absorbs: steal 1 card AND 30% dodge.", type:"drain", bonus:"dodge", chance:0.30 },
    "Blackbeard (Awakened)": { icon:"🌑", name:"Dual Darkness", desc:"DRAIN — Steal 2 cards. 40% dodge.", type:"drain", count:2, bonus:"dodge", chance:0.40 },
    "Rayleigh":       { icon:"👑", name:"Conqueror's Haki",   desc:"FREEZE — Supreme haki: freezes all adjacent enemies for 1 turn.", type:"freeze" },
    "Shanks":         { icon:"👑", name:"Haoshoku Haki",      desc:"FREEZE — Supreme Conqueror's Haki freezes ALL enemies for 1 turn.", type:"freeze" },
    "Mihawk":         { icon:"⚔️", name:"Black Blade",        desc:"SNIPER — Slashes through the air: attack any enemy on board.", type:"sniper" },
    "Whitebeard":     { icon:"🌊", name:"Gura Gura no Mi",    desc:"AOE — Earthquake: hits ALL enemies adjacent to Whitebeard.", type:"aoe" },
    "Roger":          { icon:"👑", name:"Dawn of a New Age",  desc:"DODGE — 60% dodge. Immune to all effects.", type:"dodge", chance:0.60, immunity:true },
    "Garp":           { icon:"👊", name:"Fist of Love",        desc:"AOE — Galaxy Impact: hits target + all adjacents.", type:"aoe" },
    "Fujitora":       { icon:"⭐", name:"Gravity Fruit",      desc:"FREEZE — Crushes enemy with gravity: skip 1 turn.", type:"freeze" },
    "Akainu":         { icon:"🌋", name:"Magu Magu no Mi",    desc:"AOE — Absolute Justice: hits target + all adjacents.", type:"aoe" },
    "Kizaru":         { icon:"💡", name:"Pika Pika no Mi",    desc:"SNIPER — Speed of light: attack any enemy anywhere.", type:"sniper" },
    "Kuzan":          { icon:"❄️", name:"Hie Hie no Mi",      desc:"FREEZE — Flash-freezes target for 2 turns.", type:"freeze", turns:2 },
    "Sabo":           { icon:"🔥", name:"Mera Mera no Mi",    desc:"AOE — Fire Fist: hits target + 1 adjacent.", type:"aoe" },
    "Marco":          { icon:"🔥", name:"Phoenix Fruit",      desc:"REVIVE — Regenerates: returns to hand once when defeated.", type:"revive" },
    "Robin":          { icon:"🌸", name:"Hana Hana no Mi",    desc:"AOE — Sprouting arms everywhere: hits all adjacent enemies.", type:"aoe" },

    // ——— MHA ———
    "Eraserhead":     { icon:"👁️", name:"Erasure",            desc:"FREEZE — Erases a Quirk: target skips next turn.", type:"freeze" },
    "Dabi":           { icon:"🔥", name:"Blueflame",          desc:"AOE — Cremation: hits target + all adjacents.", type:"aoe" },
    "Todoroki":       { icon:"❄️", name:"Half-Cold Half-Hot", desc:"AOE + FREEZE — Freezes target AND hits adjacents with fire.", type:"aoe" },
    "Hawks":          { icon:"🪶", name:"Fierce Wings",       desc:"SNIPER — Feather blades: attack any enemy on board.", type:"sniper" },
    "Shigaraki":      { icon:"💀", name:"Decay",              desc:"AOE — Decay spreads: hits target + all adjacents.", type:"aoe" },
    "AFO":            { icon:"🖤", name:"All For One",         desc:"COPY — Steal any Quirk: copy any enemy on board.", type:"copy" },
    "All Might":      { icon:"💥", name:"United States of Smash", desc:"AOE — Hits ALL enemies on adjacent tiles.", type:"aoe" },
    "Deku (OFA)":     { icon:"💚", name:"One For All",        desc:"AOE + DODGE — 45% dodge + AOE on attacks.", type:"dodge", chance:0.45 },
    "Bakugo":         { icon:"💥", name:"Explosion",          desc:"AOE — Howitzer Impact: hits target + all adjacents.", type:"aoe" },
    "Endeavor":       { icon:"🔥", name:"Prominence Burn",    desc:"SNIPER — Hellflame: attack any enemy on board.", type:"sniper" },
    "Togata":         { icon:"👻", name:"Permeation",         desc:"DODGE — 55% dodge (phases through attacks).", type:"dodge", chance:0.55 },
    "Mirko":          { icon:"🌕", name:"Rabbit Kick",        desc:"AOE — Moon Crest hits target + 1 adjacent.", type:"aoe" },
    "Stain":          { icon:"🩸", name:"Bloodcurdle",        desc:"FREEZE — Licks blood: target paralysed for 2 turns.", type:"freeze", turns:2 },
    "Best Jeanist":   { icon:"🧵", name:"Fiber Master",       desc:"FREEZE — Restrains all adjacent enemies: skip 1 turn.", type:"freeze" },
    "Twice":          { icon:"👥", name:"Double",              desc:"COPY — Duplicate: copy any enemy on board.", type:"copy" },
    "Toga":           { icon:"🩸", name:"Transform",          desc:"COPY — Becomes target: copy any enemy unit.", type:"copy" },
    "Kurogiri":       { icon:"🌫️", name:"Warp Gate",          desc:"SWAP — Teleport: swap this unit with any ally.", type:"swap" },
    "Re-Destro":      { icon:"😤", name:"Stress Stockpile",   desc:"SHIELD — Stress armour: absorbs first 2 hits.", type:"shield", charges:2 },
    "Star & Stripe":  { icon:"🇺🇸", name:"New Order",         desc:"FREEZE — Sets a rule: target cannot act for 2 turns.", type:"freeze", turns:2 },
    "Gigantomachia":  { icon:"🗻", name:"Loyalty Charge",     desc:"SHIELD — Impenetrable hide: blocks first 2 attacks.", type:"shield", charges:2 },
    "Lady Nagant":    { icon:"🔫", name:"Rifle Quirk",        desc:"SNIPER — Precision shot: attack any enemy on board.", type:"sniper" },
    "Nine":           { icon:"🌩️", name:"Weather Manipulation",desc:"AOE — Storm strike: hits target + all adjacents.", type:"aoe" },
    "Tokoyami":       { icon:"🌑", name:"Dark Shadow",        desc:"SHIELD — Dark Shadow shields: blocks first hit.", type:"shield" },
    "Kirishima":      { icon:"🪨", name:"Red Riot Unbreakable",desc:"SHIELD — Hardened skin: blocks first 2 hits.", type:"shield", charges:2 },

    // ——— HxH ———
    "Killua":         { icon:"⚡", name:"Godspeed",            desc:"DODGE — 55% dodge (moves at lightning speed).", type:"dodge", chance:0.55 },
    "Killua (Godspeed)": { icon:"⚡", name:"Lightning Speed",  desc:"DODGE — 70% dodge. Immune to all effects.", type:"dodge", chance:0.70, immunity:true },
    "Gon":            { icon:"🌿", name:"Jajanken",            desc:"AOE — Rock: blasts target + 1 adjacent.", type:"aoe" },
    "Gon (Adult)":    { icon:"🌑", name:"Adult Gon",           desc:"AOE — Releases all Nen: hits ALL adjacents.", type:"aoe" },
    "Kurapika":       { icon:"🔗", name:"Chain Jail",          desc:"FREEZE — Chains Spiders: target skips next 2 turns.", type:"freeze", turns:2 },
    "Kurapika (Emperor Time)": { icon:"👁️", name:"Emperor Time", desc:"COPY — Steal Nen: copy any enemy into hand.", type:"copy" },
    "Hisoka":         { icon:"🃏", name:"Bungee Gum",          desc:"SWAP — Pulls target: swap with any unit anywhere.", type:"swap" },
    "Chrollo":        { icon:"📖", name:"Skill Hunter",        desc:"COPY — Steals ability: copy any enemy on board.", type:"copy" },
    "Chrollo (Hatsu Unleashed)": { icon:"📖", name:"Bandit's Secret",desc:"COPY — Copy 2 enemies simultaneously.", type:"copy", count:2 },
    "Illumi":         { icon:"📍", name:"Needle People",       desc:"FREEZE — Control needle: target skips 2 turns.", type:"freeze", turns:2 },
    "Feitan":         { icon:"☀️", name:"Pain Packer",         desc:"REVIVE — Rising Sun: when defeated, returns once.", type:"revive" },
    "Feitan (Pain Packer)": { icon:"☀️", name:"Rising Sun",   desc:"AOE — Solar explosion hits all adjacents.", type:"aoe" },
    "Phinks":         { icon:"💪", name:"Ripper Cyclotron",    desc:"AOE — Spinning punch: hits target + 1 adjacent.", type:"aoe" },
    "Youpi":          { icon:"😡", name:"Rage Aura",           desc:"SHIELD — Rage armour: blocks first 2 hits.", type:"shield", charges:2 },
    "Pitou":          { icon:"🐱", name:"Doctor Blythe",       desc:"REGEN — Heals: wins an attack → draw 1 card.", type:"regen" },
    "Shaiapouf":      { icon:"🦋", name:"Bewitching Lifeblood",desc:"COPY — Copies an enemy unit into your hand.", type:"copy" },
    "Meruem":         { icon:"👑", name:"Nen Absorption",      desc:"DRAIN — Absorbs Nen: steal 1 card. 60% dodge.", type:"drain", bonus:"dodge", chance:0.60, immunity:true },
    "Meruem (Post-Rose)": { icon:"👑", name:"Post-Rose Meruem",desc:"DODGE — 75% dodge. Immune. AOE on attack.", type:"dodge", chance:0.75, immunity:true },
    "Netero":         { icon:"🙏", name:"100-Type Guanyin",    desc:"AOE — Bodhisattva slams: hits target + ALL adjacents.", type:"aoe" },
    "Netero (100-Type Guanyin)": { icon:"💥", name:"Zero Hand", desc:"AOE — ALL enemies on the board take hits simultaneously.", type:"aoe" },
    "Zeno":           { icon:"🐉", name:"Dragon Dive",         desc:"SNIPER — Dragon Dive: attack any enemy on board.", type:"sniper" },
    "Zeno (Dragon Dive)": { icon:"🐉", name:"Dragon Head",    desc:"AOE + SNIPER — Attack any enemy, hits all adjacents too.", type:"aoe" },
    "Silva":          { icon:"💀", name:"Transmuter",          desc:"AOE — Silver Star: hits target + 1 adjacent.", type:"aoe" },
    "Ging":           { icon:"🎯", name:"Unknown Nen",         desc:"COPY — Copies any ability: copy any enemy on board.", type:"copy" },
    "Alluka":         { icon:"⭐", name:"Nanika's Wish",       desc:"REVIVE — Grants a wish: any one ally returns to hand once.", type:"revive" },
    "Morel":          { icon:"💨", name:"Deep Purple",         desc:"FREEZE — Smoke soldiers: target skips next turn.", type:"freeze" },
    "Knov":           { icon:"🚪", name:"Hide & Seek",         desc:"SWAP — Teleport door: swap with any ally.", type:"swap" },
    "Shalnark":       { icon:"📡", name:"Black Voice",         desc:"COPY — Puppeteer: copy any enemy into hand.", type:"copy" },

    // ——— Bleach ———
    "Gin (Kamishini no Yari)": { icon:"💫", name:"Kamishini no Yari", desc:"SNIPER — Bankai extends 13 km instantly: attack any enemy on board.", type:"sniper" },
    "Yoruichi":       { icon:"⚡", name:"Flash Goddess",       desc:"DODGE — 60% dodge.", type:"dodge", chance:0.60 },
    "Barragan":       { icon:"💀", name:"Respira",             desc:"FREEZE — Time decay: target skips 2 turns.", type:"freeze", turns:2 },
    "Barragan (Arrogante)": { icon:"💀", name:"Gran Caída",   desc:"FREEZE — Decays ALL adjacent enemies: skip 1 turn.", type:"freeze" },
    "Ulquiorra":      { icon:"🖤", name:"Cero Oscuras",        desc:"SNIPER — Dark Cero: attack any enemy on board.", type:"sniper" },
    "Ulquiorra (Segunda Etapa)": { icon:"🖤", name:"Lanza del Relámpago",desc:"AOE — Javelin explosion hits all adjacents.", type:"aoe" },
    "Starrk":         { icon:"🐺", name:"Los Lobos",           desc:"AOE — Wolf pack: hits target + 2 random adjacents.", type:"aoe" },
    "Grimmjow":       { icon:"🐆", name:"Pantera",             desc:"DODGE — 40% dodge.", type:"dodge", chance:0.40 },
    "Grimmjow (Pantera)": { icon:"🐆", name:"Gran Rey Cero",  desc:"AOE — Massive blast hits all adjacents.", type:"aoe" },
    "Byakuya":        { icon:"🌸", name:"Senbonzakura",        desc:"AOE — Petal storm: hits target + all adjacents.", type:"aoe" },
    "Hitsugaya":      { icon:"❄️", name:"Hyōrinmaru",         desc:"FREEZE — Ice dragon: target frozen for 2 turns.", type:"freeze", turns:2 },
    "Zaraki":         { icon:"💀", name:"Blood Frenzy",        desc:"DODGE — 35% dodge. Revives once.", type:"dodge", chance:0.35, revive:true },
    "Mayuri":         { icon:"🧪", name:"Modified Soul",       desc:"COPY — Clones target: copy any enemy into hand.", type:"copy" },
    "Urahara":        { icon:"🎩", name:"Benihime",            desc:"SHIELD — Blood-mist net: blocks first hit.", type:"shield" },
    "Yamamoto":       { icon:"🔥", name:"Zanka no Tachi",      desc:"AOE — Ash of the flames: hits ALL enemies on board.", type:"aoe" },
    "Aizen":          { icon:"🌀", name:"Kyōka Suigetsu",      desc:"COPY + FREEZE — Illusion: copy any enemy AND freeze 1 adjacent.", type:"copy" },
    "Aizen (Hōgyoku)":{ icon:"🌀", name:"Hōgyoku Evolution",  desc:"DODGE — 55% dodge. Immune.", type:"dodge", chance:0.55, immunity:true },
    "Aizen (Final Form)":{ icon:"🦋", name:"Transcendence",   desc:"DODGE — 70% dodge. Immune. AOE on attack.", type:"dodge", chance:0.70, immunity:true },
    "Yhwach":         { icon:"🌑", name:"Almighty — The Future",desc:"DODGE — 65% dodge. Immune. Sees future attacks.", type:"dodge", chance:0.65, immunity:true },
    "Yhwach (All Mighty)": { icon:"🌑", name:"Schrift A",     desc:"DODGE — 80% dodge. Immune. AOE on every attack.", type:"dodge", chance:0.80, immunity:true },
    "Ichigo":         { icon:"🌙", name:"Getsuga Tenshō",      desc:"AOE — Moon fang: hits target + 1 adjacent.", type:"aoe" },
    "Ichigo (Tensa Zangetsu)": { icon:"🌙", name:"Bankai Getsuga", desc:"DODGE — 45% dodge + AOE.", type:"dodge", chance:0.45 },
    "Ichigo (Hollow Mask)": { icon:"💀", name:"Hollow Power",  desc:"DODGE — 55% dodge. Immune to freeze.", type:"dodge", chance:0.55, immunity:true },
    "Ichigo (Vasto Lorde)": { icon:"🖤", name:"Vasto Lorde",   desc:"AOE — Cero: hits all adjacents.", type:"aoe" },
    "Ichigo (True Bankai)": { icon:"⚡", name:"True Shikai",   desc:"DODGE — 70% dodge. Immune. AOE.", type:"dodge", chance:0.70, immunity:true },
    "Rukia":          { icon:"❄️", name:"Sode no Shirayuki",   desc:"FREEZE — Some no mai: target frozen 1 turn.", type:"freeze" },
    "Soi Fon":        { icon:"🐝", name:"Jakuhō Raikōben",     desc:"SNIPER — Nuclear sting: attack any enemy on board.", type:"sniper" },
    "Shinji":         { icon:"🔄", name:"Inverted World",      desc:"FREEZE — Reversal: target skips next turn.", type:"freeze" },
    "Tousen":         { icon:"🌑", name:"Enma Kōrogi",         desc:"FREEZE — Silence: target can't act for 2 turns.", type:"freeze", turns:2 },
    "Jugram":         { icon:"⚖️", name:"Balance",             desc:"DODGE — 50% dodge.", type:"dodge", chance:0.50 },
    "Tsukishima":     { icon:"📚", name:"Book of the End",     desc:"COPY — Inserts past: copy any unit into hand.", type:"copy" },
    "Kenjaku_bleach": { icon:"🧠", name:"Brain",               desc:"COPY — Bodyjacks an enemy: copy into hand.", type:"copy" },
    "Gremmy":         { icon:"💭", name:"The Visionary",       desc:"REVIVE — Imagines away defeat: returns to hand once.", type:"revive" },

    // ─── Bleach extended ────────────────────────────────────────
    "Tosen":          { icon:"🌑", name:"Enma Kōrogi",                    desc:"SHIELD — Silence bankai: attacker is blinded, blocks first hit.", type:"shield" },
    "Tosen (Awakened)": { icon:"🦟", name:"Resurreccion Suzumushi",        desc:"FREEZE — Resonance scream: target cannot act for 2 turns.", type:"freeze", turns:2 },
    "Komamura":       { icon:"🐺", name:"Tenken",                          desc:"AOE — Giant sword mirrors: hits target + 1 adjacent.", type:"aoe" },
    "Komamura (Kokujō Tengen Myō'ō)": { icon:"🗿", name:"Soul Body Trade", desc:"SHIELD — Trades mortal body: blocks first 3 attacks.", type:"shield", charges:3 },
    "Unohana":        { icon:"🩸", name:"Minazuki",                        desc:"REGEN — Healing acid: wins a fight → draw 1 card.", type:"regen" },
    "Unohana (Minazuki)": { icon:"☠️", name:"True Kenpachi",               desc:"DRAIN — Blood battle: steal 1 card from opponent.", type:"drain" },
    "Renji":          { icon:"🐍", name:"Zabimaru",                        desc:"SNIPER — Segmented blade extends far: attack any adjacent enemy.", type:"sniper" },
    "Renji (Sōō Zabimaru)": { icon:"🐒", name:"Sōō Zabimaru Bankai",      desc:"AOE — Baboon King: hits target + all adjacent enemies.", type:"aoe" },
    "Rukia (Hakka no Togame)": { icon:"🌨️", name:"Hakka no Togame",       desc:"FREEZE — Absolute zero dance: target frozen 2 turns.", type:"freeze", turns:2 },
    "Soi Fon (Jakuhō Raikōben)": { icon:"🐝", name:"Jakuhō Raikōben",     desc:"SNIPER — Nuclear sting: guaranteed kill on any target anywhere.", type:"sniper" },
    "Hitsugaya (Daiguren Hyōrinmaru)": { icon:"🐉", name:"Daiguren Dragon",desc:"AOE — Ice dragon: hits target + all adjacent enemies.", type:"aoe" },
    "Byakuya (Senbonzakura Kageyoshi)": { icon:"🌸", name:"Kageyoshi",     desc:"AOE — Thousand petals: hits all adjacent enemies simultaneously.", type:"aoe" },
    "Mayuri (Konjiki Ashisogi Jizō)": { icon:"🧪", name:"Konjiki Jizō",   desc:"FREEZE — Paralyzing venom: target skips 2 turns.", type:"freeze", turns:2 },
    "Yoruichi (Awakened)": { icon:"⚡", name:"Thunder God Form",            desc:"AOE — Electric armour explodes: hits target + all adjacents.", type:"aoe" },
    "Urahara (Kannonbiraki Benihime Aratame)": { icon:"🎩", name:"Restructure", desc:"COPY — Restructures target's soul: copy any enemy into hand.", type:"copy" },
    "Zaraki (Bankai)": { icon:"👹", name:"Nozarashi Bankai",               desc:"DODGE — 55% dodge. Immense reiatsu deflects all attacks.", type:"dodge", chance:0.55 },
    "Jugram (Weiß)":  { icon:"⚖️", name:"Weiß Schwarz",                   desc:"DRAIN — Steals luck: steal 1 card AND 30% dodge.", type:"drain", bonus:"dodge", chance:0.30 },
    "Yamamoto (Zanka no Tachi)": { icon:"🌅", name:"Zanka no Tachi",       desc:"AOE — Sun's total power: hits ALL enemies on the board.", type:"aoe" },
    "Ichibe (Shirafude Ichimonji)": { icon:"🖌️", name:"Name Thief",        desc:"COPY — Steals name and power: copy any enemy into hand.", type:"copy" },
    "Harribel":       { icon:"💧", name:"Cascada",                         desc:"AOE — Water cascade: hits target + 1 adjacent enemy.", type:"aoe" },
    "Harribel (Tiburón)": { icon:"🦈", name:"Tiburón",                     desc:"DRAIN — Shark frenzy: steal 1 card from opponent.", type:"drain" },
    "Neliel":         { icon:"🦌", name:"Gamuza",                          desc:"DODGE — 40% dodge. Lancer speed evades strikes.", type:"dodge", chance:0.40 },
    "Neliel (Gamuza)":{ icon:"🐎", name:"Cero Doble",                      desc:"AOE — Absorbed and doubled cero: hits target + all adjacents.", type:"aoe" },
    "Nnoitra":        { icon:"🌙", name:"Santa Teresa Hierro",             desc:"SHIELD — Toughest hierro in Hueco Mundo: blocks first 2 hits.", type:"shield", charges:2 },
    "Nnoitra (Santa Teresa)": { icon:"🌙", name:"Five Arm Barrage",        desc:"AOE — Five arms strike all adjacents simultaneously.", type:"aoe" },
    "Szayelaporro":   { icon:"🔬", name:"Fornicarás",                      desc:"COPY — Absorbs and replicates: copy any enemy on the board.", type:"copy" },
    "Szayelaporro (Fornicarás)": { icon:"🧬", name:"Gabriel Rebirth",      desc:"REVIVE — Rebirths through a host: returns to hand once.", type:"revive" },
    "Aaroniero":      { icon:"👁️", name:"Glotonería",                     desc:"COPY — Devours and absorbs: copy any enemy unit.", type:"copy" },
    "Aaroniero (Glotonería)": { icon:"👁️", name:"Nejibana Thousand",      desc:"FREEZE — Thousand tentacles: target skips 2 turns.", type:"freeze", turns:2 },
    "Yammy":          { icon:"💢", name:"Ira Rage",                        desc:"SHIELD — Rage empowers defence: blocks first 2 hits.", type:"shield", charges:2 },
    "Yammy (Ira)":    { icon:"💢", name:"Espada 0 Cero",                   desc:"AOE — Massive cero: hits target + ALL adjacent enemies.", type:"aoe" },
    "Grimmjow (Pantera Segunda Etapa)": { icon:"🐆", name:"Segunda Etapa", desc:"AOE — Pantera released: hits all adjacent enemies.", type:"aoe" },
    "Starrk (Los Lobos)": { icon:"🐺", name:"Los Lobos Pack",              desc:"AOE — Wolf pack surrounds: hits target + 2 random adjacents.", type:"aoe" },
    "Zommari":        { icon:"👁️", name:"Brujería",                       desc:"FREEZE — Amor eye: target paralysed for 1 turn.", type:"freeze" },
    "Zommari (Brujería)": { icon:"👁️", name:"Full Amor",                  desc:"COPY — Dominates soul: copy any enemy unit into hand.", type:"copy" },
    "As Nodt":        { icon:"😱", name:"Tatarforas Fear",                 desc:"FREEZE — Fear thorns: target skips next turn.", type:"freeze" },
    "As Nodt (Tatarforas)": { icon:"😱", name:"Fear Incarnate",            desc:"FREEZE — Absolute fear field: ALL enemies skip next turn.", type:"freeze" },
    "Bambietta":      { icon:"💣", name:"The Explode",                     desc:"AOE — Bomb Quincy: hits target + all adjacent enemies.", type:"aoe" },
    "Candice":        { icon:"⚡", name:"The Thunderbolt",                  desc:"SNIPER — Lightning bolt: attack any enemy on the board.", type:"sniper" },
    "Giselle":        { icon:"🧟", name:"The Zombie",                      desc:"REVIVE — Zombie blood: returns to hand once when defeated.", type:"revive" },
    "Gerard":         { icon:"❤️", name:"The Miracle",                     desc:"SHIELD — Miracles block all damage: blocks first 3 hits.", type:"shield", charges:3 },
    "Gerard (Aschetonig)": { icon:"❤️", name:"Aschetonig",                 desc:"REVIVE — Wounds become power: revives once AND 50% dodge.", type:"revive", bonus:"dodge", chance:0.50 },
    "Lille Barro":    { icon:"🎯", name:"The X-Axis",                      desc:"SNIPER — Infinite piercing: attack any enemy anywhere.", type:"sniper" },
    "Lille Barro (Jilliel)": { icon:"🕊️", name:"Jilliel Judgement",       desc:"AOE — Divine light: hits ALL enemies on the board.", type:"aoe" },
    "Pernida":        { icon:"👁️", name:"Compulsory Nerves",               desc:"FREEZE — Nerve hijack: target skips 2 turns.", type:"freeze", turns:2 },
    "Pernida (Awakened)": { icon:"🧠", name:"Nerve Evolution",             desc:"COPY — Evolves and clones: copy any enemy on the board.", type:"copy" },
    "Askin":          { icon:"☠️", name:"The Deathdealing",                desc:"FREEZE — Lethal dose: target skips next turn.", type:"freeze" },
    "Askin (Hasshain)": { icon:"☠️", name:"Gift Ball Deluxe",              desc:"DRAIN — Lethal gift: steal 2 cards from opponent.", type:"drain", count:2 },
    "Shunsui":        { icon:"🌸", name:"Katen Kyōkotsu",                  desc:"FREEZE — Children's game: target skips their turn.", type:"freeze" },
    "Shunsui (Katen Kyokotsu)": { icon:"🌸", name:"Kagaribi",              desc:"AOE — Dark game rules: hits target + all adjacents.", type:"aoe" },
    "Ukitake":        { icon:"☯️", name:"Mimihagi",                        desc:"SHIELD — Right hand of the Soul King: blocks first hit.", type:"shield" },
    "Ukitake (Mimihagi)": { icon:"☯️", name:"Kamikake",                   desc:"DODGE — 50% dodge. Divine fragment deflects attacks.", type:"dodge", chance:0.50 },
    "Isshin":         { icon:"⚡", name:"Engetsu Getsuga",                  desc:"AOE — Getsuga Tenshō: hits target + 1 adjacent.", type:"aoe" },
    "Oetsu":          { icon:"⚒️", name:"Sayafushi Blade",                 desc:"SNIPER — Sharpest blade ever forged: attack any enemy anywhere.", type:"sniper" },
    "Kirio":          { icon:"🍱", name:"Shin'etsu Myōkaku",               desc:"REGEN — Healing kido: wins a fight → draw 1 card.", type:"regen" },
    "Tenjiro":        { icon:"💊", name:"Shibyaku Inemuri",                 desc:"REVIVE — Instant healing springs: revived from hand once.", type:"revive" },
    "Senjumaru":      { icon:"🧵", name:"Shatatsu Needle Trap",            desc:"FREEZE — Needle prison: target bound for 2 turns.", type:"freeze", turns:2 },
    "Senjumaru (Shatatsu Karagara Shigarami no Tsuji)": { icon:"🌐", name:"Needle Dome", desc:"FREEZE — All enemies trapped for 1 turn.", type:"freeze" },
    "Tokinada":       { icon:"🔮", name:"Enrakyōten Copy",                 desc:"COPY — Copies any ability used: copy any enemy on board.", type:"copy" },
    "Tokinada (Awakened)": { icon:"🔮", name:"Enrakyōten Fullpower",       desc:"AOE — Copies and detonates: hits all adjacent enemies.", type:"aoe" },
    "Hikone":         { icon:"⚡", name:"Ikomikidomoe",                    desc:"DODGE — 45% dodge. Unusual soul deflects attacks.", type:"dodge", chance:0.45 },
    "Hikone (Awakened)": { icon:"💫", name:"Ikomikidomoe Fullpower",       desc:"AOE — Full release: hits target + ALL adjacents.", type:"aoe" },
    "Ginjo":          { icon:"⚡", name:"Cross of Scaffold",               desc:"DRAIN — Fullbring power drain: steal 1 card.", type:"drain" },
    "Orihime":        { icon:"🌸", name:"Sōten Kisshun",                   desc:"SHIELD — Rejection shield: blocks the first incoming attack.", type:"shield" },
    "Chad":           { icon:"💪", name:"El Directo",                      desc:"AOE — Fullbring arm: hits target + 1 adjacent.", type:"aoe" },
    "Uryu":           { icon:"🏹", name:"Heilig Pfeil",                    desc:"SNIPER — Spirit arrow: attack any enemy on the board.", type:"sniper" },
    "Uryu (Quincy Fullbring)": { icon:"🏹", name:"Vollständig",            desc:"AOE — Reishi storm: hits target + ALL adjacents.", type:"aoe" },
    "Kensei":         { icon:"💨", name:"Tekken Tachikaze",                 desc:"DODGE — 40% dodge. Wind fist fusion.", type:"dodge", chance:0.40 },
    "Kensei (Tekken Tachikaze)": { icon:"💨", name:"Gust Barrage",         desc:"AOE — Wind explosion: hits target + all adjacent.", type:"aoe" },
    "Rose":           { icon:"🎸", name:"Kinshara",                        desc:"FREEZE — Illusory music: target stunned for 1 turn.", type:"freeze" },
    "Rose (Kinshara Butōdan)": { icon:"🎵", name:"Golden Espada",          desc:"AOE — Musical chord: hits target + all adjacents.", type:"aoe" },
    "Hisagi":         { icon:"⑨", name:"Kazeshini",                       desc:"DODGE — 35% dodge. Dual-scythe speed.", type:"dodge", chance:0.35 },
    "Bazz-B":         { icon:"🔥", name:"The Burner",                      desc:"SNIPER — Burner finger: attack any enemy on the board.", type:"sniper" },
    "Bazz-B (Awakened)": { icon:"🔥", name:"Burner Inferno",               desc:"AOE — Inferno: hits target + ALL adjacent enemies.", type:"aoe" },
    "Shinji (Sakashima Yokoshima)": { icon:"🔄", name:"Inverted Bankai",   desc:"DODGE — 55% dodge. Full inversion deflects everything.", type:"dodge", chance:0.55 },
    "Rangiku":        { icon:"🌸", name:"Haineko Ash",                     desc:"FREEZE — Ash cat cloud: target cannot act next turn.", type:"freeze" },
    "White Ichigo":   { icon:"🖤", name:"Hollow Getsuga",                  desc:"AOE — Black moon blast: hits target + all adjacents.", type:"aoe" },
    "Wonderweiss":    { icon:"💨", name:"Extinguir",                       desc:"FREEZE — Negates all power: target skips 2 turns.", type:"freeze", turns:2 },
    "Neliel":         { icon:"🦌", name:"Gamuza Lance",                    desc:"DODGE — 40% dodge. Lancer speed evades strikes.", type:"dodge", chance:0.40 },


    // ═══════════════════════════════════════
    "Maki":           { icon:"🔥", name:"Sputter",              desc:"AOE — Shapes surrounding flames into a shield burst: hits all adjacent enemies.", type:"aoe" },
    "Hinawa":         { icon:"🎯", name:"Ballistic Bullet",     desc:"SNIPER — Compresses gunfire into a rail: attack any enemy on the board.", type:"sniper" },
    "Hibana":         { icon:"🌸", name:"Clematis Thorn",       desc:"FREEZE — Ignites petals that pin an enemy: they skip their next turn.", type:"freeze" },
    "Tamaki":         { icon:"🐱", name:"Lucky Lecher Lure",    desc:"DODGE — 40% dodge (enemies always fumble attacks on Tamaki).", type:"dodge", chance:0.40 },
    "Inca":           { icon:"🔮", name:"Trace of Flames",      desc:"COPY — Reads the future: copy any enemy unit on the board into your hand.", type:"copy" },
    "Ogun":           { icon:"⚔️", name:"Ifrit Juga",          desc:"AOE — War-paint Adolla flame hits target + all adjacent enemies.", type:"aoe" },
    "Assault":        { icon:"💨", name:"Blaze Speed",          desc:"DODGE — 50% dodge. Scorched-air propulsion evades all strikes.", type:"dodge", chance:0.50 },
    "Konro":          { icon:"🏯", name:"Crimson Moon",         desc:"SHIELD — Legendary spear blocks the first incoming attack.", type:"shield" },
    "Giovanni":       { icon:"🦾", name:"Pulling Flamethrower", desc:"DRAIN — Mechanical arm yanks a card from opponent's hand.", type:"drain" },
    "Kurono":         { icon:"🌑", name:"Mist of Black Smoke",  desc:"FREEZE — Surrounds enemy in toxic smoke: they skip their next turn.", type:"freeze" },
    "Arrow":          { icon:"🏹", name:"Pressure Railgun",     desc:"SNIPER — Fires a superheated arrow at any enemy anywhere on the board.", type:"sniper" },
    "Hauge":          { icon:"☄️", name:"Hellfire Pillar",      desc:"AOE — Pillar of flame erupts: hits target + all adjacent enemies.", type:"aoe" },
    "Joker":          { icon:"🃏", name:"Devil's Trick",        desc:"COPY — Mirrors fate: copy any enemy unit on the board into your hand.", type:"copy" },
    "Charon":         { icon:"🛡️", name:"Kinetic Absorption",  desc:"SHIELD — Converts all incoming force into power: blocks first 2 hits.", type:"shield", charges:2 },
    "Burns":          { icon:"☀️", name:"Sun Adolla",           desc:"DODGE — 55% dodge. Solar Adolla Burst incinerates incoming attacks.", type:"dodge", chance:0.55 },
    "Sho":            { icon:"❄️", name:"Severed Universe",     desc:"FREEZE — Stops time: all enemies are frozen for 1 turn.", type:"freeze" },
    "Haumea":         { icon:"⚡", name:"Electrokinesis",       desc:"FREEZE — Scrambles enemy's nervous system: target skips 2 turns.", type:"freeze", turns:2 },
    "Faerie":         { icon:"🧚", name:"Adolla Link",          desc:"REVIVE — Adolla connection restores life: returns to hand once.", type:"revive" },
    "Hibachi":        { icon:"🌋", name:"Adolla Burst Origin",  desc:"AOE — First-generation Adolla erupts: hits ALL enemies on the board.", type:"aoe" },
    "Shinra":         { icon:"😈", name:"Devil's Footprints",   desc:"SNIPER — Kicks at light speed: attack any enemy anywhere.", type:"sniper" },
    "Shinra (Adolla Burst)": { icon:"🌌", name:"Adolla Grace",  desc:"DODGE — 65% dodge. Immune. AOE on every attack.", type:"dodge", chance:0.65, immunity:true },
    "Arthur":         { icon:"⚔️", name:"Excalibur",           desc:"AOE — Plasma sword cleaves: hits target + 1 adjacent enemy.", type:"aoe" },
    "Arthur (Sword of Damocles)": { icon:"🌩️", name:"King's Lightning", desc:"AOE — Lightning greatsword hits target + ALL adjacent enemies.", type:"aoe" },
    "Benimaru":       { icon:"👑", name:"Iai Hand Sword",       desc:"DODGE — 60% dodge. Lightning-fast draw evades incoming strikes.", type:"dodge", chance:0.60 },
    "Benimaru (Iai Slash)": { icon:"👑", name:"Combined Ignition", desc:"DODGE — 70% dodge. Immune. AOE on attack.", type:"dodge", chance:0.70, immunity:true },
    "Dragon":         { icon:"🐉", name:"Dragon Adolla",        desc:"SHIELD — Massive body absorbs first 2 hits.", type:"shield", charges:2 },
    "Amaterasu":      { icon:"☀️", name:"Eternal Flame",          desc:"REGEN — Infinite energy source: wins a fight → draw 1 card.", type:"regen" },
    "Tempe":          { icon:"🌊", name:"Water Pillar",            desc:"FREEZE — Floods the area: target skips their next turn.", type:"freeze" },
    "Honda":          { icon:"🌀", name:"Spiral Flame",            desc:"AOE — Rotating fire column hits target + 1 adjacent.", type:"aoe" },
    "Raffles I":      { icon:"📜", name:"First Preacher",          desc:"COPY — Divine knowledge: copy any enemy unit into your hand.", type:"copy" },
    "Evangelist":     { icon:"🌌", name:"Adolla Singular",         desc:"DODGE — 75% dodge. Immune to all effects.", type:"dodge", chance:0.75, immunity:true },
    "Inca (Evangelist)": { icon:"🔮", name:"Destiny's Flame",      desc:"SNIPER — Sees the future path of flame: attack any enemy anywhere.", type:"sniper" },

    // ═══════════════════════════════════════
    // Naruto — every role distinct
    // ═══════════════════════════════════════
    "Shikamaru":       { icon:"🌑", name:"Shadow Possession",      desc:"FREEZE — Capture target in your shadow: skip their next turn.", type:"freeze" },
    "Kisame":          { icon:"🦈", name:"Samehada Drain",          desc:"DRAIN — Absorb chakra: steal 1 card from an opponent.", type:"drain" },
    "Orochimaru":      { icon:"🐍", name:"Body Replacement",        desc:"REVIVE — Regenerates via Edo Tensei: returns to hand once.", type:"revive" },
    "Shisui":          { icon:"👁️", name:"Kotoamatsukami",         desc:"COPY — Subtle genjutsu: copy any enemy on the board.", type:"copy" },
    "Tsunade":         { icon:"💚", name:"Yin Seal",                desc:"SHIELD — Release the seal: block the next incoming attack.", type:"shield" },
    "Jiraya":          { icon:"🐸", name:"Sage Mode",               desc:"DODGE — 45% dodge in sage mode.", type:"dodge", chance:0.45 },
    "Itachi":          { icon:"🌀", name:"Tsukuyomi",               desc:"FREEZE — 72-hour genjutsu world: enemy skips 2 turns.", type:"freeze", turns:2 },
    "Nagato":          { icon:"👼", name:"Shinra Tensei",            desc:"AOE — Gravitational repel hits target + all adjacent enemies.", type:"aoe" },
    "Kabuto":          { icon:"🧬", name:"DNA Replication",         desc:"REGEN — Medical ninjutsu: win a fight → draw 1 card.", type:"regen" },
    "Killer Bee":      { icon:"🐝", name:"Eight Tails Cloak",       desc:"SHIELD — Bijuu armour absorbs one full hit.", type:"shield" },
    "Hiruzen":         { icon:"🏛️", name:"Reaper Death Seal",      desc:"DRAIN — Steals soul: take 1 card. Immune to genjutsu.", type:"drain", immunity:true },
    "Tobirama":        { icon:"💧", name:"Flying Thunder God",       desc:"SWAP — Teleport seal: swap with any ally on the board.", type:"swap" },
    "Danzo":           { icon:"👁️", name:"Izanagi",                 desc:"REVIVE — Izanagi rewrites defeat: returns to hand once.", type:"revive" },
    "Might Guy":       { icon:"🔥", name:"8 Inner Gates",            desc:"AOE — Evening Elephant hits target + all adjacent enemies.", type:"aoe" },
    "Rock Lee":        { icon:"💪", name:"Inner Gates",              desc:"DODGE — 35% dodge chance once the weights are off.", type:"dodge", chance:0.35 },
    "Naruto (Base)":   { icon:"🍥", name:"Shadow Clone",            desc:"AOE — Clone barrage: hits target + 1 random adjacent enemy.", type:"aoe" },
    "Naruto (Sage)":   { icon:"🍥", name:"Sage Rasenshuriken",      desc:"SNIPER — Wind release: attack any enemy anywhere on the board.", type:"sniper" },
    "Naruto (KSM)":    { icon:"🦊", name:"Bijuu Bomb",              desc:"AOE — Tailed Beast Bomb hits target + ALL adjacent enemies.", type:"aoe" },
    "Naruto (Six Paths)": { icon:"✨", name:"Six Paths Truth",      desc:"DODGE — 60% dodge. Immune to all effects.", type:"dodge", chance:0.60, immunity:true },
    "Sasuke (Hebi)":   { icon:"⚡", name:"Chidori",                 desc:"DODGE — 30% dodge on lightning-speed strikes.", type:"dodge", chance:0.30 },
    "Sasuke (MS)":     { icon:"👁️", name:"Amaterasu",               desc:"FREEZE — Black flames lock enemy in place: skip 2 turns.", type:"freeze", turns:2 },
    "Sasuke (Rinnegan)": { icon:"🌀", name:"Amenotejikara",         desc:"SWAP — Dimensional teleport: swap with any unit on the board.", type:"swap" },
    "Madara (Edo)":    { icon:"🌿", name:"Hashirama Cells",         desc:"SHIELD — Living armour: blocks the first incoming attack.", type:"shield" },
    "Madara (Six Paths)": { icon:"🌑", name:"Infinite Tsukuyomi",   desc:"FREEZE — Traps ALL enemies in genjutsu for 1 turn each.", type:"freeze" },
    "Kakashi":         { icon:"⚡", name:"Kamui",                   desc:"FREEZE — Dimension-warp enemy: skip 1 turn.", type:"freeze" },
    "Kakashi (DMS)":   { icon:"👁️", name:"Dual Mangekyo",          desc:"SNIPER — Attack any enemy anywhere + 40% dodge.", type:"sniper", bonus:"dodge", chance:0.40 },
    "Obito":           { icon:"👻", name:"Kamui Phase",              desc:"DODGE — 50% dodge (phases through attacks).", type:"dodge", chance:0.50 },
    "Obito (Juubito)": { icon:"☯️", name:"Ten-Tails Jinchuriki",   desc:"COPY — Absorbs Nen: copy any enemy on the board.", type:"copy" },
    "Minato":          { icon:"⚡", name:"Flying Thunder God",       desc:"SWAP — Seal teleport: swap this unit anywhere instantly.", type:"swap" },
    "Minato (KCM)":    { icon:"⚡", name:"FTG Bijuu Mode",          desc:"AOE — Bijuu Bomb burst hits target + all adjacent enemies.", type:"aoe" },
    "Hashirama":       { icon:"🌳", name:"Wood Dragon",              desc:"SHIELD — Wood dragon coils: absorbs one hit.", type:"shield" },
    "Hashirama (Sage)":{ icon:"🌳", name:"Thousand-Hand Slap",      desc:"AOE — Kannon statue hits ALL enemies on the board.", type:"aoe" },
    "Guy (8 Gates)":   { icon:"🔥", name:"Evening Elephant",         desc:"DODGE — 55% dodge at gate 8 speed. Immune to all effects.", type:"dodge", chance:0.55, immunity:true },
    "Hagoromo":        { icon:"✨", name:"Six Paths of Truth",       desc:"DODGE — 65% dodge. Immune to all debuffs.", type:"dodge", chance:0.65, immunity:true },
    "Kaguya":          { icon:"🌌", name:"All-Killing Ash Bones",   desc:"SNIPER — Bone projectile: eliminate any enemy on the board.", type:"sniper" },
    "Ashura":          { icon:"🌿", name:"Wood Release",             desc:"AOE — Wood golem slams: hits target + 1 adjacent.", type:"aoe" },
    "Indra":           { icon:"⚡", name:"Susanoo",                  desc:"SHIELD — Perfect Susanoo armour blocks first incoming hit.", type:"shield" },
    "Gaara":           { icon:"🏜️", name:"Sand Armour",             desc:"SHIELD — Absolute Defence blocks first 2 incoming hits.", type:"shield", charges:2 },
    "Konan":           { icon:"📄", name:"Paper Shuriken",           desc:"AOE — Six hundred billion paper bombs hit all adjacent enemies.", type:"aoe" },
    "Deidara":         { icon:"💣", name:"C4 Karura",               desc:"AOE — Micro-bomb cloud hits target + all adjacents.", type:"aoe" },
    "Sasori":          { icon:"🎭", name:"Hiruko",                   desc:"FREEZE — Poison scorpion tail: target skips 2 turns.", type:"freeze", turns:2 },
    "Hidan":           { icon:"⛧",  name:"Jashin Ritual",            desc:"REVIVE — Immortal curse: returns to hand once when defeated.", type:"revive" },
    "Kakuzu":          { icon:"🧵", name:"Earth Grudge Fear",        desc:"REGEN — Steals hearts: win a fight → draw 1 card.", type:"regen" },
    "Kimmimaro":       { icon:"🦴", name:"Shikotsumyaku",            desc:"DODGE — 40% dodge. Bone armour hardens against strikes.", type:"dodge", chance:0.40 },
    "Zabuza":          { icon:"🌫️", name:"Hidden Mist",             desc:"FREEZE — Mist shroud: target cannot act next turn.", type:"freeze" },
    "Chiyo":           { icon:"🎎", name:"Puppet Master",            desc:"COPY — Puppeteer technique: copy any enemy into your hand.", type:"copy" },
    "Kisame":          { icon:"🦈", name:"Samehada",                 desc:"DRAIN — Chakra drain: steal 1 card from opponent.", type:"drain" },
};

// JJK abilities are ONLY active in Ability Mode — invisible in Conquest/Showdown
const JJK_ABILITIES = {
    "Hanami":   { icon:"🌿", name:"Flower Field",          desc:"AOE — Roots spread: hits target + one random neighbour.", type:"aoe" },
    "Megumi":   { icon:"🐍", name:"Ten Shadows",            desc:"COPY — Summon a shikigami copy of any nearby enemy.", type:"copy" },
    "Todo":     { icon:"🤜", name:"Boogie Woogie",           desc:"SWAP — Clap and swap with any friendly unit on the board.", type:"swap" },
    "Mei Mei":  { icon:"🐦", name:"Bird Strike",             desc:"SNIPER — Crow relay: attack any enemy anywhere on the board.", type:"sniper" },
    "Nanami":   { icon:"⏰", name:"Overtime",                desc:"REGEN — Win a fight → draw 1 card from the pool.", type:"regen" },
    "Itadori":  { icon:"👊", name:"Divergent Fist",          desc:"AOE — Delayed cursed energy surge: hits target + 1 random adjacent.", type:"aoe" },
    "Naoya":    { icon:"💨", name:"Cursed Speed",             desc:"DODGE — 40% chance to survive any incoming attack.", type:"dodge", chance:0.40 },
    "Toji":     { icon:"🗡️", name:"Heavenly Restriction",   desc:"DODGE — 50% dodge. Immune to all cursed energy effects.", type:"dodge", chance:0.50, immunity:true },
    "Maki":     { icon:"🪄", name:"Heavenly Restriction",    desc:"SHIELD — Blocks the first incoming attack. Immune to curses.", type:"shield" },
    "Hakari":   { icon:"🎰", name:"Jackpot",                 desc:"REVIVE — Infinite loop resets death: returns to hand once.", type:"revive" },
    "Kashimo":  { icon:"⚡", name:"Genju Fission",            desc:"DRAIN — Electricity discharge: steal 1 card from opponent.", type:"drain" },
    "Higuruma": { icon:"⚖️", name:"Deadly Sentencing",       desc:"FREEZE — Court verdict: enemy loses their next turn.", type:"freeze" },
    "Kenjaku":  { icon:"🧠", name:"Body Takeover",            desc:"COPY — Transplant brain: copy any enemy unit into your hand.", type:"copy" },
    "Yuta":     { icon:"💜", name:"Rika",                    desc:"SHIELD — Rika absorbs the first attack against Yuta.", type:"shield" },
    "Mahoraga": { icon:"⚙️", name:"Adapt & Overcome",        desc:"SHIELD — Survives first hit; then gains permanent 30% dodge.", type:"shield" },
    "Sukuna":   { icon:"🔥", name:"Malevolent Shrine",        desc:"AOE — Cleave + Dismantle: hits target AND all adjacent enemies.", type:"aoe" },
    "Gojo":     { icon:"♾️", name:"Infinity",                desc:"DODGE — 70% dodge. Immune to everything.", type:"dodge", chance:0.70, immunity:true },
    "Choso":    { icon:"🩸", name:"Blood Manipulation",       desc:"SNIPER — Piercing Blood: attack any enemy anywhere on the board.", type:"sniper" },
    "Jogo":     { icon:"🌋", name:"Maximum Meteor",           desc:"AOE — Eruption hits target + ALL adjacent enemies.", type:"aoe" },
    "Mahito":   { icon:"👻", name:"Idle Transfiguration",     desc:"COPY — Reshape soul: copy any enemy into your hand.", type:"copy" },
    "Dagon":    { icon:"🌊", name:"Tidal Wave",               desc:"FREEZE — Drowns target: skip their next 2 turns.", type:"freeze", turns:2 },
    "Yorozu":   { icon:"🔮", name:"Construction",             desc:"REGEN — Constructs tools: win a fight → draw 1 card.", type:"regen" },
    "Inumaki Toge": { icon:"🗣️", name:"Cursed Speech",       desc:"FREEZE — Curse-word: target enemy skips their next turn.", type:"freeze" },
};

// Helper: get an ability for a unit by name.
// JJK abilities only exist in ability mode. For all others, walk chain if direct miss.
function getAbility(unitName) {
    if (!unitName) return null;

    // JJK: only available in ability mode
    if (game.abilityMode && selectedVerse === 'JJK' && JJK_ABILITIES[unitName]) return JJK_ABILITIES[unitName];

    // Direct hit in main table
    if (ABILITIES[unitName]) return ABILITIES[unitName];

    // Walk chain — prefer later (stronger) forms
    const chain = getChain(unitName);
    if (chain) {
        let found = null;
        for (const name of chain) {
            if (ABILITIES[name]) found = ABILITIES[name];
            if (game.abilityMode && selectedVerse === 'JJK' && JJK_ABILITIES[name]) found = JJK_ABILITIES[name];
        }
        if (found) return found;
    }
    return null;
}

let game = {
    players: [],
    currentTurn: 0,
    grid: Array(36).fill(null),
    pools: {},
    selection: { type: null, idx: null },
    awakenTarget: null,
    ap: 3,
    log: [],
    mode: 'conquest',
    abilityMode: false,
    frozenUnits: {},
    shieldedUnits: {},
    reviveTracked: {},
    turnCount: 0,
    mySeatIndex: 0,
    votingMode: false,
    showdownTurnsLeft: null,
    showdownActive: false
};

let isAbilityActive = false;
let selectedVerse = 'JJK';

// --- MOVE LOG ---
function addLog(msg) {
    const p = game.players[game.currentTurn];
    game.log.unshift({ text: msg, color: p ? p.color : 'white' });
    if (game.log.length > 30) game.log.pop();
    renderLog();
}

function renderLog() {
    const el = document.getElementById('move-log');
    if (!el) return;
    el.innerHTML = game.log.map(entry =>
        `<div class="log-entry" style="border-left:3px solid ${entry.color}; padding-left:6px; margin-bottom:4px; font-size:11px; color:#ccc;">${entry.text}</div>`
    ).join('');
}

let peer;
let conn;
let isHost = false;

function isMyTurn() {
    if (!conn || !conn.open) return true;
    const myIdx = (typeof game.mySeatIndex === 'number') ? game.mySeatIndex : (isHost ? 0 : 1);
    return game.currentTurn === myIdx;
}

function createOnlineGame(onlineMode) {
    isHost = true;
    game.votingMode = (onlineMode === 'voting');
    window._guestName = 'Player 2';
    const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const modeLabel = game.votingMode ? '🗳️ VOTING ONLINE' : '🌐 STANDARD ONLINE';

    // HOST also enters their name here
    _showOnlineOverlay(`
        <button class="back-arrow" onclick="cancelOnlineSetup()">← CANCEL</button>
        <div class="submenu-eyebrow">${modeLabel}</div>
        <h2 class="submenu-title">YOUR ROOM</h2>
        <div style="text-align:center;padding:6px 0 14px;">
            <div style="font-size:10px;color:#333;letter-spacing:4px;margin-bottom:8px;">ROOM CODE</div>
            <div style="font-size:48px;font-weight:900;letter-spacing:10px;color:#4dff88;
                text-shadow:0 0 24px #4dff8866;font-family:'Arial Black',sans-serif;">${roomCode}</div>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:14px;">
            <button class="start-btn" style="font-size:11px;padding:9px 16px;"
                onclick="navigator.clipboard.writeText('${roomCode}').then(()=>{this.innerText='✅ COPIED!';setTimeout(()=>this.innerText='📋 CODE',1500)})">📋 COPY CODE</button>
            <button class="start-btn" style="font-size:11px;padding:9px 16px;background:linear-gradient(135deg,#1a3a5c,#2a5080);"
                onclick="const l=location.href.split('?')[0]+'?join=${roomCode}';navigator.clipboard.writeText(l).then(()=>{this.innerText='✅ COPIED!';setTimeout(()=>this.innerText='🔗 LINK',1500)})">🔗 COPY LINK</button>
        </div>
        <div style="margin-bottom:12px;">
            <label style="font-size:9px;letter-spacing:3px;color:#444;display:block;margin-bottom:6px;">YOUR NAME (HOST)</label>
            <input type="text" id="host-name-input" placeholder="YOUR NAME"
                class="join-input" maxlength="20" value="Player 1">
        </div>
        <div id="mp-status" style="text-align:center;font-size:12px;color:#444;letter-spacing:2px;margin-bottom:8px;">
            ⏳ WAITING FOR PLAYER 2...
        </div>
        <div id="guest-name-display" style="text-align:center;font-size:11px;color:#333;letter-spacing:2px;"></div>
    `);

    peer = new Peer(roomCode);
    peer.on('error', err => { const s=document.getElementById('mp-status'); if(s) s.innerText='❌ '+err.message; });
    peer.on('connection', connection => {
        conn = connection;
        conn.on('open', () => {
            const s=document.getElementById('mp-status');
            if(s) s.innerText='✅ PLAYER 2 CONNECTED — Waiting for their name...';
            conn.send({ type:'SET_MODE', votingMode: game.votingMode });
        });
        conn.on('data', handleIncomingData);
        conn.on('error', err => console.error('conn error', err));
    });
}

function joinOnlineGame() {
    const code = document.getElementById('join-code')?.value.trim().toUpperCase();
    if (!code) { alert('Enter a room code first.'); return; }
    isHost = false;

    _showOnlineOverlay(`
        <button class="back-arrow" onclick="cancelOnlineSetup()">← CANCEL</button>
        <div class="submenu-eyebrow">JOIN GAME</div>
        <h2 class="submenu-title">CONNECTING</h2>
        <div id="mp-status" style="text-align:center;font-size:14px;color:#666;letter-spacing:2px;margin-top:20px;">
            ⏳ CONNECTING TO <span style="color:#4dff88;letter-spacing:4px;">${code}</span>...
        </div>
    `);

    peer = new Peer();
    peer.on('error', err => { const s=document.getElementById('mp-status'); if(s) s.innerHTML='❌ '+err.message+'<br><small style="color:#333;font-size:10px;">Check the code and try again</small>'; });
    peer.on('open', () => {
        conn = peer.connect(code, { reliable: true });
        conn.on('open', () => { const s=document.getElementById('mp-status'); if(s) s.innerText='✅ CONNECTED! Waiting for host...'; });
        conn.on('data', handleIncomingData);
        conn.on('error', () => { const s=document.getElementById('mp-status'); if(s) s.innerText='❌ Connection failed. Check the code.'; });
    });
}

// Overlay helpers — shows a panel on TOP of the online-menu without destroying it
function _showOnlineOverlay(html) {
    let ov = document.getElementById('online-overlay');
    if (!ov) {
        ov = document.createElement('div');
        ov.id = 'online-overlay';
        ov.style.cssText = `
            position:fixed; inset:0; background:#030308;
            z-index:5000; display:flex; align-items:center; justify-content:center;
            flex-direction:column; overflow-y:auto;
        `;
        document.body.appendChild(ov);
    }
    ov.innerHTML = `<div class="submenu-inner" style="max-width:500px;width:100%;">${html}</div>`;
    ov.style.display = 'flex';
}

function _hideOnlineOverlay() {
    const ov = document.getElementById('online-overlay');
    if (ov) ov.style.display = 'none';
}

function cancelOnlineSetup() {
    _hideOnlineOverlay();
    if (peer) { try { peer.destroy(); } catch(e){} peer = null; }
    if (conn) { try { conn.close(); } catch(e){} conn = null; }
    isHost = false;
    // Stay on online-menu
    _showScreen('online-menu');
}

function handleIncomingData(data) {
    if (data.type === 'SET_MODE') {
        // Guest: host has set mode. Show a "waiting" screen so only host configures game.
        game.votingMode = data.votingMode;
        _hideOnlineOverlay();
        _showGuestWaitingScreen();
    }
    if (data.type === 'GUEST_NAME_ACK') {
        // Guest: host acknowledged our name, now truly waiting
        const el = document.getElementById('guest-status');
        if (el) el.innerText = '✅ NAME SET — WAITING FOR HOST TO START...';
    }
    if (data.type === 'START_GAME') {
        game = data.gameState;
        game.mySeatIndex = data.guestSeatIndex; // which players[] index is the guest
        _navHistory = ['menu', 'game-screen'];
        _hideOnlineOverlay();
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('game-screen').classList.add('active');
        selectedVerse = data.verse;
        render();
    }
    if (data.type === 'MOVE') {
        game = data.gameState;
        render();
    }
    if (data.type === 'GUEST_NAME') {
        // Host: guest sent their name
        window._guestName = data.name;
        // Update the overlay display
        const el = document.getElementById('guest-name-display');
        if (el) { el.innerText = `Guest: ${data.name}`; el.style.color = '#4dff88'; }
        // Update setup screen if it's showing
        const guestStatus = document.getElementById('guest-name-status');
        if (guestStatus) { guestStatus.innerText = data.name; guestStatus.style.color = '#4dff88'; }
        const mpStatus = document.getElementById('mp-status');
        if (mpStatus) mpStatus.innerText = '✅ BOTH PLAYERS READY — Configure game and start!';
        conn.send({ type: 'GUEST_NAME_ACK' });
        // Auto-navigate host to setup
        _hideOnlineOverlay();
        showSetup(game.votingMode ? 'voting' : 'normal');
    }
    if (data.type === 'VOTE_REQUEST') {
        const totalPlayers = game.players.filter(p => !p.eliminated).length;
        _voteState = { action: data.action, threshold: data.threshold || 0.5, totalPlayers, votes: {}, requester: data.requester };
        showVotePanel(data.action, data.requester, false, data.threshold || 0.5, totalPlayers);
    }
    if (data.type === 'VOTE_RESPONSE') {
        handleVoteResponse(data.vote, data.voter, data.color);
    }
    if (data.type === 'VOTE_RESULT') {
        closeVotePanel();
        _applyVoteResult(data.approved, data.action, data.yesVotes, data.needed);
    }
    if (data.type === 'BATTLE_VOTE_CAST') {
        handleBattleVoteCast(data.side, data.voter);
    }
    if (data.type === 'BATTLE_VOTE') {
        showBattleVoteModal(data.atkName, data.defName, false);
    }
    if (data.type === 'BATTLE_VOTE_RESULT') {
        resolveBattleVotes(data.atkVotes, data.defVotes, data.atkName, data.defName);
    }
}

// Guest waiting screen — just name input, everything else host controls
function _showGuestWaitingScreen() {
    _showOnlineOverlay(`
        <div class="submenu-eyebrow">CONNECTED AS GUEST</div>
        <h2 class="submenu-title">ENTER YOUR NAME</h2>
        <div style="margin-bottom:20px;">
            <input type="text" id="guest-name-input" placeholder="YOUR NAME"
                class="join-input" maxlength="20"
                style="font-size:16px;letter-spacing:2px;width:100%;margin-bottom:12px;">
            <button class="start-btn" onclick="_submitGuestName()">✓ CONFIRM NAME</button>
        </div>
        <div id="guest-status" style="text-align:center;font-size:11px;color:#444;letter-spacing:2px;margin-top:12px;">
            Enter your name then wait for the host to start.
        </div>
    `);
}

function _submitGuestName() {
    const name = document.getElementById('guest-name-input')?.value.trim() || 'Player 2';
    window._myGuestName = name;
    conn.send({ type: 'GUEST_NAME', name });
    const el = document.getElementById('guest-status');
    if (el) el.innerText = '⏳ WAITING FOR HOST TO START...';
    document.getElementById('guest-name-input').disabled = true;
}

function syncGameToGuest() {
    if (conn && conn.open) {
        // After shuffle, find which index has the guest's name
        const guestName = window._guestName || 'Player 2';
        const guestSeatIndex = game.players.findIndex(p => p.name === guestName);
        // Host seat is the other one
        game.mySeatIndex = guestSeatIndex === 0 ? 1 : 0;
        conn.send({
            type: 'START_GAME',
            gameState: game,
            verse: selectedVerse,
            guestSeatIndex: guestSeatIndex >= 0 ? guestSeatIndex : 1
        });
    }
}
let _navHistory = ['menu'];

function goBack(target) {
    // Always go to explicit target if given, otherwise pop history
    const dest = target || (_navHistory.length > 1 ? (_navHistory.pop(), _navHistory[_navHistory.length-1]) : 'menu');
    _showScreen(dest, true);
}

function _showScreen(id, fromBack) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    // Hide any overlay
    const ov = document.getElementById('online-overlay');
    if (ov) ov.style.display = 'none';

    const el = document.getElementById(id);
    if (el) el.classList.add('active');

    if (!fromBack) {
        if (!_navHistory.length || _navHistory[_navHistory.length - 1] !== id) {
            _navHistory.push(id);
        }
    } else {
        // Ensure history ends at this id
        while (_navHistory.length > 1 && _navHistory[_navHistory.length - 1] !== id) {
            _navHistory.pop();
        }
        if (!_navHistory.length) _navHistory = [id];
    }
}

function showOnlineMenu() {
    _showScreen('online-menu');
}

function showRules() {
    _showScreen('rules-screen');
}

function hideRules() {
    goBack('menu');
}

function showSetup(mode) {
    game.votingMode = (mode === 'voting');
    _showScreen('setup');
    const eyebrow = document.getElementById('setup-eyebrow');
    if (eyebrow) {
        eyebrow.innerText = mode === 'voting'  ? '🗳️ VOTING ONLINE'
                          : (conn && conn.open) ? '🌐 ONLINE'
                          : '⚔️ LOCAL MULTIPLAYER';
    }
    // Wire back button dynamically
    const backBtn = document.getElementById('setup-back-btn');
    if (backBtn) {
        backBtn.onclick = () => {
            if (conn && conn.open) goBack('online-menu');
            else goBack('menu');
        };
    }
    generateNameInputs();
    updateVersePreview(document.getElementById('verse-select').value);
}

// ─── Pass-device screen for local mode ───────────────────────
let _passScreenActive = false;

function showPassScreen(playerName, playerColor) {
    _passScreenActive = true;
    const nameEl = document.getElementById('pass-player-name');
    if (nameEl) { nameEl.innerText = playerName.toUpperCase(); nameEl.style.color = playerColor; }
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('pass-screen').classList.add('active');
}

function dismissPassScreen() {
    _passScreenActive = false;
    document.getElementById('pass-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    render();
}

const VERSE_PREVIEW = {
    Naruto:      { img: 'verses/naruto.jpg',      label: 'Naruto Shippuden' },
    OnePiece:    { img: 'verses/onepiece.jpg',    label: 'One Piece' },
    Bleach:      { img: 'verses/bleach.jpg',      label: 'Bleach' },
    JJK:         { img: 'verses/jjk.jpg',         label: 'Jujutsu Kaisen' },
    DemonSlayer: { img: 'verses/demonslayer.jpg', label: 'Demon Slayer' },
    MHA:         { img: 'verses/mha.jpg',         label: 'My Hero Academia' },
    HxH:         { img: 'verses/hxh.jpg',         label: 'Hunter x Hunter' },
    FireForce:   { img: 'verses/fireforce.jpg',   label: 'Fire Force' },
};

function updateVersePreview(verse) {
    const data = VERSE_PREVIEW[verse];
    if (!data) return;
    const img = document.getElementById('verse-preview-img');
    const label = document.getElementById('verse-preview-label');
    if (!img || !label) return;
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = data.img;
        img.onload = () => { img.style.opacity = '1'; };
        img.onerror = () => { img.style.opacity = '0.2'; };
        label.innerText = data.label;
    }, 150);
}

function generateNameInputs() {
    const container = document.getElementById('name-inputs');
    const isOnlineGame = !!(conn && conn.open);
    if (!container) return;

    if (isOnlineGame) {
        // Online: show guest name status, host name was entered in overlay
        const guestName = window._guestName || '';
        container.innerHTML = `
            <div style="padding:8px 0;font-size:11px;color:#555;letter-spacing:1px;">
                🌐 Online game — 2 players only
            </div>
            <div id="online-player-names" style="font-size:12px;color:#666;letter-spacing:1px;">
                <div>Host: <span style="color:#ccc;">${document.getElementById('host-name-input')?.value || 'You'}</span></div>
                <div>Guest: <span id="guest-name-status" style="color:${guestName ? '#4dff88' : '#ff4d4d'};">${guestName || '⏳ Waiting for guest name...'}</span></div>
            </div>
        `;
        // Hide player count selector when online
        const pcLabel = document.getElementById('player-count')?.closest('div') || document.getElementById('player-count')?.parentElement;
        const pc = document.getElementById('player-count');
        if (pc) pc.style.display = 'none';
        const labels = document.querySelectorAll('#setup label');
        labels.forEach(l => { if (l.htmlFor === 'player-count') l.style.display = 'none'; });
    } else {
        const count = parseInt(document.getElementById('player-count').value);
        container.innerHTML = "";
        for (let i = 0; i < count; i++) {
            container.innerHTML += `<input type="text" id="p-name-${i}" placeholder="Player ${i+1}" class="setup-input">`;
        }
        // Restore player count if it was hidden
        const pc = document.getElementById('player-count');
        if (pc) pc.style.display = '';
        const labels = document.querySelectorAll('#setup label');
        labels.forEach(l => { if (l.htmlFor === 'player-count') l.style.display = ''; });
    }
}

function initGame() {
    const isOnlineGame = !!(conn && conn.open);

    // Online: validate guest name arrived
    if (isOnlineGame && (!window._guestName || window._guestName === '')) {
        showApToast('WAITING FOR GUEST NAME...');
        return;
    }

    // 1. Get Setup Data
    selectedVerse = document.getElementById('verse-select').value;
    game.mode = document.getElementById('game-mode-select')?.value || 'conquest';
    game.abilityMode = (game.mode === 'ability');
    if (game.abilityMode) game.mode = 'conquest';
    game.showdownTurnsLeft = null;
    game.showdownActive = false;
    game.frozenUnits = {};
    game.turnCount = 0;
    game.shieldedUnits = {};
    game.reviveTracked = {};
    game.mySeatIndex = 0; // host is always index 0 before shuffle

    // Online: always 2 players. Local: read from selector.
    const count = isOnlineGame ? 2 : parseInt(document.getElementById('player-count').value);
    
    // 2. Initialize Pools — shuffle each tier so board placement is fully random every game
    const verseData = animeDB[selectedVerse];
    game.pools = {};
    for (let tier in verseData) {
        const arr = [...verseData[tier]];
        for (let k = arr.length - 1; k > 0; k--) {
            const j = Math.floor(Math.random() * (k + 1));
            [arr[k], arr[j]] = [arr[j], arr[k]];
        }
        game.pools[tier] = arr;
    }

    // Build the full set of evolved form names across ALL verses' chain arrays + nextForm links.
    const evolvedNames = new Set();
    for (const chain of [...NARUTO_CHAINS, ...ONE_PIECE_CHAINS, ...BLEACH_CHAINS, ...HXH_CHAINS]) {
        for (let c = 1; c < chain.length; c++) evolvedNames.add(chain[c]);
    }
    for (const tier in game.pools) {
        for (const card of game.pools[tier]) {
            if (card.nextForm) evolvedNames.add(card.nextForm);
        }
    }

    // 2 PLAYERS: Strip ALL evolved forms — players start from base and awaken themselves.
    // 3-4 PLAYERS: Keep evolved forms in pool so they can randomly appear on the board.
    //              They still go into evolvedForms so handleAwaken can find them.
    game.evolvedForms = {};
    for (const tier in game.pools) {
        const kept = [], removed = [];
        for (const card of game.pools[tier]) {
            (evolvedNames.has(card.name) ? removed : kept).push(card);
        }
        if (count === 2) {
            // 2-player: fully strip all evolved forms from pool
            game.pools[tier] = kept;
            for (const card of removed) {
                game.evolvedForms[card.name] = { ...card, tier };
            }
        } else {
            // 3-4 player: keep evolved forms in pool (they appear randomly on board)
            // but also register them in evolvedForms so awakening still works
            game.pools[tier] = [...kept, ...removed]; // keep all, re-shuffle
            for (const card of removed) {
                game.evolvedForms[card.name] = { ...card, tier };
            }
            // Re-shuffle this tier
            for (let k = game.pools[tier].length - 1; k > 0; k--) {
                const j = Math.floor(Math.random() * (k + 1));
                [game.pools[tier][k], game.pools[tier][j]] = [game.pools[tier][j], game.pools[tier][k]];
            }
        }
    }

    // 3. Setup Players
    const colors = ['red', 'blue', 'green', 'yellow'];
    const corners = [0, 35, 5, 30];
    game.players = [];

    for (let i = 0; i < count; i++) {
        let playerName;
        if (isOnlineGame) {
            if (i === 0) {
                // Host name from the host-name-input in the overlay
                playerName = document.getElementById('host-name-input')?.value.trim() || 'Player 1';
            } else {
                // Guest name received via GUEST_NAME message
                playerName = window._guestName || 'Player 2';
            }
        } else {
            const nameInput = document.getElementById(`p-name-${i}`);
            playerName = nameInput ? nameInput.value.trim() || `Player ${i+1}` : `Player ${i+1}`;
        }
        game.players.push({
            name: playerName,
            color: colors[i],
            hand: [],
            baseIdx: corners[i],
            eliminated: false
        });

        // Give Starting Cards — guarantee at least 1 epic, small chance of mythic
        // Card 0: guaranteed epic or higher
        // Cards 1-2: normal weighted draw (with small mythic chance)
        for (let j = 0; j < 3; j++) {
            let roll = Math.random();
            let tier;

            if (j === 0) {
                // Guaranteed epic+ for first card
                if (selectedVerse === 'DemonSlayer') {
                    tier = roll < 0.12 ? 'mythic' : 'epic';
                } else if (selectedVerse === 'JJK') {
                    tier = 'epic';
                } else {
                    // Naruto, MHA, OnePiece, Bleach all have mythic
                    tier = roll < 0.12 ? 'mythic' : 'epic';
                }
            } else {
                // Cards 1 and 2: weighted draw
                if (selectedVerse === 'DemonSlayer') {
                    tier = roll < 0.08 ? 'mythic' : (roll < 0.5 ? 'epic' : 'rare');
                } else if (selectedVerse === 'JJK') {
                    tier = roll < 0.4 ? 'epic' : 'rare';
                } else {
                    // Naruto, MHA, OnePiece, Bleach
                    tier = roll < 0.08 ? 'mythic' : (roll < 0.3 ? 'epic' : (roll < 0.7 ? 'rare' : 'common'));
                }
            }
            const unit = pull(tier);
            if(unit) game.players[i].hand.push(unit);
        }
    }

    // 4. Generate Board
    const dsLegendarySpots = [];
    if (selectedVerse === 'DemonSlayer' || selectedVerse === 'MHA' || selectedVerse === 'HxH' || selectedVerse === 'FireForce') {
        const center = [14, 15, 20, 21].sort(() => Math.random() - 0.5);
        dsLegendarySpots.push(center[0], center[1]);
    }

    for (let i = 0; i < 36; i++) {
        const pIdx = corners.indexOf(i);
        if (pIdx !== -1 && pIdx < count) {
            // Player Base
            game.grid[i] = { unit: null, owner: colors[pIdx] };
        } else {
            // Neutral Tiles
            const r = Math.floor(i / 6), c = i % 6;
            const dist = Math.min(r, 5 - r, c, 5 - c);
            let tier;

            if (selectedVerse === 'DemonSlayer' || selectedVerse === 'MHA' || selectedVerse === 'HxH' || selectedVerse === 'FireForce') {
                if (dsLegendarySpots.includes(i))  tier = 'legendary';
                else if ([14,15,20,21].includes(i)) tier = 'mythic';
                else if (dist === 1)               tier = Math.random() < 0.5 ? 'epic' : 'rare';
                else                               tier = Math.random() < 0.45 ? 'rare' : 'common';
            } else {
                const hasMythic = (game.pools.mythic?.length ?? 0) > 0;
                if (dist === 2) {
                    tier = 'legendary';
                } else if (dist === 1) {
                    const touchesCentre = (r >= 2 && r <= 3 && (c === 1 || c === 4)) ||
                                          (c >= 2 && c <= 3 && (r === 1 || r === 4));
                    tier = hasMythic
                        ? (Math.random() < (touchesCentre ? 0.65 : 0.4) ? 'mythic' : 'epic')
                        : 'epic';
                } else {
                    const bordersMiddle = (r === 1 || r === 4 || c === 1 || c === 4);
                    tier = Math.random() < (bordersMiddle ? 0.65 : 0.3) ? 'rare' : 'common';
                }
            }
            game.grid[i] = { unit: pull(tier), owner: 'neutral' };
        }
    }

    // 4b. Randomize turn order
    const hostName = game.players[0]?.name; // host is always created at index 0
    for (let k = game.players.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * (k + 1));
        [game.players[k], game.players[j]] = [game.players[j], game.players[k]];
    }
    // After shuffle: find where the host player ended up — that's mySeatIndex for host
    if (conn && conn.open) {
        game.mySeatIndex = game.players.findIndex(p => p.name === hostName);
        if (game.mySeatIndex === -1) game.mySeatIndex = 0;
    }

    // 5. Start Game
    game.currentTurn = 0;
    game.ap = 3;

    // Online: sync to guest FIRST (before showing game screen on host)
    if (isHost && conn && conn.open) {
        syncGameToGuest();
        // Hide overlay and show game for host
        _hideOnlineOverlay();
    }

    // Switch to game screen
    _navHistory = ['menu', 'game-screen'];
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('game-screen').classList.add('active');

    render();

    // Local only: show pass screen for first player
    if (!conn || !conn.open) {
        const firstPlayer = game.players[game.currentTurn];
        setTimeout(() => showPassScreen(firstPlayer.name, firstPlayer.color), 300);
    } else {
        // Online: show turn notification
        showTurnNotification(game.players[game.currentTurn]);
    }
}

function pull(tier) {
    const order = ['ultra', 'legendary', 'mythic', 'epic', 'rare', 'common'];
    if (!game.pools[tier] || game.pools[tier].length === 0) {
        // Fallback logic towards other tiers if this tier is empty
        const startIdx = order.indexOf(tier);
        for (let i = startIdx + 1; i < order.length; i++) {
            const fallback = pull(order[i]);
            if (fallback) return fallback;
        }
        for (let i = startIdx - 1; i >= 0; i--) {
            const fallback = pull(order[i]);
            if (fallback) return fallback;
        }
        return null;
    }

    // Find the first unit in this tier pool that is NOT already active in the game
    let selectedUnitIndex = -1;

    for (let i = 0; i < game.pools[tier].length; i++) {
        const unitTemplate = game.pools[tier][i];
        
        // Get the entire evolution family names for this template card
        const chain = getChain(unitTemplate.name);
        const familyNames = chain || [unitTemplate.name];

        // Check if ANY form in this evolution chain is already in a player's hand
        const inAnyHand = game.players.some(p => 
            p.hand.some(u => familyNames.includes(u.name))
        );

        // Check if ANY form in this evolution chain is already placed on the grid board
        const onBoard = game.grid.some(tile => 
            tile && tile.unit && familyNames.includes(tile.unit.name)
        );

        // If it's not in anyone's hand and not on the board, it is safe to pull!
        if (!inAnyHand && !onBoard) {
            selectedUnitIndex = i;
            break;
        }
    }

    // If every single card left in this tier is a duplicate, default to the first one 
    // to prevent an infinite loop, or return null to let fallback handle it
    if (selectedUnitIndex === -1) {
        // Option: Try falling back to another tier if this tier only has duplicates left
        const startIdx = order.indexOf(tier);
        for (let i = startIdx + 1; i < order.length; i++) {
            // Temporarily skip this tier to prevent infinite recursion loop
            if (game.pools[order[i]] && game.pools[order[i]].length > 0) {
                const fallback = pull(order[i]);
                if (fallback) return fallback;
            }
        }
        // If absolutely no unique units exist anywhere, extract the first item as emergency fallback
        selectedUnitIndex = 0;
    }

    // Remove the unique card from the pool deck
    const unitData = game.pools[tier].splice(selectedUnitIndex, 1)[0];

    if (unitData) {
        // Return a fresh deep copy with a unique instance ID so mutations don't leak
        return { 
            ...unitData, 
            tier: unitData.tier || tier,
            id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2)
        };
    }
    
    return null;
}

// Helper function to keep code clean
function executeUltraTrade(player, indices) {
    if (!game.pools.ultra || game.pools.ultra.length === 0) {
        if (!confirm("⚠️ The ULTRA pool is empty!\nYou will receive the next available card instead.\n\nProceed with the trade?")) return;
    }
    indices.sort((a, b) => b - a).forEach(idx => player.hand.splice(idx, 1));
    const card = pull('ultra');
    if (card) player.hand.push(card);
    addLog(`${game.players[game.currentTurn].name} summoned an <b>ULTRA</b>!`);
    playEffect('ultra');
    showTradeReveal('ultra', card);
    game.selection = { type: null, idx: null };
    endAction(2);
}

function executeGodTrade(player, indices) {
    if (!game.pools.god || game.pools.god.length === 0) {
        if (!confirm("⚠️ The GOD pool is empty!\nThere are no God Tier cards left to claim.\n\nProceed anyway?")) return;
    }
    indices.sort((a, b) => b - a).forEach(idx => player.hand.splice(idx, 1));
    const card = pull('god');
    if (card) player.hand.push(card);
    addLog(`${game.players[game.currentTurn].name} summoned a <b>GOD TIER</b>!`);
    playEffect('god');
    showTradeReveal('god', card);
    game.selection = { type: null, idx: null };
    endAction(2);
}

function handleTrade() {
    if (game.ap < 2) { showApToast("TRADE COSTS 2 AP — NOT ENOUGH"); return; }
    const p = game.players[game.currentTurn];
    const selectedElements = document.querySelectorAll('.hand-card.selected-for-trade');
    const selectedIndices = Array.from(selectedElements).map(el => parseInt(el.dataset.idx));
    const count = selectedIndices.length;

    let mythicCount = 0, legCount = 0, ultraCount = 0;
    selectedIndices.forEach(idx => {
        const tier = p.hand[idx]?.tier;
        if (tier === 'mythic')    mythicCount++;
        if (tier === 'legendary') legCount++;
        if (tier === 'ultra')     ultraCount++;
    });

    // ── ONE PIECE EXCLUSIVE TRADE PATHS ──
    if (selectedVerse === 'OnePiece') {
        // ── GOD TIER paths ──
        // 1 ultra + 3 leg + 2 any (total 6)
        if (count === 6 && ultraCount >= 1 && legCount >= 3) {
            executeGodTrade(p, selectedIndices); return;
        }
        // 2 ultras + 1 legendary (total 3)
        if (count === 3 && ultraCount === 2 && legCount === 1) {
            executeGodTrade(p, selectedIndices); return;
        }
        // 3 ultras (total 3)
        if (count === 3 && ultraCount === 3) {
            executeGodTrade(p, selectedIndices); return;
        }

        // ── ULTRA paths ──
        // 2 legendaries
        if (count === 2 && legCount === 2) { executeUltraTrade(p, selectedIndices); return; }
        // 3 mythics + 1 legendary
        if (count === 4 && mythicCount === 3 && legCount === 1) { executeUltraTrade(p, selectedIndices); return; }
        // 5 mythics
        if (count === 5 && mythicCount === 5) { executeUltraTrade(p, selectedIndices); return; }

        // ── LEGENDARY: 5 any (no ultra) ──
        if (count === 5 && ultraCount === 0) {
            if (!game.pools.legendary || game.pools.legendary.length === 0) {
                if (!confirm("⚠️ The LEGENDARY pool is empty!\nYou will receive the next available card instead.\n\nProceed with the trade?")) return;
            }
            selectedIndices.sort((a, b) => b - a).forEach(idx => p.hand.splice(idx, 1));
            const leg = pull('legendary');
            if (leg) p.hand.push(leg);
            addLog(`${p.name} traded for a <b>Legendary</b>`);
            playEffect('legendary');
            showTradeReveal('legendary', leg);
            game.selection = { type: null, idx: null };
            endAction(2);
            return;
        }
        alert("Invalid trade!\n• 5 cards → Legendary\n• 2 Legendaries → Ultra\n• 3 Mythics + 1 Legendary → Ultra\n• 5 Mythics → Ultra\n• 1 Ultra + 3 Leg + 2 any → GOD\n• 2 Ultras + 1 Leg → GOD\n• 3 Ultras → GOD");
        return;
    }

    // ── ALL OTHER VERSES ──
    if (selectedVerse === 'Naruto' || selectedVerse === 'MHA') {
        // Ultra paths: 4+1 leg, 2+2 leg, 3 leg
        if (count === 5 && legCount === 1) { executeUltraTrade(p, selectedIndices); return; }
        if (count === 4 && legCount === 2) { executeUltraTrade(p, selectedIndices); return; }
        if (count === 3 && legCount === 3) { executeUltraTrade(p, selectedIndices); return; }
        // Legendary: 5 non-legendary
        if (count === 5 && legCount === 0) {
            if (!game.pools.legendary || game.pools.legendary.length === 0) {
                if (!confirm("⚠️ The LEGENDARY pool is empty!\nYou will receive the next available card instead.\n\nProceed with the trade?")) return;
            }
            selectedIndices.sort((a, b) => b - a).forEach(idx => p.hand.splice(idx, 1));
            const leg = pull('legendary');
            if (leg) p.hand.push(leg);
            addLog(`${p.name} traded for a <b>Legendary</b>`);
            playEffect('legendary');
            showTradeReveal('legendary', leg);
            game.selection = { type: null, idx: null };
            endAction(2);
            return;
        }
    } else if (selectedVerse === 'DemonSlayer') {
        if (count === 3 && legCount === 3) { executeUltraTrade(p, selectedIndices); return; }
        if (count === 5) {
            if (!game.pools.legendary || game.pools.legendary.length === 0) {
                if (!confirm("⚠️ The LEGENDARY pool is empty!\nYou will receive the next available card instead.\n\nProceed with the trade?")) return;
            }
            selectedIndices.sort((a, b) => b - a).forEach(idx => p.hand.splice(idx, 1));
            const leg = pull('legendary');
            if (leg) p.hand.push(leg);
            addLog(`${p.name} traded for a <b>Legendary</b>`);
            playEffect('legendary');
            showTradeReveal('legendary', leg);
            game.selection = { type: null, idx: null };
            endAction(2);
            return;
        }
    } else {
        // JJK, Bleach, and others: 3 leg → ultra, 5 any → legendary
        if (count === 3 && legCount === 3) { executeUltraTrade(p, selectedIndices); return; }
        if (count === 5) {
            if (!game.pools.legendary || game.pools.legendary.length === 0) {
                if (!confirm("⚠️ The LEGENDARY pool is empty!\nYou will receive the next available card instead.\n\nProceed with the trade?")) return;
            }
            selectedIndices.sort((a, b) => b - a).forEach(idx => p.hand.splice(idx, 1));
            const leg = pull('legendary');
            if (leg) p.hand.push(leg);
            addLog(`${p.name} traded for a <b>Legendary</b>`);
            playEffect('legendary');
            showTradeReveal('legendary', leg);
            game.selection = { type: null, idx: null };
            endAction(2);
            return;
        }
    }

    alert("Invalid trade selection!");
}

// ==========================================
// 1. FIXED EVOLUTION CHAINS (ALL VERSES)
// ==========================================

const NARUTO_CHAINS = [
    ["Naruto (Base)", "Naruto (Sage)", "Naruto (KSM)", "Naruto (Six Paths)"],
    ["Sasuke (Hebi)", "Sasuke (MS)", "Sasuke (Rinnegan)"],
    ["Madara (Edo)", "Madara (Six Paths)"],
    ["Kakashi", "Kakashi (DMS)"],
    ["Might Guy", "Guy (8 Gates)"],
    ["Obito", "Obito (Juubito)"],
    ["Minato", "Minato (KCM)"],
    ["Hashirama", "Hashirama (Sage)"]
];

const ONE_PIECE_CHAINS = [
    // --- Epic Tier ---
    ["Bonnie", "Bonnie (Awakened)"],
    ["Brook", "Brook (Soul King)"],
    ["Franky", "Franky (Shogun)"],
    ["Robin", "Robin (Devil child)"],
    ["Crocodile", "Crocodile (Awakened)"],
    ["Doflamingo", "Doflamingo (Awakened)"],
    ["Kaku", "Kaku (Awakened)"],
    ["Rob Lucci", "Rob Lucci (Awakened)"],

    // --- Mythic Tier ---
    ["Zoro", "Zoro (Conqueror's Haki)"],
    ["Sanji", "Sanji (Ifrit Jambe)"],
    ["Law", "Law (Awakened)"],
    ["Kid", "Kid (Awakened)"],
    ["Katakuri", "Katakuri (Awakened)"],
    ["Sabo", "Sabo (Awakened)"],

    // --- Legendary Tier (Multi-stage evolution chains) ---
    ["Luffy", "Luffy (Gear 2&3)", "Luffy (Gear 4(Bounceman))", "Luffy (Gear 4(Snakeman))", "Luffy (Gear 5)"],
    ["Kaido", "Kaido (Dragon)", "Kaido (Awakened)"],
    ["Big Mom", "Big Mom (Awakened)"],
    ["Blackbeard", "Blackbeard (Awakened)"]
];

const BLEACH_CHAINS = [
    // --- Rare Tier ---
    ["Kira", "Kira (Bankai)"],
    ["Ikkaku", "Ikkaku (Bankai)"],

    // --- Epic Tier ---
    ["Renji", "Renji (Sōō Zabimaru)"],
    ["Rukia", "Rukia (Hakka no Togame)"],
    ["Kensei", "Kensei (Tekken Tachikaze)"],
    ["Rose", "Rose (Kinshara Butōdan)"],
    ["Shinji", "Shinji (Sakashima Yokoshima)"],
    ["Soi Fon", "Soi Fon (Jakuhō Raikōben)"],
    ["Komamura", "Komamura (Kokujō Tengen Myō'ō)"],
    ["Gin", "Gin (Kamishini no Yari)"],
    ["Tosen", "Tosen (Awakened)"],
    ["Nnoitra", "Nnoitra (Santa Teresa)"],
    ["Zommari", "Zommari (Brujería)"],
    ["Szayelaporro", "Szayelaporro (Fornicarás)"],
    ["Aaroniero", "Aaroniero (Glotonería)"],
    ["Yammy", "Yammy (Ira)"],
    ["Harribel", "Harribel (Tiburón)"],
    ["Neliel", "Neliel (Gamuza)"],
    ["As Nodt", "As Nodt (Tatarforas)"],
    ["Quilge", "Quilge (Biskiel)"],

    // --- Mythic Tier ---
    ["Byakuya", "Byakuya (Senbonzakura Kageyoshi)"],
    ["Hitsugaya", "Hitsugaya (Daiguren Hyōrinmaru)"],
    ["Mayuri", "Mayuri (Konjiki Ashisogi Jizō)"],
    ["Yoruichi", "Yoruichi (Awakened)"],
    ["Tokinada", "Tokinada (Awakened)"],
    ["Hikone", "Hikone (Awakened)"],
    ["Ulquiorra", "Ulquiorra (Segunda Etapa)"],
    ["Starrk", "Starrk (Los Lobos)"],
    ["Barragan", "Barragan (Arrogante)"],
    // Multi-stage Grimmjow
    ["Grimmjow", "Grimmjow (Pantera)", "Grimmjow (Pantera Segunda Etapa)"],
    ["Bazz-B", "Bazz-B (Awakened)"],
    ["Pernida", "Pernida (Awakened)"],
    ["Unohana", "Unohana (Minazuki)"],

    // --- Legendary Tier ---
    ["Askin", "Askin (Hasshain)"],
    ["Shunsui", "Shunsui (Katen Kyokotsu)"],
    ["Ukitake", "Ukitake (Mimihagi)"],
    ["Zaraki", "Zaraki (Bankai)"],
    ["Jugram", "Jugram (Weiß)"],
    ["Uryu", "Uryu (Quincy Fullbring)"],
    ["Lille Barro", "Lille Barro (Jilliel)"],
    ["Gerard", "Gerard (Aschetonig)"],
    ["Ichibe", "Ichibe (Shirafude Ichimonji)"],
    ["Yamamoto", "Yamamoto (Zanka no Tachi)"],
    ["Senjumaru", "Senjumaru (Shatatsu Karagara Shigarami no Tsuji)"],
    ["Urahara", "Urahara (Kannonbiraki Benihime Aratame)"],

    // --- Ultra Tier ---
    ["Ichigo", "Ichigo (Tensa Zangetsu)", "Ichigo (Hollow Mask)", "Ichigo (Vasto Lorde)", "Ichigo (True Bankai)"],
    ["Aizen", "Aizen (Hōgyoku)", "Aizen (Final Form)"],
    ["Yhwach", "Yhwach (All Mighty)"]
];

const HXH_CHAINS = [
    ["Gon", "Gon (Adult)"],
    ["Killua", "Killua (Godspeed)"],
    ["Kurapika", "Kurapika (Emperor Time)"],
    ["Feitan", "Feitan (Pain Packer)"],
    ["Biscuit", "Biscuit (True Form)"],
    ["Youpi", "Youpi (Rage)"],
    ["Pitou", "Pitou (Doctor Blythe)"],
    ["Shaiapouf", "Shaiapouf (Full Form)"],
    ["Chrollo", "Chrollo (Hatsu Unleashed)"],
    ["Meruem", "Meruem (Post-Rose)"],
    ["Netero", "Netero (100-Type Guanyin)"],
    ["Zeno", "Zeno (Dragon Dive)"],
];


// ==========================================
// 2. UPDATED HELPER FUNCTION
// ==========================================

function getChain(characterName) {
    if (!characterName) return null;

    // First try the hardcoded chain arrays for verses that use them
    let targetChains = [];
    if (selectedVerse === 'Naruto') targetChains = NARUTO_CHAINS;
    else if (selectedVerse === 'OnePiece') targetChains = ONE_PIECE_CHAINS;
    else if (selectedVerse === 'Bleach') targetChains = BLEACH_CHAINS;
    else if (selectedVerse === 'HxH') targetChains = HXH_CHAINS;

    for (const chain of targetChains) {
        if (chain.includes(characterName)) return chain;
    }

    // Universal fallback: build chain from nextForm links in the DB (covers JJK, DS, MHA, and
    // any verse not covered by the hardcoded chains above)
    const verseData = animeDB[selectedVerse];
    if (!verseData) return null;

    // Build a map: name → nextForm, and a reverse map: evolvedName → baseName
    const nextFormMap = {};   // name → nextForm
    const prevFormMap = {};   // evolvedName → its predecessor

    for (const tier of Object.values(verseData)) {
        for (const card of tier) {
            if (card.nextForm) {
                nextFormMap[card.name] = card.nextForm;
                prevFormMap[card.nextForm] = card.name;
            }
        }
    }

    // Walk backwards to find the root of the chain
    let root = characterName;
    while (prevFormMap[root]) root = prevFormMap[root];

    // If root === characterName AND no nextForm, it's a standalone character
    if (root === characterName && !nextFormMap[characterName]) return null;

    // Walk forward from root to build the full chain
    const chain = [root];
    let current = root;
    while (nextFormMap[current]) {
        current = nextFormMap[current];
        chain.push(current);
    }

    return chain.length > 1 ? chain : null;
}

function isCharacterInPlay(characterName) {
    const chain = getChain(characterName);
    const names = chain || [characterName];

    // Block placement only if another form from the same chain is already active on the grid
    const onBoard = game.grid.some(tile => tile && tile.unit && names.includes(tile.unit.name));
    if (onBoard) return true;

    // Block placement if a different player somehow holds it
    const currentPlayer = game.players[game.currentTurn];
    const inOtherHand = game.players.some(p => {
        if (p === currentPlayer) return false;
        return p.hand.some(u => names.includes(u.name));
    });
    if (inOtherHand) return true;

    return false;
}

// --- DISTANCE CHECK ---
function isAdjacent(idx1, idx2) {
    const r1 = Math.floor(idx1 / 6), c1 = idx1 % 6;
    const r2 = Math.floor(idx2 / 6), c2 = idx2 % 6;
    return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1;
}

// --- AWAKENING LOGIC ---
function handleAwaken() {
    const p = game.players[game.currentTurn];
    if (game.awakenTarget === null) return;
    if (game.ap < 1) { showApToast("AWAKEN COSTS 1 AP — NOT ENOUGH"); return; }

    const { source, idx } = game.awakenTarget;
    let targetUnit = null;
    if (source === 'board') {
        targetUnit = game.grid[idx]?.unit;
    } else {
        targetUnit = p.hand[idx];
    }

    if (!targetUnit || !targetUnit.nextForm) return;

    const requiredCost = targetUnit.cost || 1;
    const selectedElements = document.querySelectorAll('.hand-card.selected-for-trade');
    const selectedIndices = Array.from(selectedElements).map(el => parseInt(el.dataset.idx));

    if (selectedIndices.length !== requiredCost) {
        alert(`Select exactly ${requiredCost} card(s) to sacrifice!`);
        return;
    }

    // Look up next form — check game.evolvedForms first (populated in 2-player mode),
    // then fall back to scanning animeDB directly
    let nextFormData = (game.evolvedForms && game.evolvedForms[targetUnit.nextForm]) || null;
    if (!nextFormData) {
        const vd = animeDB[selectedVerse];
        for (const tier of ['legendary', 'mythic', 'epic', 'ultra', 'rare', 'common']) {
            if (vd[tier]) {
                nextFormData = vd[tier].find(u => u.name === targetUnit.nextForm);
                if (nextFormData) break;
            }
        }
    }

    if (!nextFormData) {
        alert(`Could not find next form data for ${targetUnit.nextForm}.`);
        return;
    }

    // Remove sacrificed cards (high-to-low so indices stay valid)
    selectedIndices.sort((a, b) => b - a).forEach(i => p.hand.splice(i, 1));

    // Evolve the unit in place — carry forward all chain fields
    targetUnit.name     = nextFormData.name;
    targetUnit.img      = nextFormData.img;
    targetUnit.nextForm = nextFormData.nextForm || null;
    targetUnit.cost     = nextFormData.cost     || 0;
    targetUnit.tip      = nextFormData.tip      || null;

    addLog(`${game.players[game.currentTurn].name} awakened to <b>${targetUnit.name}</b>!`);
    playEffect('awaken');
    const flavorText = selectedVerse === 'OnePiece' ? 'AWAKENING!' : selectedVerse === 'Bleach' ? 'BANKAI!' : selectedVerse === 'HxH' ? 'NEN UNLEASHED!' : 'SHINRA TENSEI!';
    setTimeout(() => alert(`${flavorText} ${targetUnit.name} has awakened!`), 400);

    // Clean up state
    game.awakenTarget = null;
    game.selection = { type: null, idx: null };
    render();
    endAction(1);
}

// --- MAIN CLICK HANDLER ---
function handleTileClick(idx) {
    // Ability Mode: if an active ability is pending a target, route this click there
    if (game.abilityMode && window.abilityPendingType) {
        handleAbilityClick(idx);
        return;
    }

    if (game.ap <= 0) { showApToast("NO AP LEFT — END YOUR TURN"); return; }
    const tile = game.grid[idx];
    const player = game.players[game.currentTurn];

    // CASE 1: PLACEMENT
    if (game.selection.type === 'hand') {
        const unitInHand = player.hand[game.selection.idx];
        if (!unitInHand) return;

        if ((selectedVerse === 'Naruto' || selectedVerse === 'OnePiece' || selectedVerse === 'Bleach' || selectedVerse === 'HxH') && isCharacterInPlay(unitInHand.name)) {
            alert(`You already have ${unitInHand.name} active!`);
            game.selection = { type: null, idx: null };
            render();
            return;
        }

        if (!tile.unit && (tile.owner === player.color || idx === player.baseIdx)) {
            tile.unit = player.hand.splice(game.selection.idx, 1)[0];
            tile.owner = player.color;
            addLog(`${player.name} placed <b>${tile.unit.name}</b>`);
            if (tile.unit.tier === 'legendary') playEffect('legendary');
            else if (tile.unit.tier === 'ultra') playEffect('ultra');
            applyPassiveShield(tile.unit, idx);
            game.selection = { type: null, idx: null };
            endAction(1);
            return;
        }
        game.selection = { type: null, idx: null };
        render();
        return;
    }

    // CASE 2: SELECTION
    if (tile.unit && tile.owner === player.color) {
        if (game.abilityMode && isFrozen(idx)) {
            showApToast(`${tile.unit.name} IS FROZEN — SKIPPING TURN`);
            return;
        }
        document.querySelectorAll('.hand-card.selected-for-trade').forEach(c => c.classList.remove('selected-for-trade'));
        game.selection = { type: 'board', idx: idx };
        render(); 
    } 
    
    // CASE 3: MOVE / ATTACK
    else if (game.selection.type === 'board') {
        const fromIdx = game.selection.idx;
        if (isAdjacent(fromIdx, idx)) {
            if (tile.unit && tile.owner !== player.color) {
                if (game.ap < 2) { showApToast("ATTACK COSTS 2 AP — NOT ENOUGH"); return; }
                showBattleModal(fromIdx, idx);
                game.selection = { type: null, idx: null };
            } else if (!tile.unit) {
                const movedUnit = game.grid[fromIdx].unit;
                tile.unit = movedUnit;
                tile.owner = player.color;
                game.grid[fromIdx].unit = null;
                if (!game.players.some(p => p.baseIdx === fromIdx)) {
                    game.grid[fromIdx].owner = 'neutral';
                }
                addLog(`${player.name} moved <b>${movedUnit.name}</b>`);
                game.selection = { type: null, idx: null };
                endAction(1);
            }
        } else {
            game.selection = { type: null, idx: null };
            render();
        }
    }
}

function getNeighbors(idx) {
    const r = Math.floor(idx / 6), c = idx % 6;
    const n = [];
    if (r > 0) n.push(idx - 6);
    if (r < 5) n.push(idx + 6);
    if (c > 0) n.push(idx - 1);
    if (c < 5) n.push(idx + 1);
    return n;
}

// ═══════════════════════════════════════════════════════════════
//  CINEMATIC BATTLE ENGINE
// ═══════════════════════════════════════════════════════════════

const VERSE_BATTLE_THEME = {
    Naruto:      ['#ff6b00','#ffe066','NINJA!',    'radial-gradient(ellipse at center,#1a0a00 0%,#050505 70%)'],
    OnePiece:    ['#3ec6ff','#fff176','GOMU GOMU!',   'radial-gradient(ellipse at center,#00101a 0%,#050505 70%)'],
    Bleach:      ['#bf80ff','#ffffff','BANKAI!',       'radial-gradient(ellipse at center,#0d0020 0%,#050505 70%)'],
    JJK:         ['#4d79ff','#cc00ff','CURSED ENERGY!','radial-gradient(ellipse at center,#00001a 0%,#050505 70%)'],
    DemonSlayer: ['#ff4d4d','#ffe0b2','TOTAL CONC!',  'radial-gradient(ellipse at center,#1a0000 0%,#050505 70%)'],
    MHA:         ['#4dff88','#4d79ff','PLUS ULTRA!',  'radial-gradient(ellipse at center,#001a0a 0%,#050505 70%)'],
    HxH:         ['#ffe066','#4dffee','NEN UNLEASH!', 'radial-gradient(ellipse at center,#1a1500 0%,#050505 70%)'],
    FireForce:   ['#ff6600','#ff2200','ADOLLA BURST!','radial-gradient(ellipse at center,#1a0800 0%,#050505 70%)'],
};
function getBattleTheme() { return VERSE_BATTLE_THEME[selectedVerse] || ['#4d79ff','#ffffff','CLASH!','#050505']; }

function spawnParticles(color1, color2) {
    const container = document.getElementById('battle-particles');
    if (!container) return;
    container.innerHTML = '';
    const cx = window.innerWidth/2, cy = window.innerHeight/2;
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        const angle = (i/40)*Math.PI*2, dist = 80+Math.random()*220, size = 4+Math.random()*8;
        const dur = 0.5+Math.random()*0.6;
        p.style.cssText = `position:absolute;left:${cx}px;top:${cy}px;width:${size}px;height:${size}px;border-radius:50%;background:${Math.random()<0.5?color1:color2};box-shadow:0 0 8px ${color1};transform:translate(-50%,-50%);pointer-events:none;animation:particle-fly ${dur}s ease-out forwards;--tx:${Math.cos(angle)*dist}px;--ty:${Math.sin(angle)*dist}px;`;
        container.appendChild(p);
    }
    for (let i = 0; i < 16; i++) {
        const s = document.createElement('div');
        const angle = (i/16)*Math.PI*2, len = 30+Math.random()*80;
        s.style.cssText = `position:absolute;left:${cx}px;top:${cy}px;width:${len}px;height:2px;background:linear-gradient(to right,${color1},transparent);transform-origin:left center;transform:translate(0,-1px) rotate(${angle}rad);pointer-events:none;animation:spark-fade 0.4s ease-out forwards;`;
        container.appendChild(s);
    }
}

function shakeScreen() {
    const modal = document.getElementById('battle-modal');
    modal.classList.remove('battle-shake');
    void modal.offsetWidth;
    modal.classList.add('battle-shake');
    setTimeout(() => modal.classList.remove('battle-shake'), 500);
}

function flashScreen(color) {
    const flash = document.getElementById('battle-flash');
    if (!flash) return;
    flash.style.background = color;
    flash.style.opacity = '0.7';
    flash.style.transition = 'none';
    requestAnimationFrame(() => { flash.style.transition = 'opacity 0.35s ease-out'; flash.style.opacity = '0'; });
}

function buildCinematicCard(unit, side) {
    const slideClass = side === 'atk' ? 'slide-in-left' : 'slide-in-right';
    return `<div class="cin-card ${slideClass}">
        <div class="cin-card-img-wrap">
            <img src="${unit.img}" class="cin-card-img">
            <div class="cin-card-glow"></div>
        </div>
        <div class="cin-card-name">${unit.name}</div>
    </div>`;
}

// Power tier scoring for auto-resolve
const TIER_SCORE = { common:1, rare:2, epic:4, mythic:7, legendary:12, ultra:20, god:35 };
function unitScore(unit) {
    return TIER_SCORE[unit.tier || 'common'] || 1;
}

// Deterministic name hash — same two units always give same result
function nameHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h;
}

function getBattleAnalysis(atkUnit, defUnit) {
    const as = unitScore(atkUnit), ds = unitScore(defUnit);
    const total = as + ds;
    const tierNames = { common:'Common', rare:'Rare', epic:'Epic', mythic:'Mythic', legendary:'Legendary', ultra:'Ultra', god:'God' };
    const aTier = tierNames[atkUnit.tier || 'common'];
    const dTier = tierNames[defUnit.tier || 'common'];

    let atkWins, reasoning, tieMethod = '';

    if (as === ds) {
        // Equal tier — use attacker bonus (attacker strikes first) + name hash tiebreak
        // Attacker gets +0.5 advantage (striking first matters)
        // Name hash determines the rest — deterministic, same matchup always same result
        const hash = nameHash(atkUnit.name + defUnit.name);
        const atkFavoured = (hash % 2 === 0); // deterministic coin
        atkWins = atkFavoured;

        const atkNameLen = atkUnit.name.length, defNameLen = defUnit.name.length;
        const flavours = [
            `${atkUnit.name} strikes first as the attacker — in an even fight, initiative is everything.`,
            `Both are ${aTier} tier, but ${atkFavoured ? atkUnit.name : defUnit.name} has fought this type of battle before.`,
            `Equal power, equal tier — ${atkFavoured ? atkUnit.name + ' lands the decisive first blow' : defUnit.name + ' weathers the attack and counters'}.`,
            `A true clash of equals. The ${atkFavoured ? 'attacker' : 'defender'}'s positioning gives ${atkFavoured ? atkUnit.name : defUnit.name} the edge.`,
        ];
        reasoning = flavours[hash % flavours.length];
        tieMethod = `Both units are ${aTier}. Decided by first-strike advantage + matchup history.`;
    } else if (as > ds * 2) {
        atkWins = true;
        reasoning = `${atkUnit.name} (${aTier}) completely outclasses ${defUnit.name} (${dTier}) — a ${as} vs ${ds} power gap leaves no contest.`;
    } else if (as > ds) {
        atkWins = Math.random() < 0.75; // stronger wins 75% of the time
        reasoning = `${atkUnit.name} (${aTier}) has a clear power advantage over ${defUnit.name} (${dTier}) — power ${as} vs ${ds}.`;
    } else if (ds > as * 2) {
        atkWins = false;
        reasoning = `${defUnit.name} (${dTier}) completely outclasses ${atkUnit.name} (${aTier}) — a ${ds} vs ${as} power gap leaves no contest.`;
    } else {
        atkWins = Math.random() < 0.25; // weaker attacker wins only 25% of the time
        reasoning = `${defUnit.name} (${dTier}) holds the power advantage over ${atkUnit.name} (${aTier}) — power ${ds} vs ${as}.`;
    }

    const atkWinChance = as === ds ? 5 : Math.round((as / total) * 10);
    const defWinChance = 10 - atkWinChance;

    return { atkWins, atkWinChance, defWinChance, reasoning, tieMethod, aTier, dTier };
}

function openCinematicBattle(allies, defAllies, countLabel) {
    const [col1, col2, clashWord] = getBattleTheme();
    const modal = document.getElementById('battle-modal');
    const content = modal.querySelector('.modal-content');
    content.style.cssText = 'background:transparent;border:none;padding:0;width:100%;max-width:900px;';

    let atkHTML = `<div class="cin-side cin-atk">`;
    allies.forEach(u => { atkHTML += buildCinematicCard(u, 'atk'); });
    atkHTML += `</div>`;

    let defHTML = `<div class="cin-side cin-def">`;
    defAllies.forEach(u => { defHTML += buildCinematicCard(u, 'def'); });
    defHTML += `</div>`;

    const vsHTML = `<div class="cin-vs-wrap">
        <div class="cin-vs" style="color:${col1};text-shadow:0 0 30px ${col1},0 0 60px ${col2};">VS</div>
        <div class="cin-count" style="border-color:${col1};color:${col1};">${countLabel}</div>
        <div class="cin-clash" style="color:${col2};text-shadow:0 0 20px ${col2};">${clashWord}</div>
    </div>`;

    const activePlayers = game.players.filter(p => !p.eliminated);
    const isOnline = !!(conn && conn.open);
    const isVotingOnline = isOnline && game.votingMode;
    const isStandardOnline = isOnline && !game.votingMode;

    let btnHTML = '';

    if (isStandardOnline) {
        // Standard online: auto-resolve by power with explanation
        const atkUnit = allies[0], defUnit = defAllies[0];
        const { atkWins, atkWinChance, defWinChance, reasoning, tieMethod } = getBattleAnalysis(atkUnit, defUnit);
        const tieHTML = tieMethod ? `<div class="cin-tie-method">⚖️ ${tieMethod}</div>` : '';
        btnHTML = `
        <div class="cin-analysis">
            <div class="cin-analysis-text">${reasoning}</div>
            ${tieHTML}
            <div class="cin-analysis-odds">
                <span style="color:${col1}">⚔️ ${atkUnit.name}: ${atkWinChance}/10</span>
                <span style="color:#555;margin:0 8px;">vs</span>
                <span style="color:#ff4d4d">🛡️ ${defUnit.name}: ${defWinChance}/10</span>
            </div>
        </div>
        <div class="cin-buttons">
            <button class="cin-btn cin-btn-auto" style="background:${atkWins?col1:'#ff4d4d'};" onclick="resolveManual(${atkWins})">
                ⚡ ${atkWins ? allies[0].name.toUpperCase()+' WINS' : defAllies[0].name.toUpperCase()+' WINS'}
            </button>
        </div>`;

    } else if (isVotingOnline) {
        // Voting online: both players vote in the battle modal
        // Host sees buttons immediately; guest waits for host to trigger
        window._battleVoteData = { atkName: allies[0].name, defName: defAllies[0].name, votes: {} };
        if (isHost) {
            // Send vote request to guest
            conn.send({ type: 'BATTLE_VOTE', atkName: allies[0].name, defName: defAllies[0].name });
        }
        const myLabel = isHost ? 'HOST' : 'GUEST';
        btnHTML = `
        <div class="cin-vote-area">
            <div class="cin-vote-title">— VOTE WHO WINS —</div>
            <div class="cin-analysis-text" style="margin-bottom:12px;">${allies[0].name} vs ${defAllies[0].name}</div>
            <div class="cin-voters">
                <div class="cin-voter">
                    <div class="cin-voter-name" style="color:#aaa">${myLabel}'S VOTE</div>
                    <div class="cin-voter-btns">
                        <button class="cin-vote-btn" style="border-color:${col1};color:${col1};"
                            onclick="castOnlineBattleVote('atk',this)">⚔️ ATTACKER</button>
                        <button class="cin-vote-btn" style="border-color:#ff4d4d;color:#ff4d4d;"
                            onclick="castOnlineBattleVote('def',this)">🛡️ DEFENDER</button>
                    </div>
                </div>
            </div>
            <div id="battle-vote-status" class="cin-vote-status">Waiting for both players...</div>
        </div>`;

    } else {
        // Local: manual buttons
        btnHTML = `
        <div class="cin-buttons">
            <button class="cin-btn" style="background:${col1};" onclick="resolveManual(true)">⚔️ ATTACKER WINS</button>
            <button class="cin-btn" style="background:#ff4d4d;" onclick="resolveManual(false)">🛡️ DEFENDER WINS</button>
        </div>`;
    }

    content.innerHTML = `
        <div id="battle-flash" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10;opacity:0;"></div>
        <div id="battle-particles" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9;overflow:hidden;"></div>
        <div class="cin-arena" style="--c1:${col1};--c2:${col2};">
            <div class="cin-bg-glow" style="background:radial-gradient(ellipse at 30% 50%,${col1}22 0%,transparent 60%),radial-gradient(ellipse at 70% 50%,${col2}22 0%,transparent 60%);"></div>
            <div class="cin-combatants">${atkHTML}${vsHTML}${defHTML}</div>
            ${btnHTML}
        </div>`;

    if (!document.getElementById('cin-styles')) {
        const style = document.createElement('style');
        style.id = 'cin-styles';
        style.textContent = `
            @keyframes slide-in-left  { from{transform:translateX(-120px) scale(0.7);opacity:0} to{transform:translateX(0) scale(1);opacity:1} }
            @keyframes slide-in-right { from{transform:translateX(120px) scale(0.7);opacity:0} to{transform:translateX(0) scale(1);opacity:1} }
            @keyframes vs-pop         { 0%{transform:scale(0.2) rotate(-15deg);opacity:0} 60%{transform:scale(1.2) rotate(4deg);opacity:1} 100%{transform:scale(1) rotate(0);opacity:1} }
            @keyframes clash-pulse    { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
            @keyframes particle-fly   { to{transform:translate(calc(-50% + var(--tx)),calc(-50% + var(--ty)));opacity:0} }
            @keyframes spark-fade     { to{opacity:0;width:0} }
            @keyframes battle-shake   { 0%,100%{transform:translate(0,0)} 15%{transform:translate(-6px,4px)} 30%{transform:translate(6px,-4px)} 45%{transform:translate(-4px,6px)} 60%{transform:translate(4px,-2px)} 75%{transform:translate(-2px,4px)} }
            .battle-shake { animation:battle-shake 0.5s ease-out !important; }
            .cin-arena { position:relative;width:100%;min-height:480px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px 20px;box-sizing:border-box; }
            .cin-bg-glow { position:absolute;inset:0;pointer-events:none;z-index:0; }
            .cin-combatants { display:flex;align-items:center;justify-content:center;gap:20px;width:100%;position:relative;z-index:1;flex-wrap:wrap; }
            .cin-side { display:flex;gap:12px;flex-wrap:wrap;justify-content:center;max-width:320px; }
            .cin-card { display:flex;flex-direction:column;align-items:center;gap:8px; }
            .cin-card.slide-in-left  { animation:slide-in-left  0.45s cubic-bezier(.22,1,.36,1) forwards; }
            .cin-card.slide-in-right { animation:slide-in-right 0.45s cubic-bezier(.22,1,.36,1) forwards; }
            .cin-card-img-wrap { position:relative;border-radius:12px;overflow:hidden;box-shadow:0 0 20px var(--c1,#4d79ff); }
            .cin-card-img { width:140px;height:200px;object-fit:cover;display:block; }
            .cin-card-glow { position:absolute;inset:0;background:linear-gradient(to bottom,transparent 50%,rgba(0,0,0,0.6)); }
            .cin-card-name { font-size:12px;font-weight:900;letter-spacing:1px;text-align:center;color:white;text-transform:uppercase;text-shadow:0 0 8px rgba(255,255,255,0.5);max-width:140px; }
            .cin-vs-wrap { display:flex;flex-direction:column;align-items:center;gap:8px;min-width:120px; }
            .cin-vs { font-size:72px;font-weight:900;font-style:italic;animation:vs-pop 0.6s 0.3s cubic-bezier(.22,1,.36,1) both; }
            .cin-count { border:2px solid;border-radius:20px;padding:4px 14px;font-size:14px;font-weight:900;letter-spacing:2px; }
            .cin-clash { font-size:16px;font-weight:900;letter-spacing:3px;animation:clash-pulse 1.5s infinite; }
            .cin-buttons { display:flex;gap:20px;margin-top:20px;position:relative;z-index:1;flex-wrap:wrap;justify-content:center; }
            .cin-btn { padding:14px 32px;font-size:14px;font-weight:900;letter-spacing:2px;border:none;border-radius:8px;color:white;cursor:pointer;transition:transform 0.15s,box-shadow 0.15s;text-transform:uppercase; }
            .cin-btn:hover { transform:scale(1.07);box-shadow:0 0 20px rgba(255,255,255,0.3); }
            .cin-btn-auto { padding:16px 40px;font-size:15px; }
            .cin-manual-override { display:flex;align-items:center;gap:10px;margin-top:12px;position:relative;z-index:1; }
            .cin-btn-small { padding:7px 14px;font-size:11px;font-weight:bold;letter-spacing:1px;border-radius:6px;background:transparent;cursor:pointer;transition:all 0.15s; }
            .cin-btn-small:hover { transform:scale(1.05); }
            .cin-analysis { text-align:center;margin-top:16px;position:relative;z-index:1;max-width:500px; }
            .cin-analysis-text { color:#aaa;font-size:13px;line-height:1.5;margin-bottom:8px; }
            .cin-tie-method { color:#666;font-size:11px;letter-spacing:1px;margin-bottom:8px;font-style:italic; }
            .cin-analysis-odds { font-size:13px;font-weight:bold;letter-spacing:1px; }
            /* Voting styles */
            .cin-vote-area { margin-top:18px;position:relative;z-index:1;text-align:center;width:100%;max-width:600px; }
            .cin-vote-title { font-size:11px;letter-spacing:4px;color:#555;margin-bottom:14px;font-weight:bold; }
            .cin-voters { display:flex;gap:16px;justify-content:center;flex-wrap:wrap; }
            .cin-voter { background:#0a0a0a;border:1px solid #222;border-radius:10px;padding:12px 16px;min-width:140px; }
            .cin-voter-name { font-size:12px;font-weight:900;letter-spacing:2px;margin-bottom:10px; }
            .cin-voter-btns { display:flex;flex-direction:column;gap:6px; }
            .cin-vote-btn { padding:7px 10px;font-size:11px;font-weight:bold;letter-spacing:1px;border-radius:6px;background:transparent;cursor:pointer;border-width:1px;border-style:solid;transition:all 0.15s; }
            .cin-vote-btn:hover { opacity:0.8;transform:scale(1.04); }
            .cin-vote-btn.voted { opacity:0.4;pointer-events:none; }
            .cin-vote-btn.selected { opacity:1 !important;font-weight:900; }
            .cin-vote-status { margin-top:14px;font-size:12px;letter-spacing:2px;color:#555; }
        `;
        document.head.appendChild(style);
    }

    modal.style.display = 'flex';
    setTimeout(() => { flashScreen(col1+'88'); shakeScreen(); spawnParticles(col1, col2); }, 350);
}

// Voting system for 3-4 players
function castVote(voterColor, side, btn) {
    // Prevent double-voting
    const voterDiv = document.getElementById(`voter-${voterColor}`);
    if (!voterDiv) return;
    const allBtns = voterDiv.querySelectorAll('.cin-vote-btn');
    allBtns.forEach(b => { b.classList.add('voted'); b.classList.remove('selected'); });
    btn.classList.add('selected');
    btn.style.opacity = '1';

    window._votes[voterColor] = side;
    const voteCount = Object.keys(window._votes).length;
    const needed = window._votersNeeded;

    const statusEl = document.getElementById('vote-status');
    if (statusEl) statusEl.innerText = `Votes in: ${voteCount}/${needed}`;

    if (voteCount >= needed) {
        // Count votes
        let atkVotes = 0, defVotes = 0;
        Object.values(window._votes).forEach(v => { v === 'atk' ? atkVotes++ : defVotes++; });

        let winner;
        if (atkVotes > defVotes) winner = true;
        else if (defVotes > atkVotes) winner = false;
        else {
            // Tie-break: power scoring
            const atkUnit = game.grid[window.currentAtkIdx]?.unit || { tier:'common' };
            const defUnit = game.grid[window.currentDefIdx]?.unit || { tier:'common' };
            winner = unitScore(atkUnit) >= unitScore(defUnit);
        }

        const resultText = winner ? '⚔️ ATTACKER WINS!' : '🛡️ DEFENDER WINS!';
        const atkV = atkVotes, defV = defVotes;
        if (statusEl) {
            statusEl.style.color = winner ? '#4dff88' : '#ff4d4d';
            statusEl.style.fontSize = '15px';
            statusEl.style.fontWeight = '900';
            statusEl.innerText = `${resultText}  (${atkV}-${defV} votes${atkV===defV ? ', tie-break by power' : ''})`;
        }
        setTimeout(() => resolveManual(winner), 1200);
    }
}

function showBattleModalFromHand(handIdx, defIdx) {
    const player = game.players[game.currentTurn];
    const attackerUnit = player.hand[handIdx];
    const defenderTile = game.grid[defIdx];

    window.currentAtkIdx = handIdx;
    window.currentDefIdx = defIdx;
    window.isBattleFromHand = true;
    window.isNeutralTarget = false;

    const defenderOwner = defenderTile.owner;
    let defAllies = [defenderTile.unit];
    if (defenderOwner !== 'neutral') {
        getNeighbors(defIdx).forEach(nIdx => {
            const neighbor = game.grid[nIdx];
            if (neighbor && neighbor.owner === defenderOwner && nIdx !== defIdx && neighbor.unit)
                defAllies.push(neighbor.unit);
        });
    }
    openCinematicBattle([attackerUnit], defAllies, `1v${defAllies.length}`);
}

function showBattleModal(atkIdx, defIdx) {
    const attackerTile = game.grid[atkIdx];
    const defenderTile = game.grid[defIdx];
    const player = game.players[game.currentTurn];

    window.currentAtkIdx = atkIdx;
    window.currentDefIdx = defIdx;
    window.isNeutralTarget = (defenderTile.owner === 'neutral');

    let allies = [attackerTile.unit];
    getNeighbors(defIdx).forEach(nIdx => {
        if (nIdx === atkIdx) return;
        const neighbor = game.grid[nIdx];
        if (neighbor && neighbor.owner === player.color && neighbor.unit) allies.push(neighbor.unit);
    });

    const defenderOwner = defenderTile.owner;
    let defAllies = [defenderTile.unit];
    if (defenderOwner !== 'neutral') {
        getNeighbors(atkIdx).forEach(nIdx => {
            if (nIdx === defIdx) return;
            const neighbor = game.grid[nIdx];
            if (neighbor && neighbor.owner === defenderOwner && neighbor.unit) defAllies.push(neighbor.unit);
        });
    }
    openCinematicBattle(allies, defAllies, `${allies.length}v${defAllies.length}`);
}

// =============================================
// ABILITY MODE ENGINE
// =============================================

function getSelectedUnit() {
    const p = game.players[game.currentTurn];
    if (game.selection.type === 'board') return { unit: game.grid[game.selection.idx]?.unit, idx: game.selection.idx, source: 'board' };
    if (game.selection.type === 'hand')  return { unit: p.hand[game.selection.idx], idx: game.selection.idx, source: 'hand' };
    return null;
}

// Tick frozen units — called when a player's turn ENDS.
// Freeze "1 turn" means every other player gets their turn before it expires.
// We track expiry as: turnCount when freeze was applied + (turns * numActivePlayers).
function tickFrozen() {
    game.turnCount = (game.turnCount || 0) + 1;
    Object.keys(game.frozenUnits).forEach(k => {
        if (game.turnCount >= game.frozenUnits[k]) delete game.frozenUnits[k];
    });
}

// Check if a tile's unit is frozen (ability mode only)
function isFrozen(tileIdx) {
    if (!game.abilityMode) return false;
    const expiry = game.frozenUnits[tileIdx];
    if (!expiry) return false;
    return (game.turnCount || 0) < expiry;
}

function frozenRoundsLeft(tileIdx) {
    const expiry = game.frozenUnits[tileIdx];
    if (!expiry) return 0;
    const activePlayers = game.players.filter(p => !p.eliminated).length || 1;
    return Math.ceil((expiry - (game.turnCount || 0)) / activePlayers);
}

// Check if attacker is blocked by shield
function consumeShield(tileIdx) {
    if (!game.abilityMode) return false;
    if (game.shieldedUnits[tileIdx] > 0) {
        game.shieldedUnits[tileIdx]--;
        if (game.shieldedUnits[tileIdx] <= 0) delete game.shieldedUnits[tileIdx];
        return true; // blocked!
    }
    return false;
}

// Try passive dodge on a defender
function rollDodge(defIdx) {
    if (!game.abilityMode) return false;
    const tile = game.grid[defIdx];
    if (!tile?.unit) return false;
    const ab = getAbility(tile.unit.name);
    if (!ab) return false;
    if (ab.type === 'dodge' && Math.random() < (ab.chance || 0)) return true;
    if (ab.bonus === 'dodge' && Math.random() < (ab.chance || 0)) return true;
    // Mahoraga special: gained dodge after surviving once
    if (tile.unit._mahoragaDodge && Math.random() < 0.30) return true;
    return false;
}

// Apply shields to newly placed/awakened units that have shield ability
function applyPassiveShield(unit, tileIdx) {
    if (!game.abilityMode) return;
    const ab = getAbility(unit.name);
    if (!ab) return;
    if (ab.type === 'shield') {
        game.shieldedUnits[tileIdx] = ab.charges || 1;
    }
}

// Apply revive tracking
function trackRevive(unit, ownerColor) {
    if (!game.abilityMode) return;
    const ab = getAbility(unit.name);
    if (!ab) return;
    if (ab.type === 'revive' || ab.revive) {
        const key = `${ownerColor}:${unit.name}`;
        if (!game.reviveTracked[key]) game.reviveTracked[key] = true; // not yet used
    }
}

// Try revive — returns true if unit comes back to hand
function tryRevive(unit, ownerColor, hand) {
    if (!game.abilityMode) return false;
    const ab = getAbility(unit.name);
    if (!ab) return false;
    const usesRevive = ab.type === 'revive' || ab.revive;
    if (!usesRevive) return false;
    const key = `${ownerColor}:${unit.name}`;
    if (game.reviveTracked[key] === true) {
        // First death — revive
        game.reviveTracked[key] = 'used';
        hand.push({ ...unit });
        addLog(`⚡ ${unit.name} revives! (${ab.name})`);
        playAbilityAnimation(unit.name, ab.icon, ab.name);
        showAbilityToast(unit.name, ab.icon, ab.name, 'REVIVE!');
        return true;
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════
//  ABILITY ANIMATIONS — per-character visual overlays
// ═══════════════════════════════════════════════════════════════

const ABILITY_ANIMS = {
    // JJK
    "Gojo":       { bg:'radial-gradient(circle,#4d79ff44,transparent 70%)',  particles:'#4d79ff', symbol:'♾️',  text:'INFINITY',         color:'#4d79ff' },
    "Sukuna":     { bg:'radial-gradient(circle,#ff000044,transparent 70%)',  particles:'#ff0000', symbol:'🔥',  text:'MALEVOLENT SHRINE', color:'#ff4444' },
    "Megumi":     { bg:'radial-gradient(circle,#22222299,transparent 70%)',  particles:'#aaaaaa', symbol:'🐍',  text:'TEN SHADOWS',       color:'#aaa' },
    "Todo":       { bg:'radial-gradient(circle,#ff880044,transparent 70%)',  particles:'#ff8800', symbol:'🤜',  text:'BOOGIE WOOGIE',     color:'#ff8800' },
    "Mahito":     { bg:'radial-gradient(circle,#8800ff44,transparent 70%)',  particles:'#8800ff', symbol:'👻',  text:'TRANSFIGURATION',   color:'#bf80ff' },
    "Jogo":       { bg:'radial-gradient(circle,#ff440044,transparent 70%)',  particles:'#ff6600', symbol:'🌋',  text:'MAXIMUM METEOR',    color:'#ff6600' },
    "Dagon":      { bg:'radial-gradient(circle,#00aaff44,transparent 70%)',  particles:'#00aaff', symbol:'🌊',  text:'TIDAL WAVE',        color:'#00aaff' },
    "Kenjaku":    { bg:'radial-gradient(circle,#00ff8844,transparent 70%)',  particles:'#00ff88', symbol:'🧠',  text:'BODY TAKEOVER',     color:'#00ff88' },
    "Itadori":    { bg:'radial-gradient(circle,#ff448844,transparent 70%)',  particles:'#ff4488', symbol:'👊',  text:'DIVERGENT FIST',    color:'#ff4488' },
    "Choso":      { bg:'radial-gradient(circle,#cc000044,transparent 70%)',  particles:'#cc0000', symbol:'🩸',  text:'BLOOD MANIPULATION',color:'#cc0000' },
    "Inumaki Toge":{ bg:'radial-gradient(circle,#8888ff44,transparent 70%)',  particles:'#8888ff', symbol:'🗣️', text:'CURSED SPEECH',     color:'#8888ff' },
    "Yuta":       { bg:'radial-gradient(circle,#ff00ff44,transparent 70%)',  particles:'#ff00ff', symbol:'💜',  text:'RIKA',              color:'#ff00ff' },
    "Hakari":     { bg:'radial-gradient(circle,#ffd70044,transparent 70%)',  particles:'#ffd700', symbol:'🎰',  text:'JACKPOT',           color:'#ffd700' },
    "Higuruma":   { bg:'radial-gradient(circle,#88888844,transparent 70%)',  particles:'#888888', symbol:'⚖️',  text:'DEADLY SENTENCING', color:'#aaa' },
    "Nanami":     { bg:'radial-gradient(circle,#ffcc0044,transparent 70%)',  particles:'#ffcc00', symbol:'⏰',  text:'OVERTIME',          color:'#ffcc00' },

    // Naruto
    "Naruto (Base)":  { bg:'radial-gradient(circle,#ff880044,transparent 70%)', particles:'#ff8800', symbol:'🍥', text:'SHADOW CLONE',     color:'#ff8800' },
    "Naruto (Sage)":  { bg:'radial-gradient(circle,#88aa0044,transparent 70%)', particles:'#aacc00', symbol:'🐸', text:'SAGE RASENSHURIKEN',color:'#aacc00' },
    "Naruto (KSM)":   { bg:'radial-gradient(circle,#ff660044,transparent 70%)', particles:'#ff6600', symbol:'🦊', text:'BIJUU BOMB',        color:'#ff6600' },
    "Naruto (Six Paths)": { bg:'radial-gradient(circle,#ffffff44,transparent 70%)', particles:'#ffffff', symbol:'✨', text:'SIX PATHS TRUTH', color:'#fff' },
    "Sasuke (MS)":    { bg:'radial-gradient(circle,#ff000088,transparent 70%)', particles:'#ff0000', symbol:'🔥', text:'AMATERASU',         color:'#ff4444' },
    "Sasuke (Rinnegan)": { bg:'radial-gradient(circle,#8800ff44,transparent 70%)', particles:'#8800ff', symbol:'🌀', text:'AMENOTEJIKARA',  color:'#bf80ff' },
    "Itachi":     { bg:'radial-gradient(circle,#aa000044,transparent 70%)',  particles:'#cc0000', symbol:'🌀',  text:'TSUKUYOMI',         color:'#cc0000' },
    "Kakashi":    { bg:'radial-gradient(circle,#4444ff44,transparent 70%)',  particles:'#4444ff', symbol:'⚡',  text:'KAMUI',             color:'#4d79ff' },
    "Kakashi (DMS)": { bg:'radial-gradient(circle,#8888ff44,transparent 70%)', particles:'#8888ff', symbol:'👁️', text:'DUAL MANGEKYO',   color:'#8888ff' },
    "Minato":     { bg:'radial-gradient(circle,#ffff0044,transparent 70%)',  particles:'#ffff00', symbol:'⚡',  text:'FLYING THUNDER GOD',color:'#ffff00' },
    "Obito":      { bg:'radial-gradient(circle,#33333344,transparent 70%)',  particles:'#888888', symbol:'👻',  text:'KAMUI PHASE',       color:'#888' },
    "Nagato":     { bg:'radial-gradient(circle,#cc000044,transparent 70%)',  particles:'#cc4444', symbol:'👼',  text:'SHINRA TENSEI',     color:'#cc4444' },
    "Madara (Six Paths)": { bg:'radial-gradient(circle,#33006644,transparent 70%)', particles:'#8800ff', symbol:'🌑', text:'INFINITE TSUKUYOMI', color:'#8800ff' },
    "Kaguya":     { bg:'radial-gradient(circle,#ffffff33,transparent 70%)',  particles:'#ffffff', symbol:'🌌',  text:'ASH BONES',         color:'#eee' },
    "Hagoromo":   { bg:'radial-gradient(circle,#ffd70044,transparent 70%)',  particles:'#ffd700', symbol:'✨',  text:'SIX PATHS TRUTH',   color:'#ffd700' },
    "Gaara":      { bg:'radial-gradient(circle,#aa880044,transparent 70%)',  particles:'#aa8800', symbol:'🏜️',  text:'SAND ARMOUR',       color:'#aa8800' },

    // Demon Slayer
    "Tanjiro":    { bg:'radial-gradient(circle,#ff440044,transparent 70%)',  particles:'#ff4400', symbol:'💧',  text:'HINOKAMI KAGURA',   color:'#ff6600' },
    "Zenitsu":    { bg:'radial-gradient(circle,#ffff0044,transparent 70%)',  particles:'#ffff00', symbol:'⚡',  text:'THUNDERCLAP FLASH', color:'#ffff00' },
    "Inosuke":    { bg:'radial-gradient(circle,#44ff4444,transparent 70%)',  particles:'#44ff44', symbol:'🐗',  text:'BEAST BREATHING',   color:'#44ff44' },
    "Rengoku":    { bg:'radial-gradient(circle,#ff660044,transparent 70%)',  particles:'#ff6600', symbol:'🔥',  text:'FLAME BREATHING',   color:'#ff6600' },
    "Giyu":       { bg:'radial-gradient(circle,#00aaff44,transparent 70%)',  particles:'#00aaff', symbol:'💧',  text:'DEAD CALM',         color:'#00aaff' },
    "Shinobu":    { bg:'radial-gradient(circle,#aa00ff44,transparent 70%)',  particles:'#cc44ff', symbol:'🦋',  text:'WISTERIA POISON',   color:'#cc44ff' },
    "Muichiro":   { bg:'radial-gradient(circle,#aaffff44,transparent 70%)',  particles:'#aaffff', symbol:'🌫️',  text:'MIST BREATHING',    color:'#aaffff' },
    "Gyomei":     { bg:'radial-gradient(circle,#88888844,transparent 70%)',  particles:'#aaaaaa', symbol:'🪨',  text:'STONE BREATHING',   color:'#aaa' },
    "Kokushibo":  { bg:'radial-gradient(circle,#0000aa44,transparent 70%)',  particles:'#4444ff', symbol:'🌙',  text:'MOON BREATHING',    color:'#4444ff' },
    "Yorichi":    { bg:'radial-gradient(circle,#ff880044,transparent 70%)',  particles:'#ffaa00', symbol:'☀️',  text:'SUN BREATHING',     color:'#ffaa00' },
    "Muzan":      { bg:'radial-gradient(circle,#aa000044,transparent 70%)',  particles:'#cc0000', symbol:'🩸',  text:'DEMON BLOOD',       color:'#cc0000' },
    "Douma":      { bg:'radial-gradient(circle,#aaffff44,transparent 70%)',  particles:'#88ffff', symbol:'❄️',  text:'CRYOGENIC AURA',    color:'#88ffff' },
    "Akaza":      { bg:'radial-gradient(circle,#ff448844,transparent 70%)',  particles:'#ff4488', symbol:'🌸',  text:'COMPASS NEEDLE',    color:'#ff4488' },
    "Daki":       { bg:'radial-gradient(circle,#ffaaff44,transparent 70%)',  particles:'#ffaaff', symbol:'🎀',  text:'OBI SASH',          color:'#ffaaff' },

    // One Piece
    "Luffy (Gear 5)": { bg:'radial-gradient(circle,#ffffff44,transparent 70%)', particles:'#ffffff', symbol:'🌀', text:'GEAR FIVE',       color:'#fff' },
    "Shanks":     { bg:'radial-gradient(circle,#cc000044,transparent 70%)',  particles:'#cc0000', symbol:'👑',  text:'HAOSHOKU HAKI',     color:'#cc0000' },
    "Whitebeard": { bg:'radial-gradient(circle,#8888ff44,transparent 70%)',  particles:'#8888ff', symbol:'🌊',  text:'GURA GURA',         color:'#8888ff' },
    "Enel":       { bg:'radial-gradient(circle,#ffff0044,transparent 70%)',  particles:'#ffff00', symbol:'⚡',  text:'GORO GORO',         color:'#ffff00' },
    "Kaido":      { bg:'radial-gradient(circle,#0088ff44,transparent 70%)',  particles:'#0088ff', symbol:'🐉',  text:'BORO BREATH',       color:'#0088ff' },
    "Big Mom":    { bg:'radial-gradient(circle,#ff440044,transparent 70%)',  particles:'#ff8844', symbol:'⚡',  text:'SOUL SOUL FRUIT',   color:'#ff8844' },
    "Law":        { bg:'radial-gradient(circle,#00ff8844,transparent 70%)',  particles:'#00ff88', symbol:'🏥',  text:'ROOM',              color:'#00ff88' },
    "Blackbeard": { bg:'radial-gradient(circle,#00000088,transparent 60%)',  particles:'#444444', symbol:'🌑',  text:'DARKNESS',          color:'#666' },
    "Mihawk":     { bg:'radial-gradient(circle,#0000aa44,transparent 70%)',  particles:'#0000cc', symbol:'⚔️',  text:'BLACK BLADE',       color:'#4444ff' },
    "Doflamingo": { bg:'radial-gradient(circle,#ff008844,transparent 70%)',  particles:'#ff0088', symbol:'🕸️',  text:'BIRDCAGE',          color:'#ff0088' },
    "Kizaru":     { bg:'radial-gradient(circle,#ffff8844,transparent 70%)',  particles:'#ffff44', symbol:'💡',  text:'SPEED OF LIGHT',    color:'#ffff44' },
    "Akainu":     { bg:'radial-gradient(circle,#ff000044,transparent 70%)',  particles:'#ff0000', symbol:'🌋',  text:'ABSOLUTE JUSTICE',  color:'#ff0000' },
    "Kuzan":      { bg:'radial-gradient(circle,#aaffff44,transparent 70%)',  particles:'#88ffff', symbol:'❄️',  text:'FLASH FREEZE',      color:'#88ffff' },

    // MHA
    "Deku (OFA)": { bg:'radial-gradient(circle,#00ff8844,transparent 70%)',  particles:'#00ff88', symbol:'💚',  text:'ONE FOR ALL',       color:'#00ff88' },
    "Bakugo":     { bg:'radial-gradient(circle,#ff880044,transparent 70%)',  particles:'#ff8800', symbol:'💥',  text:'HOWITZER IMPACT',   color:'#ff8800' },
    "Todoroki":   { bg:'radial-gradient(circle,#00aaff44,transparent 70%)',  particles:'#00aaff', symbol:'❄️',  text:'HALF COLD HALF HOT',color:'#00aaff' },
    "Shigaraki":  { bg:'radial-gradient(circle,#888888aa,transparent 70%)',  particles:'#888888', symbol:'💀',  text:'DECAY',             color:'#888' },
    "AFO":        { bg:'radial-gradient(circle,#00000088,transparent 60%)',  particles:'#444444', symbol:'🖤',  text:'ALL FOR ONE',       color:'#666' },
    "All Might":  { bg:'radial-gradient(circle,#ffd70044,transparent 70%)',  particles:'#ffd700', symbol:'💥',  text:'UNITED STATES OF SMASH', color:'#ffd700' },
    "Dabi":       { bg:'radial-gradient(circle,#4444ff44,transparent 70%)',  particles:'#4444ff', symbol:'🔥',  text:'BLUEFLAME',         color:'#4444ff' },
    "Hawks":      { bg:'radial-gradient(circle,#ff880044,transparent 70%)',  particles:'#ff8800', symbol:'🪶',  text:'FIERCE WINGS',      color:'#ff8800' },
    "Stain":      { bg:'radial-gradient(circle,#cc000044,transparent 70%)',  particles:'#cc0000', symbol:'🩸',  text:'BLOODCURDLE',       color:'#cc0000' },
    "Togata":     { bg:'radial-gradient(circle,#88888844,transparent 70%)',  particles:'#aaaaaa', symbol:'👻',  text:'PERMEATION',        color:'#aaa' },
    "Mirko":      { bg:'radial-gradient(circle,#ffffff44,transparent 70%)',  particles:'#ffffff', symbol:'🌕',  text:'LUNAR ANNIHILATION',color:'#fff' },

    // HxH
    "Killua":     { bg:'radial-gradient(circle,#ffff0044,transparent 70%)',  particles:'#ffff00', symbol:'⚡',  text:'GODSPEED',          color:'#ffff00' },
    "Killua (Godspeed)": { bg:'radial-gradient(circle,#00ffff44,transparent 70%)', particles:'#00ffff', symbol:'⚡', text:'KANMURU',      color:'#00ffff' },
    "Gon (Adult)":{ bg:'radial-gradient(circle,#00ff0044,transparent 70%)',  particles:'#00ff00', symbol:'🌑',  text:'ADULT GON',         color:'#00ff00' },
    "Kurapika":   { bg:'radial-gradient(circle,#ff000044,transparent 70%)',  particles:'#ff0000', symbol:'🔗',  text:'CHAIN JAIL',        color:'#ff0000' },
    "Hisoka":     { bg:'radial-gradient(circle,#ff008844,transparent 70%)',  particles:'#ff0088', symbol:'🃏',  text:'BUNGEE GUM',        color:'#ff0088' },
    "Chrollo":    { bg:'radial-gradient(circle,#88888844,transparent 70%)',  particles:'#aaaaaa', symbol:'📖',  text:'SKILL HUNTER',      color:'#aaa' },
    "Meruem":     { bg:'radial-gradient(circle,#ffd70044,transparent 70%)',  particles:'#ffd700', symbol:'👑',  text:'NEN ABSORPTION',    color:'#ffd700' },
    "Netero":     { bg:'radial-gradient(circle,#ffd70044,transparent 70%)',  particles:'#ffd700', symbol:'🙏',  text:'100-TYPE GUANYIN',  color:'#ffd700' },
    "Zeno":       { bg:'radial-gradient(circle,#0000ff44,transparent 70%)',  particles:'#0000ff', symbol:'🐉',  text:'DRAGON DIVE',       color:'#4444ff' },
    "Illumi":     { bg:'radial-gradient(circle,#cc00cc44,transparent 70%)',  particles:'#cc00cc', symbol:'📍',  text:'NEEDLE PEOPLE',     color:'#cc00cc' },
    "Feitan":     { bg:'radial-gradient(circle,#ff880044,transparent 70%)',  particles:'#ff8800', symbol:'☀️',  text:'RISING SUN',        color:'#ff8800' },

    // Bleach
    "Ichigo":     { bg:'radial-gradient(circle,#0000ff44,transparent 70%)',  particles:'#4444ff', symbol:'🌙',  text:'GETSUGA TENSHO',    color:'#4444ff' },
    "Ichigo (True Bankai)": { bg:'radial-gradient(circle,#ff000088,transparent 70%)', particles:'#ff0000', symbol:'⚡', text:'TRUE BANKAI', color:'#ff4444' },
    "Aizen":      { bg:'radial-gradient(circle,#88008844,transparent 70%)',  particles:'#cc00cc', symbol:'🌀',  text:'KYOKA SUIGETSU',    color:'#cc00cc' },
    "Yhwach":     { bg:'radial-gradient(circle,#ffffff44,transparent 70%)',  particles:'#ffffff', symbol:'🌑',  text:'THE ALMIGHTY',      color:'#fff' },
    "Yamamoto":   { bg:'radial-gradient(circle,#ff440044,transparent 70%)',  particles:'#ff4400', symbol:'🔥',  text:'ZANKA NO TACHI',    color:'#ff6600' },
    "Yoruichi":   { bg:'radial-gradient(circle,#ffaa0044,transparent 70%)',  particles:'#ffaa00', symbol:'⚡',  text:'FLASH GODDESS',     color:'#ffaa00' },
    "Byakuya":    { bg:'radial-gradient(circle,#ffaaff44,transparent 70%)',  particles:'#ffaaff', symbol:'🌸',  text:'SENBONZAKURA',      color:'#ffaaff' },
    "Hitsugaya":  { bg:'radial-gradient(circle,#aaffff44,transparent 70%)',  particles:'#aaffff', symbol:'❄️',  text:'HYORINMARU',        color:'#aaffff' },
    "Gin (Kamishini no Yari)": { bg:'radial-gradient(circle,#88888844,transparent 70%)',  particles:'#aaaaaa', symbol:'💫',  text:'KAMISHINI NO YARI', color:'#aaa' },
    "Barragan":   { bg:'radial-gradient(circle,#88440044,transparent 70%)',  particles:'#884400', symbol:'💀',  text:'RESPIRA',           color:'#884400' },
    "Ulquiorra":  { bg:'radial-gradient(circle,#00000088,transparent 60%)',  particles:'#444444', symbol:'🖤',  text:'CERO OSCURAS',      color:'#666' },
    "Zaraki":     { bg:'radial-gradient(circle,#ff000044,transparent 70%)',  particles:'#ff0000', symbol:'💀',  text:'BLOOD FRENZY',      color:'#ff4444' },
    "Zaraki (Bankai)": { bg:'radial-gradient(circle,#ff000088,transparent 65%)', particles:'#ff0000', symbol:'👹', text:'NOZARASHI BANKAI', color:'#ff0000' },
    "Unohana":    { bg:'radial-gradient(circle,#00ff4444,transparent 70%)',  particles:'#00ff44', symbol:'🩸',  text:'MINAZUKI',          color:'#00ff44' },
    "Unohana (Minazuki)": { bg:'radial-gradient(circle,#cc000044,transparent 70%)', particles:'#cc0000', symbol:'☠️', text:'TRUE KENPACHI', color:'#cc0000' },
    "Harribel":   { bg:'radial-gradient(circle,#0088ff44,transparent 70%)',  particles:'#0088ff', symbol:'💧',  text:'CASCADA',           color:'#0088ff' },
    "Harribel (Tiburón)": { bg:'radial-gradient(circle,#00aaff44,transparent 70%)', particles:'#00aaff', symbol:'🦈', text:'TIBURON',       color:'#00aaff' },
    "Neliel":     { bg:'radial-gradient(circle,#44ff4444,transparent 70%)',  particles:'#44ff44', symbol:'🦌',  text:'GAMUZA',            color:'#44ff44' },
    "Neliel (Gamuza)": { bg:'radial-gradient(circle,#88ff8844,transparent 70%)', particles:'#88ff88', symbol:'🐎', text:'CERO DOBLE',     color:'#88ff88' },
    "Starrk (Los Lobos)": { bg:'radial-gradient(circle,#88550044,transparent 70%)', particles:'#aa7700', symbol:'🐺', text:'LOS LOBOS',    color:'#aa7700' },
    "Yamamoto (Zanka no Tachi)": { bg:'radial-gradient(circle,#ff440088,transparent 65%)', particles:'#ff4400', symbol:'🌅', text:'ZANKA NO TACHI', color:'#ff6600' },
    "Komamura":   { bg:'radial-gradient(circle,#ff880044,transparent 70%)',  particles:'#ff8800', symbol:'🐺',  text:'TENKEN',            color:'#ff8800' },
    "Komamura (Kokujō Tengen Myō'ō)": { bg:'radial-gradient(circle,#885500,transparent 65%)', particles:'#aa6600', symbol:'🗿', text:'KOKUJŌ TENGEN', color:'#aa6600' },
    "Nnoitra":    { bg:'radial-gradient(circle,#22224444,transparent 70%)',  particles:'#666688', symbol:'🌙',  text:'SANTA TERESA',      color:'#666688' },
    "Nnoitra (Santa Teresa)": { bg:'radial-gradient(circle,#33335544,transparent 70%)', particles:'#8888aa', symbol:'🌙', text:'FIVE ARMS', color:'#8888aa' },
    "Yammy (Ira)":{ bg:'radial-gradient(circle,#ff000044,transparent 70%)',  particles:'#ff0000', symbol:'💢',  text:'ESPADA 0',          color:'#ff2222' },
    "As Nodt (Tatarforas)": { bg:'radial-gradient(circle,#33003344,transparent 70%)', particles:'#880088', symbol:'😱', text:'FEAR INCARNATE', color:'#880088' },
    "Bambietta":  { bg:'radial-gradient(circle,#ff440044,transparent 70%)',  particles:'#ff4400', symbol:'💣',  text:'THE EXPLODE',       color:'#ff4400' },
    "Candice":    { bg:'radial-gradient(circle,#ffff0044,transparent 70%)',  particles:'#ffff00', symbol:'⚡',  text:'THUNDERBOLT',       color:'#ffff00' },
    "Giselle":    { bg:'radial-gradient(circle,#00ff0044,transparent 70%)',  particles:'#00ff00', symbol:'🧟',  text:'THE ZOMBIE',        color:'#00ff00' },
    "Gerard":     { bg:'radial-gradient(circle,#ff000044,transparent 70%)',  particles:'#ff0000', symbol:'❤️',  text:'THE MIRACLE',       color:'#ff0000' },
    "Gerard (Aschetonig)": { bg:'radial-gradient(circle,#ff000088,transparent 65%)', particles:'#ff4444', symbol:'❤️', text:'ASCHETONIG',   color:'#ff4444' },
    "Lille Barro":{ bg:'radial-gradient(circle,#ffffff44,transparent 70%)',  particles:'#ffffff', symbol:'🎯',  text:'THE X-AXIS',        color:'#fff' },
    "Lille Barro (Jilliel)": { bg:'radial-gradient(circle,#ffffff88,transparent 60%)', particles:'#ffffff', symbol:'🕊️', text:'JILLIEL',     color:'#fff' },
    "Pernida":    { bg:'radial-gradient(circle,#ff00ff44,transparent 70%)',  particles:'#ff00ff', symbol:'👁️', text:'COMPULSORY',        color:'#ff00ff' },
    "Askin (Hasshain)": { bg:'radial-gradient(circle,#44440044,transparent 70%)', particles:'#888800', symbol:'☠️', text:'GIFT BALL DELUXE', color:'#888800' },
    "Shunsui":    { bg:'radial-gradient(circle,#ffaaff44,transparent 70%)',  particles:'#ffaaff', symbol:'🌸',  text:'KATEN KYOKOTSU',    color:'#ffaaff' },
    "Shunsui (Katen Kyokotsu)": { bg:'radial-gradient(circle,#ff88ff44,transparent 70%)', particles:'#ff88ff', symbol:'🌸', text:'KAGARIBI', color:'#ff88ff' },
    "Ukitake":    { bg:'radial-gradient(circle,#ffffff44,transparent 70%)',  particles:'#ffffff', symbol:'☯️',  text:'MIMIHAGI',          color:'#fff' },
    "Orihime":    { bg:'radial-gradient(circle,#ffaaff44,transparent 70%)',  particles:'#ffaaff', symbol:'🌸',  text:'SOTEN KISSHUN',     color:'#ffaaff' },
    "Uryu":       { bg:'radial-gradient(circle,#4444ff44,transparent 70%)',  particles:'#4444ff', symbol:'🏹',  text:'HEILIG PFEIL',      color:'#4444ff' },
    "Chad":       { bg:'radial-gradient(circle,#ff880044,transparent 70%)',  particles:'#ff8800', symbol:'💪',  text:'EL DIRECTO',        color:'#ff8800' },
    "Renji":      { bg:'radial-gradient(circle,#ff000044,transparent 70%)',  particles:'#ff0000', symbol:'🐍',  text:'ZABIMARU',          color:'#ff4444' },
    "Rangiku":    { bg:'radial-gradient(circle,#ff88aa44,transparent 70%)',  particles:'#ff88aa', symbol:'🌸',  text:'HAINEKO',           color:'#ff88aa' },
    "Hisagi":     { bg:'radial-gradient(circle,#33334444,transparent 70%)',  particles:'#666688', symbol:'⑨',  text:'KAZESHINI',         color:'#666688' },
    "Kensei":     { bg:'radial-gradient(circle,#44ff4444,transparent 70%)',  particles:'#44ff44', symbol:'💨',  text:'TEKKEN TACHIKAZE',  color:'#44ff44' },
    "Rose":       { bg:'radial-gradient(circle,#ffaaff44,transparent 70%)',  particles:'#ffaaff', symbol:'🎸',  text:'KINSHARA',          color:'#ffaaff' },
    "Bazz-B":     { bg:'radial-gradient(circle,#ff440044,transparent 70%)',  particles:'#ff4400', symbol:'🔥',  text:'THE BURNER',        color:'#ff4400' },
    "Tokinada":   { bg:'radial-gradient(circle,#8800ff44,transparent 70%)',  particles:'#8800ff', symbol:'🔮',  text:'ENRAKYOTEN',        color:'#bf80ff' },
    "Hikone":     { bg:'radial-gradient(circle,#ffff0044,transparent 70%)',  particles:'#ffff00', symbol:'⚡',  text:'IKOMIKIDOMOE',      color:'#ffff00' },
    "Ginjo":      { bg:'radial-gradient(circle,#ffff0044,transparent 70%)',  particles:'#ffff00', symbol:'⚡',  text:'CROSS OF SCAFFOLD', color:'#ffff00' },
    "Wonderweiss":{ bg:'radial-gradient(circle,#aaffff44,transparent 70%)',  particles:'#aaffff', symbol:'💨',  text:'EXTINGUIR',         color:'#aaffff' },
    "White Ichigo":{ bg:'radial-gradient(circle,#00000088,transparent 60%)', particles:'#444444', symbol:'🖤', text:'HOLLOW GETSUGA',    color:'#888' },
    "Isshin":     { bg:'radial-gradient(circle,#ff440044,transparent 70%)',  particles:'#ff4400', symbol:'⚡',  text:'ENGETSU',           color:'#ff6600' },
    "Oetsu":      { bg:'radial-gradient(circle,#ffd70044,transparent 70%)',  particles:'#ffd700', symbol:'⚒️', text:'SAYAFUSHI',         color:'#ffd700' },
    "Kirio":      { bg:'radial-gradient(circle,#ffaaff44,transparent 70%)',  particles:'#ffaaff', symbol:'🍱',  text:'SHIN\'ETSU',        color:'#ffaaff' },
    "Tenjiro":    { bg:'radial-gradient(circle,#00ffaa44,transparent 70%)',  particles:'#00ffaa', symbol:'💊',  text:'HEALING SPRINGS',   color:'#00ffaa' },
    "Senjumaru":  { bg:'radial-gradient(circle,#ffaaff44,transparent 70%)',  particles:'#ffaaff', symbol:'🧵',  text:'NEEDLE TRAP',       color:'#ffaaff' },

    // Fire Force
    "Shinra":     { bg:'radial-gradient(circle,#ff440044,transparent 70%)',  particles:'#ff4400', symbol:'😈',  text:"DEVIL'S FOOTPRINTS",color:'#ff6600' },
    "Shinra (Adolla Burst)": { bg:'radial-gradient(circle,#ff880088,transparent 70%)', particles:'#ff8800', symbol:'🌌', text:'ADOLLA GRACE', color:'#ff8800' },
    "Arthur":     { bg:'radial-gradient(circle,#4d79ff44,transparent 70%)',  particles:'#4d79ff', symbol:'⚔️',  text:'EXCALIBUR',         color:'#4d79ff' },
    "Arthur (Sword of Damocles)": { bg:'radial-gradient(circle,#ffff0044,transparent 70%)', particles:'#ffff00', symbol:'🌩️', text:"KING'S LIGHTNING", color:'#ffff00' },
    "Benimaru":   { bg:'radial-gradient(circle,#ff000044,transparent 70%)',  particles:'#ff0000', symbol:'👑',  text:'IAI HAND SWORD',    color:'#ff4444' },
    "Benimaru (Iai Slash)": { bg:'radial-gradient(circle,#ff880044,transparent 70%)', particles:'#ff8800', symbol:'👑', text:'COMBINED IGNITION', color:'#ff8800' },
    "Sho":        { bg:'radial-gradient(circle,#aaffff44,transparent 70%)',  particles:'#aaffff', symbol:'❄️',  text:'SEVERED UNIVERSE',  color:'#aaffff' },
    "Haumea":     { bg:'radial-gradient(circle,#ffff0044,transparent 70%)',  particles:'#ffff00', symbol:'⚡',  text:'ELECTROKINESIS',    color:'#ffff00' },
    "Burns":      { bg:'radial-gradient(circle,#ff880044,transparent 70%)',  particles:'#ff8800', symbol:'☀️',  text:'SUN ADOLLA',        color:'#ff8800' },
    "Joker":      { bg:'radial-gradient(circle,#88888844,transparent 70%)',  particles:'#aaaaaa', symbol:'🃏',  text:"DEVIL'S TRICK",     color:'#aaa' },
    "Charon":     { bg:'radial-gradient(circle,#4444ff44,transparent 70%)',  particles:'#4444ff', symbol:'🛡️',  text:'KINETIC ABSORPTION',color:'#4444ff' },
    "Evangelist": { bg:'radial-gradient(circle,#ffffff55,transparent 60%)',  particles:'#ffffff', symbol:'🌌',  text:'ADOLLA SINGULAR',   color:'#fff' },
};

function getAbilityAnim(unitName) {
    if (ABILITY_ANIMS[unitName]) return ABILITY_ANIMS[unitName];
    // fallback: generic glow based on ability type color
    return null;
}

function playAbilityAnimation(unitName, abilityIcon, abilityName, overrideColor) {
    const anim = getAbilityAnim(unitName);
    const color = anim?.color || overrideColor || '#4dff88';
    const particles = anim?.particles || color;
    const symbol = anim?.symbol || abilityIcon || '⚡';
    const text = anim?.text || abilityName?.toUpperCase() || 'ABILITY';
    const bg = anim?.bg || `radial-gradient(circle,${color}44,transparent 70%)`;

    // Remove any existing anim
    const old = document.getElementById('ability-anim-overlay');
    if (old) old.remove();

    const overlay = document.createElement('div');
    overlay.id = 'ability-anim-overlay';
    overlay.style.cssText = `
        position:fixed; top:0; left:0; width:100%; height:100%;
        display:flex; flex-direction:column; align-items:center; justify-content:center;
        z-index:88888; pointer-events:none;
        background:${bg};
        opacity:0; transition:opacity 0.15s;
    `;

    // Spawn radial particles
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    for (let i = 0; i < 24; i++) {
        const p = document.createElement('div');
        const angle = (i / 24) * Math.PI * 2;
        const dist = 60 + Math.random() * 180;
        const size = 5 + Math.random() * 10;
        const dur = 0.4 + Math.random() * 0.5;
        p.style.cssText = `
            position:fixed; left:${cx}px; top:${cy}px;
            width:${size}px; height:${size}px; border-radius:50%;
            background:${particles}; box-shadow:0 0 8px ${particles};
            transform:translate(-50%,-50%);
            animation:particle-fly ${dur}s ease-out forwards;
            --tx:${Math.cos(angle)*dist}px; --ty:${Math.sin(angle)*dist}px;
        `;
        overlay.appendChild(p);
    }

    overlay.innerHTML += `
        <div style="
            font-size:70px; filter:drop-shadow(0 0 20px ${color});
            animation:ability-symbol-pop 0.4s cubic-bezier(.22,1,.36,1) forwards;
        ">${symbol}</div>
        <div style="
            font-size:28px; font-weight:900; letter-spacing:5px;
            color:${color}; text-shadow:0 0 20px ${color};
            font-family:'Arial Black',sans-serif; margin-top:10px;
            animation:ability-text-rise 0.5s 0.1s cubic-bezier(.22,1,.36,1) forwards;
            opacity:0; transform:translateY(10px);
        ">${text}</div>
    `;

    if (!document.getElementById('ability-anim-styles')) {
        const st = document.createElement('style');
        st.id = 'ability-anim-styles';
        st.textContent = `
            @keyframes ability-symbol-pop {
                0%   { transform:scale(0.2) rotate(-20deg); opacity:0; }
                60%  { transform:scale(1.15) rotate(5deg); opacity:1; }
                100% { transform:scale(1) rotate(0); opacity:1; }
            }
            @keyframes ability-text-rise {
                to { opacity:1; transform:translateY(0); }
            }
        `;
        document.head.appendChild(st);
    }

    document.body.appendChild(overlay);
    requestAnimationFrame(() => { overlay.style.opacity = '1'; });
    setTimeout(() => { overlay.style.opacity = '0'; }, 900);
    setTimeout(() => overlay.remove(), 1100);
}

function showAbilityToast(charName, icon, abilityName, action) {
    const existing = document.getElementById('ability-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'ability-toast';
    toast.innerHTML = `<div style="font-size:28px;margin-bottom:4px;">${icon}</div>
        <div style="font-size:13px;letter-spacing:2px;color:#4dff88;font-weight:900;">${abilityName}</div>
        <div style="font-size:11px;color:#aaa;margin-top:3px;">${action}</div>`;
    toast.style.cssText = `
        position:fixed; top:50%; left:50%;
        transform:translate(-50%,-50%) scale(0.8);
        background:rgba(0,20,0,0.97); border:2px solid #4dff88;
        color:white; padding:18px 30px; border-radius:14px;
        z-index:99999; pointer-events:none; text-align:center;
        box-shadow:0 0 40px #4dff8844;
        opacity:0; transition:opacity 0.2s, transform 0.2s;
    `;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity='1'; toast.style.transform='translate(-50%,-50%) scale(1)'; }, 10);
    setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translate(-50%,-50%) scale(0.9)'; }, 1800);
    setTimeout(() => toast.remove(), 2100);
}

// === ACTIVE ABILITY HANDLERS ===

function activateAbilityFreeze(unit, ab) {
    // Let player click a target enemy tile
    window.abilityPendingType = 'freeze';
    window.abilityPendingUnit = unit;
    window.abilityPendingAb = ab;
    addLog(`🎯 ${unit.name}: choose an enemy to FREEZE`);
    render(); // tiles will highlight enemies
}

function activateAbilitySniper(unit, ab, srcIdx) {
    window.abilityPendingType = 'sniper';
    window.abilityPendingUnit = unit;
    window.abilityPendingAb = ab;
    window.abilityPendingSrc = srcIdx;
    addLog(`🎯 ${unit.name}: choose ANY enemy to attack`);
    render();
}

function activateAbilitySwap(unit, ab, srcIdx) {
    window.abilityPendingType = 'swap';
    window.abilityPendingUnit = unit;
    window.abilityPendingAb = ab;
    window.abilityPendingSrc = srcIdx;
    addLog(`🎯 ${unit.name}: choose an ALLY to swap with`);
    render();
}

function activateAbilityDrain(unit, ab) {
    const p = game.players[game.currentTurn];
    const victims = game.players.filter(pl => !pl.eliminated && pl.color !== p.color && pl.hand.length > 0);
    if (victims.length === 0) { addLog(`${unit.name}: no cards to steal!`); return; }
    // Pick the player with the most cards
    victims.sort((a,b) => b.hand.length - a.hand.length);
    const victim = victims[0];
    const count = ab.count || 1;
    for (let i = 0; i < count && victim.hand.length > 0; i++) {
        const stolen = victim.hand.splice(Math.floor(Math.random() * victim.hand.length), 1)[0];
        p.hand.push(stolen);
        addLog(`${unit.name} stole <b>${stolen.name}</b> from ${victim.name}! (${ab.name})`);
    }
    showAbilityToast(unit.name, ab.icon, ab.name, `STOLE ${count} CARD${count>1?'S':''}!`);
    playAbilityAnimation(unit.name, ab.icon, ab.name);
    endAction(1);
}

function activateAbilityCopy(unit, ab) {
    window.abilityPendingType = 'copy';
    window.abilityPendingUnit = unit;
    window.abilityPendingAb = ab;
    addLog(`🎯 ${unit.name}: choose an ENEMY unit to copy`);
    render();
}

function activateAbilityAoe(unit, ab, srcIdx) {
    // AOE auto-hits: deal with it immediately — just inform the player
    const p = game.players[game.currentTurn];
    const neighbors = getNeighbors(srcIdx).filter(nIdx => {
        const t = game.grid[nIdx];
        return t && t.unit && t.owner !== p.color && t.owner !== 'neutral';
    });
    if (neighbors.length === 0) {
        showAbilityToast(unit.name, ab.icon, ab.name, 'NO ADJACENT ENEMIES');
        return;
    }
    addLog(`${unit.name}: AOE (${ab.name}) — now attack your main target normally!`);
    window.abilityAoeExtra = neighbors;
    playAbilityAnimation(unit.name, ab.icon, ab.name);
    showAbilityToast(unit.name, ab.icon, ab.name, `WILL HIT +${neighbors.length} EXTRA!`);
}

// Handle ability tile clicks (freeze, sniper, swap, copy targets)
function handleAbilityClick(idx) {
    const p = game.players[game.currentTurn];
    const type = window.abilityPendingType;
    const unit = window.abilityPendingUnit;
    const ab   = window.abilityPendingAb;
    const tile = game.grid[idx];

    if (type === 'freeze') {
        if (tile && tile.unit && tile.owner !== p.color) {
            const turns = ab.turns || 1;
            const activePlayers = game.players.filter(pl => !pl.eliminated).length;
            const expiry = (game.turnCount || 0) + (turns * activePlayers);
            game.frozenUnits[idx] = expiry;
            addLog(`❄️ ${unit.name} FROZE ${tile.unit.name} for ${turns} full round(s)! (${ab.name})`);
            playAbilityAnimation(unit.name, ab.icon, ab.name);
            showAbilityToast(unit.name, ab.icon, ab.name, `${tile.unit.name} FROZEN!`);
            clearAbilityPending();
            endAction(1);
        }
    } else if (type === 'sniper') {
        if (tile && tile.unit && tile.owner !== p.color) {
            const srcIdx = window.abilityPendingSrc;
            playAbilityAnimation(unit.name, ab.icon, ab.name);
            clearAbilityPending();
            showBattleModal(srcIdx, idx);
        }
    } else if (type === 'swap') {
        if (tile && tile.owner === p.color && idx !== window.abilityPendingSrc) {
            const srcIdx = window.abilityPendingSrc;
            const temp = { ...game.grid[srcIdx] };
            game.grid[srcIdx] = { ...game.grid[idx] };
            game.grid[idx] = temp;
            addLog(`🔀 ${unit.name} swapped positions! (${ab.name})`);
            playAbilityAnimation(unit.name, ab.icon, ab.name);
            showAbilityToast(unit.name, ab.icon, ab.name, 'POSITIONS SWAPPED!');
            clearAbilityPending();
            endAction(1);
        }
    } else if (type === 'copy') {
        if (tile && tile.unit && tile.owner !== p.color) {
            const copy = { ...tile.unit };
            p.hand.push(copy);
            addLog(`📋 ${unit.name} copied <b>${copy.name}</b>! (${ab.name})`);
            playAbilityAnimation(unit.name, ab.icon, ab.name);
            showAbilityToast(unit.name, ab.icon, ab.name, `COPIED ${copy.name}!`);
            clearAbilityPending();
            endAction(1);
        }
    }
}

function clearAbilityPending() {
    window.abilityPendingType = null;
    window.abilityPendingUnit = null;
    window.abilityPendingAb = null;
    window.abilityPendingSrc = null;
    render();
}

// ─── Online voting battle functions ──────────────────────────
function castOnlineBattleVote(side, btn) {
    btn.closest('.cin-voter-btns').querySelectorAll('.cin-vote-btn').forEach(b => {
        b.disabled = true; b.style.opacity = '0.4';
    });
    btn.style.opacity = '1';
    window._battleVoteData = window._battleVoteData || { votes: {} };
    const myRole = isHost ? 'host' : 'guest';
    window._battleVoteData.votes[myRole] = side;
    const statusEl = document.getElementById('battle-vote-status');
    if (statusEl) statusEl.innerText = 'Your vote recorded. Waiting for opponent...';
    if (conn && conn.open) conn.send({ type: 'BATTLE_VOTE_CAST', side, voter: myRole });
    _checkOnlineBattleVotes();
}

function _checkOnlineBattleVotes() {
    const votes = window._battleVoteData?.votes || {};
    if (!votes.host || !votes.guest) return;
    const atkV = Object.values(votes).filter(v => v === 'atk').length;
    const defV = Object.values(votes).filter(v => v === 'def').length;
    if (isHost) {
        const statusEl = document.getElementById('battle-vote-status');
        if (atkV !== defV) {
            const atkWins = atkV > defV;
            if (statusEl) { statusEl.style.color = atkWins?'#4dff88':'#ff4d4d'; statusEl.style.fontWeight='900'; statusEl.innerText = atkWins?'⚔️ ATTACKER WINS!':'🛡️ DEFENDER WINS!'; }
            setTimeout(() => resolveManual(atkWins), 1000);
        } else {
            if (statusEl) statusEl.innerText = '⚖️ TIE — decided by power score';
            const aU = game.grid[window.currentAtkIdx]?.unit;
            const dU = game.grid[window.currentDefIdx]?.unit;
            setTimeout(() => resolveManual(unitScore(aU||{}) >= unitScore(dU||{})), 1200);
        }
    }
}

// Guest receives a battle vote cast by host
function handleBattleVoteCast(side, voter) {
    window._battleVoteData = window._battleVoteData || { votes: {} };
    window._battleVoteData.votes[voter] = side;
    const statusEl = document.getElementById('battle-vote-status');
    if (statusEl) statusEl.innerText = 'Opponent voted. Waiting for yours...';
    _checkOnlineBattleVotes();
}

function resolveManual(wins) {
    flashScreen(wins ? '#4d79ff88' : '#ff4d4d88');
    shakeScreen();

    const p = game.players[game.currentTurn];

    // Ability Mode: passive dodge on defender
    if (wins && game.abilityMode && !window.isBattleFromHand) {
        const defIdx = window.currentDefIdx;
        // Check shield first
        if (consumeShield(defIdx)) {
            addLog(`🛡️ SHIELD blocked the attack on ${game.grid[defIdx]?.unit?.name}!`);
            const shUnit = game.grid[defIdx]?.unit;
            const shAb = getAbility(shUnit?.name);
            playAbilityAnimation(shUnit?.name, shAb?.icon || '🛡️', shAb?.name || 'Shield');
            showAbilityToast(shUnit?.name || '?', '🛡️', 'Shield', 'BLOCKED!');
            const modal = document.getElementById('battle-modal');
            setTimeout(() => { modal.style.display = 'none'; modal.querySelector('.modal-content').style.cssText = ''; endAction(2); }, 320);
            return;
        }
        // Dodge roll
        if (rollDodge(defIdx)) {
            const defUnit = game.grid[defIdx]?.unit;
            const ab = getAbility(defUnit?.name);
            addLog(`💨 ${defUnit?.name} DODGED the attack! (${ab?.name})`);
            playAbilityAnimation(defUnit?.name, ab?.icon, ab?.name);
            showAbilityToast(defUnit?.name || '?', ab?.icon || '💨', ab?.name || 'Dodge', 'DODGED!');
            // Mahoraga: after surviving once, gains dodge
            if (defUnit?.name === 'Mahoraga') defUnit._mahoragaDodge = true;
            const modal = document.getElementById('battle-modal');
            setTimeout(() => { modal.style.display = 'none'; modal.querySelector('.modal-content').style.cssText = ''; endAction(2); }, 320);
            return;
        }
    }

    if (window.isBattleFromHand) {
        if (wins) {
            game.grid[window.currentDefIdx] = { unit: p.hand.splice(window.currentAtkIdx, 1)[0], owner: p.color };
        } else {
            p.hand.splice(window.currentAtkIdx, 1);
        }
        window.isBattleFromHand = false;
    } else {
        if (wins) {
            // Ability Mode: AOE — also destroy extra targets
            if (game.abilityMode && window.abilityAoeExtra && window.abilityAoeExtra.length > 0) {
                window.abilityAoeExtra.forEach(nIdx => {
                    const t = game.grid[nIdx];
                    if (t && t.unit) {
                        // Check shield/dodge on AOE targets
                        if (!consumeShield(nIdx) && !rollDodge(nIdx)) {
                            // Try revive
                            const victim = game.players.find(pl => pl.color === t.owner);
                            if (!victim || !tryRevive(t.unit, t.owner, victim.hand)) {
                                addLog(`💥 ${t.unit.name} caught in AOE!`);
                                game.grid[nIdx] = { unit: null, owner: 'neutral' };
                            }
                        } else {
                            addLog(`🛡️ ${t.unit.name} blocked/dodged the AOE!`);
                        }
                    }
                });
                window.abilityAoeExtra = null;
            }

            if (window.isNeutralTarget) p.hand.push(game.grid[window.currentDefIdx].unit);
            game.grid[window.currentDefIdx] = {...game.grid[window.currentAtkIdx]};
            game.grid[window.currentAtkIdx] = { unit: null, owner: 'neutral' };

            // Ability Mode: regen — attacker wins → draw a card
            if (game.abilityMode) {
                const winnerUnit = game.grid[window.currentDefIdx]?.unit;
                const ab = winnerUnit ? getAbility(winnerUnit.name) : null;
                if (ab?.type === 'regen') {
                    const tiers = ['epic','rare','common'];
                    for (const t of tiers) {
                        if (game.pools[t]?.length > 0) {
                            const drawn = game.pools[t].shift();
                            p.hand.push(drawn);
                            addLog(`✨ ${winnerUnit.name} regen: drew <b>${drawn.name}</b>!`);
                            showAbilityToast(winnerUnit.name, ab.icon, ab.name, 'DREW A CARD!');
                            break;
                        }
                    }
                }
                // Apply shield to newly placed unit if it has shield ability
                applyPassiveShield(game.grid[window.currentDefIdx]?.unit, window.currentDefIdx);
            }
        } else {
            // Attacker lost
            if (game.abilityMode) {
                const loserUnit = game.grid[window.currentAtkIdx]?.unit;
                if (loserUnit) {
                    // try revive
                    if (!tryRevive(loserUnit, p.color, p.hand)) {
                        if (!window.isNeutralTarget) game.grid[window.currentAtkIdx] = { unit: null, owner: 'neutral' };
                    } else {
                        game.grid[window.currentAtkIdx] = { unit: null, owner: 'neutral' };
                    }
                }
            } else {
                if (!window.isNeutralTarget) game.grid[window.currentAtkIdx] = { unit: null, owner: 'neutral' };
            }
        }
    }

    const modal = document.getElementById('battle-modal');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.querySelector('.modal-content').style.cssText = '';
        checkElimination();
        endAction(2);
    }, 320);
}

// --- CARD PREVIEW ---
function showPreview(img, name, tier, tip) {
    let preview = document.getElementById('card-preview');
    if (!preview) {
        preview = document.createElement('div');
        preview.id = 'card-preview';
        document.body.appendChild(preview);
    }
    preview.innerHTML = `<img src="${img}" style="width:160px;height:220px;object-fit:cover;border-radius:8px;display:block;">
        <div style="text-align:center;margin-top:6px;font-weight:bold;font-size:13px;">${name}</div>
        ${tier ? `<div style="text-align:center;font-size:11px;color:#aaa;text-transform:uppercase;margin-bottom:4px;">${tier}</div>` : ''}
        ${tip ? `<div style="text-align:center;font-size:11px;color:#4dff88;margin-top:4px;line-height:1.4;">${tip}</div>` : ''}`;
    preview.style.display = 'block';
}

function hidePreview() {
    const preview = document.getElementById('card-preview');
    if (preview) preview.style.display = 'none';
}

// --- VISUAL EFFECTS ---
function playEffect(type) {
    const overlay = document.createElement('div');
    overlay.className = `effect-overlay effect-${type}`;

    const inner = document.createElement('div');
    inner.className = 'effect-inner';

    const messages = {
        awaken:    { emoji: '⚡', lines: ['AWAKENING!', 'POWER UNLEASHED'] },
        legendary: { emoji: '🌟', lines: ['LEGENDARY!', 'SUMMONED'] },
        ultra:     { emoji: '💥', lines: ['ULTRA!', 'GODLIKE POWER'] },
        attack:    { emoji: '⚔️', lines: ['ATTACK!', ''] },
        defend:    { emoji: '🛡️', lines: ['DEFENDED!', ''] },
        god:       { emoji: '👑', lines: ['GOD TIER!', 'DIVINE POWER'] },
        showdown:  { emoji: '⚔️', lines: ['SHOWDOWN!', 'ALL VS ALL'] },
    };

    const m = messages[type] || messages.attack;
    inner.innerHTML = `
        <div class="effect-emoji">${m.emoji}</div>
        <div class="effect-title">${m.lines[0]}</div>
        ${m.lines[1] ? `<div class="effect-subtitle">${m.lines[1]}</div>` : ''}
    `;
    overlay.appendChild(inner);
    document.body.appendChild(overlay);

    // Auto-remove after animation
    setTimeout(() => overlay.remove(), 1200);
}

document.addEventListener('mousemove', (e) => {
    const preview = document.getElementById('card-preview');
    if (preview && preview.style.display === 'block') {
        preview.style.left = (e.clientX + 16) + 'px';
        preview.style.top = Math.min(e.clientY - 60, window.innerHeight - 300) + 'px';
    }
});

// --- RENDER FUNCTION ---
function render() {
    const board = document.getElementById('board'); 
    if (!board) return;
    board.innerHTML = "";

    // Calculate valid move highlights
    const validMoves = new Set();
    const attackMoves = new Set();
    const player = game.players[game.currentTurn];
    if (game.ap > 0 && game.awakenTarget === null) {
        if (game.selection.type === 'board') {
            const fromIdx = game.selection.idx;
            getNeighbors(fromIdx).forEach(n => {
                const t = game.grid[n];
                if (!t.unit) validMoves.add(n);
                else if (t.owner !== player.color) attackMoves.add(n);
            });
        } else if (game.selection.type === 'hand') {
            game.grid.forEach((t, n) => {
                if (!t.unit && (t.owner === player.color || n === player.baseIdx)) validMoves.add(n);
            });
        }
    }

    // Build a map of baseIdx → player color for permanent corner highlights
    const baseColors = {};
    game.players.forEach(p => { baseColors[p.baseIdx] = p.color; });

    game.grid.forEach((tile, i) => {
        const d = document.createElement('div');
        const isSelected = (game.selection.type === 'board' && game.selection.idx === i);
        let extraClass = '';
        if (validMoves.has(i)) extraClass = 'valid-move';
        else if (attackMoves.has(i)) extraClass = 'attack-move';
        d.className = `tile ${tile.owner} ${isSelected ? 'selected' : ''} ${extraClass}`;
        // Permanent base corner highlight
        if (baseColors[i]) {
            d.style.outline = `3px solid ${baseColors[i]}`;
            d.style.outlineOffset = '-3px';
        }
        if (tile.unit) {
            const abIcon = game.abilityMode ? (getAbility(tile.unit.name)?.icon || '') : '';
            const frozenBadge = (game.abilityMode && isFrozen(i)) ? `<div style="position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(100,200,255,0.25);pointer-events:none;z-index:3;display:flex;align-items:center;justify-content:center;font-size:22px;">❄️</div>` : '';
            const shieldBadge = (game.abilityMode && game.shieldedUnits[i] > 0) ? `<div style="position:absolute;top:3px;left:3px;background:#4d79ff;color:white;border-radius:50%;width:16px;height:16px;font-size:9px;display:flex;align-items:center;justify-content:center;z-index:4;font-weight:bold;">🛡</div>` : '';
            const abilityBadge = (game.abilityMode && abIcon) ? `<div style="position:absolute;top:3px;right:3px;background:rgba(0,0,0,0.7);border-radius:50%;width:16px;height:16px;font-size:10px;display:flex;align-items:center;justify-content:center;z-index:4;">${abIcon}</div>` : '';
            d.innerHTML = `<img src="${tile.unit.img}"><div class="unit-info">${tile.unit.name}</div>${frozenBadge}${shieldBadge}${abilityBadge}`;
        }
        // Card preview on hover
        d.addEventListener('mouseenter', () => {
            if (tile.unit) {
                const abTip = game.abilityMode ? (getAbility(tile.unit.name) ? `${getAbility(tile.unit.name).icon} ${getAbility(tile.unit.name).name}: ${getAbility(tile.unit.name).desc}` : '') : '';
                const unitTip = game.abilityMode ? (tile.unit.tip || '') : (tile.unit.nextForm ? tile.unit.tip || '' : '');
                showPreview(tile.unit.img, tile.unit.name, tile.unit.tier || '', abTip || unitTip);
            }
        });
        d.addEventListener('mouseleave', hidePreview);
        d.onclick = () => handleTileClick(i);
        board.appendChild(d);
    });

    const p = game.players[game.currentTurn];
    if (!p) return;

    document.getElementById('current-player-name').innerText = p.name;
    document.getElementById('current-player-name').style.color = p.color;

    // Ability mode badge
    let abModeBadge = document.getElementById('ability-mode-badge');
    if (game.abilityMode && !abModeBadge) {
        abModeBadge = document.createElement('span');
        abModeBadge.id = 'ability-mode-badge';
        abModeBadge.className = 'ability-mode-badge';
        abModeBadge.innerText = '⚡ ABILITY MODE';
        document.getElementById('turn-indicator').appendChild(abModeBadge);
    } else if (!game.abilityMode && abModeBadge) {
        abModeBadge.remove();
    }
    let apBar = document.getElementById('ap-bar');
    if (!apBar) {
        apBar = document.createElement('div');
        apBar.id = 'ap-bar';
        apBar.style.cssText = 'display:flex;align-items:center;gap:8px;justify-content:center;margin:4px 0 0 0;';
        document.getElementById('turn-indicator').after(apBar);
    }
    const apDots = [1,2,3].map(i =>
        `<div style="width:18px;height:18px;border-radius:50%;border:2px solid ${p.color};background:${i <= game.ap ? p.color : 'transparent'};box-shadow:${i <= game.ap ? `0 0 8px ${p.color}` : 'none'};transition:all 0.2s;"></div>`
    ).join('');
    apBar.innerHTML = `<span style="font-size:11px;letter-spacing:2px;color:#666;font-weight:bold;">AP</span>${apDots}<span style="font-size:11px;color:#666;">${game.ap}/3</span>`;

    // End Turn button (lets player skip remaining AP if they want)
    let endTurnBtn = document.getElementById('end-turn-btn');
    if (!endTurnBtn) {
        endTurnBtn = document.createElement('button');
        endTurnBtn.id = 'end-turn-btn';
        endTurnBtn.style.cssText = 'margin-top:8px;padding:6px 18px;background:transparent;color:#555;border:1px solid #333;border-radius:5px;font-size:11px;letter-spacing:2px;font-weight:bold;cursor:pointer;transition:all 0.2s;display:block;width:100%;';
        endTurnBtn.innerText = 'END TURN ⏩';
        endTurnBtn.onmouseenter = () => { endTurnBtn.style.color = '#fff'; endTurnBtn.style.borderColor = '#666'; };
        endTurnBtn.onmouseleave = () => { endTurnBtn.style.color = '#555'; endTurnBtn.style.borderColor = '#333'; };
        endTurnBtn.onclick = () => { game.ap = 1; endAction(); }; // set to 1 then endAction deducts to 0
        document.getElementById('turn-indicator').parentNode.insertBefore(endTurnBtn, document.getElementById('turn-indicator').nextSibling.nextSibling);
    }

    const hDisplay = document.getElementById('hand-display');
    hDisplay.innerHTML = "";

    // HIDDEN HANDS: In ALL modes, only current player sees their own cards.
    // Online: determined by isHost/guest index. Local: pass-screen handles it.
    // After pass-screen is dismissed, show current player's hand.
    const isOnline = !!(conn && conn.open);
    // In local modes we always show current player's hand (pass screen already hid it)
    // In online: host=players[0], guest=players[1]
    const shouldHide = isOnline && !isMyTurn();

    if (shouldHide) {
        // Opponent's hand: show face-down cards
        for (let i = 0; i < p.hand.length; i++) {
            const card = document.createElement('div');
            card.className = 'hand-card';
            card.style.cssText = 'background:linear-gradient(135deg,#0d0d1a,#080810);border:1px solid #1a1a2a;display:flex;align-items:center;justify-content:center;font-size:28px;cursor:default;';
            card.innerHTML = '🂠';
            hDisplay.appendChild(card);
        }
        const lbl = document.createElement('div');
        lbl.style.cssText = 'width:100%;text-align:center;font-size:10px;color:#333;letter-spacing:2px;margin-top:6px;';
        lbl.innerText = `${p.name.toUpperCase()}'S HAND — HIDDEN`;
        hDisplay.appendChild(lbl);
    } else {
        p.hand.forEach((u, i) => {
            const card = document.createElement('div');
            const isSelected = (game.selection.type === 'hand' && game.selection.idx === i);
            card.className = `hand-card ${isSelected ? 'active-selection' : ''}`;
            card.dataset.idx = i;
            const showTipBadge = u.nextForm || (game.abilityMode && u.tip && !u.nextForm);
            const tipBadge = showTipBadge ? `<div class="card-tip-badge">${u.nextForm ? '⚡' : '★'}</div>` : '';
            card.innerHTML = `<img src="${u.img}">${tipBadge}<div class="hand-name-tag">${u.name}</div>`;
            const handTip = u.nextForm ? (u.tip || '') : (game.abilityMode ? (u.tip || '') : '');
            card.addEventListener('mouseenter', () => showPreview(u.img, u.name, u.tier || '', handTip));
            card.addEventListener('mouseleave', hidePreview);
            card.onclick = (e) => {
                e.stopPropagation();
                if (isOnline && !isMyTurn()) return;
                if (game.awakenTarget !== null) {
                    card.classList.toggle('selected-for-trade');
                    updateTradeButtonState(); updateSpecialUI(); return;
                }
                card.classList.toggle('selected-for-trade');
                game.selection = { type: 'hand', idx: i };
                updateTradeButtonState(); updateSpecialUI();
            };
            hDisplay.appendChild(card);
        });
    }

    updateTradeButtonState();
    updateSpecialUI();
    renderTradeGuide();
}

function renderTradeGuide() {
    let panel = document.getElementById('trade-guide-panel');
    if (!panel) return;

    const leg  = (game.pools.legendary || []).length;
    const ultra = (game.pools.ultra || []).length;
    const god  = (game.pools.god || []).length;

    const badge = (n, label) => {
        const empty = n === 0;
        const color = empty ? '#ff4d4d' : n <= 2 ? '#ffaa00' : '#4dff88';
        return `<span style="background:rgba(0,0,0,0.5);border:1px solid ${color};color:${color};
                    border-radius:4px;padding:2px 7px;font-size:11px;font-weight:bold;white-space:nowrap;">
                    ${label}: ${empty ? '✗ EMPTY' : n + ' left'}
                </span>`;
    };

    const row = (recipe, result, avail) => {
        const empty = avail === 0;
        return `<div style="display:flex;align-items:center;gap:8px;padding:5px 0;
                    border-bottom:1px solid #1a1a1a;opacity:${empty ? '0.45' : '1'}">
                    <div style="flex:1;font-size:12px;color:#ccc;line-height:1.4;">${recipe}</div>
                    <div style="font-size:11px;font-weight:bold;color:#ffd700;white-space:nowrap;">→ ${result}</div>
                </div>`;
    };

    let rows = '';
    if (selectedVerse === 'OnePiece') {
        rows += row('5 any cards',                    'Legendary', leg);
        rows += row('2 Legendaries',                  'Ultra',     ultra);
        rows += row('3 Mythics + 1 Legendary',        'Ultra',     ultra);
        rows += row('5 Mythics',                      'Ultra',     ultra);
        rows += row('1 Ultra + 3 Leg + 2 any',        'GOD',       god);
        rows += row('2 Ultras + 1 Legendary',         'GOD',       god);
        rows += row('3 Ultras',                       'GOD',       god);
    } else if (selectedVerse === 'Naruto' || selectedVerse === 'MHA') {
        rows += row('5 non-legendary cards',    'Legendary', leg);
        rows += row('5 cards incl. 1 Leg',      'Ultra',     ultra);
        rows += row('4 cards incl. 2 Leg',      'Ultra',     ultra);
        rows += row('3 Legendaries',            'Ultra',     ultra);
    } else if (selectedVerse === 'DemonSlayer') {
        rows += row('5 any cards',              'Legendary', leg);
        rows += row('3 Legendaries',            'Ultra',     ultra);
    } else if (selectedVerse === 'Bleach') {
        rows += row('5 any cards',              'Legendary', leg);
        rows += row('3 Legendaries',            'Ultra',     ultra);
        rows += `<div style="font-size:11px;color:#bf80ff;margin-top:6px;line-height:1.5;">⚡ Select a unit with BANKAI to evolve it in place (costs sacrifice cards)</div>`;
    } else if (selectedVerse === 'HxH') {
        rows += row('5 any cards',              'Legendary', leg);
        rows += row('3 Legendaries',            'Ultra',     ultra);
        rows += `<div style="font-size:11px;color:#4dff88;margin-top:6px;line-height:1.5;">⚡ Select a unit with NEN UNLEASH to evolve it in place (costs sacrifice cards)</div>`;
    } else {
        // JJK + others
        rows += row('5 any cards',              'Legendary', leg);
        rows += row('3 Legendaries',            'Ultra',     ultra);
    }

    panel.innerHTML = `
        <div style="font-size:11px;font-weight:bold;letter-spacing:2px;color:#888;margin-bottom:8px;">TRADE GUIDE</div>
        ${rows}
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;">
            ${badge(leg, '⚔️ LEG')}
            ${badge(ultra, '💥 ULTRA')}
            ${god !== undefined && (game.pools.god !== undefined) ? badge(god, '👑 GOD') : ''}
        </div>`;
}

function updateSpecialUI() {
    const cont = document.getElementById('ability-container');
    if (!cont) return;
    cont.innerHTML = "";

    const p = game.players[game.currentTurn];

    // --- AWAKEN FLOW ---
    if (selectedVerse === 'Naruto' || selectedVerse === 'MHA' || selectedVerse === 'OnePiece' || selectedVerse === 'Bleach' || selectedVerse === 'HxH') {
        if (game.awakenTarget !== null) {
            // Target is locked in — show sacrifice count + confirm/cancel buttons
            const { source, idx } = game.awakenTarget;
            const targetUnit = source === 'board' ? game.grid[idx]?.unit : p.hand[idx];
            const sacrificeCount = document.querySelectorAll('.hand-card.selected-for-trade').length;
            const required = targetUnit?.cost || 1;

            const label = document.createElement('p');
            label.style.cssText = "color:#aaa; font-size:12px; margin:0 0 6px 0;";
            label.innerText = `Select ${required} card(s) to sacrifice (${sacrificeCount}/${required})`;
            cont.appendChild(label);

            const confirmBtn = document.createElement('button');
            confirmBtn.className = "glow-button awaken-btn";
            confirmBtn.style.display = "block";
            const confirmLabel = selectedVerse === 'Bleach' ? '✓ CONFIRM BANKAI' : selectedVerse === 'HxH' ? '✓ CONFIRM NEN UNLEASH' : '✓ CONFIRM AWAKEN';
            confirmBtn.innerText = confirmLabel;
            confirmBtn.disabled = (sacrificeCount !== required);
            confirmBtn.onclick = () => handleAwaken();
            cont.appendChild(confirmBtn);

            const cancelBtn = document.createElement('button');
            cancelBtn.className = "glow-button";
            cancelBtn.style.cssText = "background:#555; margin-top:6px; display:block;";
            cancelBtn.innerText = "✕ CANCEL";
            cancelBtn.onclick = () => {
                game.awakenTarget = null;
                document.querySelectorAll('.hand-card.selected-for-trade').forEach(c => c.classList.remove('selected-for-trade'));
                render();
            };
            cont.appendChild(cancelBtn);
            return; // Don't show anything else during awaken mode
        }

        // Show AWAKEN/BANKAI button if selected unit can evolve
        let selectedUnit = null;
        if (game.selection.type === 'board') selectedUnit = game.grid[game.selection.idx]?.unit;
        else if (game.selection.type === 'hand') selectedUnit = p.hand[game.selection.idx];

        if (selectedUnit && selectedUnit.nextForm) {
            const btn = document.createElement('button');
            btn.className = "glow-button awaken-btn";
            const actionWord = selectedVerse === 'Bleach' ? 'BANKAI' : selectedVerse === 'HxH' ? 'NEN UNLEASH' : 'AWAKEN';
            btn.innerText = `${actionWord}: ${selectedUnit.name.split(' ')[0]}`;
            btn.onclick = () => {
                // Lock the awaken target so sacrifice clicks don't clobber the selection
                game.awakenTarget = { source: game.selection.type, idx: game.selection.idx };
                document.querySelectorAll('.hand-card.selected-for-trade').forEach(c => c.classList.remove('selected-for-trade'));
                updateSpecialUI();
            };
            cont.appendChild(btn);
        }
    }

    // --- BOOGIE WOOGIE (old trait system) — ABILITY MODE ONLY ---
    let selectedUnit = null;
    if (game.selection.type === 'board') selectedUnit = game.grid[game.selection.idx]?.unit;
    else if (game.selection.type === 'hand') selectedUnit = p.hand[game.selection.idx];

    if (game.abilityMode && selectedUnit && selectedUnit.trait === "boogie") {
        const btn = document.createElement('button');
        btn.className = "glow-button";
        btn.innerText = isAbilityActive ? "SELECT ALLY" : `BOOGIE (${selectedUnit.charges})`;
        btn.onclick = () => {
            isAbilityActive = !isAbilityActive;
            render();
        };
        cont.appendChild(btn);
    }

    // --- ABILITY MODE: show card + USE button for selected board unit ---
    if (game.abilityMode && game.selection.type === 'board') {
        const selUnit = game.grid[game.selection.idx]?.unit;
        if (selUnit) {
            const ab = getAbility(selUnit.name);
            if (ab) {
                const typeColors = {
                    dodge:'#4dff88', shield:'#4d79ff', revive:'#bf80ff',
                    sniper:'#ffcc00', swap:'#4daaff', freeze:'#88eeff',
                    regen:'#4dff88', drain:'#ff88aa', aoe:'#ff8844', copy:'#ddaaff'
                };
                const col = typeColors[ab.type] || '#aaa';
                const isPassive = ['dodge','shield','revive','regen'].includes(ab.type);
                const activeTypes = ['freeze','sniper','swap','drain','copy','aoe'];

                // Big USE button — shown FIRST for active abilities
                if (activeTypes.includes(ab.type)) {
                    const abBtn = document.createElement('button');
                    const hasAp = game.ap > 0;
                    abBtn.style.cssText = `
                        display:block; width:100%; padding:12px;
                        background:${hasAp ? col+'33' : 'transparent'};
                        border:2px solid ${hasAp ? col : '#333'};
                        color:${hasAp ? col : '#444'};
                        border-radius:8px; font-size:13px; font-weight:900;
                        letter-spacing:2px; cursor:${hasAp ? 'pointer' : 'not-allowed'};
                        margin-bottom:8px;
                        box-shadow:${hasAp ? '0 0 12px '+col+'55' : 'none'};
                        transition:all 0.15s;
                    `;
                    abBtn.innerText = hasAp
                        ? `${ab.icon} USE: ${ab.name.toUpperCase()} (1 AP)`
                        : `${ab.icon} ${ab.name.toUpperCase()} — NO AP`;
                    abBtn.disabled = !hasAp;
                    if (hasAp) {
                        abBtn.onmouseenter = () => { abBtn.style.background = col+'66'; };
                        abBtn.onmouseleave = () => { abBtn.style.background = col+'33'; };
                        abBtn.onclick = () => {
                            const srcIdx = game.selection.idx;
                            if (ab.type === 'freeze')       activateAbilityFreeze(selUnit, ab);
                            else if (ab.type === 'sniper')  activateAbilitySniper(selUnit, ab, srcIdx);
                            else if (ab.type === 'swap')    activateAbilitySwap(selUnit, ab, srcIdx);
                            else if (ab.type === 'drain')   activateAbilityDrain(selUnit, ab);
                            else if (ab.type === 'copy')    activateAbilityCopy(selUnit, ab);
                            else if (ab.type === 'aoe')     activateAbilityAoe(selUnit, ab, srcIdx);
                        };
                    }
                    cont.appendChild(abBtn);
                }

                // Ability info card (below button)
                const card = document.createElement('div');
                card.style.cssText = `
                    background:#0a1a0a; border:1px solid ${col}55;
                    border-radius:8px; padding:9px 11px; margin-bottom:6px;
                `;
                const tag = isPassive
                    ? `<span style="background:${col}22;border:1px solid ${col};color:${col};font-size:9px;font-weight:bold;padding:1px 5px;border-radius:3px;letter-spacing:1px;">PASSIVE</span>`
                    : `<span style="background:${col}22;border:1px solid ${col};color:${col};font-size:9px;font-weight:bold;padding:1px 5px;border-radius:3px;letter-spacing:1px;">ACTIVE · 1 AP</span>`;
                card.innerHTML = `
                    <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;">
                        <span style="font-size:16px;">${ab.icon}</span>
                        <span style="color:${col};font-weight:900;font-size:12px;flex:1;">${ab.name.toUpperCase()}</span>
                        ${tag}
                    </div>
                    <div style="color:#999;font-size:10px;line-height:1.5;">${ab.desc.replace(/^[A-Z]+ — /,'')}</div>
                `;

                // Frozen / shield status inside card
                if (isFrozen(game.selection.idx)) {
                    card.innerHTML += `<div style="color:#88eeff;font-size:10px;font-weight:bold;margin-top:5px;">❄️ FROZEN — ${frozenRoundsLeft(game.selection.idx)} round(s) left</div>`;
                }
                if (game.shieldedUnits[game.selection.idx] > 0) {
                    card.innerHTML += `<div style="color:#4d79ff;font-size:10px;font-weight:bold;margin-top:3px;">🛡️ SHIELD — ${game.shieldedUnits[game.selection.idx]} hit(s) left</div>`;
                }
                cont.appendChild(card);
            }
        }
    }
}

function updateTradeButtonState() {
    const selected = document.querySelectorAll('.hand-card.selected-for-trade');
    const count = selected.length;
    const btn = document.getElementById('trade-btn');
    const p = game.players[game.currentTurn];

    let legCount = 0, mythicCount = 0, ultraCount = 0;
    selected.forEach(el => {
        const idx = parseInt(el.dataset.idx);
        const tier = p.hand[idx]?.tier;
        if (tier === 'legendary') legCount++;
        if (tier === 'mythic')    mythicCount++;
        if (tier === 'ultra')     ultraCount++;
    });

    if (selectedVerse === 'OnePiece') {
        // GOD paths
        if (count === 3 && ultraCount === 3)                             { btn.innerText = "TRADE 3 ULTRAS → GOD";          btn.disabled = false; return; }
        if (count === 3 && ultraCount === 2 && legCount === 1)           { btn.innerText = "TRADE 2U+1L → GOD";             btn.disabled = false; return; }
        if (count === 6 && ultraCount >= 1 && legCount >= 3)             { btn.innerText = "TRADE 1U+3L+2 → GOD";           btn.disabled = false; return; }
        // ULTRA paths
        if (count === 2 && legCount === 2)                               { btn.innerText = "TRADE 2 LEGENDARIES → ULTRA";   btn.disabled = false; return; }
        if (count === 4 && mythicCount === 3 && legCount === 1)          { btn.innerText = "TRADE 3M+1L → ULTRA";           btn.disabled = false; return; }
        if (count === 5 && mythicCount === 5)                            { btn.innerText = "TRADE 5 MYTHICS → ULTRA";       btn.disabled = false; return; }
        // LEGENDARY
        if (count === 5 && ultraCount === 0)                             { btn.innerText = "TRADE 5 CARDS → LEGENDARY";     btn.disabled = false; return; }
        // Hints while building
        if (legCount === 1 && count < 2)      btn.innerText = `ADD 1 MORE LEG FOR ULTRA (${count}/2)`;
        else if (ultraCount >= 1)             btn.innerText = `BUILDING GOD TRADE (${count})`;
        else                                  btn.innerText = `TRADE FOR LEGENDARY (${count}/5)`;
        btn.disabled = true;

    } else if (selectedVerse === 'Naruto' || selectedVerse === 'MHA') {
        if (count === 5 && legCount >= 1)     { btn.innerText = "ULTRA PATH 1 (5 w/ LEG)";  btn.disabled = false; }
        else if (count === 4 && legCount ===2){ btn.innerText = "ULTRA PATH 2 (2 LEG+2)";   btn.disabled = false; }
        else if (count === 3 && legCount ===3){ btn.innerText = "ULTRA PATH 3 (3 LEG)";     btn.disabled = false; }
        else if (count === 5)                 { btn.innerText = "TRADE 5 → LEGENDARY";       btn.disabled = false; }
        else                                  { btn.innerText = `TRADE FOR LEGENDARY (${count}/5)`; btn.disabled = true; }

    } else if (selectedVerse === 'DemonSlayer') {
        if (count === 3 && legCount === 3)    { btn.innerText = "TRADE 3 LEG → ULTRA";      btn.disabled = false; }
        else if (count === 5)                 { btn.innerText = "TRADE 5 → LEGENDARY";       btn.disabled = false; }
        else                                  { btn.innerText = `TRADE FOR LEGENDARY (${count}/5)`; btn.disabled = true; }

    } else {
        // JJK, Bleach, others
        if (count === 3 && legCount === 3)    { btn.innerText = "TRADE 3 LEG → ULTRA";      btn.disabled = false; }
        else if (count === 5)                 { btn.innerText = "TRADE 5 → LEGENDARY";       btn.disabled = false; }
        else                                  { btn.innerText = `TRADE FOR LEGENDARY (${count}/5)`; btn.disabled = true; }
    }
}

// --- SHOWDOWN MODE ---
function checkShowdownTrigger() {
    if (game.showdownActive) return;

    // Check if all neutral tiles have been claimed
    const neutralLeft = game.grid.filter(t => t && t.owner === 'neutral' && t.unit).length;

    if (neutralLeft === 0 && game.showdownTurnsLeft === null) {
        // Board just cleared — give every active player 3 turns each
        const activePlayers = game.players.filter(p => !p.eliminated).length;
        game.showdownTurnsLeft = activePlayers * 3;
        addLog(`⚔️ Board cleared! Each player has 3 turns before SHOWDOWN!`);
        showTurnNotification({ name: `SHOWDOWN IN ${game.showdownTurnsLeft} TURNS`, color: '#ff4d4d' });
        return;
    }

    if (game.showdownTurnsLeft !== null) {
        game.showdownTurnsLeft--;
        if (game.showdownTurnsLeft <= 0) {
            game.showdownActive = true;
            triggerShowdown();
        } else {
            // Show reminder every player's turn
            addLog(`⚔️ SHOWDOWN in ${game.showdownTurnsLeft} turn${game.showdownTurnsLeft !== 1 ? 's' : ''}!`);
        }
    }
}

function triggerShowdown() {
    // Collect all board units per player
    const rosters = {};
    game.players.forEach(p => {
        if (!p.eliminated) {
            rosters[p.color] = {
                player: p,
                units: game.grid.filter(t => t && t.owner === p.color && t.unit).map(t => t.unit)
            };
        }
    });

    showShowdownScreen(rosters);
}

function showShowdownScreen(rosters) {
    // Hide game screen, show showdown overlay
    let screen = document.getElementById('showdown-screen');
    if (!screen) {
        screen = document.createElement('div');
        screen.id = 'showdown-screen';
        screen.className = 'showdown-screen';
        document.body.appendChild(screen);
    }

    const players = Object.values(rosters);
    let html = `
        <div class="showdown-header">
            <div class="showdown-title">⚔️ SHOWDOWN ⚔️</div>
            <div class="showdown-subtitle">ALL VS ALL — DECLARE YOUR WINNER</div>
        </div>
        <div class="showdown-arena">`;

    players.forEach(({ player, units }) => {
        html += `
            <div class="showdown-player-col" style="border-color:${player.color}">
                <div class="showdown-player-name" style="color:${player.color}">${player.name.toUpperCase()}</div>
                <div class="showdown-unit-count">${units.length} UNIT${units.length !== 1 ? 'S' : ''}</div>
                <div class="showdown-units">`;
        units.forEach(u => {
            html += `<div class="showdown-unit">
                <img src="${u.img}" class="showdown-unit-img">
                <div class="showdown-unit-name">${u.name}</div>
            </div>`;
        });
        html += `</div>
                <button class="showdown-win-btn" style="background:${player.color}" onclick="declareShowdownWinner('${player.color}')">
                    ${player.name.toUpperCase()} WINS!
                </button>
            </div>`;
    });

    html += `</div>
        <div class="showdown-footer">
            <p>All units fight simultaneously. Declare the winner based on your roster strength!</p>
            <button class="corner-btn" onclick="confirmBackToMenu()" style="margin-top:10px;">⬅ BACK TO MENU</button>
        </div>`;

    screen.innerHTML = html;
    screen.style.display = 'flex';
    playEffect('showdown');
}

function declareShowdownWinner(color) {
    const winner = game.players.find(p => p.color === color);
    if (!winner) return;
    document.getElementById('showdown-screen').style.display = 'none';
    showWinScreen(winner);
}

function checkElimination() {
    game.players.forEach(p => {
        if (!p.eliminated) {
            const boardUnits = game.grid.filter(tile => tile.owner === p.color && tile.unit).length;
            if (boardUnits === 0 && p.hand.length === 0) {
                p.eliminated = true;
                alert(`${p.name} has been eliminated!`);
            }
        }
    });

    const activePlayers = game.players.filter(p => !p.eliminated);
    if (activePlayers.length === 1) {
        showWinScreen(activePlayers[0]);
    }
}

function showTurnNotification(player) {
    // LOCAL mode (not online): show pass-device screen between turns
    if (!conn || !conn.open) {
        setTimeout(() => showPassScreen(player.name, player.color), 420);
        return;
    }

    // Online: show the standard notification banner
    const existing = document.getElementById('turn-notification');
    if (existing) existing.remove();

    const notif = document.createElement('div');
    notif.id = 'turn-notification';
    notif.innerHTML = `<span style="color:${player.color}">${player.name.toUpperCase()}</span>'S TURN`;
    document.body.appendChild(notif);

    setTimeout(() => notif.classList.add('visible'), 10);
    setTimeout(() => {
        notif.classList.remove('visible');
        setTimeout(() => notif.remove(), 400);
    }, 1800);
}

function showApToast(msg) {
    const existing = document.getElementById('ap-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'ap-toast';
    toast.innerText = msg;
    toast.style.cssText = `
        position:fixed; top:50%; left:50%;
        transform:translate(-50%,-50%) scale(0.85);
        background:#1a0000; border:2px solid #ff4d4d;
        color:#ff4d4d; font-weight:900; font-size:15px;
        letter-spacing:3px; padding:14px 30px; border-radius:10px;
        z-index:99999; pointer-events:none; text-align:center;
        box-shadow:0 0 30px #ff4d4d55;
        opacity:0; transition:opacity 0.15s, transform 0.15s;
    `;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translate(-50%,-50%) scale(1)'; }, 10);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translate(-50%,-50%) scale(0.9)'; }, 1200);
    setTimeout(() => toast.remove(), 1400);
}

function endAction(apCost = 1) {
    game.ap -= apCost;
    game.selection = { type: null, idx: null };

    // Sync online
    if (conn && conn.open) {
        conn.send({ type: 'MOVE', gameState: game });
    }

    if (game.ap <= 0) {
        // Turn is over
        checkElimination();
        if (game.mode === 'showdown') checkShowdownTrigger();
        setTimeout(() => {
            let nextTurn = (game.currentTurn + 1) % game.players.length;
            while (game.players[nextTurn].eliminated) {
                nextTurn = (nextTurn + 1) % game.players.length;
            }
            game.currentTurn = nextTurn;
            game.ap = 3;
            game.awakenTarget = null;
            if (game.abilityMode) tickFrozen(); // decrement freeze counters on new turn
            render();
            showTurnNotification(game.players[game.currentTurn]);
        }, 400);
    } else {
        // AP remains — keep turn going, just re-render
        game.awakenTarget = null;
        render();
    }
}

// ═══════════════════════════════════════════════════════════════
//  TRADE REVEAL CINEMATIC
// ═══════════════════════════════════════════════════════════════
function showTradeReveal(tier, card) {
    const cfg = {
        legendary: { col:'#ffd700', glow:'#ffaa00', emoji:'🌟', title:'LEGENDARY', sub:'SUMMONED' },
        ultra:     { col:'#ff4444', glow:'#cc0000', emoji:'💥', title:'ULTRA',     sub:'POWER UNLEASHED' },
        god:       { col:'#ffd700', glow:'#ffffff', emoji:'👑', title:'GOD TIER',  sub:'DIVINE POWER' },
    };
    const c = cfg[tier] || cfg.legendary;

    if (!document.getElementById('trade-reveal-styles')) {
        const s = document.createElement('style');
        s.id = 'trade-reveal-styles';
        s.textContent = `
            @keyframes tr-bg-in    { from{opacity:0} to{opacity:1} }
            @keyframes tr-card-in  { from{transform:scale(0.3) translateY(60px) rotateY(90deg);opacity:0} to{transform:scale(1) translateY(0) rotateY(0deg);opacity:1} }
            @keyframes tr-title-in { from{transform:scale(0.4) translateY(30px);opacity:0;letter-spacing:20px} to{transform:scale(1) translateY(0);opacity:1;letter-spacing:6px} }
            @keyframes tr-glow-p   { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.15)} }
            @keyframes tr-particle { to{transform:translate(var(--tx),var(--ty)) scale(0);opacity:0} }
            @keyframes tr-ring     { from{transform:translate(-50%,-50%) scale(0);opacity:0.8} to{transform:translate(-50%,-50%) scale(3);opacity:0} }
            @keyframes tr-dismiss  { to{opacity:0;transform:scale(1.04)} }
            #trade-reveal-overlay  { position:fixed;inset:0;z-index:99990;display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer;animation:tr-bg-in 0.3s ease forwards; }
            .tr-card-wrap { position:relative;display:flex;flex-direction:column;align-items:center;gap:16px;animation:tr-card-in 0.55s 0.1s cubic-bezier(.22,1,.36,1) both; }
            .tr-card-img  { width:180px;height:260px;object-fit:cover;border-radius:14px;display:block; }
            .tr-title     { font-size:58px;font-weight:900;font-style:italic;letter-spacing:6px;font-family:'Arial Black',sans-serif;animation:tr-title-in 0.5s 0.4s cubic-bezier(.22,1,.36,1) both; }
            .tr-sub       { font-size:18px;letter-spacing:5px;opacity:0.8;animation:tr-title-in 0.5s 0.55s both; }
            .tr-dismiss   { font-size:12px;letter-spacing:3px;opacity:0.5;margin-top:20px;animation:tr-title-in 0.4s 1s both; }
            .tr-ring      { position:absolute;top:50%;left:50%;width:300px;height:300px;border-radius:50%;border:3px solid;animation:tr-ring 0.7s 0.2s ease-out forwards; }
        `;
        document.head.appendChild(s);
    }

    const overlay = document.createElement('div');
    overlay.id = 'trade-reveal-overlay';
    overlay.style.cssText = `background:radial-gradient(ellipse at center,${c.col}22 0%,#050505 70%);`;

    // Particles
    const pWrap = document.createElement('div');
    pWrap.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;';
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        const angle = Math.random()*Math.PI*2, dist = 150+Math.random()*300, size = 3+Math.random()*9;
        p.style.cssText = `position:absolute;left:50%;top:50%;width:${size}px;height:${size}px;border-radius:50%;background:${Math.random()<0.5?c.col:c.glow};box-shadow:0 0 6px ${c.col};--tx:${Math.cos(angle)*dist}px;--ty:${Math.sin(angle)*dist}px;animation:tr-particle ${0.6+Math.random()*0.8}s ${0.15+Math.random()*0.3}s ease-out forwards;`;
        pWrap.appendChild(p);
    }
    overlay.appendChild(pWrap);

    // Rings
    [0, 0.4].forEach(delay => {
        const ring = document.createElement('div');
        ring.className = 'tr-ring';
        ring.style.cssText = `border-color:${delay===0?c.col:c.glow};animation-delay:${delay}s;`;
        overlay.appendChild(ring);
    });

    // Card
    const cardWrap = document.createElement('div');
    cardWrap.className = 'tr-card-wrap';
    cardWrap.innerHTML = card?.img ? `
        <div style="position:relative;">
            <img src="${card.img}" class="tr-card-img" style="border:4px solid ${c.col};box-shadow:0 0 40px ${c.col},0 0 80px ${c.glow}40;">
            <div style="position:absolute;inset:0;border-radius:14px;box-shadow:inset 0 0 30px ${c.col}40;animation:tr-glow-p 1.5s infinite;pointer-events:none;"></div>
        </div>
        <div style="font-size:15px;font-weight:900;letter-spacing:2px;color:${c.col};text-shadow:0 0 12px ${c.col};text-transform:uppercase;">${card.name}</div>
    ` : '';
    overlay.appendChild(cardWrap);

    const title = document.createElement('div');
    title.className = 'tr-title';
    title.style.cssText = `color:${c.col};text-shadow:0 0 30px ${c.col},0 0 60px ${c.glow};`;
    title.innerText = c.title;
    overlay.appendChild(title);

    const sub = document.createElement('div');
    sub.className = 'tr-sub';
    sub.style.color = c.glow;
    sub.innerText = c.sub;
    overlay.appendChild(sub);

    const dismiss = document.createElement('div');
    dismiss.className = 'tr-dismiss';
    dismiss.style.color = 'white';
    dismiss.innerText = 'TAP TO CONTINUE';
    overlay.appendChild(dismiss);

    document.body.appendChild(overlay);

    const close = () => {
        overlay.style.animation = 'tr-dismiss 0.3s ease forwards';
        setTimeout(() => overlay.remove(), 300);
    };
    overlay.addEventListener('click', close);
    setTimeout(close, 3500);
}

// ═══════════════════════════════════════════════════════════════
//  WIN SCREEN CINEMATIC
// ═══════════════════════════════════════════════════════════════
function showWinScreen(winner) {
    const winScreen = document.getElementById('win-screen');
    const winText   = document.getElementById('winner-text');

    const colorMap = {
        red:    { hex:'#ff4d4d', rgb:'255,77,77'  },
        blue:   { hex:'#4d79ff', rgb:'77,121,255' },
        green:  { hex:'#4dff88', rgb:'77,255,136' },
        yellow: { hex:'#ffff4d', rgb:'255,255,77' },
    };
    const col = colorMap[winner.color] || { hex:'#ffffff', rgb:'255,255,255' };

    winText.innerText = `${winner.name.toUpperCase()} WINS!`;
    winText.style.color = col.hex;
    winText.style.textShadow = `0 0 40px ${col.hex},0 0 80px ${col.hex}`;
    winScreen.style.background = `radial-gradient(ellipse at center,rgba(${col.rgb},0.25) 0%,#050505 65%)`;

    let confetti = document.getElementById('win-confetti');
    if (!confetti) {
        confetti = document.createElement('div');
        confetti.id = 'win-confetti';
        confetti.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0;';
        winScreen.insertBefore(confetti, winScreen.firstChild);
    }
    confetti.innerHTML = '';

    if (!document.getElementById('win-styles')) {
        const s = document.createElement('style');
        s.id = 'win-styles';
        s.textContent = `
            @keyframes confetti-fall { to{transform:translateY(110vh) rotate(720deg);opacity:0} }
            @keyframes win-text-in   { from{transform:scale(0.2) translateY(-40px) rotate(-5deg);opacity:0;letter-spacing:20px} to{transform:scale(1) translateY(0) rotate(0);opacity:1;letter-spacing:2px} }
            @keyframes win-beam      { 0%,100%{opacity:0.15;transform:rotate(var(--r)) scaleY(1)} 50%{opacity:0.35;transform:rotate(var(--r)) scaleY(1.1)} }
            @keyframes win-ring-out  { from{transform:translate(-50%,-50%) scale(0);opacity:1} to{transform:translate(-50%,-50%) scale(4);opacity:0} }
            #winner-text             { animation:win-text-in 0.7s 0.2s cubic-bezier(.22,1,.36,1) both !important; }
            .win-beam                { position:absolute;left:50%;top:50%;width:4px;height:200%;transform-origin:50% 0%;animation:win-beam 3s infinite; }
            .win-ring                { position:absolute;top:50%;left:50%;width:400px;height:400px;border-radius:50%;border:3px solid;animation:win-ring-out 1s ease-out forwards; }
            .win-content             { position:relative;z-index:1;display:flex;flex-direction:column;align-items:center; }
        `;
        document.head.appendChild(s);
    }

    // Light beams
    for (let i = 0; i < 12; i++) {
        const beam = document.createElement('div');
        beam.className = 'win-beam';
        beam.style.cssText = `background:linear-gradient(to bottom,${col.hex}88,transparent);--r:${i*30}deg;transform:rotate(${i*30}deg);animation-delay:${i*0.15}s;`;
        confetti.appendChild(beam);
    }
    // Expanding rings
    for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'win-ring';
        ring.style.cssText = `border-color:${col.hex};animation-delay:${i*0.25}s;`;
        confetti.appendChild(ring);
    }
    // Confetti
    for (let i = 0; i < 80; i++) {
        const piece = document.createElement('div');
        const size = 6+Math.random()*12, x = Math.random()*100;
        const colors = [col.hex,'#ffffff','#ffd700',col.hex+'99'];
        piece.style.cssText = `position:absolute;left:${x}%;top:-20px;width:${size}px;height:${size}px;border-radius:${Math.random()<0.5?'50%':'0%'};background:${colors[Math.floor(Math.random()*colors.length)]};animation:confetti-fall ${1.5+Math.random()*2.5}s ${Math.random()*1.5}s ease-in forwards;`;
        confetti.appendChild(piece);
    }

    winScreen.classList.add('active');
}

function confirmBackToMenu() {
    requestVote('menu');
}

function confirmChangeVerse() {
    requestVote('verse');
}

function backToMenu() {
    _navHistory = ['menu'];
    _passScreenActive = false;
    _hideOnlineOverlay();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('menu').classList.add('active');
    if (conn) { try { conn.close(); } catch(e){} conn = null; }
    if (typeof peer !== 'undefined' && peer) { try { peer.destroy(); } catch(e){} }
    isHost = false;
}

function restartGame() {
    document.getElementById('win-screen').classList.remove('active');
    initGame();
}
// Auto-read ?join=CODE from invite link and pre-fill the join box
(function() {
    const params = new URLSearchParams(window.location.search);
    const joinCode = params.get('join');
    if (joinCode) {
        // Wait for DOM then fill the input and highlight it
        window.addEventListener('DOMContentLoaded', () => {
            const input = document.getElementById('join-code');
            if (input) {
                input.value = joinCode.toUpperCase();
                input.style.borderColor = '#4dff88';
                input.style.boxShadow = '0 0 10px #4dff88';
            }
        });
        // Also try immediately in case DOM is already ready
        const input = document.getElementById('join-code');
        if (input) {
            input.value = joinCode.toUpperCase();
            input.style.borderColor = '#4dff88';
            input.style.boxShadow = '0 0 10px #4dff88';
        }
    }
})();
// ─── Request Vote (menu/verse/endgame) ──────────────────────
function requestVote(action) {
    if (!conn || !conn.open) {
        // Local: simple confirm
        const msgs = { menu:'Return to menu? Game will be lost.', verse:'Change verse? Game will be lost.', endgame:'End the game for everyone?' };
        if (confirm(msgs[action] || 'Confirm?')) {
            if (action === 'endgame' || action === 'menu') backToMenu();
            else { backToMenu(); setTimeout(() => showSetup('local'), 50); }
        }
        return;
    }
    // Online: send vote request
    conn.send({ type:'VOTE_REQUEST', action, requester: isHost ? 'HOST':'GUEST', threshold: action === 'endgame' ? 0.75 : 0.5 });
    showApToast('VOTE SENT — WAITING FOR RESPONSE');
}

// ─── Menu canvas particles ──────────────────────────────────
(function() {
    function initCanvas() {
        const canvas = document.getElementById('menu-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let W = canvas.width = canvas.offsetWidth || window.innerWidth;
        let H = canvas.height = canvas.offsetHeight || window.innerHeight;

        const particles = Array.from({ length: 60 }, () => ({
            x: Math.random() * W, y: Math.random() * H,
            r: 0.5 + Math.random() * 1.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: -0.2 - Math.random() * 0.4,
            alpha: Math.random() * 0.5,
            hue: 200 + Math.random() * 80,
        }));

        function draw() {
            if (!document.getElementById('menu')?.classList.contains('active')) {
                requestAnimationFrame(draw); return;
            }
            ctx.clearRect(0, 0, W, H);
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
                if (p.x < -4) p.x = W + 4;
                if (p.x > W + 4) p.x = -4;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue},80%,70%,${p.alpha})`;
                ctx.fill();
            });
            requestAnimationFrame(draw);
        }
        draw();

        window.addEventListener('resize', () => {
            W = canvas.width = canvas.offsetWidth || window.innerWidth;
            H = canvas.height = canvas.offsetHeight || window.innerHeight;
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCanvas);
    } else {
        initCanvas();
    }
})();