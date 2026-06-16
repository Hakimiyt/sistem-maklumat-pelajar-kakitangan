async function cariPengguna() {

    const keyword =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const result =
        document.getElementById("result");

    if (keyword === "") {

        result.innerHTML = `
            <p class="warning">
                Sila masukkan nama pengguna.
            </p>
        `;

        return;
    }

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("API Error");
        }

        const users =
            await response.json();

        const filtered =
            users.filter(user =>
                user.name
                .toLowerCase()
                .includes(keyword)
            );

        if (filtered.length === 0) {

            result.innerHTML = `
                <p class="warning">
                    Data tidak dijumpai.
                </p>
            `;

            return;
        }

        let output = "";

        filtered.forEach(user => {

            output += `
            <div class="card">

                <h3>${user.name}</h3>

                <p>
                <strong>Email:</strong>
                ${user.email}
                </p>

                <p>
                <strong>Phone:</strong>
                ${user.phone}
                </p>

                <p>
                <strong>Website:</strong>
                ${user.website}
                </p>

                <p>
                <strong>Company:</strong>
                ${user.company.name}
                </p>

            </div>
            `;
        });

        result.innerHTML = output;

    } catch (error) {

        result.innerHTML = `
            <p class="error">
                Gagal mendapatkan data API.
            </p>
        `;

        console.error(error);
    }
}