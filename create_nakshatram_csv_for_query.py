#create_nakshatram_csv_for_query
import csv


# ============================================================
# NAKSHATRAM DATA
# ============================================================

nakshatram_data = {
"KRU": {"en": "Krutthika", "sa": "कृत्तिका", "ta": "கிருத்திகை", "te": "కృత్తిక", "ka": "ಕೃತ್ತಿಕಾ"},
"ROH": {"en": "Rohini", "sa": "रोहिणी", "ta": "ரோகிணி", "te": "రోహిణి", "ka": "ರೋಹಿಣಿ"},
"MRU": {"en": "Mrugasheersham", "sa": "मृगशीर्ष", "ta": "மிருகசீரிடம்", "te": "మృగశిర", "ka": "ಮೃಗಶಿರ"},
"AAR": {"en": "Aardra", "sa": "आर्द्रा", "ta": "திருவாதிரை", "te": "ఆర్ద్ర", "ka": "ಆರ್ದ್ರ"},
"PUN": {"en": "Punarvasu", "sa": "पुनर्वसु", "ta": "புனர்பூசம்", "te": "పునర్వసు", "ka": "ಪುನರ್ವಸು"},
"PUS": {"en": "Pushya", "sa": "पुष्य", "ta": "பூசம்", "te": "పుష్యమి", "ka": "ಪುಷ್ಯ"},
"ASR": {"en": "Ashresha", "sa": "आश्लेषा", "ta": "ஆயில்யம்", "te": "ఆశ్లేష", "ka": "ಆಶ್ಲೇಷಾ"},
"MAG": {"en": "Magha", "sa": "मघा", "ta": "மகம்", "te": "మఘ", "ka": "ಮಘಾ"},
"PPH": {"en": "Poorvaphalguni", "sa": "पूर्वफल्गुनी", "ta": "பூரம்", "te": "పూర్వ ఫల్గుని", "ka": "ಪೂರ್ವ ಫಲ್ಗುಣಿ"},
"UPH": {"en": "Uttaraphalguni", "sa": "उत्तरफल्गुनी", "ta": "உத்திரம்", "te": "ఉత్తర ఫల్గుని", "ka": "ಉತ್ತರ ಫಲ್ಗುಣಿ"},
"HAS": {"en": "Hasta", "sa": "हस्त", "ta": "ஹஸ்தம்", "te": "హస్త", "ka": "ಹಸ್ತ"},
"CHI": {"en": "Chitra", "sa": "चित्रा", "ta": "சித்திரை", "te": "చిత్ర", "ka": "ಚಿತ್ರಾ"},
"SWA": {"en": "Swaathi", "sa": "स्वाती", "ta": "சுவாதி", "te": "స్వాతి", "ka": "ಸ್ವಾತಿ"},
"VIS": {"en": "Vishaakha", "sa": "विशाखा", "ta": "விசாகம்", "te": "విశాఖ", "ka": "ವಿಶಾಖಾ"},
"ANU": {"en": "Anuradha", "sa": "अनुराधा", "ta": "அனுஷம்", "te": "అనూరాధ", "ka": "ಅನುರಾಧಾ"},
"JYE": {"en": "Jyeshtaa", "sa": "ज्येष्ठा", "ta": "கேட்டை", "te": "జ్యేష్ఠ", "ka": "ಜ್ಯೇಷ್ಠಾ"},
"MUL": {"en": "Mula", "sa": "मूल", "ta": "மூலம்", "te": "మూల", "ka": "ಮೂಲ"},
"PVS": {"en": "Poorvaashada", "sa": "पूर्वाषाढा", "ta": "பூராடம்", "te": "పూర్వాషాఢ", "ka": "ಪೂರ್ವಾಷಾಢಾ"},
"UAS": {"en": "Uttaraashada", "sa": "उत्तराषाढा", "ta": "உத்திராடம்", "te": "ఉత్తరాషాఢ", "ka": "ಉತ್ತರಾಷಾಢಾ"},
"SHR": {"en": "Shravana", "sa": "श्रवण", "ta": "திருவோணம்", "te": "శ్రవణం", "ka": "ಶ್ರವಣ"},
"SVT": {"en": "Shravishta", "sa": "धनिष्ठा", "ta": "அவிட்டம்", "te": "ధనిష్ఠ", "ka": "ಧನಿಷ್ಠಾ"},
"STB": {"en": "Shatabhishak", "sa": "शतभिषा", "ta": "சதயம்", "te": "శతభిషం", "ka": "ಶತಭಿಷಾ"},
"PPP": {"en": "Poorvaproshtapada", "sa": "पूर्वभाद्रपदा", "ta": "பூரட்டாதி", "te": "పూర్వ భాద్రపద", "ka": "ಪೂರ್ವ ಭಾದ್ರಪದ"},
"UPP": {"en": "Uttaraproshtapada", "sa": "उत्तरभाद्रपदा", "ta": "உத்திரட்டாதி", "te": "ఉత్తర భాద్రపద", "ka": "ಉತ್ತರ ಭಾದ್ರಪದ"},
"REV": {"en": "Revathi", "sa": "रेवती", "ta": "ரேவதி", "te": "రేవతి", "ka": "ರೇವತಿ"},
"ASH": {"en": "Ashwini", "sa": "अश्विनी", "ta": "அஸ்வினி", "te": "అశ్విని", "ka": "ಅಶ್ವಿನಿ"},
"BHA": {"en": "Apabharani", "sa": "भरणी", "ta": "பரணி", "te": "భరణి", "ka": "ಭರಣಿ"}
}




# ============================================================
# CREATE NAKSHATRAM CSV
# ============================================================

def create_nakshatram_csv(filename):
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

        for code, data in nakshatram_data.items():

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

    create_nakshatram_csv("nakshatram_dropdown.csv")

    print("Created: nakshatram_dropdown.csv")
