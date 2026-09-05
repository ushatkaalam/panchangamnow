#create_chandramanam_masam_csv_for_query
import csv


# ============================================================
# chandramanam MASAM DATA
# ============================================================

chandramanam_masam_data = {
    "CHA": {"en": "Chaitra", "sa": "चैत्र", "ta": "சித்திரை", "te": "చైత్రం", "ka": "ಚೈತ್ರ"},
    "VAI": {"en": "Vaishaakha", "sa": "वैशाख", "ta": "வைகாசி", "te": "వైశాఖం", "ka": "ವೈಶಾಖ"},
    "JYE": {"en": "Jyeshta", "sa": "ज्येष्ठ", "ta": "ஆனி", "te": "జ్యేష్ఠం", "ka": "ಜ್ಯೇಷ್ಠ"},
    "AAS": {"en": "Aashaada", "sa": "आषाढ", "ta": "ஆடி", "te": "ఆషాఢం", "ka": "ಆಷಾಢ"},
    "SHR": {"en": "Shraavan", "sa": "श्रावण", "ta": "ஆவணி", "te": "శ్రావణం", "ka": "ಶ್ರಾವಣ"},
    "BHA": {"en": "Bhaadrapada", "sa": "भाद्रपद", "ta": "புரட்டாசி", "te": "భాద్రపదం", "ka": "ಭಾದ್ರಪದ"},
    "ASV": {"en": "Aashvayuja", "sa": "आश्वयुज", "ta": "ஐப்பசி", "te": "ఆశ్వయుజం", "ka": "ಆಶ್ವಯುಜ"},
    "KAR": {"en": "Kaarthik", "sa": "कार्तिक", "ta": "கார்த்திகை", "te": "కార్తీకం", "ka": "ಕಾರ್ತಿಕ"},
    "MGS": {"en": "Maargasheersha", "sa": "मार्गशीर्ष", "ta": "மார்கழி", "te": "మార్గశిరం", "ka": "ಮಾರ್ಗಶಿರ"},
    "PAU": {"en": "Pausha", "sa": "पौष", "ta": "தை", "te": "పౌషం", "ka": "ಪೌಷ"},
    "MAG": {"en": "Maagha", "sa": "माघ", "ta": "மாசி", "te": "మాఘం", "ka": "ಮಾಘ"},
    "PHA": {"en": "Phaalguna", "sa": "फाल्गुन", "ta": "பங்குனி", "te": "ఫాల్గుణం", "ka": "ಫಾಲ್ಗುಣ"},

    "CH1": {"en": "Adhika Chaitra", "sa": "अधिक चैत्र", "ta": "அதிக சித்திரை", "te": "అధిక చైత్రం", "ka": "ಅಧಿಕ ಚೈತ್ರ"},
    "VA1": {"en": "Adhika Vaishaakha", "sa": "अधिक वैशाख", "ta": "அதிக வைகாசி", "te": "అధిక వైశాఖం", "ka": "ಅಧಿಕ ವೈಶಾಖ"},
    "JY1": {"en": "Adhika Jyeshta", "sa": "अधिक ज्येष्ठ", "ta": "அதிக ஆனி", "te": "అధిక జ్యేష్ఠం", "ka": "ಅಧಿಕ ಜ್ಯೇಷ್ಠ"},
    "AA1": {"en": "Adhika Aashaada", "sa": "अधिक आषाढ", "ta": "அதிக ஆடி", "te": "అధిక ఆషాఢం", "ka": "ಅಧಿಕ ಆಷಾಢ"},
    "SH1": {"en": "Adhika Shraavan", "sa": "अधिक श्रावण", "ta": "அதிக ஆவணி", "te": "అధిక శ్రావణం", "ka": "ಅಧಿಕ ಶ್ರಾವಣ"},
    "BH1": {"en": "Adhika Bhaadrapada", "sa": "अधिक भाद्रपद", "ta": "அதிக புரட்டாசி", "te": "అధిక భాద్రపదం", "ka": "ಅಧಿಕ ಭಾದ್ರಪದ"},
    "AS1": {"en": "Adhika Aashvayuja", "sa": "अधिक आश्वयुज", "ta": "அதிக ஐப்பசி", "te": "అధిక ఆశ్వయుజం", "ka": "ಅಧಿಕ ಆಶ್ವಯುಜ"},
    "KA1": {"en": "Adhika Kaarthik", "sa": "अधिक कार्तिक", "ta": "அதிக கார்த்திகை", "te": "అధిక కార్తీకం", "ka": "ಅಧಿಕ ಕಾರ್ತಿಕ"},
    "MG1": {"en": "Adhika Maargasheersha", "sa": "अधिक मार्गशीर्ष", "ta": "அதிக மார்கழி", "te": "అధిక మార్గశిరం", "ka": "ಅಧಿಕ ಮಾರ್ಗಶಿರ"},
    "PA1": {"en": "Adhika Pausha", "sa": "अधिक पौष", "ta": "அதிக தை", "te": "అధిక పౌషం", "ka": "ಅಧಿಕ ಪೌಷ"},
    "MA1": {"en": "Adhika Maagha", "sa": "अधिक माघ", "ta": "அதிக மாசி", "te": "అధిక మాఘం", "ka": "ಅಧಿಕ ಮಾಘ"},
    "PH1": {"en": "Adhika Phaalguna", "sa": "अधिक फाल्गुन", "ta": "அதிக பங்குனி", "te": "అధిక ఫాల్గుణం", "ka": "ಅಧಿಕ ಫಾಲ್ಗುಣ"}
}




# ============================================================
# CREATE chandramanam MASAM CSV
# ============================================================

def create_chandramanam_masam_csv(filename):
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

        for code, data in chandramanam_masam_data.items():

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

    create_chandramanam_masam_csv("chandramanam_masam_dropdown.csv")

    print("Created: chandramanam_masam_dropdown.csv")
