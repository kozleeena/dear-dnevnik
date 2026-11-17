const teacherNotebook = document.getElementById("teacher-notebook");
const studentsList = document.getElementById("students-list");
const teacherError = document.getElementById("teacher-error");
const teacherLogout = document.getElementById("teacher-logout");
function isValidWorkspaceUrl(value) {
    try {
        const url = new URL(value);
        return url.protocol === "https:";
    } catch {
        return false;
    }
}
async function loadStudents() {

    const { data, error } = await supabaseClient
        .rpc("teacher_get_students");

    if (error) {
        console.error("Error loading students:", error);

        studentsList.textContent = "";
        teacherError.textContent =
            "Access denied or students could not be loaded.";

        teacherError.hidden = false;
        return;
    }

    teacherError.hidden = true;
    studentsList.replaceChildren();

    if (!data || data.length === 0) {
        studentsList.textContent = "No students yet.";
        return;
    }

    data.forEach(student => {

        const card = document.createElement("article");
        card.className = "student-card";

        const name = document.createElement("h3");
        name.textContent = student.display_name || "Student";

        const balanceControls = document.createElement("div");
        balanceControls.className = "balance-controls";

        const minusButton = document.createElement("button");
        minusButton.textContent = "−";
        minusButton.type = "button";

        const balance = document.createElement("span");
        balance.className = "balance-number";
        balance.textContent = student.lessons_left ?? 0;

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.type = "button";

        // Изменение баланса
        async function changeBalance(delta) {

            minusButton.disabled = true;
            plusButton.disabled = true;

            const { data, error } = await supabaseClient
                .rpc("teacher_change_balance", {
                    p_student_id: student.id,
                    p_delta: delta
                });

            if (error) {
                console.error("Balance update error:", error);
                alert("Could not update lesson balance.");
            } else {
                balance.textContent = data;
            }

            minusButton.disabled = Number(balance.textContent) <= 0;
            plusButton.disabled = false;
        }

        minusButton.addEventListener("click", () => {
            changeBalance(-1);
        });

        plusButton.addEventListener("click", () => {
            changeBalance(1);
        });

        minusButton.disabled = Number(balance.textContent) <= 0;

        balanceControls.appendChild(minusButton);
        balanceControls.appendChild(balance);
        balanceControls.appendChild(plusButton);
        // NEXT CLASS

        const scheduleControls = document.createElement("div");
        scheduleControls.className = "schedule-controls";

        const scheduleLabel = document.createElement("h4");
        scheduleLabel.textContent = "Next Class";

        const dateInput = document.createElement("input");
        dateInput.type = "datetime-local";

        const saveDateButton = document.createElement("button");
        saveDateButton.type = "button";
        saveDateButton.textContent = "Save Class";

        const clearDateButton = document.createElement("button");
        clearDateButton.type = "button";
        clearDateButton.textContent = "Clear";

        // Показываем уже сохранённую дату
        if (student.next_class_at) {
            const date = new Date(student.next_class_at);

            const localDate = new Date(
                date.getTime() - date.getTimezoneOffset() * 60000
            );

            dateInput.value = localDate.toISOString().slice(0, 16);
        }

        // Сохраняем дату в Supabase
        saveDateButton.addEventListener("click", async () => {

            if (!dateInput.value) {
                alert("Please choose a date and time.");
                return;
            }

            const selectedDate = new Date(dateInput.value);

            if (Number.isNaN(selectedDate.getTime())) {
                alert("Invalid date.");
                return;
            }

            saveDateButton.disabled = true;
            clearDateButton.disabled = true;

            const { error } = await supabaseClient
                .rpc("teacher_set_next_class", {
                    p_student_id: student.id,
                    p_next_class_at: selectedDate.toISOString()
                });

            saveDateButton.disabled = false;
            clearDateButton.disabled = false;

            if (error) {
                console.error("Schedule error:", error);

                alert(
                    "Error: " + error.message +
                    "\nCode: " + error.code
                );

                return;
            }

            alert("Class saved!");
        });

        // Удаляем назначенную дату
        clearDateButton.addEventListener("click", async () => {

            saveDateButton.disabled = true;
            clearDateButton.disabled = true;

            const { error } = await supabaseClient
                .rpc("teacher_set_next_class", {
                    p_student_id: student.id,
                    p_next_class_at: null
                });

            saveDateButton.disabled = false;
            clearDateButton.disabled = false;

            if (error) {
                console.error("Schedule error:", error);
                alert("Could not clear the class.");
                return;
            }

            dateInput.value = "";

            alert("Class cleared!");
        });

        scheduleControls.appendChild(scheduleLabel);
        scheduleControls.appendChild(dateInput);
        scheduleControls.appendChild(saveDateButton);
        scheduleControls.appendChild(clearDateButton);
        // WORKSPACE CONTROLS

        const workspaceSection = document.createElement("section");
        workspaceSection.className = "teacher-workspace";

        const workspaceHeading = document.createElement("h4");
        workspaceHeading.textContent = "Workspace";

        // Permanent meeting

        const meetingLabel = document.createElement("label");
        meetingLabel.textContent = "Permanent classroom";

        const meetingInput = document.createElement("input");
        meetingInput.type = "url";
        meetingInput.placeholder = "https://meet.google.com/...";

        const meetingButton = document.createElement("button");
        meetingButton.type = "button";
        meetingButton.textContent = "Save Meeting Link";

        // Resources

        const resourcesHeading = document.createElement("h4");
        resourcesHeading.textContent = "Learning Resources";

        const resourceList = document.createElement("div");
        resourceList.className = "teacher-resource-list";

        const resourceTitle = document.createElement("input");
        resourceTitle.placeholder = "Resource name";

        const resourceUrl = document.createElement("input");
        resourceUrl.type = "url";
        resourceUrl.placeholder = "https://docs.google.com/...";

        const resourceButton = document.createElement("button");
        resourceButton.type = "button";
        resourceButton.textContent = "+ Add Resource";

        const workspaceStatus = document.createElement("p");
        workspaceStatus.className = "workspace-status";
        workspaceStatus.setAttribute("role", "status");

        workspaceSection.append(
            workspaceHeading,
            meetingLabel,
            meetingInput,
            meetingButton,
            resourcesHeading,
            resourceList,
            resourceTitle,
            resourceUrl,
            resourceButton,
            workspaceStatus
        );
        card.appendChild(name);
        card.appendChild(balanceControls);
        card.appendChild(scheduleControls);
        card.appendChild(workspaceSection);

        async function loadWorkspaceLinks() {
            const { data, error } = await supabaseClient.rpc(
                "teacher_get_workspace_links",
                {
                    p_student_id: student.id
                }
            );

            if (error) {
                console.error("Workspace loading error:", error);
                workspaceStatus.textContent = "Could not load workspace links.";
                return;
            }

            workspaceStatus.textContent = "";
            resourceList.replaceChildren();

            const links = data || [];

            const meeting = links.find(
                link => link.link_type === "meeting"
            );

            meetingInput.value = meeting?.url || "";

            const resources = links.filter(
                link => link.link_type === "resource"
            );

            resources.forEach(link => {
                const row = document.createElement("div");
                row.className = "teacher-resource-row";

                const linkElement = document.createElement("a");
                linkElement.textContent = link.title;
                linkElement.href = link.url;
                linkElement.target = "_blank";
                linkElement.rel = "noopener noreferrer";

                const deleteButton = document.createElement("button");
                deleteButton.type = "button";
                deleteButton.textContent = "Delete";

                deleteButton.addEventListener("click", async () => {
                    if (!confirm(`Delete "${link.title}"?`)) return;

                    deleteButton.disabled = true;

                    const { error } = await supabaseClient.rpc(
                        "teacher_delete_workspace_link",
                        {
                            p_student_id: student.id,
                            p_link_id: link.id
                        }
                    );

                    if (error) {
                        console.error(error);
                        workspaceStatus.textContent = "Could not delete resource.";
                        deleteButton.disabled = false;
                        return;
                    }

                    await loadWorkspaceLinks();
                });

                row.append(linkElement, deleteButton);
                resourceList.appendChild(row);
            });
        }


        // Save permanent meeting

        meetingButton.addEventListener("click", async () => {
            const url = meetingInput.value.trim();

            if (!isValidWorkspaceUrl(url)) {
                workspaceStatus.textContent = "Enter a valid HTTPS link.";
                return;
            }

            meetingButton.disabled = true;

            const { error } = await supabaseClient.rpc(
                "teacher_save_workspace_link",
                {
                    p_student_id: student.id,
                    p_title: "Our Classroom",
                    p_url: url,
                    p_link_type: "meeting"
                }
            );

            meetingButton.disabled = false;

            if (error) {
                console.error(error);
                workspaceStatus.textContent = "Could not save meeting.";
                return;
            }

            await loadWorkspaceLinks();
            workspaceStatus.textContent = "Meeting link saved!";
        });


        // Add resource

        resourceButton.addEventListener("click", async () => {
            const title = resourceTitle.value.trim();
            const url = resourceUrl.value.trim();

            if (!title || title.length > 150 || !isValidWorkspaceUrl(url)) {
                workspaceStatus.textContent =
                    "Enter a name (up to 150 characters) and valid HTTPS URL.";
                return;
            }

            resourceButton.disabled = true;

            const { error } = await supabaseClient.rpc(
                "teacher_save_workspace_link",
                {
                    p_student_id: student.id,
                    p_title: title,
                    p_url: url,
                    p_link_type: "resource"
                }
            );

            resourceButton.disabled = false;

            if (error) {
                console.error(error);
                workspaceStatus.textContent = "Could not add resource.";
                return;
            }

            resourceTitle.value = "";
            resourceUrl.value = "";

            await loadWorkspaceLinks();
            workspaceStatus.textContent = "Resource added!";
        });

        loadWorkspaceLinks();
        addStickerControls(card, student);

        studentsList.appendChild(card);
    });
}

function addStickerControls(card, student) {

    const section = document.createElement("section");
    section.className = "teacher-stickers";

    const heading = document.createElement("h4");
    heading.textContent = "Award a Sticker";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Sticker name";
    titleInput.maxLength = 100;
    titleInput.setAttribute("aria-label", "Sticker name");

    const descriptionInput = document.createElement("textarea");
    descriptionInput.placeholder = "What did the student achieve?";
    descriptionInput.maxLength = 500;
    descriptionInput.rows = 3;
    descriptionInput.setAttribute("aria-label", "Achievement description");

    const imageLabel = document.createElement("label");
    imageLabel.textContent = "Sticker image (PNG or WebP)";

    const imageInput = document.createElement("input");
    imageInput.type = "file";
    imageInput.accept = "image/png,image/webp";

    imageLabel.appendChild(imageInput);

    const awardButton = document.createElement("button");
    awardButton.type = "button";
    awardButton.textContent = "+ Award Sticker";

    const status = document.createElement("p");
    status.className = "sticker-admin-status";
    status.setAttribute("role", "status");

    const listHeading = document.createElement("h4");
    listHeading.textContent = "Awarded Stickers";

    const awardedList = document.createElement("div");
    awardedList.className = "teacher-sticker-list";

    section.append(
        heading,
        titleInput,
        descriptionInput,
        imageLabel,
        awardButton,
        status,
        listHeading,
        awardedList
    );

    card.appendChild(section);

    // Load already awarded stickers

    async function loadAwardedStickers() {

        const { data, error } = await supabaseClient.rpc(
            "teacher_get_student_stickers",
            {
                p_student_id: student.id
            }
        );

        if (error) {
            console.error("Sticker list error:", error);
            status.textContent = "Could not load stickers.";
            return;
        }

        awardedList.replaceChildren();

        if (!data || data.length === 0) {
            awardedList.textContent = "No stickers awarded yet.";
            return;
        }

        data.forEach(sticker => {

            const row = document.createElement("div");
            row.className = "teacher-sticker-row";

            const image = document.createElement("img");

            const { data: imageData } = supabaseClient.storage
                .from("sticker-images")
                .getPublicUrl(sticker.image_path);

            image.src = imageData.publicUrl;
            image.alt = sticker.title;

            const details = document.createElement("div");
            details.className = "teacher-sticker-details";

            const name = document.createElement("strong");
            name.textContent = sticker.title;

            const description = document.createElement("small");
            description.textContent = sticker.description;

            details.append(name, description);

            const removeButton = document.createElement("button");
            removeButton.type = "button";
            removeButton.textContent = "Remove";

            removeButton.addEventListener("click", async () => {

                if (!confirm(`Remove "${sticker.title}"?`)) {
                    return;
                }

                removeButton.disabled = true;

                const { error } = await supabaseClient.rpc(
                    "teacher_remove_sticker",
                    {
                        p_student_id: student.id,
                        p_sticker_id: sticker.id
                    }
                );

                if (error) {
                    console.error(error);
                    status.textContent = "Could not remove sticker.";
                    removeButton.disabled = false;
                    return;
                }

                status.textContent = "Sticker removed.";
                await loadAwardedStickers();
            });

            row.append(image, details, removeButton);
            awardedList.appendChild(row);
        });
    }

    // Award a new sticker

    awardButton.addEventListener("click", async () => {

        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const file = imageInput.files?.[0];

        if (!title || !description || !file) {
            status.textContent =
                "Enter a name, description and image.";
            return;
        }

        if (title.length > 100 || description.length > 500) {
            status.textContent = "Sticker text is too long.";
            return;
        }

        if (!["image/png", "image/webp"].includes(file.type)) {
            status.textContent = "Only PNG and WebP are allowed.";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            status.textContent = "Image must be under 2 MB.";
            return;
        }

        awardButton.disabled = true;
        status.textContent = "Uploading sticker...";

        try {

            const extension =
                file.type === "image/png" ? "png" : "webp";

            const imagePath =
                `stickers/${crypto.randomUUID()}.${extension}`;

            // 1. Upload the image

            const { error: uploadError } = await supabaseClient
                .storage
                .from("sticker-images")
                .upload(imagePath, file, {
                    contentType: file.type,
                    upsert: false
                });

            if (uploadError) {
                throw uploadError;
            }

            // 2. Award sticker to the student

            const { error: awardError } = await supabaseClient.rpc(
                "teacher_award_sticker",
                {
                    p_student_id: student.id,
                    p_title: title,
                    p_description: description,
                    p_image_path: imagePath
                }
            );

            if (awardError) {
                throw awardError;
            }

            titleInput.value = "";
            descriptionInput.value = "";
            imageInput.value = "";

            status.textContent = "Sticker awarded!";

            await loadAwardedStickers();

        } catch (error) {
            console.error("Sticker award error:", error);
            status.textContent =
                `Could not award sticker: ${error.message}`;

        } finally {
            awardButton.disabled = false;
        }
    });

    loadAwardedStickers();
}

async function initTeacherDashboard() {

    // 1. Проверяем, авторизован ли пользователь
    const { data, error } =
        await supabaseClient.auth.getUser();

    if (error || !data?.user) {
        window.location.replace("index.html");
        return;
    }

    // 2. Проверяем, является ли пользователь преподавателем
    const { data: isTeacher, error: roleError } =
        await supabaseClient.rpc("is_teacher");

    if (roleError) {
        console.error("Role check error:", roleError);
        teacherError.textContent = "Could not verify permissions.";
        teacherError.hidden = false;
        return;
    }

    if (!isTeacher) {
        window.location.replace("dashboard.html");
        return;
    }

    // 3. Показываем преподавательскую тетрадь
    teacherNotebook.hidden = false;

    // 4. Загружаем учеников
    await loadStudents();
}


// Выход из аккаунта
teacherLogout.addEventListener("click", async () => {

    const { error } = await supabaseClient.auth.signOut({
        scope: "local"
    });

    if (error) {
        console.error("Logout error:", error);
        alert("Could not log out.");
        return;
    }

    window.location.replace("index.html");
});


// Запускаем преподавательскую панель
initTeacherDashboard();