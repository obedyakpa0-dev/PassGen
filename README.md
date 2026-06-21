PassGen 🔐

A simple and powerful Password Generator CLI built with Node.js.

Features

- Generate secure random passwords
- Custom password length
- Numbers-only mode
- No-symbols mode
- Password strength indicator
- Generate multiple passwords at once
- Save generated passwords to a file

Installation

Clone the repository:

git clone https://github.com/yourusername/passgen.git
cd passgen

Install dependencies:

npm install

Link globally:

npm link

Usage

Generate a password:

passgen generate

Generate a 20-character password:

passgen generate -l 20

Generate a password without symbols:

passgen generate --no-symbols

Generate a numbers-only password:

passgen generate --numbers-only

Generate 5 passwords:

passgen generate -n 5

Save passwords to a file:

passgen generate -l 20 -n 5 --save passwords.txt

Example

passgen generate -l 16

Output:

Generated Password:
K8@qLm2#RtY9!pXz

Strength: Strong 💪

Technologies Used

- Node.js
- Commander.js

Author

Obed Yakpa

License

MIT License
