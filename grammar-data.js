
const grammarQuestions = [
    // A1 — 20 questions
    {
        id: 1,
        level: "A1",
        topic: "To Be",
        question: "My sister ___ a doctor.",
        options: ["am", "is", "are", "be"],
        correct: 1,
        explanation: "С подлежащим she (my sister) в настоящем времени используется форма is."
    },
    {
        id: 2,
        level: "A1",
        topic: "To Be",
        question: "They ___ from Spain.",
        options: ["is", "am", "are", "be"],
        correct: 2,
        explanation: "С местоимениями we, you и they используется форма are."
    },
    {
        id: 11,
        level: "A1",
        topic: "To Be",
        question: "I ___ ready for the lesson.",
        options: ["is", "are", "am", "be"],
        correct: 2,
        explanation: "С местоимением I используется форма am."
    },
    {
        id: 12,
        level: "A1",
        topic: "To Be",
        question: "___ your brother at home?",
        options: ["Are", "Am", "Is", "Do"],
        correct: 2,
        explanation: "В вопросе с to be ставим is перед подлежащим в единственном числе: Is your brother...?"
    },
    {
        id: 13,
        level: "A1",
        topic: "Present Simple",
        question: "She ___ coffee every morning.",
        options: ["drink", "drinks", "drinking", "is drink"],
        correct: 1,
        explanation: "В Present Simple с he/she/it к глаголу обычно добавляется -s: drinks."
    },
    {
        id: 14,
        level: "A1",
        topic: "Present Simple",
        question: "We ___ English on Mondays.",
        options: ["studies", "studying", "study", "are study"],
        correct: 2,
        explanation: "С we в утвердительном Present Simple используется начальная форма глагола: study."
    },
    {
        id: 15,
        level: "A1",
        topic: "Present Simple",
        question: "My dad ___ work on Sundays.",
        options: ["don’t", "doesn’t", "isn’t", "not"],
        correct: 1,
        explanation: "Отрицание Present Simple с he/she/it строится с doesn’t + начальная форма глагола."
    },
    {
        id: 16,
        level: "A1",
        topic: "Present Simple",
        question: "___ you like this song?",
        options: ["Does", "Are", "Do", "Is"],
        correct: 2,
        explanation: "В вопросе Present Simple с you используется вспомогательный глагол do."
    },
    {
        id: 17,
        level: "A1",
        topic: "Articles",
        question: "She has ___ orange in her bag.",
        options: ["a", "an", "the", "—"],
        correct: 1,
        explanation: "Перед словом orange, которое начинается с гласного звука, нужен артикль an."
    },
    {
        id: 18,
        level: "A1",
        topic: "Articles",
        question: "He is ___ teacher.",
        options: ["an", "a", "—", "some"],
        correct: 1,
        explanation: "Перед профессией в единственном числе обычно используется неопределённый артикль a/an: a teacher."
    },
    {
        id: 19,
        level: "A1",
        topic: "Plural Nouns",
        question: "There are three ___ on the desk.",
        options: ["box", "boxs", "boxes", "boxies"],
        correct: 2,
        explanation: "Существительные, оканчивающиеся на -x, обычно образуют множественное число с -es: boxes."
    },
    {
        id: 20,
        level: "A1",
        topic: "Possessives",
        question: "This is Anna. ___ bag is blue.",
        options: ["His", "Her", "Their", "Its"],
        correct: 1,
        explanation: "Для Anna используем притяжательное местоимение her: её сумка."
    },
    {
        id: 21,
        level: "A1",
        topic: "There Is / There Are",
        question: "There ___ two windows in my room.",
        options: ["is", "are", "am", "be"],
        correct: 1,
        explanation: "С существительным во множественном числе используем there are."
    },
    {
        id: 22,
        level: "A1",
        topic: "There Is / There Are",
        question: "___ there a supermarket near here?",
        options: ["Are", "Do", "Is", "Does"],
        correct: 2,
        explanation: "Для единственного числа в вопросе используем Is there...?"
    },
    {
        id: 23,
        level: "A1",
        topic: "Can / Can’t",
        question: "My little brother ___ swim yet.",
        options: ["doesn’t can", "can’t", "isn’t can", "not can"],
        correct: 1,
        explanation: "Отрицательная форма модального глагола can — cannot или can’t."
    },
    {
        id: 24,
        level: "A1",
        topic: "Can / Can’t",
        question: "___ you help me with this bag?",
        options: ["Are", "Do", "Can", "Have"],
        correct: 2,
        explanation: "Чтобы спросить о возможности или попросить о помощи, используем Can you...?"
    },
    {
        id: 25,
        level: "A1",
        topic: "Prepositions",
        question: "The keys are ___ the table.",
        options: ["at", "on", "between", "from"],
        correct: 1,
        explanation: "On означает «на поверхности»: on the table."
    },
    {
        id: 26,
        level: "A1",
        topic: "Prepositions",
        question: "Our class starts ___ nine o’clock.",
        options: ["in", "on", "at", "to"],
        correct: 2,
        explanation: "С точным временем используем предлог at: at nine o’clock."
    },
    {
        id: 27,
        level: "A1",
        topic: "Have / Has",
        question: "My friend ___ a new laptop.",
        options: ["have", "has", "having", "is have"],
        correct: 1,
        explanation: "В Present Simple с he/she/it глагол have меняется на has."
    },
    {
        id: 28,
        level: "A1",
        topic: "Object Pronouns",
        question: "I know Lisa. I see ___ every day.",
        options: ["she", "her", "hers", "his"],
        correct: 1,
        explanation: "После глагола нужен объектный падеж местоимения: see her."
    },

    // A2 — 20 questions
    {
        id: 3,
        level: "A2",
        topic: "Past Simple",
        question: "I ___ my friend yesterday.",
        options: ["see", "saw", "have seen", "seeing"],
        correct: 1,
        explanation: "Yesterday указывает на завершённое время в прошлом, поэтому используем Past Simple: saw."
    },
    {
        id: 4,
        level: "A2",
        topic: "Comparatives",
        question: "This apartment is ___ than mine.",
        options: ["big", "more big", "bigger", "biggest"],
        correct: 2,
        explanation: "Короткие прилагательные обычно получают суффикс -er; в big удваивается согласная: bigger."
    },
    {
        id: 29,
        level: "A2",
        topic: "Past Simple",
        question: "We ___ to the cinema last Friday.",
        options: ["go", "went", "gone", "going"],
        correct: 1,
        explanation: "Для завершённого действия в прошлом используем Past Simple: went — вторая форма go."
    },
    {
        id: 30,
        level: "A2",
        topic: "Past Simple",
        question: "___ you watch the match yesterday?",
        options: ["Did", "Do", "Were", "Have"],
        correct: 0,
        explanation: "Вопрос в Past Simple строится с Did + подлежащее + начальная форма глагола."
    },
    {
        id: 31,
        level: "A2",
        topic: "Past Continuous",
        question: "At 8 p.m. I ___ dinner.",
        options: ["cook", "was cooking", "have cooked", "cooked"],
        correct: 1,
        explanation: "Past Continuous описывает процесс в конкретный момент прошлого: was cooking."
    },
    {
        id: 32,
        level: "A2",
        topic: "Past Simple vs Past Continuous",
        question: "I was walking home when it ___ to rain.",
        options: ["start", "was starting", "started", "has started"],
        correct: 2,
        explanation: "Короткое действие, прервавшее длительный процесс в прошлом, ставим в Past Simple: started."
    },
    {
        id: 33,
        level: "A2",
        topic: "Comparatives",
        question: "This task is ___ than the last one.",
        options: ["more easy", "easiest", "easier", "easy"],
        correct: 2,
        explanation: "Easy оканчивается на согласную + y: меняем y на i и добавляем -er → easier."
    },
    {
        id: 34,
        level: "A2",
        topic: "Superlatives",
        question: "It is ___ restaurant in our town.",
        options: ["better", "the best", "best", "the better"],
        correct: 1,
        explanation: "Для превосходной степени good используем the best."
    },
    {
        id: 35,
        level: "A2",
        topic: "Countable / Uncountable",
        question: "How ___ water do you drink every day?",
        options: ["many", "much", "few", "a few"],
        correct: 1,
        explanation: "Water — неисчисляемое существительное, поэтому используем how much."
    },
    {
        id: 36,
        level: "A2",
        topic: "Countable / Uncountable",
        question: "There aren’t ___ apples left.",
        options: ["much", "a little", "many", "little"],
        correct: 2,
        explanation: "Apples — исчисляемое существительное во множественном числе: many apples."
    },
    {
        id: 37,
        level: "A2",
        topic: "Some / Any",
        question: "Do you have ___ questions?",
        options: ["some", "any", "much", "a"],
        correct: 1,
        explanation: "В нейтральных вопросах обычно используется any: any questions."
    },
    {
        id: 38,
        level: "A2",
        topic: "Future: Going To",
        question: "Look at those dark clouds! It ___ rain.",
        options: ["will to", "is going to", "going", "has"],
        correct: 1,
        explanation: "Going to используем для прогноза на основе очевидных признаков."
    },
    {
        id: 39,
        level: "A2",
        topic: "Future: Will",
        question: "I think people ___ use less cash in the future.",
        options: ["are", "will", "have", "did"],
        correct: 1,
        explanation: "Will часто используется для предположений и прогнозов о будущем."
    },
    {
        id: 40,
        level: "A2",
        topic: "Present Continuous",
        question: "Listen! Someone ___ at the door.",
        options: ["knocks", "knock", "is knocking", "knocked"],
        correct: 2,
        explanation: "Listen! показывает, что действие происходит прямо сейчас: is knocking."
    },
    {
        id: 41,
        level: "A2",
        topic: "Present Simple vs Continuous",
        question: "She usually ___ from home, but today she is in the office.",
        options: ["is working", "works", "work", "worked"],
        correct: 1,
        explanation: "Usually обозначает привычное действие, поэтому здесь Present Simple: works."
    },
    {
        id: 42,
        level: "A2",
        topic: "Modal Verbs",
        question: "You ___ wear a seat belt in a car.",
        options: ["must", "might", "could", "would"],
        correct: 0,
        explanation: "Must выражает обязанность или строгое правило: пристёгиваться обязательно."
    },
    {
        id: 43,
        level: "A2",
        topic: "Modal Verbs",
        question: "You ___ bring food; we’ve already ordered pizza.",
        options: ["must", "don’t have to", "mustn’t", "can’t"],
        correct: 1,
        explanation: "Don’t have to означает отсутствие необходимости, а mustn’t — запрет."
    },
    {
        id: 44,
        level: "A2",
        topic: "Infinitive of Purpose",
        question: "She went to the shop ___ some bread.",
        options: ["buy", "buying", "to buy", "bought"],
        correct: 2,
        explanation: "Инфинитив с to может выражать цель: пошла в магазин, чтобы купить хлеб."
    },
    {
        id: 45,
        level: "A2",
        topic: "Present Perfect",
        question: "I ___ this film before.",
        options: ["see", "saw", "have seen", "am seeing"],
        correct: 2,
        explanation: "Present Perfect с before говорит о жизненном опыте без указания конкретного времени."
    },
    {
        id: 46,
        level: "A2",
        topic: "Prepositions of Time",
        question: "My birthday is ___ July.",
        options: ["at", "on", "in", "to"],
        correct: 2,
        explanation: "С месяцами используем in: in July."
    },

    // B1 — 20 questions
    {
        id: 5,
        level: "B1",
        topic: "Present Perfect",
        question: "She ___ in this company since 2021.",
        options: ["works", "worked", "has worked", "is working"],
        correct: 2,
        explanation: "Since 2021 обозначает начало периода, продолжающегося до настоящего момента; здесь нужен Present Perfect: has worked."
    },
    {
        id: 6,
        level: "B1",
        topic: "Verb Patterns",
        question: "He decided ___ a new job.",
        options: ["find", "finding", "to find", "found"],
        correct: 2,
        explanation: "После decide используется инфинитив с to: decide to do something."
    },
    {
        id: 7,
        level: "B1",
        topic: "Verb Patterns",
        question: "I enjoy ___ with different people.",
        options: ["work", "working", "to work", "worked"],
        correct: 1,
        explanation: "После enjoy используется герундий — форма глагола с -ing: enjoy working."
    },
    {
        id: 47,
        level: "B1",
        topic: "Present Perfect vs Past Simple",
        question: "I ___ that book last summer.",
        options: ["have read", "read", "am reading", "have been reading"],
        correct: 1,
        explanation: "Last summer — законченный период в прошлом, поэтому используется Past Simple. Форма read здесь пишется так же, но произносится иначе."
    },
    {
        id: 48,
        level: "B1",
        topic: "Present Perfect",
        question: "Have you finished your homework ___?",
        options: ["already", "yet", "since", "ever"],
        correct: 1,
        explanation: "Yet обычно используется в вопросах и отрицаниях, когда мы спрашиваем, произошло ли ожидаемое действие к настоящему моменту."
    },
    {
        id: 49,
        level: "B1",
        topic: "Verb Patterns",
        question: "She suggested ___ a taxi.",
        options: ["take", "to take", "taking", "took"],
        correct: 2,
        explanation: "После suggest можно использовать герундий: suggest taking a taxi."
    },
    {
        id: 50,
        level: "B1",
        topic: "Verb Patterns",
        question: "I promised ___ on time.",
        options: ["arrive", "arriving", "to arrive", "arrived"],
        correct: 2,
        explanation: "После promise используется инфинитив с to: promise to arrive."
    },
    {
        id: 51,
        level: "B1",
        topic: "First Conditional",
        question: "If it rains tomorrow, we ___ at home.",
        options: ["stay", "stayed", "will stay", "would stay"],
        correct: 2,
        explanation: "Первый тип условных: If + Present Simple, will + глагол."
    },
    {
        id: 52,
        level: "B1",
        topic: "Second Conditional",
        question: "If I had more free time, I ___ Spanish every day.",
        options: ["practice", "will practice", "would practice", "practiced"],
        correct: 2,
        explanation: "Второй тип условных описывает воображаемую ситуацию: if + Past Simple, would + глагол."
    },
    {
        id: 53,
        level: "B1",
        topic: "Relative Clauses",
        question: "That’s the woman ___ taught me to swim.",
        options: ["which", "where", "who", "whose"],
        correct: 2,
        explanation: "Who используется в определительных придаточных, когда речь идёт о человеке."
    },
    {
        id: 54,
        level: "B1",
        topic: "Relative Clauses",
        question: "This is the café ___ we first met.",
        options: ["who", "where", "whose", "which"],
        correct: 1,
        explanation: "Where указывает на место: кафе, где мы впервые встретились."
    },
    {
        id: 55,
        level: "B1",
        topic: "Passive Voice",
        question: "The emails ___ every morning.",
        options: ["send", "are sent", "are sending", "sent"],
        correct: 1,
        explanation: "Present Simple Passive: am/is/are + третья форма глагола: are sent."
    },
    {
        id: 56,
        level: "B1",
        topic: "Passive Voice",
        question: "The bridge ___ in 1998.",
        options: ["built", "was built", "has built", "is building"],
        correct: 1,
        explanation: "Past Simple Passive: was/were + третья форма глагола: was built."
    },
    {
        id: 57,
        level: "B1",
        topic: "Reported Speech",
        question: "She said that she ___ tired.",
        options: ["is", "was", "will be", "has been"],
        correct: 1,
        explanation: "При передаче слов в прошлом после said обычно происходит сдвиг времени: am/is → was."
    },
    {
        id: 58,
        level: "B1",
        topic: "Modals of Deduction",
        question: "He has been studying all night. He ___ be exhausted.",
        options: ["must", "can’t", "might not", "shouldn’t"],
        correct: 0,
        explanation: "Must be выражает уверенное предположение на основе имеющихся фактов."
    },
    {
        id: 59,
        level: "B1",
        topic: "Used To",
        question: "I ___ play chess with my grandfather when I was little.",
        options: ["use to", "used to", "am used to", "was used"],
        correct: 1,
        explanation: "Used to + глагол описывает привычку в прошлом, которой сейчас может не быть."
    },
    {
        id: 60,
        level: "B1",
        topic: "Present Perfect Continuous",
        question: "I ___ for the bus for twenty minutes, and it still hasn’t arrived.",
        options: ["wait", "have waited yesterday", "have been waiting", "was waiting yesterday"],
        correct: 2,
        explanation: "Present Perfect Continuous подчёркивает длительность процесса, начавшегося в прошлом и продолжающегося сейчас."
    },
    {
        id: 61,
        level: "B1",
        topic: "Quantifiers",
        question: "There were ___ people at the concert that we couldn’t find a seat.",
        options: ["so many", "so much", "such much", "too much"],
        correct: 0,
        explanation: "Конструкция so many + исчисляемое существительное во множественном числе + that выражает результат."
    },
    {
        id: 62,
        level: "B1",
        topic: "Gerund vs Infinitive",
        question: "Please remember ___ the door when you leave.",
        options: ["locking", "to lock", "lock", "locked"],
        correct: 1,
        explanation: "Remember to do — не забыть выполнить действие в будущем. Remember doing — помнить уже совершённое действие."
    },
    {
        id: 63,
        level: "B1",
        topic: "Linking Words",
        question: "___ he was tired, he finished the report.",
        options: ["Despite", "Although", "Because of", "In spite"],
        correct: 1,
        explanation: "Although вводит придаточное предложение с подлежащим и сказуемым: although he was tired."
    },

    // B2 — 20 questions
    {
        id: 8,
        level: "B2",
        topic: "Conditionals",
        question: "If I had known about the meeting, I ___ earlier.",
        options: ["arrive", "will arrive", "would arrive", "would have arrived"],
        correct: 3,
        explanation: "Третий тип условных: if + Past Perfect, would have + третья форма глагола. Речь о нереальном прошлом."
    },
    {
        id: 9,
        level: "B2",
        topic: "Passive Voice",
        question: "The new office ___ by the end of next year.",
        options: ["will complete", "will have been completed", "has completed", "completing"],
        correct: 1,
        explanation: "Future Perfect Passive: will have been + третья форма глагола. Акцент на завершении к будущему сроку."
    },
    {
        id: 64,
        level: "B2",
        topic: "Mixed Conditionals",
        question: "If I had accepted the job, I ___ in Berlin now.",
        options: ["will live", "would live", "would have lived", "live"],
        correct: 1,
        explanation: "Смешанный условный тип: прошлое условие влияет на настоящее следствие: If + Past Perfect, would + глагол."
    },
    {
        id: 65,
        level: "B2",
        topic: "Wish / If Only",
        question: "I wish I ___ more confident during yesterday’s interview.",
        options: ["am", "were", "had been", "would be"],
        correct: 2,
        explanation: "Wish + Past Perfect выражает сожаление о событии в прошлом."
    },
    {
        id: 66,
        level: "B2",
        topic: "Causative Have / Get",
        question: "I’m having my laptop ___ tomorrow.",
        options: ["repair", "repairing", "repaired", "to repair"],
        correct: 2,
        explanation: "Have something done означает, что работу выполняет кто-то другой: have my laptop repaired."
    },
    {
        id: 67,
        level: "B2",
        topic: "Reported Speech",
        question: "She asked me where I ___ the previous evening.",
        options: ["was", "have been", "had been", "am"],
        correct: 2,
        explanation: "В косвенном вопросе после asked прошлое время часто сдвигается в Past Perfect; сохраняется прямой порядок слов."
    },
    {
        id: 68,
        level: "B2",
        topic: "Relative Clauses",
        question: "The conference, ___ attracted hundreds of visitors, lasted three days.",
        options: ["that", "what", "which", "where"],
        correct: 2,
        explanation: "В non-defining relative clauses после запятой для предметов используется which, а не that."
    },
    {
        id: 69,
        level: "B2",
        topic: "Modal Perfect",
        question: "You ___ told me earlier; I could have helped.",
        options: ["should have", "must have", "can have", "would"],
        correct: 0,
        explanation: "Should have + третья форма глагола выражает упрёк или сожаление о том, что не было сделано."
    },
    {
        id: 70,
        level: "B2",
        topic: "Modal Perfect",
        question: "She ___ forgotten the appointment; she’s usually very organised.",
        options: ["must have", "might have", "should", "can"],
        correct: 1,
        explanation: "Might have + третья форма глагола выражает неуверенное предположение о прошлом."
    },
    {
        id: 71,
        level: "B2",
        topic: "Participle Clauses",
        question: "___ the instructions carefully, she started assembling the desk.",
        options: ["Having read", "Read", "To reading", "Have read"],
        correct: 0,
        explanation: "Having + третья форма глагола показывает, что одно действие завершилось до другого."
    },
    {
        id: 72,
        level: "B2",
        topic: "Future Perfect",
        question: "By Friday, we ___ the final version.",
        options: ["finish", "will have finished", "have finished", "will be finishing"],
        correct: 1,
        explanation: "Future Perfect показывает завершение действия к определённому моменту в будущем."
    },
    {
        id: 73,
        level: "B2",
        topic: "Future Continuous",
        question: "This time tomorrow, I ___ over the Atlantic.",
        options: ["will fly", "will be flying", "have flown", "fly"],
        correct: 1,
        explanation: "Future Continuous описывает процесс, который будет происходить в конкретный момент будущего."
    },
    {
        id: 74,
        level: "B2",
        topic: "Conditionals",
        question: "Unless you ___ now, you’ll miss the train.",
        options: ["leave", "will leave", "left", "would leave"],
        correct: 0,
        explanation: "Unless означает if not; после него для реального будущего используется Present Simple."
    },
    {
        id: 75,
        level: "B2",
        topic: "Inversion",
        question: "Rarely ___ such a convincing argument.",
        options: ["I have heard", "have I heard", "I heard", "did I heard"],
        correct: 1,
        explanation: "После ограничительного наречия rarely в начале предложения нужен обратный порядок слов: have I heard."
    },
    {
        id: 76,
        level: "B2",
        topic: "Despite / Although",
        question: "___ the heavy traffic, we arrived on time.",
        options: ["Although", "Despite", "Even though", "Whereas"],
        correct: 1,
        explanation: "После despite используется существительное или -ing форма, а не полноценное придаточное предложение."
    },
    {
        id: 77,
        level: "B2",
        topic: "Passive Reporting Structures",
        question: "The painting is believed ___ in the 18th century.",
        options: ["to create", "to have been created", "creating", "that created"],
        correct: 1,
        explanation: "Если действие произошло раньше момента сообщения, используем passive perfect infinitive: to have been created."
    },
    {
        id: 78,
        level: "B2",
        topic: "Gerund vs Infinitive",
        question: "I regret ___ you that your application was unsuccessful.",
        options: ["informing", "inform", "to inform", "informed"],
        correct: 2,
        explanation: "Regret to inform используется при сообщении неприятной новости; regret doing — сожаление о прошлом действии."
    },
    {
        id: 79,
        level: "B2",
        topic: "Determiners",
        question: "There is ___ evidence to support that claim.",
        options: ["few", "little", "a few", "many"],
        correct: 1,
        explanation: "Evidence — неисчисляемое существительное; little означает небольшое количество."
    },
    {
        id: 80,
        level: "B2",
        topic: "Emphasis",
        question: "What I really need ___ a few days off.",
        options: ["are", "is", "be", "being"],
        correct: 1,
        explanation: "В псевдорасщеплённой конструкции What I need is... фокус переносится на новую информацию."
    },
    {
        id: 81,
        level: "B2",
        topic: "Relative Clauses",
        question: "The colleague ___ advice I followed has moved abroad.",
        options: ["who", "whom", "whose", "which"],
        correct: 2,
        explanation: "Whose выражает принадлежность: colleague whose advice — коллега, чьему совету я последовала."
    },

    // C1 — 20 questions
    {
        id: 10,
        level: "C1",
        topic: "Inversion",
        question: "Not only ___ the deadline, but she also improved the design.",
        options: ["she met", "did she meet", "she did meet", "had she meet"],
        correct: 1,
        explanation: "После Not only в начале части предложения применяется инверсия: did + подлежащее + начальная форма глагола."
    },
    {
        id: 82,
        level: "C1",
        topic: "Inversion",
        question: "No sooner ___ the presentation than the projector stopped working.",
        options: ["had we started", "we had started", "did we started", "have we started"],
        correct: 0,
        explanation: "После No sooner в начале предложения используется инверсия с Past Perfect: had we started; затем than."
    },
    {
        id: 83,
        level: "C1",
        topic: "Inversion",
        question: "Under no circumstances ___ confidential files.",
        options: ["you should share", "should you share", "you share should", "do you should share"],
        correct: 1,
        explanation: "После отрицательной конструкции в начале предложения требуется инверсия: should you share."
    },
    {
        id: 84,
        level: "C1",
        topic: "Inversion",
        question: "Little ___ how much the decision would change her life.",
        options: ["she knew", "did she know", "had she knew", "she did know"],
        correct: 1,
        explanation: "Little в значении «совсем не» в начале предложения вызывает инверсию: did she know."
    },
    {
        id: 85,
        level: "C1",
        topic: "Inverted Conditionals",
        question: "___ I known the risks, I would have refused.",
        options: ["Should", "Were", "Had", "If"],
        correct: 2,
        explanation: "В формальном условном предложении третьего типа можно убрать if и поставить had перед подлежащим: Had I known..."
    },
    {
        id: 86,
        level: "C1",
        topic: "Inverted Conditionals",
        question: "___ the situation to worsen, we would reconsider our plans.",
        options: ["Had", "Should", "Were", "If"],
        correct: 2,
        explanation: "Формальная инверсия для маловероятного условия: Were + подлежащее + to + глагол."
    },
    {
        id: 87,
        level: "C1",
        topic: "Subjunctive",
        question: "The committee recommended that the proposal ___ revised.",
        options: ["is", "was", "be", "being"],
        correct: 2,
        explanation: "После recommend that в формальном английском возможен сослагательный наклонение: be без -s и без изменения времени."
    },
    {
        id: 88,
        level: "C1",
        topic: "Subjunctive",
        question: "It is essential that every applicant ___ informed.",
        options: ["is", "be", "was", "being"],
        correct: 1,
        explanation: "После It is essential that используется формальная базовая форма глагола (mandative subjunctive): be."
    },
    {
        id: 89,
        level: "C1",
        topic: "Cleft Sentences",
        question: "It was her determination ___ impressed the interviewers most.",
        options: ["what", "which", "that", "where"],
        correct: 2,
        explanation: "В выделительной конструкции It was ... that ... акцент делается на конкретном элементе."
    },
    {
        id: 90,
        level: "C1",
        topic: "Cleft Sentences",
        question: "___ surprised me most was how calmly she responded.",
        options: ["That", "What", "Which", "It"],
        correct: 1,
        explanation: "Псевдорасщеплённое предложение начинается с What + часть предложения: What surprised me most..."
    },
    {
        id: 91,
        level: "C1",
        topic: "Advanced Modals",
        question: "He ___ have seen the email; his laptop was switched off all day.",
        options: ["mustn’t", "can’t", "shouldn’t", "needn’t"],
        correct: 1,
        explanation: "Can’t have + третья форма глагола выражает уверенность, что событие в прошлом не произошло."
    },
    {
        id: 92,
        level: "C1",
        topic: "Advanced Modals",
        question: "You ___ have bought more milk; there’s plenty in the fridge.",
        options: ["mustn’t", "couldn’t", "needn’t", "wouldn’t"],
        correct: 2,
        explanation: "Needn’t have + третья форма глагола означает, что действие сделали, но необходимости в нём не было."
    },
    {
        id: 93,
        level: "C1",
        topic: "Participle Clauses",
        question: "___ all the necessary evidence, the lawyer presented her case.",
        options: ["Collecting", "Having collected", "To collect", "Been collected"],
        correct: 1,
        explanation: "Having + третья форма указывает, что сбор доказательств завершился перед следующим действием."
    },
    {
        id: 94,
        level: "C1",
        topic: "Participle Clauses",
        question: "___ by the sudden announcement, the audience remained silent.",
        options: ["Stunning", "Having stunned", "Stunned", "To stun"],
        correct: 2,
        explanation: "Past participle clause (Stunned...) имеет страдательное значение: аудитория была ошеломлена."
    },
    {
        id: 95,
        level: "C1",
        topic: "Fronting",
        question: "___ I find most worrying is the lack of transparency.",
        options: ["That", "What", "Which", "Why"],
        correct: 1,
        explanation: "Конструкция What I find... выносит оцениваемый аспект в начало предложения и усиливает акцент."
    },
    {
        id: 96,
        level: "C1",
        topic: "Ellipsis / Substitution",
        question: "I didn’t expect the plan to work, but it ___.",
        options: ["did", "was", "had", "so"],
        correct: 0,
        explanation: "В кратком ответе после Past Simple используем did вместо повторения смыслового глагола: it did (= it worked)."
    },
    {
        id: 97,
        level: "C1",
        topic: "Complex Prepositions",
        question: "___ the fact that the data was incomplete, the team published its findings.",
        options: ["Although", "Despite", "Whereas", "Even"],
        correct: 1,
        explanation: "Despite the fact that вводит уступительное значение; после despite здесь стоит именная группа the fact that..."
    },
    {
        id: 98,
        level: "C1",
        topic: "Nominalisation",
        question: "The rapid ___ of the system caused several delays.",
        options: ["expand", "expanding", "expansion", "expanded"],
        correct: 2,
        explanation: "После прилагательного rapid требуется существительное; от expand образуется expansion."
    },
    {
        id: 99,
        level: "C1",
        topic: "Advanced Relative Clauses",
        question: "The terms, ___ were agreed upon last week, remain confidential.",
        options: ["whose", "that", "which", "what"],
        correct: 2,
        explanation: "В non-defining relative clause с запятыми используется which; that здесь не подходит."
    },
    {
        id: 100,
        level: "C1",
        topic: "Hedging",
        question: "The findings appear ___ the original hypothesis.",
        options: ["support", "supporting", "to support", "supported"],
        correct: 2,
        explanation: "Appear to + инфинитив смягчает категоричность утверждения: данные, по-видимому, подтверждают гипотезу."
    }
];
