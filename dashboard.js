const studentName = document.getElementById("student-name");
const logoutButton = document.getElementById("logout-button");
const notebook = document.querySelector(".notebook");

const quotes = [
    "No risk, no glory",
    "Practice makes progress",
    "Small steps count",
    "Stay curious",
    "Keep going, keep growing",
    "One word at a time",
    "Make today count",
    "Every day is a chance to learn"
];

function showDailyQuote() {
    const today = new Date();

    const dayNumber = Math.floor(
        Date.UTC(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        ) / 86400000
    );

    const quote = quotes[dayNumber % quotes.length];

    document.getElementById("daily-quote").textContent = quote;
}

let calendarDate = new Date();
calendarDate.setDate(1);
let nextClassDate = null;

function renderCalendar() {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const today = new Date();

    const heading = document.getElementById("calendar-month");
    const calendar = document.getElementById("calendar");

    heading.textContent = calendarDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    calendar.replaceChildren();

    const weekdays = [
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
    ];

    weekdays.forEach(day => {
        const cell = document.createElement("span");
        cell.className = "calendar-weekday";
        cell.textContent = day;

        calendar.appendChild(cell);
    });

    const leading =
        (new Date(year, month, 1).getDay() + 6) % 7;

    const daysInMonth =
        new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < leading; i++) {
        const blank = document.createElement("span");
        blank.className = "calendar-empty";
        blank.setAttribute("aria-hidden", "true");

        calendar.appendChild(blank);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("span");

        cell.className = "calendar-day";
        cell.textContent = day;

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            cell.classList.add("today");
            cell.setAttribute("aria-current", "date");
        }
        // Отмечаем дату следующего занятия
        if (
            nextClassDate &&
            day === nextClassDate.getDate() &&
            month === nextClassDate.getMonth() &&
            year === nextClassDate.getFullYear()
        ) {
            cell.classList.add("class-day");

            const classTime = nextClassDate.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit"
            });

            cell.title = `Next class: ${classTime}`;

            cell.addEventListener("click", () => {
                alert(`Your next class is at ${classTime}`);
            });
        }

        calendar.appendChild(cell);
    }
}

function initNotebook() {
    const tabs = document.querySelectorAll(".notebook-tab");
    const pages = document.querySelectorAll(".notebook-page");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const pageName = tab.dataset.page;
            const selectedPage = document.getElementById(
                `page-${pageName}`
            );

            if (!selectedPage) return;

            tabs.forEach(t => {
                const isActive = t === tab;

                t.classList.toggle("active", isActive);

                if (isActive) {
                    t.setAttribute("aria-current", "page");
                } else {
                    t.removeAttribute("aria-current");
                }
            });

            pages.forEach(page => {
                const isActive = page === selectedPage;

                page.hidden = !isActive;
                page.classList.toggle("active", isActive);
            });
        });
    });

    document.getElementById("calendar-prev")
        .addEventListener("click", () => {
            calendarDate.setMonth(calendarDate.getMonth() - 1);
            renderCalendar();
        });

    document.getElementById("calendar-next")
        .addEventListener("click", () => {
            calendarDate.setMonth(calendarDate.getMonth() + 1);
            renderCalendar();
        });

    showDailyQuote();
    renderCalendar();
}
async function loadStudentWorkspace() {

    const meetingContainer =
        document.getElementById("student-meeting");

    const resourcesContainer =
        document.getElementById("student-resources");

    const errorMessage =
        document.getElementById("workspace-error");

    const { data: authData, error: authError } =
        await supabaseClient.auth.getUser();

    if (authError || !authData?.user) {
        return;
    }

    const { data: links, error } = await supabaseClient
        .from("workspace_links")
        .select("id, title, url, link_type")
        .eq("student_id", authData.user.id)
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Workspace error:", error);

        errorMessage.textContent =
            "Could not load your workspace.";

        errorMessage.hidden = false;
        return;
    }

    errorMessage.hidden = true;

    meetingContainer.replaceChildren();
    resourcesContainer.replaceChildren();

    // Проверяем, что URL безопасен для открытия

    function validUrl(value) {
        try {
            const url = new URL(value);
            return url.protocol === "https:" ? url.href : null;
        } catch {
            return null;
        }
    }

    // Meeting

    const meeting = (links || []).find(
        link => link.link_type === "meeting"
    );

    const meetingUrl = meeting ? validUrl(meeting.url) : null;

    if (meetingUrl) {
        const button = document.createElement("a");

        button.className = "join-class-button";
        button.textContent = "Join Class";

        button.href = meetingUrl;
        button.target = "_blank";
        button.rel = "noopener noreferrer";

        meetingContainer.appendChild(button);

    } else {
        meetingContainer.textContent =
            "Your classroom link hasn't been added yet.";
    }

    // Resources

    const resources = (links || []).filter(
        link => link.link_type === "resource"
    );

    if (resources.length === 0) {
        resourcesContainer.textContent =
            "No resources added yet.";

        return;
    }

    resources.forEach(resource => {

        const url = validUrl(resource.url);

        if (!url) return;

        const card = document.createElement("a");

        card.className = "workspace-resource-card";
        card.href = url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const title = document.createElement("span");
        title.textContent = resource.title;

        const arrow = document.createElement("span");
        arrow.textContent = "↗";
        arrow.setAttribute("aria-hidden", "true");

        card.append(title, arrow);

        resourcesContainer.appendChild(card);
    });
}
async function loadDashboard() {
    try {
        const { data: authData, error: authError } =
            await supabaseClient.auth.getUser();

        if (authError || !authData?.user) {
            window.location.replace("index.html");
            return;
        }

        const user = authData.user;

        const { data: profile, error: profileError } =
            await supabaseClient
                .from("profiles")
                .select("display_name, role, lessons_left, next_class_at")
                .eq("id", user.id)
                .single();

        if (profileError || !profile) {
            console.error("Profile error:", profileError);
            studentName.textContent = "Student";
        } else {
            studentName.textContent =
                profile.display_name || "Student";
                const lessonsLeft = document.getElementById("lessons-left");
                lessonsLeft.textContent =
                profile.lessons_left ?? 0;
                const nextClass = document.getElementById("next-class");

                if (profile.next_class_at) {
                    const classDate = new Date(profile.next_class_at);

                    nextClass.textContent = classDate.toLocaleString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    });
                    nextClassDate = classDate;
                } else {
                    nextClass.textContent = "Not scheduled yet";
                    nextClassDate = null;
                }
                renderCalendar();

            const workspaceLink =
                document.getElementById("workspace-link");

            
        }

        initNotebook();

        await loadStudentWorkspace();
        await loadStudentStickers();
        notebook.hidden = false;

    } catch (error) {
        console.error("Dashboard error:", error);

        document.getElementById("page-home").innerHTML =
            "<p>Something went wrong. Please refresh the page.</p>";
    }
}

logoutButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const { error } = await supabaseClient.auth.signOut({
        scope: "local"
    });

    if (error) {
        console.error("Logout error:", error);
        alert("Could not log out. Please try again.");
        return;
    }

    window.location.replace("index.html");
});

async function loadStudentStickers() {

    const grid = document.getElementById("stickers-grid");
    const counter = document.getElementById("stickers-counter");
    const errorElement = document.getElementById("stickers-error");

    if (!grid || !counter || !errorElement) return;

    const { data: authData, error: authError } =
        await supabaseClient.auth.getUser();

    if (authError || !authData?.user) return;

    const { data, error } = await supabaseClient
        .from("student_stickers")
        .select("id, title, description, image_path, awarded_at")
        .eq("student_id", authData.user.id)
        .order("awarded_at", { ascending: true });

    if (error) {
        console.error("Stickers error:", error);
        errorElement.textContent = "Could not load your stickers.";
        errorElement.hidden = false;
        return;
    }

    errorElement.hidden = true;
    grid.replaceChildren();

    const stickers = data || [];

    // Always show at least 9 slots.
    // Expand by complete rows of 3.

    const slotCount = Math.max(
        9,
        Math.ceil(stickers.length / 3) * 3
    );

    for (let i = 0; i < slotCount; i++) {

        const sticker = stickers[i];

        if (!sticker) {
            const emptySlot = document.createElement("div");
            emptySlot.className = "sticker-slot empty";

            const plus = document.createElement("span");
            plus.textContent = "+";
            plus.setAttribute("aria-hidden", "true");

            emptySlot.appendChild(plus);
            grid.appendChild(emptySlot);
            continue;
        }

        const card = document.createElement("button");
        card.type = "button";
        card.className = "sticker-card";
        card.setAttribute("aria-pressed", "false");
        card.setAttribute("aria-label", `Flip ${sticker.title}`);

        const inner = document.createElement("span");
        inner.className = "sticker-card-inner";

        // FRONT

        const front = document.createElement("span");
        front.className = "sticker-front";

        const image = document.createElement("img");

        const { data: imageData } = supabaseClient.storage
            .from("sticker-images")
            .getPublicUrl(sticker.image_path);

        image.src = imageData.publicUrl;
        image.alt = sticker.title;
        image.loading = "lazy";

        front.appendChild(image);

        // BACK

        const back = document.createElement("span");
        back.className = "sticker-back";

        const title = document.createElement("strong");
        title.textContent = sticker.title;

        const description = document.createElement("span");
        description.textContent = sticker.description;

        back.append(title, description);

        inner.append(front, back);
        card.appendChild(inner);

        // FLIP

        card.addEventListener("click", () => {
            const flipped = card.classList.toggle("flipped");

            card.setAttribute("aria-pressed", String(flipped));
            card.setAttribute(
                "aria-label",
                flipped
                    ? `Show image for ${sticker.title}`
                    : `Flip ${sticker.title}`
            );
        });

        grid.appendChild(card);
    }

    counter.textContent =
        `${stickers.length} sticker${stickers.length === 1 ? "" : "s"} collected`;
}


loadDashboard();