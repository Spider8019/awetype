const strings = [
    {
        type: "defense",
        data: ["The Motto of the Indian Air Force (Touch the sky with Glory) has been taken from the eleventh chapter of the Gita, the Discourse given by Lord Krishna to Arjuna on the battlefield of Kurukshetra during the Great War of Mahabharata. ",
            "A crest symbolises the source of inspiration and encouragement. The Indian Air Force has adopted various crests for the commands, Squadrons and the other establishments. The Crests in the Indian Air Force have a standard frame. ",
            "The Indian Army is the land based branch and the largest component of the Indian Armed Forces. The President of India is the Supreme Commander of the Indian Army, and its professional head is the Chief of Army Staff, who is a four star general",
            "In its harmonious proportions and its fluid incorporation of decorative elements, the Taj Mahal is distinguished as the finest example of Mughal architecture, a blend of Indian, Persian, and Islamic styles",
            "The Russian invasion of Ukraine has caused hard and brutal fighting, but the Ukrainians are making the Russians pay for every foot of territory they are taking",
            "Members of an internal review team tasked with looking into the root causes of racial disparities in the military's investigative and justice systems are conducting a series of listening sessions and visits to military installations",
            "The mission of the International Donor Coordination Cell at U.S. European Command is to provide Ukrainian service members effective military capabilities at the right moments to defend their people",
            "Secretary of Defense Lloyd J. Austin III and Army leaders honored six Medal of Honor recipients at an induction ceremony for the Pentagon's Hall of Heroes.",
            "Take a look behind the lens at the missions and accomplishments of the men and women who serve in the U.S. armed forces.",
            "The Defence Secretary functions as head of the Department of Defence and is additionally responsible for coordinating the activities of the four Departments in the Ministry.",
            "The Department of Defence deals with the Integrated Defence Staff (IDS) and three Services and various Inter Service Organisations. It is also responsible for the Defence Budget, establishment matters, defence policy, matters relating to Parliament, defence cooperation with foreign countries and co ordination of all defence related activities.",
            "The Department of Defence Research and Development is headed by a Secretary, who is the Scientific Adviser to the Raksha Mantri. Its function is to advise the Government on scientific aspects of military equipment and logistics and the formulation of research, design and development plans for equipment required by the Services.",
            "The Department of Ex Servicemen Welfare is headed by a Secretary and deals with all resettlement, welfare and pensionary matters of Ex Servicemen.",
            "While military members serve around the world, we often forget the challenges faced by their children. Military families move on average every two to three years, impacting military children through changing schools and support networks.",
            "Each year, the DOD joins national, state and local government, schools, military serving organizations, companies and private citizens in celebrating military children and the sacrifices they make.",
            "Espirit de Corps  The spirit of comradeship and brotherhood of the brave, regardless of caste, creed or religion. The motto is, One for all and all for one!",
            "Valour Fearlessness in combat and in the face of the enemy even when fighting against great odds or even when facing sure death.",
            "Non discrimination  The Indian Army does not discriminate on account of caste, creed or religion. A soldier is a soldier first and anything else later. He prays under a common roof. It is this unique character, which makes him bind in a team despite such diversity.",
            "Fairness and Honesty  The spirit of honesty and fair play. He fights for a just cause that extends even to the enemy (prisoner or wounded).",
            "Discipline and Integrity  Discipline and integrity impart the feeling of patriotism, honesty and courage under all circumstances, however strong be the provocation otherwise.",
            "Fidelity, Honour and Courage He is a man on whose shoulders lies the honour and integrity of his nation. He knows that he is the last line of defence and he cannot fail the Nation.",
            "Death to Dishonour  A close bond amongst soldiers forces them to choose death to dishonour. The concept of 'IZZAT' (HONOUR) in the clan / unit enables them to shun the fear of death; to be called a coward in the peer group is worse than death.",
            "Forthrightness  A soldier has to be forthright, for on his word the men he leads are going to lay down their lives without questioning why.",
            "These values stoke the attitude of Service before Self in every soldier. The famous credo of Chetwode Hall is deeply imbibed in the men in Olive Green. It is the spirit of this credo, imbibed in every officer that binds him with his men in an unshakeable bond of camaraderie.",
            "The Indian Army has time and again lived up to its tradition of valour, heroism, sacrifice and fortitude. It stands vigil along the border, watchful, prepared for any sacrifice so that the people of the country may live in peace and with honour. The Indian Army is that and much more."
        ]
    },
    {
        type: "religion",
        data: ["Hinduism is the world's oldest religion, according to many scholars, with roots and customs dating back more than 4,000 years. ",
            "Religion has played a highly important role in the lives of human beings. Judaism, Christianity, Islam, Hinduism and Buddhism are five of the great religions of the world.",
            "The word Hindu is an exonym, and while Hinduism has been called the oldest religion in the world, many practitioners refer to their religion as Sanātana Dharma"
        ]
    },
    {
        type: "gita",
        data: ["Unattached everywhere and not delighted Equanimous in good or bad happy or dejected Neither welcomes nor hates evil designs Is a person of steady wisdom, who will reign",
            "Unperturbed in misery and in pleasure Free from all attachment and desire Devoid of fear, anger, and rage Makes a person of steady wisdom, making him a Sage",
            "Abandoning all desires of mind and heart himself Achieving satisfaction in the Self, by the Self O, Partha that man is full of delight And is a man of steady wisdom and Light",
            "In the Gita, a Pandava brother Arjuna loses his will to fight and has a discussion with his charioteer Krishna , about duty, action, and renunciation. The Gita has three major themes: knowledge, action, and love.",
            "The Deoband (seminary) and others also said that Gita is not a religious book. It is knowledge, science; it is curiosity, it is solution, Gita is life, Sharma said. Gita contains the dialogue between Lord Krishna and Arjuna.",
            "The Bhagavad Gita is entirely representational and highly symbolic. There is no real battlefield or fight to be won; the entire text is a representation of the battle that goes on in our minds.",
            "Sanskrit was the main language and widely spoken from Satyug untill Dwapar yug. So, Lord Sri Rama and Lord Sri Krishna used to speak Sanskrit in their respective areas. All the granths viz Ramayana, Mahabharata, Bhagwad Geeta, Vedas, Puraans and Upanishads are written in Sanskrit language.",
            "Krishna Dvaipayana, better known as Vyasa or Vedavyasa, is a central and revered sage portrayed in most Hindu traditions. He is traditionally regarded as the author of the Mahabharata. He is also regarded by many Hindus as the compiler of a number of significant scriptures.",
            "The essence of Bhagavad Gita can be well understood by knowing its five main topics Isvara (God), Jiva (living entity), Prakriti (Material Nature), Kala (time) and Karma Action",
            "Believed to be the single most influential philosophical text shaping spiritual thought and life, the Bhagavad Gita is said to be the second largest selling book in the world and the largest in India. It is an epic scripture that has the answers to all our problems.",
            "What is the Veda? The Aryans called their most sacred text Veda, meaning the 'knowledge'. It was believed to have arisen from the infallible 'hearing' (śruti), by ancient seers, of the sacred deposit of words whose recitation and contemplation bring stability and wellbeing to both the natural and human worlds.",
            "The Bhagavad Gita is a synthesis and compendium of Hindu spiritual ideas on Dharma, Bhakti, Karma, Moksha, Raja Yoga etc. Alongside Ramayana, the Bhagavad Gits is an important Hindu Scripture and is counted amongst the classics of Indian spirituality.",
            "Over a billion people hold Bhagavad Gita in highest esteem, which encompasses the entire Vedic thought. Oldest manuscript of Gita, circa 1492, is with British in Bodleian Library, Oxford University.",
            "Srimad Bhagavad Gita teaches you how to handle that knowledge. It not only inculcates in you, the right and unbiased perspective of observing and knowing your own self as well as the entire creation but also teaches you how to handle that knowledge acquired through such observance",
            "While Indians aspire to bag a foreign degree, some Harvard University students, on the other hand, are studying the Bhagavad Gita and Ramayana. While Indians aspire to bag a foreign degree, some Harvard University students, on the other hand, are studying the Bhagavad Gita and Ramayana.",
            "There is sufficient evidence available now to suggest that Krishna was indeed a historical figure, who lived about 5000 years ago. This evidence is not just literary but also archaeological, geographical as well as astronomical, he claims.",
            "In Hindu scriptures, there are 18 puranas each dedicated to a particular name for God and each establishing that name as supreme. The Shiva purana establishes Lord Shiva as the greatest. The Vishnu purana establishes Lord Vishnu as the greatest. The Shrimad Bhagvad Purana establishes Lord Krishna as the greatest",
            "The figure of Lord Krishna is depicted as having blue or blue black skin. He holds a flute (bansuri) and sometimes accompanied by a cow or cowherd. Krishna is also known by many other names, such as Govinda, Madhusudhana, Vasudeva and Mukunda",
            "Jara the hunter was hunting the deer, while the lord Krishna was resting in the forest. That hunter misunderstood the moving foot of Krishna as a hidden deer and shot a lethal arrow that pierced into Krishna's feet",
            "The best and most effective way to read Bhagavad Gita is as a devotee of Lord Krishna, under the guidance of a pure devotee of Lord Krishna who represents one of the four Vaisnava Sampradayas. Without this approach the main point of Bhagavad Gita will not be clear.",
            "Lord Krishna says: I have been arriving and will arrive every time the evil gets an upper hand over the fair and good. I shall appear to protect the noble hearted from those who are evil. I shall come back in every age and era to re establish the rule of truth",
            "To love without condition, to talk without intention, to give without reason, care without expectation, that's the spirit of true love",
            "Vishnu. Vaishnavism is the sect within Hinduism that worships Vishnu. He is considered as the Para Brahman the Preserver god of the Trimurti (the Hindu Trinity), and his many incarnations. Vaishnavites regard him to be eternal and the strongest and supreme God."
        ]
    }
]

export default strings;