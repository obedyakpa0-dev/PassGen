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

Quick Start

```bash
npm install -g passgen
passgen generate
```

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

Options Reference

| Option | Short | Description | Example |
|--------|-------|-------------|---------|
| Length | `-l` | Set password length | `-l 20` |
| Number of passwords | `-n` | Generate multiple passwords | `-n 5` |
| No symbols | `--no-symbols` | Exclude special characters | `passgen generate --no-symbols` |
| Numbers only | `--numbers-only` | Only numeric passwords | `passgen generate --numbers-only` |
| Save to file | `--save` | Export to file | `--save passwords.txt` |

Global Installation

After `npm link`, you can use `passgen` from anywhere in your terminal without needing to specify the full path.

Common Use Cases

For security: Strong 20-char password with symbols

passgen generate -l 20

For PIN codes: Numbers only

passgen generate -l 6 --numbers-only

Batch generation: 10 passwords saved to file

passgen generate -n 10 --save passwords.txt

Example

passgen generate -l 16

Output:

Generated Password:
K8@qLm2#RtY9!pXz

Strength: Strong 💪

Technologies Used

- Node.js
- Commander.js
- clipboardy

Author

Obed Yakpa

License

MIT License
