# PDF-cracker
pdf password crack

command : python3 pdf_cracker.py

📜 PDF Password Cracker

This Python-based tool automates the process of cracking password-protected PDF files using John the Ripper and its companion script pdf2john.py.
It extracts the encrypted hash from the PDF, runs it through a dictionary-based attack, and reveals the password if found.

⚠️ Disclaimer: This tool is provided for educational and ethical security research purposes only. Do not use it on files you do not own or have explicit permission to test.

✨ Features

Automatically downloads pdf2john.py if missing.

Extracts PDF password hashes for cracking.

Uses rockyou.txt or any custom wordlist for dictionary attacks.

Displays cracked passwords directly in the terminal.

Works on Linux and other UNIX-based systems with John the Ripper installed.

🛠️ Technologies Used
1. Python 3

Core scripting language used for automation and orchestration.

Modules used:

os → File handling and path checks.

subprocess → Running system commands and John the Ripper.

argparse → CLI argument parsing.

logging → Logging and error handling.

pyhanko → PDF parsing and encryption metadata extraction.

2. pdf2john.py

Part of the John the Ripper Jumbo suite.

Extracts encryption-related information (hash) from PDF files.

Converts the PDF into a format readable by John the Ripper.

3. John the Ripper

Open-source password cracking tool.

Performs dictionary-based or brute-force attacks on PDF hashes.

In this project, it uses rockyou.txt for dictionary cracking.

4. rockyou.txt

Popular password dictionary used for testing password strength.

Located at /usr/share/wordlists/rockyou.txt on most Kali/ParrotOS systems.

5. pyhanko

Python library for working with PDFs.

Used here to analyze the PDF encryption algorithm, key length, revision, and permissions.

Helps in building custom hash formats for advanced cracking scenarios.

📂 Project Structure
pdf_cracker/
│
├── pdf_cracker.py       # Main script for extracting and cracking PDF passwords
├── pdf2john.py          # Extracts PDF password hashes (auto-downloaded if missing)
├── hash.txt             # Extracted hash file for John the Ripper
└── README.md            # Project description and usage instructions

🚀 Usage

Install Dependencies

sudo apt update
sudo apt install john
pip install pyhanko==0.20.1


Run the Script

python3 pdf_cracker.py


View Results

john --show --format=PDF hash.txt

⚖️ License

This project is released under the MIT License.
You are free to use, modify, and distribute it for ethical and legal purposes.

