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
            "待定/1.PNG", 
            {
                src: "UATier1/5.PNG",
                newSrc: "UATier1/5_deck.jpeg"
            }, 
            // 如果這張卡片需要指定不同副檔名的大圖，直接用物件格式即可：
            {
                src: "UATier2/4.webp",
                newSrc: "UATier2/4_deck.jpeg"
            },
            {
                src: "UATier1/10.jpeg",
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
            "UATier0/1.PNG", "UATier1.5/JP1.png", "UATier1.5/JP2.png", "UATier1/1.png", "UATier1/2.jpeg", "待定/3.PNG", "UATier1.5/1.png", 
            "UATier1.5/2.PNG", "UATier1.5/3.jpeg", "UATier1.5/4.png", "UATier1.5/5.jpeg", "UATier3.1/26.webp", "UATier1/3.jpeg", "UATier0/2.PNG",
            "UATier1.5/6.PNG", "UATier1.5/7.jpeg", "UATier1.5/8.PNG", "UATier1.5/9.webp", "UATier1.5/450.jpeg", "UATier1.5/12.PNG", "UATier1.5/13.PNG", "UATier1.5/14.PNG", 
            "UATier1.5/17.jpeg", "UATier2/27.png", "UATier3.1/76.webp", "UATier1.5/16.jpeg", "UATier3/96.png", "UATier1.5/18.png", "UATier1.5/19.png", "UATier1.5/20.png",
            "UATier1.5/21.png", "待定/8.PNG", "待定/12.PNG", "UATier1.5/43.webp", "UATier1/4.jpg", "UATier1.5/31.jpeg", "UATier1.5/32.jpeg",
            "UATier2/38.PNG", "待定/298.webp", "UATier0/3.jpeg", "UATier1.5/30.jpeg", "UATier1.5/36.jpeg"
        ]
    },
    { 
        id: "T2",   
        name: "T2",   
        color: "from-amber-500 to-yellow-600",   
        desc: "進階選擇 • 潛力牌組",   
        analysis: "有一定實力，需要熟悉操作。",
        images: [
            "UATier4/17.webp", "UATier4/18.webp", "UATier4/19.webp",
            "待定/2.PNG", "UATier2/1.webp", "UATier2/2.webp", "UATier2/3.webp", "UATier2/5.webp",
            "UATier2/6.PNG", "UATier2/7.PNG", "UATier2/8.webp", "UATier2/9.webp", "UATier2/10.webp",
            "UATier2/11.webp", "UATier2/12.webp", "UATier2/13.webp", "UATier2/14.webp", "UATier2/15.PNG",
            "UATier2/16.png", "UATier2/17.png", "UATier2/18.png", "UATier2/19.PNG", "UATier2/20.PNG",
            "UATier2/22.jpg", "UATier2/23.webp", "UATier1.5/11.PNG", "UATier4/46.webp", "UATier3.1/48.webp", "待定/5.PNG", "待定/6.PNG", "待定/7.PNG",
            "UATier2/24.webp", "UATier2/25.webp", "UATier2/26.png", "UATier2/28.PNG", "UATier2/29.PNG", "UATier2/30.PNG", "UATier2/31.PNG",
            "UATier2/32.PNG", "UATier2/33.webp", "UATier2/34.webp", "UATier2/35.webp", "UATier1.5/15.PNG", "UATier3.1/77.webp", "UATier3.1/82.webp", "UATier2/64.PNG", "UATier2/36.PNG",
            "UATier2/37.png", "UATier2/39.PNG", "UATier2/40.webp", "UATier2/41.webp",
            "UATier2/42.webp", "UATier2/44.webp", "待定/11.PNG", "待定/9.PNG", "待定/10.PNG", "UATier2/45.png", "UATier2/46.PNG",
            "UATier2/47.PNG", "UATier2/48.png", "UATier2/49.png", "UATier2/50.png", "UATier2/51.png",
            "UATier2/52.png", "UATier2/53.png", "UATier2/54.png", "待定/13.PNG", "待定/14.PNG", "待定/15.PNG", "待定/16.PNG", "待定/299.webp",
            "UATier2/JP3.png", "UATier2/JP4.png", "UATier2/60.jpeg", "UATier2/62.PNG"
        ]
    },
    { 
        id: "T3",   
        name: "T3",   
        color: "from-cyan-500 to-blue-600",     
        desc: "中規中矩",   
        analysis: "中規中矩的強度。",
        images: [
            "UATier3.1/1.webp", "UATier3.1/2.webp", "UATier3.1/3.webp", "UATier3.1/4.webp", "UATier3.1/5.webp",
            "UATier3.1/6.webp", "UATier3.1/7.webp", "UATier3.1/10.webp",
            "UATier3.1/11.webp", "UATier3.1/12.webp", "UATier3.1/13.webp", "UATier3.1/14.webp", "UATier3.1/15.webp",
            "UATier3.1/16.webp", "UATier3.1/17.webp", "UATier3.1/18.webp", "UATier3.1/19.webp", "UATier3.1/20.webp",
            "UATier3.1/21.webp", "UATier3.1/22.webp", "UATier3.1/23.webp", "UATier3.1/24.PNG", "UATier3.1/25.PNG",
            "UATier3.1/27.webp", "UATier3.1/28.webp", "UATier3.1/29.webp", "UATier3.1/30.webp",
            "UATier3.1/31.webp", "UATier3.1/32.webp", "UATier3.1/33.webp", "UATier3.1/34.webp", "UATier3.1/35.webp",
            "UATier3.1/36.webp", "UATier3.1/37.webp", "UATier3.1/38.webp", "UATier3.1/39.webp", "UATier3.1/40.webp",
            "UATier3.1/41.webp", "UATier3.1/42.webp", "UATier3.1/43.png", "UATier3.1/44.webp", "UATier3.1/45.webp",
            "UATier3.1/46.webp", "UATier3.1/47.webp", "UATier3.1/49.webp", "UATier3.1/50.png",
            "UATier3.1/51.webp", "UATier3.1/64.webp", "UATier3.1/65.webp", "UATier3.1/66.webp", "UATier3.1/67.webp",
            "UATier3.1/68.webp", "UATier3.1/69.webp", "UATier3.1/70.webp", "UATier3.1/71.webp", "UATier3.1/72.webp",
            "UATier3.1/73.webp", "UATier3.1/74.webp", "UATier3.1/75.webp",
            "UATier3.1/78.webp", "UATier3.1/79.webp", "UATier3.1/80.webp", "UATier3.1/81.webp", 
            "UATier3.1/83.webp", "UATier3.1/84.webp", "UATier3.1/85.webp", "UATier3.1/87.webp", "UATier3.1/88.webp",
            "UATier3.1/89.webp", "UATier3.1/90.webp", "UATier3.1/91.webp", 
            "UATier3/92.webp", "UATier3/93.webp", "UATier3/94.webp", 
            "UATier3/95.webp", "UATier3/97.png", "UATier3/98.webp", "UATier3/99.webp", 
            "UATier3/100.webp", "UATier3/101.webp", "UATier3/102.webp", "UATier3/103.webp", "UATier3/104.webp", 
            "UATier3/106.webp", "UATier3/107.webp", "UATier3/108.webp", "UATier3/110.webp", 
            "UATier3/110.webp", "UATier3/111.webp", "UATier3/112.webp", "UATier3/113.webp", "UATier3/114.webp",
            "UATier3/115.webp", "UATier3/116.webp", "UATier3/117.webp", "UATier3/118.png", "UATier3/119.webp", 
            "UATier3/120.webp", "UATier3/121.webp", "UATier3/122.webp", "UATier3/123.webp", "UATier3/124.webp", 
            "UATier3/125.webp", "UATier3/126.webp", "UATier3.1/127.webp", "UATier3/129.webp", 
            "UATier3/130.webp", "UATier3/131.png", "UATier3/132.png", "UATier3/JP5.png"
        ]
    },
    { 
        id: "T4",   
        name: "T4",   
        color: "from-indigo-600 to-blue-700",  
        desc: "需要特定環境",   
        analysis: "在特定對局中表現出色。",
        images: [
            "UATier4/1.webp", "UATier4/2.webp", "UATier4/3.webp", "UATier4/4.webp", "UATier4/5.webp",
            "UATier4/6.webp", "UATier4/7.webp", "UATier4/9.webp", "UATier4/10.webp",
            "UATier4/11.webp", "UATier4/12.webp", "UATier4/13.webp", "UATier4/14.webp", "UATier4/15.webp",
            "UATier4/16.webp", "UATier4/20.webp",
            "UATier4/21.webp", "UATier4/22.webp", "UATier4/23.webp", "UATier4/24.webp", "UATier4/25.webp",
            "UATier4/26.webp", "UATier4/27.webp", "UATier4/28.webp", "UATier4/29.webp", "UATier4/30.webp",
            "UATier4/31.webp", "UATier4/32.webp", "UATier4/33.webp", "UATier4/34.webp", "UATier4/35.webp",
            "UATier4/36.webp", "UATier4/37.webp", "UATier4/38.webp", "UATier4/39.webp", "UATier4/40.webp",
            "UATier4/41.webp", "UATier4/42.webp", "UATier4/43.webp", "UATier4/44.webp", "UATier4/45.webp",
            "UATier4/47.webp", "UATier4/48.webp", "UATier4/49.webp", "UATier4/50.webp",
            "UATier4/51.webp", "UATier4/52.webp", "UATier4/53.webp", "UATier4/54.webp", "UATier4/55.webp",
            "UATier4/56.webp", "UATier4/57.webp", "UATier4/58.webp", "UATier4/59.webp", "UATier4/60.webp",
            "UATier4/61.webp", "UATier4/62.webp", "UATier4/63.webp", "UATier4/64.webp", "UATier4/65.webp",
            "UATier4/66.webp", "UATier4/67.webp", "UATier4/68.webp", "UATier4/69.webp", "UATier4/70.webp",
            "UATier4/71.webp", "UATier4/76.webp",
            "UATier4/77.webp", "UATier4/78.webp", "UATier4/79.webp", "UATier4/80.webp", "UATier4/81.webp",
            "UATier4/82.webp", "UATier4/83.webp", "UATier4/84.webp", "UATier4/85.webp", "UATier4/86.webp",
            "UATier4/87.webp", "UATier4/88.webp", "UATier4/90.webp", "UATier4.1/91.webp", "UATier4.1/92.webp",
            "UATier4.1/93.webp", "UATier4.1/94.webp", "UATier4.1/95.webp", "UATier4.1/96.webp", "UATier4.1/97.webp",
            "UATier4.1/98.webp", "UATier4.1/100.webp", "UATier4.1/101.webp", "UATier4.1/102.webp",
            "UATier4.1/103.webp", "UATier4.1/104.webp", "UATier4.1/105.webp", "UATier4.1/106.webp", "UATier4.1/107.webp",
            "UATier4.1/108.webp", "UATier4.1/109.webp", "UATier4.1/110.webp", "UATier4.1/111.webp", "UATier4.1/112.webp",
            "UATier4.1/113.webp", "UATier4.1/114.webp", "UATier4.1/115.webp", "UATier4.1/116.webp", "UATier4.1/117.webp",
            "UATier4.1/118.webp", "UATier4.1/119.webp", "UATier4.1/120.webp", "UATier4.1/121.webp", "UATier4.1/122.webp",
            "UATier4.1/123.webp", "UATier4.1/124.webp", "UATier4.1/125.webp", "UATier4.1/126.webp", "UATier4.1/127.webp",
            "UATier4.1/128.webp", "UATier4.1/129.webp", "UATier4.1/130.webp", 
            "UATier4.1/133.webp", "UATier4.1/134.webp", "UATier4.1/135.webp", "UATier4.1/136.webp", "UATier4.1/137.webp",
            "UATier4.1/138.webp", "UATier4.1/139.webp", "UATier4.1/140.webp", "UATier4.1/141.webp", "UATier4.1/142.webp",
            "UATier4.1/143.webp", "UATier4.1/144.webp", "UATier4.1/145.webp", "UATier4.1/146.webp", "UATier4.1/147.webp",
            "UATier4.1/148.webp", "UATier4.1/151.webp", "UATier4.1/152.webp",
            "UATier4.1/153.webp", "UATier4.1/154.webp", "UATier4.1/155.webp", "UATier4.1/156.webp", "UATier4.1/157.webp",
            "UATier4.1/158.webp", "UATier4.1/159.webp", "UATier4.1/160.webp", "UATier4.1/161.webp", "UATier4.1/162.webp",
            "UATier4.1/163.webp", "UATier4.1/165.webp", "UATier4.1/166.webp", "UATier4.1/167.webp",
            "UATier4.1/168.webp", "UATier4.1/169.webp", "UATier4.1/170.webp", "UATier4.1/172.webp",
            "UATier4.1/173.webp", "UATier4.1/174.webp", "UATier4.1/175.webp", "UATier4.1/176.webp"
        ]
    }
];
