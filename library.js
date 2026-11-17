(() => {
    "use strict";
/* Library database */

const texts = [
    {
        id: 1,
        title: "The Power of Habits",
        level: "A2",
        topic: "Lifestyle",
        content: `Small habits can make a big difference in our lives.

Some people start their day with exercise, while others prefer reading or taking a short walk.

Building a new habit is not always easy. At first, we may forget about it or feel too tired. However, small actions can become part of our daily routine.

The most important thing is to be patient and keep trying.`
    },
    {
        id: 2,
        title: "A Different Career",
        level: "B1",
        topic: "Work",
        content: `When Daniel finished school, he didn't know what career to choose.

He started working in a small coffee shop. At first, he enjoyed making coffee and talking to customers.

However, after two years, he realised that he wanted to try something new.

He decided to study graphic design while continuing to work part-time.

Changing careers was difficult, but Daniel believed that taking risks was sometimes necessary for personal growth.`
    },
    {
        id: 3,
        title: "The Future of Communication",
        level: "B2",
        topic: "Technology",
        content: `Technology has completely transformed the way we communicate.

While digital platforms allow us to connect with people around the world, some researchers have raised concerns about the quality of these interactions.

Online communication is convenient, but it can sometimes lack the emotional depth of face-to-face conversations.

The challenge is not to reject technology, but to develop healthier ways of using it.`
    },

    // A1 — BEGINNER

    {
        id: 4,
        title: "A Morning at the Café",
        level: "A1",
        topic: "Everyday Life",
        content: `Emma works in a small café near the city centre. She starts work at eight o'clock every morning.

The café is not very big, but it is popular. People come here to drink coffee, eat breakfast and talk to their friends.

Emma likes her job because she meets different people every day. Her favourite customers are two old women. They always order tea and chocolate cake.

At three o'clock, Emma finishes work. She goes home, makes dinner and watches a film.

She is often tired in the evening, but she is happy with her job.`
    },
    {
        id: 5,
        title: "My New Apartment",
        level: "A1",
        topic: "Home",
        content: `My name is Leo, and I live in a new apartment. It is small, but I really like it.

There are three rooms: a bedroom, a living room and a kitchen. There is also a bathroom.

My bedroom has a big window. My bed is next to the window, and my desk is opposite the bed.

In the living room, there is a comfortable sofa and a small television. I like reading books on the sofa.

The kitchen is my favourite place. I cook breakfast there every morning.

My apartment is not perfect, but it feels like home.`
    },
    {
        id: 6,
        title: "A Weekend by the Sea",
        level: "A1",
        topic: "Travel",
        content: `Today is Saturday. Mia and her family are at the seaside.

The weather is warm and sunny. The sky is blue, and the water is beautiful.

Mia's brother is swimming in the sea. Her parents are sitting on the beach and reading books.

Mia is walking near the water. She is taking pictures with her phone.

At lunchtime, the family goes to a small restaurant. They eat fish, rice and vegetables.

In the evening, they watch the sunset together.

Mia loves weekends by the sea because she can relax and spend time with her family.`
    },

    // A2 — ELEMENTARY

    {
        id: 7,
        title: "The Wrong Train",
        level: "A2",
        topic: "Travel",
        content: `Last Friday, Sophie decided to visit her friend in another city. She bought a train ticket and arrived at the station early.

There were many people at the station, and Sophie was looking at her phone when the train arrived.

She quickly got on and found a comfortable seat near the window. After twenty minutes, she noticed something strange.

The train was going in the wrong direction!

Sophie asked another passenger for help. The passenger explained that she had taken the wrong train.

At the next station, Sophie got off and bought another ticket.

She arrived two hours late, but her friend wasn't angry. They laughed about the mistake and went out for dinner.

Now Sophie always checks the train number before getting on.`
    },
    {
        id: 8,
        title: "A Week Without My Phone",
        level: "A2",
        topic: "Technology",
        content: `Last month, Oliver decided to spend seven days without his smartphone.

On the first day, he felt uncomfortable. He wanted to check his messages every few minutes, but his phone was in a drawer.

Instead of looking at social media, Oliver started reading a book. He also went for long walks and cooked new dishes.

The most difficult part was meeting his friends. Without his phone, he had to plan everything in advance.

After a few days, Oliver noticed that he was sleeping better and spending more time outdoors.

When the week ended, he started using his phone again.

However, he decided not to use it during meals or before going to bed.

Oliver doesn't think smartphones are bad. He just wants to use his time differently.`
    },
    {
        id: 9,
        title: "The Little Bookshop",
        level: "A2",
        topic: "Culture",
        content: `There is a small bookshop on a quiet street in London. It belongs to a woman called Rose.

Rose opened the shop fifteen years ago. At first, business was difficult because many people preferred buying books online.

However, Rose had an idea. She started organising reading evenings and small meetings with local writers.

Soon, the bookshop became a popular place in the neighbourhood.

People came not only to buy books but also to meet friends and discover new stories.

Today, the shop has a little café, comfortable chairs and a friendly cat called Shakespeare.

Rose believes that a bookshop can be more than a place to buy something. It can be a place where people feel welcome.`
    },

    // B1 — INTERMEDIATE

    {
        id: 10,
        title: "The Job I Never Expected",
        level: "B1",
        topic: "Work & Career",
        content: `When Olivia graduated from university, she imagined herself working in a modern office in the centre of a large city.

However, finding a job turned out to be more difficult than she had expected. After several unsuccessful interviews, she accepted a temporary position at a local museum.

At first, Olivia thought the job would be boring. Her responsibilities included answering visitors' questions, selling tickets and helping to organise exhibitions.

But gradually, she discovered that she enjoyed working with people and learning about history.

One day, the museum director asked her to help create an exhibition about fashion in the twentieth century.

Olivia spent weeks researching designers, choosing photographs and writing descriptions.

The exhibition was a success, and the museum offered her a permanent position.

Today, Olivia works as an exhibition coordinator. Although her career is completely different from what she originally planned, she has never regretted accepting that temporary job.

She believes that unexpected opportunities can sometimes lead us in the right direction.`
    },
    {
        id: 11,
        title: "Why Do We Love Nostalgia?",
        level: "B1",
        topic: "Psychology",
        content: `Have you ever heard an old song and suddenly remembered a particular moment from your childhood?

This feeling is called nostalgia. It is a mixture of happiness and sadness that we experience when thinking about the past.

People often feel nostalgic when they look at old photographs, watch films from their childhood or visit places they haven't seen for years.

Interestingly, nostalgia is not always a negative emotion.

Researchers have found that remembering positive experiences can improve our mood and help us feel connected to other people.

However, nostalgia can also make us believe that life was better in the past, even when that isn't entirely true.

Social media has made nostalgia especially popular. Old fashion trends, video games and music regularly become fashionable again.

Perhaps we enjoy these things because they remind us of a time when life seemed simpler.

The important thing is to appreciate our memories without forgetting to enjoy the present.`
    },
    {
        id: 12,
        title: "A City That Never Sleeps",
        level: "B1",
        topic: "Cities & Culture",
        content: `New York is famous for its tall buildings, busy streets and incredible cultural diversity.

Every year, millions of visitors come to the city to explore its museums, restaurants and neighbourhoods.

However, living in New York is quite different from visiting it as a tourist.

For many residents, everyday life involves long journeys to work, expensive apartments and crowded public transport.

Despite these challenges, people continue to move to New York because of the opportunities it offers.

The city attracts artists, entrepreneurs, students and professionals from all over the world.

One of its most interesting features is the variety of cultures. In some neighbourhoods, you can hear several different languages while walking down a single street.

New Yorkers often describe their city as exhausting but exciting.

It may not be the easiest place to live, but for those who enjoy energy, creativity and constant change, it can feel like the centre of the world.`
    },

    // B2 — UPPER INTERMEDIATE

    {
        id: 13,
        title: "The Hidden Cost of Convenience",
        level: "B2",
        topic: "Economics & Society",
        content: `Convenience has become one of the most valuable products of modern life.

From food delivery services to digital assistants, countless technologies promise to save us time and effort.

Yet the growing demand for convenience raises an important question: what are we sacrificing in exchange for making everyday activities easier?

Consider online shopping. While customers benefit from fast deliveries and an enormous selection of products, the system also depends on complex logistics networks and workers who must meet demanding schedules.

Similarly, the popularity of food delivery platforms has transformed urban economies, creating new employment opportunities while introducing concerns about job security and working conditions.

There is also an environmental dimension. Individual deliveries, excessive packaging and frequent product returns can increase the resources required to satisfy consumer expectations.

Of course, convenience itself is not the problem. Many innovations genuinely improve people's quality of life, particularly for those with limited mobility or demanding responsibilities.

The challenge lies in recognising that convenience is rarely free. Its costs may simply be distributed among people who are less visible to the final consumer.

Making more informed choices does not necessarily mean rejecting modern services. Rather, it involves understanding the systems that allow them to function.`
    },
    {
        id: 14,
        title: "Can Creativity Be Taught?",
        level: "B2",
        topic: "Art & Education",
        content: `Creativity is often described as a natural talent: something certain people are born with while others are not.

However, this traditional understanding has increasingly been challenged by educators and researchers.

Although individuals may differ in their natural abilities, creative thinking also depends on skills that can be developed through practice.

For instance, learning to approach a problem from several perspectives encourages people to consider solutions they might otherwise overlook.

Creative environments also play a significant role. When students are afraid of making mistakes, they may avoid experimenting with unfamiliar ideas.

By contrast, classrooms that encourage curiosity and discussion can help students become more confident in expressing original thoughts.

Another important factor is exposure to different disciplines. A designer who studies biology or a musician who explores mathematics may discover unexpected connections between seemingly unrelated subjects.

Nevertheless, teaching creativity presents certain difficulties. Standardised assessments often reward predictable answers, while creative work may involve uncertainty and experimentation.

Ultimately, creativity should perhaps be understood less as a mysterious gift and more as a combination of knowledge, curiosity and the willingness to challenge familiar patterns of thinking.`
    },
    {
        id: 15,
        title: "The Psychology of First Impressions",
        level: "B2",
        topic: "Psychology & Behaviour",
        content: `We often form opinions about strangers within seconds of meeting them.

Facial expressions, body language, clothing and tone of voice can all influence the way we interpret someone's personality.

These rapid judgements may be useful in certain situations, allowing us to respond quickly to unfamiliar social environments.

However, they can also lead to inaccurate conclusions.

One common psychological phenomenon is the halo effect, which occurs when a positive impression in one area influences our judgement of unrelated characteristics.

For example, someone who appears confident and well-dressed may also be perceived as competent, even when there is little evidence to support that assumption.

Cultural differences can make first impressions even more complicated. Behaviour considered polite or friendly in one culture may be interpreted differently in another.

Although first impressions are difficult to avoid, becoming aware of our assumptions can help us make fairer decisions.

Rather than treating an immediate reaction as a reliable description of someone's character, we can remain curious and allow our opinions to develop over time.

After all, understanding another person usually requires much more than a brief introduction.`
    },

    // C1 — ADVANCED

    {
        id: 16,
        title: "The Paradox of Infinite Choice",
        level: "C1",
        topic: "Psychology & Philosophy",
        content: `Modern consumers enjoy an unprecedented degree of choice.

Whether selecting a university, planning a career or deciding what to watch in the evening, individuals are routinely presented with an overwhelming range of possibilities.

At first glance, this abundance appears unquestionably beneficial. Greater choice, after all, should enable people to make decisions that reflect their personal preferences more accurately.

Yet the relationship between choice and satisfaction is considerably more complicated.

Psychologists have explored the possibility that an excessive number of alternatives can increase anxiety, encourage endless comparison and ultimately reduce confidence in the decisions we make.

When faced with dozens of similar options, people may devote considerable effort to evaluating minor differences, only to experience lingering doubts after making their selection.

This phenomenon becomes particularly significant when decisions involve identity or long-term commitments.

Choosing a career, for instance, may no longer feel like selecting a suitable profession but rather like rejecting countless alternative versions of one's future.

Nevertheless, it would be misleading to conclude that fewer choices are universally preferable. The value of choice depends on context, individual circumstances and the consequences of making an unsuitable decision.

Perhaps the more useful question is not how to eliminate alternatives, but how to develop criteria that allow us to distinguish meaningful opportunities from unnecessary distractions.`
    },
    {
        id: 17,
        title: "When Cities Become Museums",
        level: "C1",
        topic: "Urban Studies & Culture",
        content: `Across the world, historically significant cities are confronting an increasingly difficult dilemma: how can they preserve their cultural identity without becoming environments designed primarily for visitors?

Tourism can provide substantial economic benefits, supporting local businesses, restoring historic buildings and generating revenue for public services.

Nevertheless, when an urban economy becomes excessively dependent on tourism, the character of everyday life may begin to change.

Residential properties are converted into short-term accommodation, traditional shops are replaced by souvenir retailers, and public spaces become increasingly oriented towards the expectations of temporary visitors.

Ironically, the very qualities that originally attracted tourists may gradually disappear as a result of their popularity.

Some urban planners argue that preservation policies should extend beyond architecture to include the social relationships and everyday activities that give neighbourhoods their distinctive character.

A city, in this view, is not simply a collection of buildings but a constantly evolving network of communities.

Attempts to freeze historic districts in an idealised version of the past can therefore be just as problematic as uncontrolled commercial development.

The challenge is to protect cultural heritage while ensuring that cities remain functional, affordable and meaningful places for those who actually live in them.

Ultimately, successful preservation may depend less on preventing change than on determining whose interests that change is intended to serve.`
    },
    {
        id: 18,
        title: "The Future of Human Expertise",
        level: "C1",
        topic: "Technology & Society",
        content: `As artificial intelligence becomes increasingly capable of performing tasks once considered exclusively human, the meaning of professional expertise is undergoing significant change.

Activities such as analysing documents, generating software code and interpreting complex information can now be supported by sophisticated automated systems.

Consequently, organisations are reconsidering which skills employees should develop and how human judgement ought to interact with machine-generated recommendations.

One argument suggests that automation will reduce the importance of memorising information while increasing the value of critical evaluation, communication and interdisciplinary thinking.

However, this perspective risks overlooking a fundamental difficulty: evaluating an answer often requires substantial knowledge of the subject being discussed.

An inexperienced professional may struggle to recognise an apparently convincing but fundamentally incorrect recommendation.

Expertise, therefore, may become more important rather than less, particularly in situations where decisions involve uncertainty, ethical considerations or serious consequences.

Another unresolved issue concerns responsibility. When an automated system contributes to a decision, determining who should be accountable for the outcome can become complicated.

Rather than imagining a future in which technology simply replaces human specialists, it may be more productive to consider how professional roles will be reorganised around new forms of collaboration.

The central challenge will be ensuring that technological efficiency does not come at the expense of informed judgement, meaningful responsibility and the continued development of human capabilities.`
    }


];

/* HTML elements */

const libraryList = document.getElementById("library-list");
const levelFilter = document.getElementById("level-filter");

const readingSection = document.getElementById("reading-section");
const readingTitle = document.getElementById("reading-title");
const readingLevel = document.getElementById("reading-level");
const readingText = document.getElementById("reading-text");

const backButton = document.getElementById("back-to-library");

/* Display library */

function displayLibrary(list) {
    libraryList.innerHTML = "";

    list.forEach(text => {
        const card = document.createElement("div");
        card.className = "library-card";

        const badge = document.createElement("span");
        badge.className = "level-badge";
        badge.textContent = text.level;

        const title = document.createElement("h3");
        title.textContent = text.title;

        const topic = document.createElement("p");
        topic.textContent = text.topic;

        card.append(badge, title, topic);

        card.addEventListener("click", () => {
            openText(text.id);
        });

        libraryList.appendChild(card);
    });
}

/* Open a text */

function openText(id) {
    const selectedText = texts.find(text => text.id === id);

    if (!selectedText) return;

    libraryList.classList.add("hidden");
    document.querySelector(".library-header").classList.add("hidden");

    readingSection.classList.remove("hidden");

    readingTitle.textContent = selectedText.title;
    readingLevel.textContent = `${selectedText.level} · ${selectedText.topic}`;
    readingText.textContent = selectedText.content;

    window.scrollTo(0, 0);
}

/* Return to the library */

backButton.addEventListener("click", () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        return;
    }

    readingSection.classList.add("hidden");
    libraryList.classList.remove("hidden");
    document.querySelector(".library-header").classList.remove("hidden");

    window.scrollTo(0, 0);
});

/* Filter by level */

levelFilter.addEventListener("change", () => {
    const level = levelFilter.value;

    const filteredTexts = level === "all"
        ? texts
        : texts.filter(text => text.level === level);

    displayLibrary(filteredTexts);
});
console.log("Library script works!");
console.log("Texts:", texts);
console.log("Library container:", libraryList);

displayLibrary(texts);

/* Voice recorder */

const startButton = document.getElementById("start-recording");
const stopButton = document.getElementById("stop-recording");
const recordingStatus = document.getElementById("recording-status");

const audioPlayer = document.getElementById("audio-player");
const downloadLink = document.getElementById("download-recording");

let mediaRecorder = null;
let audioChunks = [];
let audioURL = null;
let microphoneStream = null;
document.querySelectorAll(".notebook-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        if (
            tab.dataset.page !== "library" &&
            mediaRecorder &&
            mediaRecorder.state === "recording"
        ) {
            mediaRecorder.stop();
            stopButton.disabled = true;
            recordingStatus.textContent = "Processing recording...";
        }

        if (tab.dataset.page !== "library") {
            audioPlayer.pause();
        }
    });
});
function clearPreviousRecording() {
    audioPlayer.pause();
    audioPlayer.removeAttribute("src");
    audioPlayer.load();

    if (audioURL) {
        URL.revokeObjectURL(audioURL);
        audioURL = null;
    }

    audioPlayer.classList.add("hidden");
    downloadLink.classList.add("hidden");
}

startButton.addEventListener("click", async () => {
    try {
        if (!navigator.mediaDevices?.getUserMedia ||
            !window.MediaRecorder) {
            throw new Error("Recording is not supported here.");
        }

        clearPreviousRecording();

        microphoneStream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        audioChunks = [];

        mediaRecorder = new MediaRecorder(microphoneStream);

        mediaRecorder.addEventListener("dataavailable", event => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        });

        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks, {
                type: mediaRecorder.mimeType || "audio/webm"
            });

            audioURL = URL.createObjectURL(audioBlob);

            audioPlayer.src = audioURL;
            audioPlayer.classList.remove("hidden");

            const extension = audioBlob.type.includes("mp4")
                ? "m4a"
                : audioBlob.type.includes("ogg")
                    ? "ogg"
                    : "webm";

            downloadLink.href = audioURL;
            downloadLink.download = `reading-practice.${extension}`;
            downloadLink.textContent = "Download Recording";
            downloadLink.classList.remove("hidden");

            recordingStatus.textContent = "Recording complete!";

            microphoneStream.getTracks().forEach(track => {
                track.stop();
            });

            microphoneStream = null;
            startButton.disabled = false;
            stopButton.disabled = true;
        });

        mediaRecorder.start();

        startButton.disabled = true;
        stopButton.disabled = false;

        recordingStatus.textContent = "Recording...";
    } catch (error) {
        console.error(error);

        if (microphoneStream) {
            microphoneStream.getTracks().forEach(track => track.stop());
            microphoneStream = null;
        }

        startButton.disabled = false;
        stopButton.disabled = true;

        recordingStatus.textContent =
            "Microphone unavailable. Check permissions and HTTPS.";
    }
});

stopButton.addEventListener("click", () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        stopButton.disabled = true;
        recordingStatus.textContent = "Processing recording...";
    }
});
})();