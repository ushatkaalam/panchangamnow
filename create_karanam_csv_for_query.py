#create_karanam_csv_for_query
import csv


# ============================================================
# KARANAM DATA
# ============================================================

karanam_data = {
"KIM": {"en": "Kimstughna", "sa": "किंस्तुघ्न", "ta": "கிம்ஸ்துக்ன", "te": "కింస్తుఘ్న", "ka": "ಕಿಂಸ್ತುಘ್ನ"},
"BAV": {"en": "Bavaha", "sa": "बव", "ta": "பவ", "te": "బవ", "ka": "ಬವ"},
"BAL": {"en": "Baalavaha", "sa": "बालव", "ta": "பாலவ", "te": "బాలవ", "ka": "ಬಾಲವ"},
"KOW": {"en": "Kowlavaha", "sa": "कौलव", "ta": "கௌலவ", "te": "కౌలవ", "ka": "ಕೌಲವ"},
"TAI": {"en": "Taithilaha", "sa": "तैतिल", "ta": "தைதில", "te": "తైతిల", "ka": "ತೈತಿಲ"},
"GAR": {"en": "Garaja", "sa": "गर", "ta": "கர", "te": "గర", "ka": "ಗರ"},
"VAN": {"en": "Vanijaha", "sa": "वणिज", "ta": "வணிக", "te": "వణిజ", "ka": "ವಣಿಜ"},
"VIS": {"en": "Vishtihi/Bhadra", "sa": "विष्टि", "ta": "விஷ்டி", "te": "విష్టి", "ka": "ವಿಷ್ಟಿ"},
"SHA": {"en": "Shakuni", "sa": "शकुनि", "ta": "சகுனி", "te": "శకుని", "ka": "ಶಕುನಿ"},
"CHA": {"en": "Chathushpaath", "sa": "चतुष्पाद", "ta": "சதுஷ்பாத", "te": "చతుష్పాద", "ka": "ಚತುಷ್ಪಾದ"},
"NAG": {"en": "Naaga", "sa": "नाग", "ta": "நாக", "te": "నాగ", "ka": "ನಾಗ"}
}




# ============================================================
# CREATE KARANAM CSV
# ============================================================

def create_karanam_csv(filename):
    fieldnames = [
        "id",
        "english",
        "sanskrit",
        "tamil",
        "telugu",
        "kannada"
    ]

    with open(
        filename,
        "w",
        newline="",
        encoding="utf-8-sig"
    ) as file:

        writer = csv.DictWriter(
            file,
            fieldnames=fieldnames
        )

        writer.writeheader()

        for code, data in karanam_data.items():

            writer.writerow({
                "id": code,
                "english": data["en"],
                "sanskrit": data["sa"],
                "tamil": data["ta"],
                "telugu": data["te"],
                "kannada": data["ka"]
            })


# ============================================================
# MAIN
# ============================================================

if __name__ == "__main__":

    create_karanam_csv("karanam_dropdown.csv")

    print("Created: karanam_dropdown.csv")
