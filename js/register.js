document.getElementById("registerForm")
    .addEventListener("submit", async function(e) {

        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nama,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            document.getElementById("message").innerHTML =
                "Pendaftaran berjaya!";

            console.log(data);

        } catch (error) {

            document.getElementById("message").innerHTML =
                "Pendaftaran gagal.";

        }

    });