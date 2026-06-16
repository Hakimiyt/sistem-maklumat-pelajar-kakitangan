document.getElementById("loginForm")
    .addEventListener("submit", async function(e) {

        e.preventDefault();

        const username =
            document.getElementById("username").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message");

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("API Error");
            }

            const users = await response.json();

            const user = users.find(
                u =>
                u.username.toLowerCase() === username.toLowerCase() &&
                u.email.toLowerCase() === email.toLowerCase()
            );

            if (user) {

                message.innerHTML = `
                <p style="color:green;">
                    Log masuk berjaya!
                    Selamat datang ${user.name}
                </p>
            `;

                setTimeout(() => {
                    window.location.href = "search.html";
                }, 2000);

            } else {

                message.innerHTML = `
                <p style="color:red;">
                    Username atau email tidak sepadan.
                </p>
            `;
            }

        } catch (error) {

            message.innerHTML = `
            <p style="color:red;">
                Ralat mendapatkan data API.
            </p>
        `;

            console.error(error);
        }

    });