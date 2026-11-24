// ==========================================
// Union Arena 香港 Tier List 牌組與圖片資料庫
// 日後維護更新只需在此檔案修改即可！
// ==========================================

const tiersData = [
    { 
        id: "T1",   
        name: "T1",   
        color: "from-red-600 to-rose-600",   
        desc: "頂級強勢 • 主流最強", 
        analysis: "現版本主流最強卡組，勝率極高，幾乎所有比賽都會遇到。",
        images: [
            {
                src: "待定/1.PNG", //紫死神 一露
                newSrc: "待定/1_deck.jpeg"
            },
            {
                src: "UATier1/5.PNG", //紫死神 戀露
                newSrc: "UATier1/5_deck.jpeg"
            }, 
            // 如果這張卡片需要指定不同副檔名的大圖，直接用物件格式即可：
            {
                src: "UATier2/4.webp", //紫Re0 Betty
                newSrc: "UATier2/4_deck.jpeg"
            },
            {
                src: "UATier1/10.jpeg", //紅天元 大哥
                newSrc: "UATier1/10_deck.jpeg"
            },
        ]
    },
    { 
        id: "T1.5",   
        name: "T1.5",   
        color: "from-orange-500 to-amber-600",   
        desc: "非常穩定 • 高勝率",   
        analysis: "勝率穩定，後期強勢。",
        images: [
            {
                src: "UATier0/1.PNG", //紫imas CoMETIK
                newSrc: "UATier0/1_deck.jpeg"
            },
            {
                src: "UATier1.5/JP1.png", //紫我獨 暗影軍團
                newSrc: "UATier1.5/JP1_deck.png"
            },
            {
                src: "UATier1.5/JP2.png", //紫我獨 惡魔城
                newSrc: "UATier1.5/JP2_deck.png"
            },
            "UATier1/1.png", //紫明日 陳兔
            "UATier1/2.jpeg", //紫暗影 暗影大人
            "待定/3.PNG", //紫死神 白戀
            "UATier1.5/1.png", //紫SAO Yula
            "UATier1.5/2.PNG", //紫EVA Wille
            "UATier1.5/3.jpeg", //紫超時空 Walküre
            "UATier1.5/4.png", //紫EVA 初號機
            "UATier1.5/5.jpeg", //紫鏈鋸 蕾潔
            {
                src: "UATier3.1/26.webp", //紫Re0 EMT
                newSrc: "UATier3.1/26_deck.jpeg"
            },
            "UATier1.5/47.PNG", //紫D.Gray man 挪亞一族
            "UATier2/3.webp", //紫物語 忍野忍
            "UATier4/23.webp", //紫物語 貓
            "UATier2/23.webp", //紅王者 贏政
            "UATier1/3.jpeg", //紅鏈鋸 6分鏈
            "UATier0/2.PNG", //紅EVA 初號機
            "UATier1.5/6.PNG", //紅劍心
            "UATier1.5/7.jpeg", //紅犬夜叉
            "UATier1.5/8.PNG", //紅灰姑娘 9姑娘
            "UATier1.5/9.webp", //紅灰姑娘 New Gen.
            "UATier3.1/53.webp", //紅物語 89寺
            "UATier1.5/450.jpeg", //黃小圓 54麻圓
            "UATier1.5/12.PNG", //黃王者 汗明
            "UATier1.5/13.PNG", //黃超時空 雪露
            "UATier1.5/14.PNG", //黃NIKKE 灰姑娘
            "UATier1.5/17.jpeg", //黃EVA
            "UATier2/27.png", //黃小圓 457麻圓
            "UATier3.1/76.webp", //黃小圓 圓神
            "UATier1.5/16.jpeg", //黃坂本 全混
            "UATier3/96.png", //黃Re0 拉蕾
            {
                src: "UATier3.1/82.webp", //黃Re0 EMT
                newSrc: "UATier3.1/82_deck.jpeg"
            },
            "UATier3.1/83.webp", //黃物語 撫子
            "UATier3.1/84.webp", //黃物語 Fire sister
            "UATier1.5/18.png", //藍超時空 三角戀
            "UATier1.5/19.png", //藍灰姑娘 扭蛋姬
            "UATier1.5/20.png", //藍超時空 自爆機
            "UATier1.5/21.png", //藍無職 師徒
            "待定/8.PNG", //藍死神 一護
            "待定/12.PNG", //藍死神 涅部隊
            "UATier1.5/43.webp", //藍灰姑娘 LIPPS
            "UATier1/4.jpg", //藍Roze 皇帝
            {
                src: "UATier1.5/31.jpeg", //藍命石 助手
                newSrc: "UATier1.5/31_deck.jpeg"
            },
            "UATier1.5/32.jpeg", //藍命石 嘟嘟嘟
            "UATier2/38.PNG", //藍Re0 蕾姆
            "UATier1.5/44.PNG", //藍D.Gray man 男主
            "待定/298.webp", //綠小圓 Magius
            "UATier0/3.jpeg", //綠無職 迷宮
            "UATier1.5/30.jpeg", //綠命石 打工戰士
            "UATier1.5/36.jpeg", //綠Re0 EMT
            "UATier1.5/48.png" //綠物語 忍野扇+老倉
        ]
    },
    { 
        id: "T2",   
        name: "T2",   
        color: "from-amber-500 to-yellow-600",   
        desc: "進階選擇 • 潛力牌組",   
        analysis: "有一定實力，需要熟悉操作。",
        images: [
            "UATier2/70.PNG", //紫D.Gray man 男主
            "UATier4/17.webp", //紫小圓 惡魔焰
            "UATier4/18.webp", //紫小圓 五重奏
            "UATier4/19.webp", //紫小圓 小焰+巴麻美
            "待定/2.PNG", //紫死神 零番隊
            "UATier2/1.webp", //紫超時空 Delta小隊
            "UATier2/2.webp", //紫坂本 大佛+神神迴
            "UATier2/5.webp", //紫鏈鋸 MKM
            "UATier2/6.PNG", //紫喰種 月山
            "UATier2/7.PNG", //紫劍心 牙突
            "UATier2/8.webp", //紫幽遊 戶愚呂
            "UATier2/9.webp", //紫幽遊 戶愚呂混軸
            "UATier2/10.webp", //紫暗影 七影
            "UATier2/11.webp", //紅超時空 巴沙拿
            "UATier2/12.webp", //紅To Love 三姊妹
            "UATier2/13.webp", //紅筋肉人
            "UATier2/14.webp", //紅犬夜叉 彌勒
            "UATier2/15.PNG", //紅神樂 男主
            "UATier2/16.png", //紅巨人 8分巨
            "UATier2/17.png", //紅學媽 訊號燈
            "UATier2/18.png", //紅拉打 電王
            "UATier2/19.PNG", //紅喰種 site-up
            "UATier2/20.PNG", //紅學媽 清夏
            "UATier2/22.jpg", //紅灰姑娘 barry-go-round
            "UATier1.5/11.PNG", //紅天元 西蒙
            "UATier4/46.webp", //紅小圓 藍紅毛
            "UATier3.1/48.webp", //紅小圓 5人
            "UATier4/54.webp", //紅物語 戰場原
            "待定/5.PNG", //黃死神 友哈
            "待定/6.PNG", //黃死神 臭精
            "待定/7.PNG", //黃死神 BF
            "UATier2/24.webp", //黃我英 69
            "UATier2/25.webp", //黃暗影 皇女
            "UATier2/26.png", //黃超時 蘭花
            "UATier2/28.PNG", //黃魔都 男女主
            "UATier2/29.PNG", //黃坂本 商店
            "UATier2/30.PNG", //黃學媽 三年級
            "UATier2/31.PNG", //黃學媽 一年級
            "UATier2/32.PNG", //黃To Love 小暗
            "UATier2/33.webp", //黃roze 合體機
            "UATier2/34.webp", //黃灰姑娘 3 yeah!!
            "UATier2/35.webp", //黃暗影 家姐
            "UATier1.5/15.PNG", //黃超時 蘭花雪露
            "UATier3.1/77.webp", //黃小圓 巴麻美
            "UATier2/64.PNG", //黃Re0 純蕾
            "UATier2/36.PNG", //藍王者 飛信隊
            "UATier2/37.png", //藍學媽 十王
            "UATier2/39.PNG", //藍學媽 補習班
            "UATier2/40.webp", //藍拉打 全明星
            "UATier2/41.webp", //藍史 蒼影
            "UATier2/42.webp", //藍TOA 女主
            "UATier2/44.webp", //藍無職 艾莉絲
            "待定/11.PNG", //藍死神 夜一
            "待定/9.PNG", //藍死神 一露戀
            "待定/10.PNG", //藍死神 一露白
            "UATier2/71.PNG", //藍D.Gray man 神田
            "UATier2/45.png", //綠NIKKE 拉普拉斯
            "UATier2/46.PNG", //綠SAO GGO
            "UATier2/47.PNG", //綠拉打 W
            "UATier2/48.png", //綠一拳 15分
            "UATier2/49.png", //綠香開 雞+賽卡0
            "UATier2/50.png", //綠香開 雞兔
            "UATier2/51.png", //綠史 龍女
            "UATier2/52.png", //綠無職 大學
            "UATier2/53.png", //綠天元 100分
            "UATier2/54.png", //綠天元 457分
            "待定/13.PNG", //綠死神 春水
            "待定/14.PNG", //綠死神 東C+劍八
            "待定/15.PNG", //綠死神 劍八+花姐
            "待定/16.PNG", //綠死神 總隊
            "待定/299.webp", //綠小圓 三日月
            "UATier2/JP3.png", //綠我獨 車hunter
            "UATier2/JP4.png", //綠我獨 日本hunter
            "UATier2/60.jpeg", //綠命石 D.mail
            "UATier2/62.PNG", //綠Re0 陽劍
            "UATier2/72.png" //綠物語 123EN
        ]
    },
    { 
        id: "T3",   
        name: "T3",   
        color: "from-cyan-500 to-blue-600",     
        desc: "中規中矩",   
        analysis: "中規中矩的強度。",
        images: [
            "UATier3.1/1.webp", //紫咒術 東堂
            "UATier3.1/2.webp", //紫魯魯修
            "UATier3.1/3.webp", //紫鬼滅 鬼王
            "UATier3.1/4.webp", //紫我英 柄+Lady
            "UATier3.1/5.webp", //紫我英 翻修+渡我
            "UATier3.1/6.webp", //紫銀魂 白夜叉+桂小
            "UATier3.1/7.webp", //紫銀魂 白夜叉+高杉
            "UATier3.1/10.webp", //紫黑五 三極性
            "UATier3.1/11.webp", //紫我英 翻修+Lady
            "UATier3.1/12.webp", //紫不死不運 風子+Andy
            "UATier3.1/13.webp", //紫SAO 亞絲娜
            "UATier3.1/14.webp", //紫史 紫苑+史
            "UATier3.1/15.webp", //紫史 日向
            "UATier3.1/16.webp", //紫史 紫苑+史+日向
            "UATier3.1/17.webp", //紫坂本 Labo
            "UATier3.1/18.webp", //紫坂本 南雲+坂本
            "UATier3.1/19.webp", //紫EVA 13號機
            "UATier3.1/20.webp", //紫喰種 12金木
            "UATier3.1/21.webp", //紫喰種 金木+董香
            "UATier3.1/22.webp", //紫神樂 居合白禊流
            "UATier3.1/23.webp", //紫NIKKE 女神部隊
            "UATier3.1/24.PNG", //紫imas 摩美美+三峰+白瀨+戀鍾+霧子
            "UATier3.1/25.PNG", //紫神樂 拍賣會
            "UATier3.1/27.webp", //紫劍心 志志雄
            "UATier3.1/28.webp", //紫筋肉人 黑洞人
            "UATier3.1/29.webp", //紫鋼錬 大總統
            "UATier3.1/30.webp", //紫犬夜叉 殺生丸
            "UATier3.1/31.webp",
            "UATier3.1/32.webp",
            "UATier3.1/33.webp",
            "UATier3.1/34.webp",
            "UATier3.1/35.webp",
            "UATier3.1/36.webp",
            "UATier3.1/37.webp",
            "UATier3.1/38.webp",
            "UATier3.1/39.webp",
            "UATier3.1/40.webp",
            "UATier3.1/41.webp",
            "UATier3.1/42.webp",
            "UATier3.1/43.png",
            "UATier3.1/44.webp",
            "UATier3.1/45.webp",
            "UATier3.1/46.webp",
            "UATier3.1/47.webp",
            "UATier3.1/49.webp",
            "UATier3.1/50.png",
            "UATier3.1/51.webp",
            "UATier3.1/64.webp",
            "UATier3.1/65.webp",
            "UATier3.1/66.webp",
            "UATier3.1/67.webp",
            "UATier3.1/68.webp",
            "UATier3.1/69.webp",
            "UATier3.1/70.webp",
            "UATier3.1/71.webp",
            "UATier3.1/72.webp",
            "UATier3.1/73.webp",
            "UATier3.1/74.webp",
            "UATier3.1/75.webp",
            "UATier3.1/78.webp",
            "UATier3.1/79.webp",
            "UATier3.1/80.webp",
            "UATier3.1/81.webp", 
            "UATier3.1/85.webp",
            "UATier3.1/87.webp",
            "UATier3.1/88.webp",
            "UATier3.1/89.webp",
            "UATier3.1/90.webp",
            "UATier3.1/91.webp", 
            "UATier3/92.webp",
            "UATier3/93.webp",
            "UATier3/94.webp", 
            "UATier3/95.webp",
            "UATier3/97.png",
            "UATier3/98.webp",
            "UATier3/99.webp", 
            "UATier3/100.webp",
            "UATier3/101.webp",
            "UATier3/102.webp",
            "UATier3/103.webp",
            "UATier3/104.webp", 
            "UATier3/106.webp",
            "UATier3/107.webp",
            "UATier3/108.webp",
            "UATier3/110.webp", 
            "UATier3/111.webp",
            "UATier3/112.webp",
            "UATier3/113.webp",
            "UATier3/114.webp",
            "UATier3/115.webp",
            "UATier3/116.webp",
            "UATier3/117.webp",
            "UATier3/118.png",
            "UATier3/119.webp", 
            "UATier3/120.webp",
            "UATier3/121.webp",
            "UATier3/122.webp",
            "UATier3/123.webp",
            "UATier3/124.webp", 
            "UATier3/125.webp",
            "UATier3/126.webp",
            "UATier3/127.webp",
            "UATier3/129.webp", 
            "UATier3/130.webp",
            "UATier3/131.png",
            "UATier3/132.png",
            "UATier3/JP5.png"
        ]
    },
    { 
        id: "T4",   
        name: "T4",   
        color: "from-indigo-600 to-blue-700",  
        desc: "需要特定環境",   
        analysis: "在特定對局中表現出色。",
        images: [
            "UATier4/1.webp",
            "UATier4/2.webp",
            "UATier4/3.webp",
            "UATier4/4.webp",
            "UATier4/5.webp",
            "UATier4/6.webp",
            "UATier4/7.webp",
            "UATier4/9.webp",
            "UATier4/10.webp",
            "UATier4/11.webp",
            "UATier4/12.webp",
            "UATier4/13.webp",
            "UATier4/14.webp",
            "UATier4/15.webp",
            "UATier4/16.webp",
            "UATier4/20.webp",
            "UATier4/21.webp",
            "UATier4/22.webp", //紫幽遊 陣+鴉
            "UATier4/24.webp", //紫Dr.stone 千空+幻
            "UATier4/25.webp", //紫Dr.stone 獅子王 司
            "UATier4/26.webp",
            "UATier4/27.webp",
            "UATier4/28.webp",
            "UATier4/29.webp",
            "UATier4/30.webp",
            "UATier4/31.webp",
            "UATier4/32.webp",
            "UATier4/33.webp",
            "UATier4/34.webp",
            "UATier4/35.webp",
            "UATier4/36.webp",
            "UATier4/37.webp",
            "UATier4/38.webp",
            "UATier4/39.webp",
            "UATier4/40.webp",
            "UATier4/41.webp",
            "UATier4/42.webp",
            "UATier4/43.webp",
            "UATier4/44.webp",
            "UATier4/45.webp",
            "UATier4/47.webp",
            "UATier4/48.webp",
            "UATier4/49.webp",
            "UATier4/50.webp",
            "UATier4/51.webp", 
            "UATier4/52.webp",
            "UATier4/53.webp", //紅劍心 左之助
            "UATier4/55.webp", //紅一拳 音速
            "UATier4/56.webp", //紅一拳 餓狼
            "UATier4/57.webp",
            "UATier4/58.webp",
            "UATier4/59.webp", 
            "UATier4/60.webp",
            "UATier4/61.webp",
            "UATier4/62.webp",
            "UATier4/63.webp",
            "UATier4/64.webp",
            "UATier4/65.webp",
            "UATier4/66.webp",
            "UATier4/67.webp",
            "UATier4/68.webp",
            "UATier4/69.webp",
            "UATier4/70.webp",
            "UATier4/71.webp",
            "UATier4/76.webp",
            "UATier4/77.webp",
            "UATier4/78.webp",
            "UATier4/79.webp",
            "UATier4/80.webp",
            "UATier4/81.webp",
            "UATier4/82.webp", 
            "UATier4/83.webp",
            "UATier4/84.webp",
            "UATier4/85.webp",
            "UATier4/86.webp",
            "UATier4/87.webp",
            "UATier4/88.webp",
            "UATier4/90.webp",
            "UATier4.1/91.webp",
            "UATier4.1/92.webp",
            "UATier4.1/93.webp",
            "UATier4.1/94.webp",
            "UATier4.1/95.webp",
            "UATier4.1/96.webp",
            "UATier4.1/97.webp",
            "UATier4.1/98.webp",
            "UATier4.1/100.webp",
            "UATier4.1/101.webp",
            "UATier4.1/102.webp",
            "UATier4.1/103.webp",
            "UATier4.1/104.webp",
            "UATier4.1/105.webp",
            "UATier4.1/106.webp",
            "UATier4.1/107.webp",
            "UATier4.1/108.webp",
            "UATier4.1/109.webp",
            "UATier4.1/110.webp", 
            "UATier4.1/111.webp",
            "UATier4.1/112.webp",
            "UATier4.1/113.webp",
            "UATier4.1/114.webp",
            "UATier4.1/115.webp",
            "UATier4.1/116.webp",
            "UATier4.1/117.webp",
            "UATier4.1/118.webp",
            "UATier4.1/119.webp",
            "UATier4.1/120.webp",
            "UATier4.1/121.webp",
            "UATier4.1/122.webp",
            "UATier4.1/123.webp",
            "UATier4.1/124.webp",
            "UATier4.1/125.webp",
            "UATier4.1/126.webp",
            "UATier4.1/127.webp",
            "UATier4.1/128.webp",
            "UATier4.1/129.webp",
            "UATier4.1/130.webp", 
            "UATier4.1/133.webp",
            "UATier4.1/134.webp",
            "UATier4.1/135.webp",
            "UATier4.1/136.webp",
            "UATier4.1/137.webp",
            "UATier4.1/138.webp",
            "UATier4.1/139.webp",
            "UATier4.1/140.webp",
            "UATier4.1/141.webp",
            "UATier4.1/142.webp",
            "UATier4.1/143.webp",
            "UATier4.1/144.webp",
            "UATier4.1/145.webp",
            "UATier4.1/146.webp",
            "UATier4.1/147.webp",
            "UATier4.1/148.webp",
            "UATier4.1/151.webp",
            "UATier4.1/152.webp",
            "UATier4.1/153.webp",
            "UATier4.1/154.webp",
            "UATier4.1/155.webp",
            "UATier4.1/156.webp",
            "UATier4.1/157.webp",
            "UATier4.1/158.webp",
            "UATier4.1/159.webp",
            "UATier4.1/160.webp",
            "UATier4.1/161.webp",
            "UATier4.1/162.webp",
            "UATier4.1/163.webp",
            "UATier4.1/165.webp",
            "UATier4.1/166.webp",
            "UATier4.1/167.webp",
            "UATier4.1/168.webp",
            "UATier4.1/169.webp",
            "UATier4.1/170.webp",
            "UATier4.1/172.webp",
            "UATier4.1/173.webp",
            "UATier4.1/174.webp",
            "UATier4.1/175.webp",
            "UATier4.1/176.webp"
        ]
    }
];
