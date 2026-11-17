
const loginForm = document.getElementById("login-form");
const message = document.getElementById("form-message");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    const submitButton = loginForm.querySelector(
        'button[type="submit"]'
    );

    submitButton.disabled = true;
    submitButton.textContent = "Logging in...";
    message.textContent = "";

    try {
        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

        if (error) {
            throw error;
        }

        const { data: isTeacher, error: roleError } =
        await supabaseClient.rpc("is_teacher");
        if (roleError) {
            console.error("Role check error:", roleError);
            alert("Could not check account permissions.");
            return;
        }
        if (isTeacher) {
            window.location.replace("teacher.html");
        } else {
            window.location.replace("dashboard.html");
        }

    } catch (error) {
        console.error("Login error:", error);

        message.textContent =
            "Что-то ввели неправильно. Попробуйте ещё раз.";

    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Log In";
    }
});
