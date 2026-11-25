const line = "Powered off. Recharging counts as a personality.";
const args = process.argv.slice(2);

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line;
}

function hasFlag(flag: string): boolean {
  return args.includes(flag);
}

function printUsage(): void {
  console.error("Usage: node main.ts [--shout] [--help]");
}

function main(): void {
  const args = process.argv.slice(2);
  const unknownArgs = args.filter((arg) => arg !== "--shout" && arg !== "--help");

  if (hasFlag("--help")) {
    printUsage();
    return;
  }

  if (unknownArgs.length > 0) {
    console.error(`Unknown argument: ${unknownArgs[0]}`);
    printUsage();
    process.exitCode = 2;
    return;
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
