//
// Wait until page has loaded
//
document.addEventListener(
    "DOMContentLoaded",
    function()
    {
        //
        // Connect buttons
        //
        document
            .getElementById("btnThithi")
            .addEventListener(
                "click",
                function()
                {
                    showQuery("thithi");
                });

        document
            .getElementById("btnDate")
            .addEventListener(
                "click",
                function()
                {
                    showQuery("date");
                });

        document
            .getElementById("btnNakshatram")
            .addEventListener(
                "click",
                function()
                {
                    showQuery("nakshatram");
                });


        //
        // Start with Thithi query
        //
        showQuery("thithi");
    });


//
// Display the selected query form
//
//
// Display the selected query form
//
function showQuery(type)
{
    //
    // Remove active from all buttons
    //
    document
        .querySelectorAll(".queryCategory")
        .forEach(
            function(button)
            {
                button.classList.remove("active");
            });


    //
    // Get form container
    //
    const form =
        document.getElementById("queryForm");


    //
    // Select the correct button
    //
    if (type === "thithi")
    {
        document
            .getElementById("btnThithi")
            .classList.add("active");
    }

    if (type === "date")
    {
        document
            .getElementById("btnDate")
            .classList.add("active");
    }

    if (type === "nakshatram")
    {
        document
            .getElementById("btnNakshatram")
            .classList.add("active");
    }


    //
    // Create Thithi form
    //
    if (type === "thithi")
    {
        form.innerHTML =
        `
            <h2>Query by Thithi</h2>

            <div class="formRow">

                <label for="sowramanamMonth">
                    Sowramanam Month
                </label>

                <select id="sowramanamMonth">

                    <option value="">
                        Select Month
                    </option>

                    <option value="Chaitra">
                        Chaitra
                    </option>

                    <option value="Vaishakha">
                        Vaishakha
                    </option>

                    <option value="Jyeshtha">
                        Jyeshtha
                    </option>

                    <option value="Ashadha">
                        Ashadha
                    </option>

                    <option value="Shravana">
                        Shravana
                    </option>

                    <option value="Bhadrapada">
                        Bhadrapada
                    </option>

                    <option value="Ashwin">
                        Ashwin
                    </option>

                    <option value="Kartika">
                        Kartika
                    </option>

                    <option value="Margashirsha">
                        Margashirsha
                    </option>

                    <option value="Pausha">
                        Pausha
                    </option>

                    <option value="Magha">
                        Magha
                    </option>

                    <option value="Phalguna">
                        Phalguna
                    </option>

                </select>

            </div>


            <div class="formRow">

                <label for="year">
                    Year
                </label>

                <select id="year">

                    <option value="">
                        Select Year
                    </option>

                    <option value="2025-2026">
                        2025–2026 — Year Name
                    </option>

                    <option value="2026-2027">
                        2026–2027 — Year Name
                    </option>

                    <option value="2027-2028">
                        2027–2028 — Year Name
                    </option>

                </select>

            </div>


            <div class="formRow">

                <label for="paksham">
                    Paksham
                </label>

                <select id="paksham">

                    <option value="">
                        Select Paksham
                    </option>

                    <option value="Shukla">
                        Shukla Paksham
                    </option>

                    <option value="Krishna">
                        Krishna Paksham
                    </option>

                </select>

            </div>


            <button
                id="runButton"
                onclick="runQuery('thithi')">
                Run Query
            </button>
        `;
    }


    //
    // Create Calendar Date form
    //
    if (type === "date")
    {
        form.innerHTML =
        `
            <h2>Query by Calendar Date</h2>

            <div class="formRow">

                <label for="calendarDate">
                    Calendar Date
                </label>

                <input
                    type="date"
                    id="calendarDate">

            </div>

            <button
                id="runButton"
                onclick="runQuery('date')">
                Run Query
            </button>
        `;
    }


    //
    // Create Nakshatram form
    //
    //
// Create Nakshatram form
//
if (type === "nakshatram")
{
    form.innerHTML =
    `
        <h2>Query by Nakshatram</h2>

        <div class="formRow">

            <label for="nakshatramSowramanamMonth">
                Sowramanam Month
            </label>

            <select id="nakshatramSowramanamMonth">

                <option value="">
                    Select Month
                </option>

                <option value="Chaitra">
                    Chaitra
                </option>

                <option value="Vaishakha">
                    Vaishakha
                </option>

                <option value="Jyeshtha">
                    Jyeshtha
                </option>

                <option value="Ashadha">
                    Ashadha
                </option>

                <option value="Shravana">
                    Shravana
                </option>

                <option value="Bhadrapada">
                    Bhadrapada
                </option>

                <option value="Ashwin">
                    Ashwin
                </option>

                <option value="Kartika">
                    Kartika
                </option>

                <option value="Margashirsha">
                    Margashirsha
                </option>

                <option value="Pausha">
                    Pausha
                </option>

                <option value="Magha">
                    Magha
                </option>

                <option value="Phalguna">
                    Phalguna
                </option>

            </select>

        </div>


        <div class="formRow">

            <label for="nakshatramYear">
                Year
            </label>

            <select id="nakshatramYear">

                <option value="">
                    Select Year
                </option>

                <option value="2025-2026">
                    2025–2026 — Year Name
                </option>

                <option value="2026-2027">
                    2026–2027 — Year Name
                </option>

                <option value="2027-2028">
                    2027–2028 — Year Name
                </option>

            </select>

        </div>


        <div class="formRow">

            <label for="nakshatram">
                Nakshatram
            </label>

            <select id="nakshatram">

                <option value="">
                    Select Nakshatram
                </option>

                <option value="Ashwini">
                    Ashwini
                </option>

                <option value="Bharani">
                    Bharani
                </option>

                <option value="Krittika">
                    Krittika
                </option>

            </select>

        </div>


        <button
            id="runButton"
            onclick="runQuery('nakshatram')">
            Run Query
        </button>
    `;
}


    //
    // Clear old results when changing query
    //
    document
        .getElementById("resultsContent")
        .innerHTML = "";
}

//
// Run selected query
//
function runQuery(type)
{
    const results =
        document.getElementById(
            "resultsContent"
        );


    //
    // Temporary result for testing
    //
    if (type === "thithi")
{
    const month =
        document.getElementById(
            "sowramanamMonth"
        ).value;

    const year =
        document.getElementById(
            "year"
        ).value;

    const paksham =
        document.getElementById(
            "paksham"
        ).value;


    results.innerHTML =
        "<b>Thithi Query Parameters</b>" +
        "<br><br>" +
        "Sowramanam Month: " +
        "<b>" + month + "</b>" +
        "<br>" +
        "Year: " +
        "<b>" + year + "</b>" +
        "<br>" +
        "Paksham: " +
        "<b>" + paksham + "</b>";
}


    if (type === "date")
    {
        const value =
            document.getElementById(
                "calendarDate"
            ).value;

        results.innerHTML =
            "Calendar date selected: <b>" +
            value +
            "</b>";
    }


    if (type === "nakshatram")
    {
        const value =
            document.getElementById(
                "nakshatram"
            ).value;

        results.innerHTML =
            "Nakshatram selected: <b>" +
            value +
            "</b>";
    }
}
