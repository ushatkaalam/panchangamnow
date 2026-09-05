#create_sowramanam_masam_csv_for_query
import csv


# ============================================================
# SOWRAMANAM MASAM DATA
# ============================================================

sowramanam_masam_data = {
"MES": {"en": "Mesham", "sa": "मेष", "ta": "மேஷம்", "te": "మేషం", "ka": "ಮೇಷ"},
"VRU": {"en": "Vrushabham", "sa": "वृषभ", "ta": "ரிஷபம்", "te": "వృషభం", "ka": "ವೃಷಭ"},
"MIT": {"en": "Mithunam", "sa": "मिथुन", "ta": "மிதுனம்", "te": "మిథునం", "ka": "ಮಿಥುನ"},
"KTK": {"en": "Katakam", "sa": "कर्क", "ta": "கடகம்", "te": "కర్కాటకం", "ka": "ಕಟಕ"},
"SIM": {"en": "Simham", "sa": "सिंह", "ta": "சிம்மம்", "te": "సింహం", "ka": "ಸಿಂಹ"},
"KNY": {"en": "Kanya", "sa": "कन्या", "ta": "கன்னி", "te": "కన్యా", "ka": "ಕನ್ಯಾ"},
"TUL": {"en": "Tulam", "sa": "तुला", "ta": "துலாம்", "te": "తులా", "ka": "ತುಲಾ"},
"VCH": {"en": "Vrushchikam", "sa": "वृश्चिक", "ta": "விருச்சிகம்", "te": "వృశ్చికం", "ka": "ವೃಶ್ಚಿಕ"},
"DHA": {"en": "Dhanus", "sa": "धनुस्", "ta": "தனுசு", "te": "ధనుస్సు", "ka": "ಧನುಸ್ಸು"},
"MAK": {"en": "Makaram", "sa": "मकर", "ta": "மகரம்", "te": "మకరం", "ka": "ಮಕರ"},
"KUM": {"en": "Kumbham", "sa": "कुम्भ", "ta": "கும்பம்", "te": "కుంభం", "ka": "ಕುಂಭ"},
"MNM": {"en": "Meenum", "sa": "मीन", "ta": "மீனம்", "te": "మీనం", "ka": "ಮೀನ"}
}




# ============================================================
# CREATE SOWRAMANAM MASAM CSV
# ============================================================

def create_sowramanam_masam_csv(filename):
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

        for code, data in sowramanam_masam_data.items():

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

    create_sowramanam_masam_csv("sowramanam_masam_dropdown.csv")

    print("Created: sowramanam_masam_dropdown.csv")
