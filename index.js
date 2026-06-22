#!/usr/bin/env node

const { Command } = require("commander");
const clipboardy = require("clipboardy").default;
const fs = require("fs")

const program = new Command();

function generatePassword(password) {
  if (password.length < 8) {
    return "WEAK"
  } else if (password.length < 12) {
    return "MEDIUM"
  }
  else {
    return "STRONG"
  }
  
}



program
    .name("passgen")
    .description("Generate secure password")
    .version("1.0.0");

program
    .command("generate")
    .alias("g")
    .description("Generate password")
    .option("-l, --length <number>", "Password length", "12")
    .option("--no-symbols", "Excludes symbols")
    .option("--numbers-only", "Use only numbers")
    .option("-C, --copy", "Copy password to clipboard")
    .option("-n --number <count>", "Number of password")
    .option("-s --save <filename>", "Save password file")
    .action((options) => {
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

      if (options.noSymbols) {
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      }

      if (options.numbersOnly) {
        chars = "0123456789"
      }

      let output = "";
      const count = parseInt(options.number);
      for (let j = 1; j <= count; j++){
        let password = "";
        for (let i = 0; i < parseInt(options.length); i++) {
          password += chars.charAt(
            Math.floor(Math.random() * chars.length)
          );
        }

        console.log(`\n ${j}. ${password}`);
        const strength = generatePassword(password)
        console.log(`Strength:${strength}`)
        output += `${j}.${password}\n`;

        if (options.save) {
          fs.writeFileSync(options.save, output);

          console.log(`\nPassword saved to ${options.save}`)
        }

          if (options.copy) {
            clipboardy.writeSync(password);
            console.log("Password copied to clipboard")
          }
        }

    });
program.parse();
