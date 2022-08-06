# Kindle Clippings Cleaner
Simple JS Script to clean duplicated entries in "My Clippings.txt" of your Kindle. These seem to be created when quick-highlighting and changing the highlight afterwards.

What I basically do in my script is comparing the highlight areas and if they seem to highlight the same sentence (check is done by looking for overlapping line regions) only the latest of that series is being added.

As I didn't create a near-human intelligent AI, there are still slip-throughs (e.g. when correcting a highlight after already having highlighted other places) but I have found to still save me a big amount of my time. 
Better to look over it once again and to be sure that no "good" highlight is gone than removing too much than needed.

## Usage
Put your "My Clippings.txt" in the same directory of the script and execute it over your preferred shell.

## Contributing
Feel free to understand what I have fabricated in my nightly coding session while being half asleep ;)