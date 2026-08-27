//
// Wait until page has loaded
//

//
// Temporary month lists
// Later these will come from master files
//

const sowramanamMonths =
[
    "Chaitra",
    "Vaishakha",
    "Jyeshtha",
    "Ashadha",
    "Shravana",
    "Bhadrapada",
    "Ashwin",
    "Kartika",
    "Margashirsha",
    "Pausha",
    "Magha",
    "Phalguna"
];

const chaandramaanamMonths =
[
    "Chaitra",
    "Vaishakha",
    "Jyeshtha",
    "Ashadha",
    "Shravana",
    "Bhadrapada",
    "Ashwin",
    "Kartika",
    "Margashirsha",
    "Pausha",
    "Magha",
    "Phalguna"
];


//
// Build the month dropdown
//
function populateMonthDropdown(
    selectId,
    monthTypeId
)
{
    const monthType =
        document.getElementById(
            monthTypeId
        ).value;

    const monthSelect =
        document.getElementById(
            selectId
        );

    monthSelect.innerHTML =
        '<option value="">Select Month</option>';

    let months;

    if (monthType === "chaandramaanam")
    {
        months = chaandramaanamMonths;
    }
    else
    {
        months = sowramanamMonths;
    }

    months.forEach(
        function(month)
        {
            const option =
                document.createElement("option");

            option.value = month;
            option.textContent = month;

            monthSelect.appendChild(option);
        }
    );
}


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

    <label for="thithiMonthType">
        Chaandramaanam/Sowramanam
    </label>

    <select id="thithiMonthType">

        <option value="sowramanam">
            Sowramanam
        </option>

        <option value="chaandramaanam">
            Chaandramaanam
        </option>

    </select>

</div>


<div class="formRow">

    <label for="thithiMonth">
        Month
    </label>

    <select id="thithiMonth">

        <option value="">
            Select Month
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
        // Set up Thithi month selection
//
document
    .getElementById("thithiMonthType")
    .addEventListener(
        "change",
        function()
        {
            populateMonthDropdown(
                "thithiMonth",
                "thithiMonthType"
            );
        }
    );

populateMonthDropdown(
    "thithiMonth",
    "thithiMonthType"
);
    }
//


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

            <div class="dateHint">
            Tip: Click the calendar icon on the right to select a date.
            </div>



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
if (type === "nakshatram")
{
    form.innerHTML =
    `
        <h2>Query by Nakshatram</h2>

        <div class="formRow">

    <label for="nakshatramMonthType">
        Chaandramaanam/Sowramanam
    </label>

    <select id="nakshatramMonthType">

        <option value="sowramanam">
            Sowramanam
        </option>

        <option value="chaandramaanam">
            Chaandramaanam
        </option>

    </select>

</div>


<div class="formRow">

    <label for="nakshatramMonth">
        Month
    </label>

    <select id="nakshatramMonth">

        <option value="">
            Select Month
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
    //
// Set up Nakshatram month selection
//
document
    .getElementById("nakshatramMonthType")
    .addEventListener(
        "change",
        function()
        {
            populateMonthDropdown(
                "nakshatramMonth",
                "nakshatramMonthType"
            );
        }
    );

populateMonthDropdown(
    "nakshatramMonth",
    "nakshatramMonthType"
);
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
    const monthType =
    document.getElementById(
        "thithiMonthType"
    ).value;

const month =
    document.getElementById(
        "thithiMonth"
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
        "Chaandramaanam/Sowramanam: " +
        "<b>" + monthType + "</b>" +
        "<br>" +
        "Month: " +
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


    //
// Temporary result for Nakshatram
//
if (type === "nakshatram")
{
    const monthType =
    document.getElementById(
        "nakshatramMonthType"
    ).value;

const month =
    document.getElementById(
        "nakshatramMonth"
    ).value;

    const year =
        document.getElementById(
            "nakshatramYear"
        ).value;

    const nakshatram =
        document.getElementById(
            "nakshatram"
        ).value;


    results.innerHTML =
        "<b>Nakshatram Parameters</b>" +
        "<br><br>" +
        "Chaandramaanam/Sowramanam: " +
        "<b>" + monthType + "</b>" +
        "<br>" +
        "Month: " +
        "<b>" + month + "</b>" +
        "<br>" +
        "Year: " +
        "<b>" + year + "</b>" +
        "<br>" +
        "Nakshatram: " +
        "<b>" + nakshatram + "</b>";
}
}
