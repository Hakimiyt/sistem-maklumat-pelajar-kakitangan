document.getElementById("registerForm")
    .addEventListener("submit", async function(e) {

        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nama,
                        email
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