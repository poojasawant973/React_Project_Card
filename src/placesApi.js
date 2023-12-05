const placesApi =
    [
        {
            id: 1,
            place: " Taj Mahal",
            state: "Uttar Pradesh",
            image: "images/tajmahal.webp",
            fact: "Intresting fact: A shopping complex and hotel inspired by the Taj Mahal is being constructed in Dubai and is estimated to be four times larger in size.",
            fee: "Entry fee: Indian-INR 40",
            build: "Build By: Shah Jahan",
            bin: "Build In: 1648",
        },
        {
            id: 2,
            place: "Agra Fort",
            state: "Uttar Pradesh",
            image: "images/agrafort.jpg",
            fact: "Interesting fact: This fort was included in one of Sherlock Holmes’ cases: the “Sign of the Four” and was also the location for the movie Jodha Akbar.",
            fee: "Entry fee: Indians - INR 40",
            build: "Built By: Akbar and Shah Jahan",
            bin: "Built In: 1573"
        },
        {
            id: 3,
            place: "Red Fort",
            state: "Uttar Pradesh",
            image: "images/Redfort.jpg",
            fact: "Interesting fact: The Red Fort was actually white as it was made of limestone. The British painted it red when the limestone started chipping off.",
            fee: "Entry fee: Indian - INR 10",
            build: "Built By: Shah Jahan",
            bin: "Built In: 1639"
        },
        {
            id: 4,
            place: "Qutub Minar",
            state: "Delhi",
            image: "images/qutubminar.jpg",
            fact: "Interesting fact: The Qutub Minar complex has an iron pillar that has not rusted even after 2000 years.",
            fee: "Entry fee: Indian - INR 10",
            build: "Built By: Qutub-ub-Din Aibak",
            bin: "Built In: 1193",
        },
        {
            id: 5,
            place: "Humayun's Tomb",
            state: "Delhi",
            image: "images/humayuni.jpg",
            fact: "Interesting fact: Humayun's Tomb was one of the main inspirations for the Taj Mahal.",
            fee: "Entry fee: Indian - INR 40",
            build: "Built By: Mirak Mirza Ghiyath",
            bin: "Built In: 1572",
        },
        {
            id: 6,
            place: "Fatehpur Sikri",
            state: "Uttar Pradesh",
            image: "images/fatehpur.jpg",
            fact: "Interesting fact: Many barren women would come to the tomb of the Sufi saint Salim Chisti to pray for children.",
            fee: "Entry fee: Indians - INR 40",
            build: "Built By: Akbar",
            bin: "Built In: 1569",
        },
        {
            id: 7,
            place: "Hawa Mahal",
            state: "Rajasthan",
            image: "images/Hawamahal.webp",
            fact: "Interesting fact: It was believed that this building was created so that the royal ladies could look outside as they were constantly under 'purdah'.",
            fee: "Entry fee: Indian - INR 10",
            build: "Built By: Pratap Singh",
            bin: "Built In: 1799",
        },
        {
            id: 8,
            place: "Konark Temples",
            state: "Odisha",
            image: "images/Konark.webp",
            fact: "Interesting fact: The 12 wheels at the base of the temple are sundials that accurately denote time.",
            fee: "Entry fee: Indian - INR 10",
            build: "Built By: Chandela dynasty",
            bin: "Built In: Between 950 AD and 1050 AD",
        },
        {
            id: 9,
            place: "Fatehpur Sikri",
            state: "Uttar Pradesh",
            image: "images/fatehpur.jpg",
            fact: "Interesting fact: Many barren women would come to the tomb of the Sufi saint Salim Chisti to pray for children.",
            fee: "Entry fee: Indians - INR 40",
            build: "Built By: Raja Narasinghs Deva I",
            bin: "Built In: 13th century BCE",
        },
        {
            id: 10,
            place: "Mahabodhi Temple",
            state: "Bihar",
            image: "images/Mahabodhi.webp",
            fact: "Interesting fact: The Bodhimanda is the spot under the Bodhi tree where the Buddha attained enlightenment. It is believed that this spot will be the last to disappear when the world ends and the first to reappear when the world is recreated.",
            fee: "Entry fee: None",
            build: "Built By: Pratap Singh",
            bin: "Built In: 1799",
        },
        {
            id: 11,
            place: "Khajuraho Temples",
            state: "Madhya Pradesh",
            image: "images/Khajuraho.webp",
            fact: "Interesting fact: The city got its name as it was adorned with date palms, and 'Khajura' means date palms in Hindi. It was also often called Khajjurpura in ancient times.",
            fee: "Entry fee: Indian - INR 10",
            build: "Built By: Emperor Ashoka",
            bin: "Built In: 3rd century BCE",
        },
        {
            id: 12,
            place: "Rani ki Vav",
            state: "Gujarat",
            image: "images/Ranikivav.webp",
            fact: "Interesting fact: The central level has the theme “Dasavatars” which means 10 incarnations of Vishnu, and that when you approach the water level there will be a sculpture of Vishnu reclining on a thousand snake heads.",
            fee: "Entry fee: Indians - INR 5",
            build: "Built By: Udayamati",
            bin: "Built In: 11th century AD",
        },
        {
            id: 13,
            place: "Victoria Memorial",
            state: "West Bengal",
            image: "images/Victoriamemorial.webp",
            fact: "Interesting fact: There are two sets of mysterious inscriptions on the monument. One is “VRI” which means Victoria Regina Imperatrix and the other is “Dieu Et Mon Droit”. The first means Victoria Queen and Empress and the latter means “God and my right”.",
            fee: "Entry fee: Indian - INR 20",
            build: "Built By: Lord Curzon",
            bin: "Built In: 1921",
        },
        {
            id: 14,
            place: "Jallianwala Bagh",
            state: "Punjab",
            image: "images/jallianwala-Bagh.webp",
            fact: "Interesting fact: Infamous Jallianwala Bagh Massacre took place here",
            fee: "Entry fee: Free",
            build: "Built By: Benjamin Polk (memorial)",
            bin: "Built In: 1961 (memorial)",
        },
        {
            id: 15,
            place: "Gwalior Fort",
            state: "Madhya Pradesh",
            image: "images/gwaliar.jpg",
            fact: "Interesting fact: Second oldest reference to number zero is carved here; it was constructed in the 6th century.",
            build: "Built By: Man Singh Tomar",
            bin: "Built In: 3rd century BCE (later developed into the fort it is today)",
        },
        {
            id: 16,
            place: "Golden Temple",
            state: "Punjab",
            image: "images/Golden-Temple.webp",
            fact: "Interesting fact: Each day, over a hundred thousand people partake the Langar here",
            build: "Built By: Guru Ram Das",
            bin: "Built In: 1599",
        },
        {
            id: 17,
            place: "India Gate",
            state: "Delhi",
            image: "images/India-Gate.webp",
            fact: "Interesting fact: Dedicated to nearly 1 lakh soldiers who perished in two wars, namely WW I and Third Anglo-Afghan War. It is the spot where Amar Jawan Jyoti – the eternal flame- continues to burn.",
            fee: "Entry fee: Free",
            build: "Built By: Amar Jawan Jyoti, Children’s Park",
            bin: "Built In: 1921",
        },
        {
            id: 19,
            place: "Fatehpur Sikri",
            state: "Uttar Pradesh",
            image: "images/fatehpur.jpg",
            fact: "Interesting fact: Many barren women would come to the tomb of the Sufi saint Salim Chisti to pray for children.",
            fee: "Entry fee: Indians - INR 40",
            build: "Built By: Akbar",
            bin: "Built In: 1569",
        },
        {
            id: 20,
            place: "Mehrangarh Fort",
            state: "Rajasthan",
            image: "images/Mehrangarh-Fort.webp",
            fee: "Indian Citizens: INR 70 (without an audio guide); Others: INR 700 (With Audio)",
            fact: "Interesting fact: It is situated at an elevation of 410 m",
            build: "Built By: Rao Jodha",
            bin: "Built In: 1459",
        },
        {
            id: 21,
            place: "Amer Fort",
            state: "Rajasthan",
            image: "images/amerfort.jpg",
            fact: "Interesting fact: King Man Singh I was one of the most decorated generals of King Akbar",
            fee: "Entry fee: Indian Adults INR 25, Indian Students INR 10, Foreigners INR 200",
            build: "Built By: Raja Man Singh I",
            bin: "Built In: 1592",
        },
        {
            id: 22,
            place: "Kumbhalgarh Fort",
            state: "Rajasthan",
            image: "images/kubh.jpg",
            fact: "Interesting fact: The walls of Kumbhalgarh are the second longest in the world after the Great Wall of China",
            fee: "Entry fee: Rs 15 for nationals and SAARC tourists, Rs 200 for the rest",
            build: "Built By: Rana Kumbha",
            bin: "Built In: 1458",
        },
        {
            id: 23,
            place: "Lakshmi Vilas Palace",
            state: "Gujarat",
            image: "images/Lakshmi-Vilas-Palace.webp",
            fact: "Interesting fact: the Lakshmi Vilas is four times the size of Buckingham Palace, and is said to be largest private residence to be built at that time.",
            build: "Built By: Maharaja Sayajirao Gaikwad III",
            bin: "Built In: 1890",
        },
        {
            id: 24,
            place: "Khajuraho Temples",
            state: "Madhya Pradesh",
            image: "images/Khajuraho.webp",
            fact: "Interesting fact: The city got its name as it was adorned with date palms, and 'Khajura' means date palms in Hindi. It was also often called Khajjurpura in ancient times.",
            fee: "Entry fee: Indian - INR 10",
            build: "Built By: Chandela dynasty",
            bin: "Built In: Between 950 AD and 1050 AD",
        },
        {
            id: 25,
            place: "Gateway of India",
            state: "Maharashtra",
            image: "images/gatewayindia.jpg",
            fact: "Interesting fact: The last of the British ships set sail for England from the Gateway of India in the 20th century.",
            fee: "Entry Free: Free",
            build: "Built By: George Wittet",
            bin: "Built In: 1913",
        },
        {
            id: 26,
            place: "Ajanta & Ellora Caves",
            state: "Maharashtra",
            image: "images/ajintha.jpg",
            fact: "Interesting fact: It is believed that the Buddhist monks were not allowed to go out during the monsoons and would sit and carve sculptures in the Ajanta caves.",
            fee: "Entry fee: Indian - INR 10",
            build: "Built By: Satavahanas, Vakataka",
            bin: "Built In: 200 BC to 100 AD, 5th century AD",
        },
        {
            id: 27,
            place: "Charminar",
            state: "Telangana",
            image: "images/charminar.jpg",
            fee: "Entry Fee: Indians - INR 5",
            fact: "Interesting fact: There is a cat’s head in one of the arches in order to ward off rats that once almost destroyed Hyderabad.",
            build: "Built By: Muhammad Quli Qutb Shah",
            bin: "Built In: 1591",
        },
        {
            id: 28,
            place: "Varanasi Ghats",
            state: "Uttar Pradesh",
            image: "images/VaranasiGhat.jpg",
            fact: "Interesting fact: Varanasi, one of the oldest continuously inhabited cities in the world, is known for its numerous ghats along the Ganges River. These ghats are used for bathing, spiritual rituals, and cremations.",
            fee: "No entry fee (open to the public)",
            build: "Varanasi's ghats have been an integral part of the city for centuries.",
            bin: "Varanasi is one of the oldest cities in the world, with a history dating back thousands of years."
        },
        {
            id: 29,
            place: "Allahabad Fort",
            state: "Uttar Pradesh",
            image: "images/AllahabadFort.jpg",
            fact: "Interesting fact: The Allahabad Fort was built by the Mughal Emperor Akbar in the late 16th century. It is located at the confluence of the Ganges and Yamuna rivers and also houses the Akshaya Vat, a sacred banyan tree.",
            fee: "Entry fee: Indians - INR 35, Foreigners - INR 500",
            build: "Built By: Emperor Akbar",
            bin: "Built In: Late 16th century AD",
        },
        {
            id: 30,
            place: "Jaisalmer Fort",
            state: "Rajasthan",
            image: "images/JaisalmerFort.jpg",
            fact: "Interesting fact: Jaisalmer Fort is often called the 'Golden Fort' due to its distinctive yellow sandstone construction. It's one of the largest fully preserved fortified cities in the world, and people still live within its walls.",
            fee: "Entry fee: Indians - INR 50, Foreigners - INR 250",
            build: "Built By: Rawal Jaisal",
            bin: "Built In: 12th century"
        },
        {
            id: 31,
            place: "City Palace, Udaipur",
            state: "Rajasthan",
            image: "images/cityp.jpg",
            fact: "Interesting fact: The City Palace in Udaipur is a stunning complex of palaces, courtyards, and gardens. It offers a beautiful view of Lake Pichola and is a fine example of Mewar architecture.The City Palace of Udaipur is a huge complex of palaces. It was started by Maharana Udai Singh II in 1553. Several other palaces were built by several kings inside the City Palace area. Therefore, the City Palace is said to have been built over a long period.",
            fee: "Entry fee: Indians - INR 30, Foreigners - INR 330",
            build: "Built By: Maharana Udai Singh II",
            bin: "Built In: 16th century"
        },
        {
            id: 32,
            place: "Chittorgarh Fort",
            state: "Rajasthan",
            image: "images/ChittorgarhFort.jpg",
            fact: "Interesting fact: Chittorgarh Fort is the largest fort in India and has a history of sieges, battles, and heroic sacrifices. It is known for its massive fortifications, towers, and various palaces and temples within the complex.",
            fee: "Entry fee: Indians - INR 50, Foreigners - INR 200",
            build: "Built By: Various rulers, including Bappa Rawal",
            bin: "Built In: 7th century"
        },
        {
            id: 33,
            place: "Lotus Temple, Delhi",
            state: "Delhi",
            image: "images/LotusTempleDelhi.jpg",
            fact: "Interesting fact: The Lotus Temple is known for its distinctive lotus flower-inspired architecture and serves as a Bahá'í House of Worship. It's a place of meditation and prayer for people of all religions.",
            fee: "No entry fee (open to the public)",
            build: "Designed By: Fariborz Sahba",
            bin: "Built In: 1986"
        },
        {
            id: 34,
            place: "Jama Masjid, Delhi",
            state: "Delhi",
            image: "images/JamaMasjid.jpg",
            fact: "Interesting fact: Jama Masjid is one of the largest mosques in India and can accommodate thousands of worshippers. It's known for its grand Mughal architecture and stunning views from the minarets.",
            fee: "No entry fee (small fee for using cameras)",
            build: "Built By: Emperor Shah Jahan",
            bin: "Built In: 17th century"
        },
        {

            id: 35,
            place: "Mysore Palace, Karnataka",
            state: "Karnataka",
            image: "images/Mysore.jpg",
            fact: "Interesting fact: Mysore Palace is a stunning example of Indo-Saracenic architecture and is the official residence of the Wadiyar dynasty. It is illuminated with thousands of lightbulbs during the Dasara festival.",
            fee: "Entry fee: Indian citizens - ₹50, Foreign tourists - ₹200 (as of my last knowledge update in 2022)",
            build: "Built By: Maharaja Krishnaraja Wadiyar IV",
            bin: "Built In: 1912",

        },
        {
            id: 36,
            place: "Howrah Bridge, Kolkata",
            state: "West Bengal",
            image: "images/HowrahBridge.jpg",
            fact: "Interesting fact: The Howrah Bridge is one of the busiest cantilever bridges in the world, connecting Kolkata with Howrah. It's an iconic symbol of Kolkata and an engineering marvel.",
            fee: "No entry fee",
            build: "Designed By: Rendel, Palmer & Tritton",
            bin: "Built In: 1943"
        },
        {
            id: 37,
            place: "Sundarbans, West Bengal",
            state: "West Bengal",
            image: "images/sundarban.jpg",
            fact: "Interesting fact: The Sundarbans is the largest mangrove forest in the world and is home to the Bengal tiger. It's a UNESCO World Heritage Site and a unique natural wonder of West Bengal.",
            fee: "Entry fee varies for different parts of the Sundarbans",
            build: "(Natural wonder)",
            bin: "(Natural wonder)"
        },
        {
            id: 38,
            place: "Marble Palace, Kolkata",
            state: "West Bengal",
            image: "images/marblepalace.jpg",
            fact: "Interesting fact: The Marble Palace is known for its neoclassical architecture, marble walls, and a remarkable art collection. It's one of the best-preserved 19th-century palaces in Kolkata.",
            fee: "Entry by appointment only",
            build: "Built By: Raja Rajendra Mullick",
            bin: "Built In: 19th century"
        },
        {
            id: 39,
            place: "Cooch Behar Palace",
            state: "West Bengal",
            image: "images/CoachBeharPalace.webp",
            fact: "Interesting fact: The Cooch Behar Palace is a magnificent example of classical European architecture with Indian influences. It was the royal residence of the Koch dynasty rulers.",
            fee: "Entry fee: Indians - INR 25, Foreigners - INR 100",
            build: "Built By: Maharaja Nripendra Narayan",
            bin: "Built In: Late 19th century"
        },
        {
            id: 40,
            place: "Vikramshila University Ruins",
            state: "Bihar",
            image: "images/Vikramshila.jpg",
            fact: "Interesting fact: Vikramshila University was an ancient center of learning in India, known for its contribution to Buddhism and other fields of knowledge. The ruins are a reminder of its past glory.",
            fee: "Entry fee: Indians - INR 5, Foreigners - INR 100",
            build: "Built By: King Dharmapala of Pala Dynasty",
            bin: "Built In: 8th century CE"
        },
        {
            id: 41,
            place: "Patna Museum",
            state: "Bihar",
            image: "images/PatnaMuseum.webp",
            fact: "Interesting fact: Patna Museum houses a rich collection of art and historical artifacts, including sculptures, paintings, and archaeological finds. It's a great place to explore Bihar's cultural heritage.",
            fee: "Entry fee: Indians - INR 15, Foreigners - INR 250",
            build: "Established By: Sir Edward Gait",
            bin: "Established In: 1917"
        },
        {
            id: 42,
            place: "Nalanda Archaeological Museum",
            state: "Bihar",
            image: "images/nalanda.webp",
            fact: "Interesting fact: The Nalanda Archaeological Museum displays artifacts excavated from the Nalanda University ruins, offering insights into the history and culture of the region.",
            fee: "Entry fee: Indians - INR 5, Foreigners - INR 100",
            build: "Established By: Archaeological Survey of India",
            bin: "Established In: 1917"
        },
        {
            id: 43,
            place: "Kesaria Stupa",
            state: "Bihar",
            image: "images/kesariya.jpg",
            fact: "Interesting fact: Kesaria Stupa is believed to be one of the tallest stupas in the world, resembling a pyramid. It's an important Buddhist monument in Bihar.",
            fee: "Entry fee: Indians - INR 10, Foreigners - INR 200",
            build: "Attributed To: Emperor Ashoka",
            bin: "Built In: 3rd century BCE"
        },
        {
            id: 44,
            place: "Golconda Fort",
            state: "Telangana",
            image: "images/golkonda.jpg",
            fact: "Interesting fact: Golconda Fort is known for its acoustic design, with claps at the entrance heard at the highest point. It was a key center for diamond trade in the past.",
            fee: "Entry fee: Indians - INR 15, Foreigners - INR 200",
            build: "Built By: Various rulers, including Qutb Shahi dynasty",
            bin: "Built In: 13th century"
        },
        {
            id: 45,
            place: "Qutb Shahi Tombs",
            state: "Telangana",
            image: "images/qutubminar.jpg",
            fact: "Interesting fact: The Qutb Shahi Tombs are a group of tombs and mosques showcasing Persian and Indian architectural styles. They are the final resting places of the Qutb Shahi dynasty rulers.",
            fee: "Entry fee: Indians - INR 10, Foreigners - INR 100",
            build: "Built By: Various Qutb Shahi rulers",
            bin: "Built In: 16th-17th centuries"
        },
        {
            id: 46,
            place: "Warangal Fort",
            state: "Telangana",
            image: "images/WarangalFort.webp",
            fact: "Interesting fact: Warangal Fort was the capital of the Kakatiya dynasty and features impressive gateways, temples, and a granite stone gate, known as the 'Kakatiya Thoranam.'",
            fee: "Entry fee: Indians - INR 15, Foreigners - INR 200",
            build: "Built By: Kakatiya Dynasty",
            bin: "Built In: 13th century"
        },
        {
            id: 47,
            place: "Ramappa Temple",
            state: "Telangana",
            image: "images/RamappaTemple.webp",
            fact: "Interesting fact: The Ramappa Temple is renowned for its intricate sculptures and floating bricks technique. It's a UNESCO World Heritage Site dedicated to Lord Shiva.",
            fee: "Entry fee: Indians - INR 15, Foreigners - INR 200",
            build: "Built By: Recherla Rudra",
            bin: "Built In: 13th century",
        },
        {
            id: 48,
            place: "Ratnagiri Buddhist Excavation, Jajpur",
            state: "Odisha",
            image: "images/ratnagiri.jpg",
            fact: "Interesting fact: Ratnagiri is a Buddhist archaeological site with monasteries, stupas, and sculptures. It was an important center for Buddhist learning and is associated with the Mahayana tradition.",
            fee: "Entry fee: Indians - INR 5, Foreigners - INR 100",
            build: "Built By: Various Buddhist monastic establishments",
            bin: "Built In: 5th to 13th centuries"
        },






















































    ];

export default placesApi;
