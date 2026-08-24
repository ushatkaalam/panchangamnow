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
    // Get form container
    //
    const form =
        document.getElementById("queryForm");


    //
    // Create selected form
    //
    if (type === "thithi")
    {
        form.innerHTML =
        `
            <h2>Query by Thithi</h2>

            <div class="formRow">
                <label for="thithi">
                    Thithi
                </label>

                <select id="thithi">
                    <option value="">Select Thithi</option>
                    <option value="Prathama">
                        Prathama
                    </option>
                    <option value="Dwitiya">
                        Dwitiya
                    </option>
                    <option value="Tritiya">
                        Tritiya
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


    if (type === "nakshatram")
    {
        form.innerHTML =
        `
            <h2>Query by Nakshatram</h2>

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
        const value =
            document.getElementById(
                "thithi"
            ).value;

        results.innerHTML =
            "Thithi selected: <b>" +
            value +
            "</b>";
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
