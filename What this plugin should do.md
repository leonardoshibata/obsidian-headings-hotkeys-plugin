# What it should do
- Convert paragraphs into headings (H1, H2) etc...
- Or one type of heading into another (e.g. H1 to H2)

# Limitations
- For now, it will only consider H* type of headings

# Obs
- It should be able to identify that a tag (#sometext) at the start of a paragraph is not a heading

# How it could do it?
1. Is it a paragraph or a heading? (does it have a "#+ " at the beginning of the line?)
    - It might be a good idea to use regex, so we can make sure that it is also not a tag
2. If it is a paragraph, include the #+ according to the desired heading level
3. If it is a heading, substitute the H+ with the desired heading level

# To think:
- Should I model it on TLA+? (just for fun)

# Algorithm
const hello = "Hello World"
const h1 = "# Hello Mamma"
const h2 = "## Hello Papa"
const mid = "teste ## in"


function assign_heading (paragraph: string, level: number): string {
    if (level < 1 || level > 6) return "invalid level"   /* invalid heading level? */
    
    const regex = /^#+\s/
    let heading = paragraph.match(regex)
    
    if (heading == null) return "#".repeat(level).concat(" ", paragraph)
    else return paragraph.replace(regex, "#".repeat(level).concat(" "))
}

const resposta = assign_heading(h2, 5)

console.log(resposta)

https://www.typescriptlang.org/play?ssl=21&ssc=50&pln=10&pc=1#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0bDQaAYAC8oAARAAJGB0iDwMjRJmKClU0CYACMoEZTIAxKA2bSMABZBiIRAMXn86kAJlFzPFkulHNoDAIyr5jQFiAorjFCipKG1Ik4vONlJoTmYa01wAAeuKANQAHUEwGC7iOKIU5hQjMwasUwcFHnhnBGjMEoZRFgCStQGgAFC61gBKYII0DZ7AMBNJxmcKLQfNoynwdwBOnMbMS21MgIU2qobMp7ZpyD5wswFP1wSNyDN+Ct-th9NOBYMCy5yCu85ajvD4LFHDNDxkLyILnOYHsGhfNxmZjsBiu-iwaDqRIMYF6O3MgCiqwVC30TKSbEmXABxUAAcmEAA5SAJE7YoAHkvjId4U34V0jlQRwFFcaQ8FAJxjx0YYsH0FAEEVUNhEuS8JC5aIRAMDhsSXFg2C4bgghKIA