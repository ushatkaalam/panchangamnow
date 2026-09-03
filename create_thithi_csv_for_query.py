#create_thithi_csv_for_query
import csv


# ============================================================
# THITHI DATA
# ============================================================

thithi_data = {
    "PRA": {
        "en": "Prathama",
        "sa": "प्रथमा",
        "ta": "பிரதமை",
        "te": "ప్రథమ",
        "ka": "ಪ್ರಥಮೆ"
    },
    "DWI": {
        "en": "Dwitheeya",
        "sa": "द्वितीया",
        "ta": "த்விதியை",
        "te": "ద్వితీయ",
        "ka": "ದ್ವಿತೀಯೆ"
    },
    "TRU": {
        "en": "Trutheeya",
        "sa": "तृतीया",
        "ta": "திருதியை",
        "te": "తృతీయ",
        "ka": "ತೃತೀಯೆ"
    },
    "CHA": {
        "en": "Chathurthi",
        "sa": "चतुर्थी",
        "ta": "சதுர்த்தி",
        "te": "చతుర్థి",
        "ka": "ಚತುರ್ಥಿ"
    },
    "PAN": {
        "en": "Panchami",
        "sa": "पञ्चमी",
        "ta": "பஞ்சமி",
        "te": "పంచమి",
        "ka": "ಪಂಚಮಿ"
    },
    "SHA": {
        "en": "Shashti",
        "sa": "षष्ठी",
        "ta": "ஷஷ்டி",
        "te": "షష్ఠి",
        "ka": "ಷಷ್ಠಿ"
    },
    "SAP": {
        "en": "Sapthami",
        "sa": "सप्तमी",
        "ta": "சப்தமி",
        "te": "సప్తమి",
        "ka": "ಸಪ್ತಮಿ"
    },
    "ASH": {
        "en": "Ashtami",
        "sa": "अष्टमी",
        "ta": "அஷ்டமி",
        "te": "అష్టమి",
        "ka": "ಅಷ್ಟಮಿ"
    },
    "NAV": {
        "en": "Navami",
        "sa": "नवमी",
        "ta": "நவமி",
        "te": "నవమి",
        "ka": "ನವಮಿ"
    },
    "DAS": {
        "en": "Dashami",
        "sa": "दशमी",
        "ta": "தசமி",
        "te": "దశమి",
        "ka": "ದಶಮಿ"
    },
    "EKA": {
        "en": "Ekadashi",
        "sa": "एकादशी",
        "ta": "ஏகாதசி",
        "te": "ఏకాదశి",
        "ka": "ಏಕಾದಶಿ"
    },
    "DWA": {
        "en": "Dwadashi",
        "sa": "द्वादशी",
        "ta": "த்வாதசி",
        "te": "ద్వాదశి",
        "ka": "ದ್ವಾದಶಿ"
    },
    "TRY": {
        "en": "Tryodashi",
        "sa": "त्रयोदशी",
        "ta": "திரயோதசி",
        "te": "త్రయోదశి",
        "ka": "ತ್ರಯೋದಶಿ"
    },
    "CHD": {
        "en": "Chathurdashi",
        "sa": "चतुर्दशी",
        "ta": "சதுர்த்தசி",
        "te": "చతుర్దశి",
        "ka": "ಚತುರ್ಧಶಿ"
    },
    "POU": {
        "en": "Pournamaasi",
        "sa": "पूर्णिमा",
        "ta": "பௌர்ணமி",
        "te": "పౌర్ణమి",
        "ka": "ಪೌರ್ಣಮಿ"
    },
    "AMA": {
        "en": "Amaavaasya",
        "sa": "अमावास्या",
        "ta": "அமாவாசை",
        "te": "అమావాస్య",
        "ka": "ಅಮಾವಾಸ್ಯೆ"
    }
}


# ============================================================
# CREATE THITHI CSV
# ============================================================

def create_thithi_csv(filename):
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

        for code, data in thithi_data.items():

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

    create_thithi_csv("thithi_dropdown.csv")

    print("Created: thithi_dropdown.csv")
