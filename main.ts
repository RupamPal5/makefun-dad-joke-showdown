// Dad Joke Showdown entry: the program writes one joke to /output/entry.txt.
// The joke is at most 200 characters of UTF-8 text.
import { mkdirSync, writeFileSync } from 'node:fs';

// Dad Joke Showdown entry: the program writes one joke to /output/entry.txt.
// The joke is at most 200 characters of UTF-8 text.
const joke = 'I was wondering why the frisbee was getting bigger, then it hit me!';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', joke);
