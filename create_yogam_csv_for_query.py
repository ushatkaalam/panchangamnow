#create_yogam_csv_for_query
import csv


# ============================================================
# YOGAM DATA
# ============================================================

yogam_data = {
"VIS": {"en": "Vishkambhaha", "sa": "विष्कम्भ", "ta": "விஷ்கம்ப", "te": "విష్కంభ", "ka": "ವಿಷ್ಕಂಭ"},
"PRE": {"en": "Preethihi", "sa": "प्रीति", "ta": "ப்ரீதி", "te": "ప్రీతి", "ka": "ಪ್ರೀತಿ"},
"AYU": {"en": "Aayushmaan", "sa": "आयुष्मान्", "ta": "ஆயுஷ்மான்", "te": "ఆయుష్మాన్", "ka": "ಆಯುಷ್ಮಾನ್"},
"SOW": {"en": "Sowbhagyaha", "sa": "सौभाग्य", "ta": "சௌபாக்கியம்", "te": "సౌభాగ్యం", "ka": "ಸೌಭಾಗ್ಯ"},
"SHO": {"en": "Shobhanaha", "sa": "शोभन", "ta": "சோபனம்", "te": "శోభన", "ka": "ಶೋಭನ"},
"ATH": {"en": "Athigandaha", "sa": "अतिगण्ड", "ta": "அதிகண்டம்", "te": "అతిగండ", "ka": "ಅತಿಗಂಡ"},
"SUK": {"en": "Sukarma", "sa": "सुकर्मा", "ta": "சுகர்மா", "te": "సుకర్మ", "ka": "ಸುಕರ್ಮ"},
"DHU": {"en": "Dhruthihi", "sa": "धृति", "ta": "த்ருதி", "te": "ధృతి", "ka": "ಧೃತಿ"},
"SHL": {"en": "Shoolaha", "sa": "शूल", "ta": "சூலம்", "te": "శూల", "ka": "ಶೂಲ"},
"GAN": {"en": "Gandaha", "sa": "गण्ड", "ta": "கண்டம்", "te": "గండ", "ka": "ಗಂಡ"},
"VRU": {"en": "Vruddhihi", "sa": "वृद्धि", "ta": "விருத்தி", "te": "వృద్ధి", "ka": "ವೃದ್ಧಿ"},
"DHR": {"en": "Dhruvaha", "sa": "ध्रुव", "ta": "துருவம்", "te": "ధృవ", "ka": "ಧ್ರುವ"},
"VYA": {"en": "Vyaaghaathaha", "sa": "व्याघात", "ta": "வியாகாதம்", "te": "వ్యాఘాత", "ka": "ವ್ಯಾಘಾತ"},
"HAR": {"en": "Harshanaha", "sa": "हर्षण", "ta": "ஹர்ஷணம்", "te": "హర్షణ", "ka": "ಹರ್ಷಣ"},
"VAJ": {"en": "Vajram", "sa": "वज्र", "ta": "வஜ்ரம்", "te": "వజ్ర", "ka": "ವಜ್ರ"},
"SDH": {"en": "Siddhihi", "sa": "सिद्धि", "ta": "சித்தி", "te": "సిద్ధి", "ka": "ಸಿದ್ಧಿ"},
"VYT": {"en": "Vyateepaath", "sa": "व्यतीपात", "ta": "வ்யதீபாதம்", "te": "వ్యతిపాత", "ka": "ವ್ಯತೀಪಾತ"},
"VAR": {"en": "Vareeyaan", "sa": "वरियन", "ta": "வரியானம்", "te": "వరియాణ", "ka": "ವರಿಯಾಣ"},
"PAR": {"en": "Parighaha", "sa": "परिघ", "ta": "பரிகம்", "te": "పరిఘ", "ka": "ಪರಿಘ"},
"SHI": {"en": "Shivaha", "sa": "शिव", "ta": "சிவம்", "te": "శివ", "ka": "ಶಿವ"},
"SID": {"en": "Siddhaha", "sa": "सिद्ध", "ta": "சித்த", "te": "సిద్ధ", "ka": "ಸಿದ್ಧ"},
"SDY": {"en": "Saadhyaha", "sa": "साध्य", "ta": "சாத்தியம்", "te": "సాధ్య", "ka": "ಸಾಧ್ಯ"},
"SHB": {"en": "Shubhaha", "sa": "शुभ", "ta": "சுபம்", "te": "శుభ", "ka": "ಶುಭ"},
"SHK": {"en": "Shuklaha", "sa": "शुक्ल", "ta": "சுக்லம்", "te": "శుక్ల", "ka": "ಶುಕ್ಲ"},
"BRA": {"en": "Braahmaha", "sa": "ब्रह्म", "ta": "பிரஹ்ம", "te": "బ్రహ్మ", "ka": "ಬ್ರಹ್ಮ"},
"IND": {"en": "Indraha/Mahendraha", "sa": "इन्द्र", "ta": "இந்திர", "te": "ఇంద్ర", "ka": "ಇಂದ್ರ"},
"VYD": {"en": "Vydruthihi", "sa": "वैधृति", "ta": "வைத்ருதி", "te": "వైధృతి", "ka": "ವೈಧೃತಿ"}
}




# ============================================================
# CREATE YOGAM CSV
# ============================================================

def create_yogam_csv(filename):
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

        for code, data in yogam_data.items():

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

    create_yogam_csv("yogam_dropdown.csv")

    print("Created: yogam_dropdown.csv")
