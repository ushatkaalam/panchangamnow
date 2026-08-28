//
// Panchangam Query Application
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
// CSV files
// These files are one level above the query folder.
// All date/time data in the CSV files is UTC.
//

const DATA_FILES =
{
    thithi:
        "../data_thithi.csv",

    nakshatram:
        "../data_nakshatram.csv",

    yogam:
        "../data_yogam.csv",

    karanam:
        "../data_karanam.csv"
};



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


        //
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
                    Tip: Click the calendar icon on the right
                    to select a date.
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
// Convert CSV text into an array of objects
//
function parseCSV(text)
{
    const lines =
        text
            .trim()
            .split(/\r?\n/);

    if (lines.length < 2)
    {
        return [];
    }


    const headers =
        lines[0]
            .split(",")
            .map(
                function(header)
                {
                    return header.trim();
                }
            );


    const rows = [];


    for (let i = 1; i < lines.length; i++)
    {
        if (lines[i].trim() === "")
        {
            continue;
        }


        const values =
            lines[i]
                .split(",");


        const row = {};


        headers.forEach(
            function(header, index)
            {
                row[header] =
                    values[index] !== undefined
                        ? values[index].trim()
                        : "";
            }
        );


        rows.push(row);
    }


    return rows;
}



//
// Create a UTC Date from a CSV date and time
//
// Example:
// date = 20260715
// hour = 6
// mins = 21
//
// The returned Date represents:
//
// 2026-07-15 06:21 UTC
//
function csvUTCDate(
    dateValue,
    hourValue,
    minsValue
)
{
    const dateString =
        String(dateValue)
            .trim();


    const year =
        Number(
            dateString.substring(0, 4)
        );

    const month =
        Number(
            dateString.substring(4, 6)
        ) - 1;

    const day =
        Number(
            dateString.substring(6, 8)
        );


    const hour =
        Number(hourValue);

    const mins =
        Number(minsValue);


    return new Date(
        Date.UTC(
            year,
            month,
            day,
            hour,
            mins,
            0,
            0
        )
    );
}



//
// Format a UTC Date in the user's timezone
//
function formatUserDateTime(date)
{
    const timeZone =
        Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone;


    return new Intl.DateTimeFormat(
        undefined,
        {
            timeZone: timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        }
    ).format(date);
}



//
// Get the user's timezone
//
function getUserTimeZone()
{
    return Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone;
}



//
// Determine whether a UTC interval overlaps
// the selected LOCAL calendar date.
//
// The CSV data is UTC.
// The selected date is the user's local date.
//
function overlapsLocalDate(
    startDate,
    endDate,
    selectedDate
)
{
    const formatter =
        new Intl.DateTimeFormat(
            "en-CA",
            {
                timeZone:
                    getUserTimeZone(),
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }
        );


    const startLocalDate =
        formatter.format(startDate);

    const endLocalDate =
        formatter.format(endDate);


    //
    // The record overlaps the selected
    // local calendar date when its local
    // date range includes that date.
    //
    return (
        startLocalDate <= selectedDate &&
        endLocalDate >= selectedDate
    );
}



//
// Create a table
//
function createResultTable(
    title,
    headers,
    rows
)
{
    let html =
        "<h3>" +
        title +
        "</h3>";


    if (rows.length === 0)
    {
        html +=
            "<p>No data found for the selected date.</p>";

        return html;
    }


    html +=
        "<table class='queryResultTable'>";


    html += "<thead><tr>";


    headers.forEach(
        function(header)
        {
            html +=
                "<th>" +
                header +
                "</th>";
        }
    );


    html +=
        "</tr></thead>";


    html +=
        "<tbody>";


    rows.forEach(
        function(row)
        {
            html += "<tr>";


            row.forEach(
                function(value)
                {
                    html +=
                        "<td>" +
                        value +
                        "</td>";
                }
            );


            html += "</tr>";
        }
    );


    html +=
        "</tbody></table>";


    return html;
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
    // Existing temporary Thithi query
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


        return;
    }



    //
    // Calendar Date query
    //
    if (type === "date")
    {
        const selectedDate =
            document.getElementById(
                "calendarDate"
            ).value;


        //
        // Make sure a date was selected
        //
        if (!selectedDate)
        {
            results.innerHTML =
                "<b>Please select a calendar date.</b>";

            return;
        }


        //
        // Show a temporary loading message
        //
        results.innerHTML =
            "<b>Reading Panchangam data...</b>";


        //
        // Read all four CSV files
        //
        Promise.all(
            [
                fetch(DATA_FILES.thithi),
                fetch(DATA_FILES.nakshatram),
                fetch(DATA_FILES.yogam),
                fetch(DATA_FILES.karanam)
            ]
        )
        .then(
            function(responses)
            {
                //
                // Check all four responses
                //
                responses.forEach(
                    function(response)
                    {
                        if (!response.ok)
                        {
                            throw new Error(
                                "Unable to read CSV file: " +
                                response.url
                            );
                        }
                    }
                );


                return Promise.all(
                    responses.map(
                        function(response)
                        {
                            return response.text();
                        }
                    )
                );
            }
        )
        .then(
            function(csvTexts)
            {
                const thithiRows =
                    parseCSV(csvTexts[0]);

                const nakshatramRows =
                    parseCSV(csvTexts[1]);

                const yogamRows =
                    parseCSV(csvTexts[2]);

                const karanamRows =
                    parseCSV(csvTexts[3]);


                //
                // Process each dataset
                //
                const thithiResults =
                    processDateRows(
                        thithiRows,
                        "thithi"
                    );


                const nakshatramResults =
                    processDateRows(
                        nakshatramRows,
                        "nakshatram"
                    );


                const yogamResults =
                    processDateRows(
                        yogamRows,
                        "yogam"
                    );


                const karanamResults =
                    processDateRows(
                        karanamRows,
                        "karanam"
                    );


                //
                // Build result page
                //
                let html =
                    "<p>" +
                    "<b>Calendar Date:</b> " +
                    selectedDate +
                    "</p>";


                html +=
                    "<p>" +
                    "<b>Timezone:</b> " +
                    getUserTimeZone() +
                    "</p>";


                //
                // Thithi
                //
                html +=
                    createResultTable(
                        "Thithi",
                        [
                            "Paksham",
                            "Thithi",
                            "Started At",
                            "Ends At"
                        ],
                        thithiResults
                    );


                //
                // Nakshatram
                //
                html +=
                    createResultTable(
                        "Nakshatram",
                        [
                            "Nakshatram",
                            "Started At",
                            "Ends At"
                        ],
                        nakshatramResults
                    );


                //
                // Yogam
                //
                html +=
                    createResultTable(
                        "Yogam",
                        [
                            "Yogam",
                            "Started At",
                            "Ends At"
                        ],
                        yogamResults
                    );


                //
                // Karanam
                //
                html +=
                    createResultTable(
                        "Karanam",
                        [
                            "Karanam",
                            "Started At",
                            "Ends At"
                        ],
                        karanamResults
                    );


                results.innerHTML =
                    html;
            }
        )
        .catch(
            function(error)
            {
                console.error(error);


                results.innerHTML =
                    "<b>Error reading Panchangam data.</b>" +
                    "<br><br>" +
                    error.message;
            }
        );


        return;
    }



    //
    // Existing temporary Nakshatram query
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


        return;
    }
}



//
// Process one CSV dataset for the selected
// local calendar date.
//
function processDateRows(
    rows,
    type
)
{
    const selectedDate =
        document.getElementById(
            "calendarDate"
        ).value;


    const results = [];


    let startDateColumn;
    let endDateColumn;
    let startHourColumn;
    let startMinsColumn;
    let endHourColumn;
    let endMinsColumn;


    let valueColumn;
    let pakshamColumn = null;


    //
    // Identify columns for each CSV
    //
    if (type === "thithi")
    {
        startDateColumn =
            "thithi_start_date";

        endDateColumn =
            "thithi_end_date";

        startHourColumn =
            "thithi_start_hour";

        startMinsColumn =
            "thithi_start_mins";

        endHourColumn =
            "thithi_end_hour";

        endMinsColumn =
            "thithi_end_mins";

        valueColumn =
            "thithi_thithi";

        pakshamColumn =
            "thithi_paksham";
    }


    if (type === "nakshatram")
    {
        startDateColumn =
            "onakshatram_start_date";

        endDateColumn =
            "onakshatram_end_date";

        startHourColumn =
            "onakshatram_start_hour";

        startMinsColumn =
            "onakshatram_start_mins";

        endHourColumn =
            "onakshatram_end_hour";

        endMinsColumn =
            "onakshatram_end_mins";

        valueColumn =
            "onakshatram_nakshatram";
    }


    if (type === "yogam")
    {
        startDateColumn =
            "oyogam_start_date";

        endDateColumn =
            "oyogam_end_date";

        startHourColumn =
            "oyogam_start_hour";

        startMinsColumn =
            "oyogam_start_mins";

        endHourColumn =
            "oyogam_end_hour";

        endMinsColumn =
            "oyogam_end_mins";

        valueColumn =
            "oyogam_yogam";
    }


    if (type === "karanam")
    {
        startDateColumn =
            "okaranam_start_date";

        endDateColumn =
            "okaranam_end_date";

        startHourColumn =
            "okaranam_start_hour";

        startMinsColumn =
            "okaranam_start_mins";

        endHourColumn =
            "okaranam_end_hour";

        endMinsColumn =
            "okaranam_end_mins";

        valueColumn =
            "okaranam_karanam";
    }


    //
    // Process rows
    //
    rows.forEach(
        function(row)
        {
            const startDate =
                csvUTCDate(
                    row[startDateColumn],
                    row[startHourColumn],
                    row[startMinsColumn]
                );


            const endDate =
                csvUTCDate(
                    row[endDateColumn],
                    row[endHourColumn],
                    row[endMinsColumn]
                );


            //
            // Does this interval overlap
            // the selected LOCAL calendar date?
            //
            if (
                overlapsLocalDate(
                    startDate,
                    endDate,
                    selectedDate
                )
            )
            {
                const startDisplay =
                    formatUserDateTime(
                        startDate
                    );


                const endDisplay =
                    formatUserDateTime(
                        endDate
                    );


                if (type === "thithi")
                {
                    results.push(
                        [
                            row[pakshamColumn],
                            row[valueColumn],
                            startDisplay,
                            endDisplay
                        ]
                    );
                }
                else
                {
                    results.push(
                        [
                            row[valueColumn],
                            startDisplay,
                            endDisplay
                        ]
                    );
                }
            }
        }
    );


    return results;
}
