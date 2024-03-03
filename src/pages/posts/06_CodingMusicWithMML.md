---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Coding Music In Mabinogi Using MML'
pubDate: 3-2-24
description: 'Insight into the MML language used by the MMORPG Mabinogi to create playable music within the game.'
image:
    url: '/blog_images/post2/Mabinogi_Logo.jpg'
    alt: 'Mabinogi logo'
tags: ["video games", "music", "Mabinogi", "MML", "coding", "website"]
---

# Coding Music In Mabinogi Using MML

## What is Mabinogi?

Called the "Most Unique MMORPG" by the developers, Mabinogi is an MMORPG developed by Nexon and released in the U.S. in 2008.  It is described as a "Fantasy Life"-style MMORPG in that
it includes numerous features and systems that tailor to many different playstyles and players.  In addition to a plethora of different combat styles and skills typical of MMORPGs, Mabinogi
also features many "Life" skills and talents as well centered around different playstyles such as crafting and exploration.  Furthermore, Mabinogi also boasts the social aspects of the game
through extensive features such as the insanely wide array of outfits, player customization options, and social systems.  These combinations of systems come together to create a game that
is focused on creating an experience that any player can enjoy and tailor to his or her preferences.  Personally, I have been playing since about the launch of the game and have played it off
and on since then, meeting some of my longest-known friends through this game as well.

<figure class="mx-auto w-3/4">
    <img src="/blog_images/post2/Tir_Chonaill.png" alt="Mabinogi screenshot of Tir Chonaill" class="mx-auto">
    <figcaption class="text-center">A screenshot of 'Tir Chonaill' - the first town that beginning players start in</figcaption>
</figure>

One of Mabinogi's 'combat' styles is the set of Bard/Music skills that aim to provide buffs to party members and debuffs to enemies.  However, this was a system that was later added to the initial
instrument system that has been in the game since launch.  The initial system aimed to provide players with the ability to not only play instruments, but also play custom music for others to hear.
When instruments are played in-game, either using the default 'Playing Instrument' skill or one of the Bard skills aimed towards combat, the player will either play one of a selection of 'default' songs
or, if they're also holding an item known as a 'score scroll', will play custom music that is written onto the score scroll through another skill called 'Composition'.  Custom music is written onto these
score scrolls using a system of code known as Music Macro Language (MML).

## The Mabinogi Music System

MML is the code used to create songs within Mabinogi to be played by instruments.  Playable songs face limitations within the game as defined by both the system itself as well as player skill ranks.  Skill ranks in Mabinogi start at Rank F and
progress from Rank F to Rank A, then from Rank 9 to Rank 1.  There are ranks above Rank 1 for specific skills, but this is irrelevant for this particular discussion.  The biggest limitation of playable music in Mabinogi is that songs are limited to a
maximum of three simultaneous "tracks" which are akin to channels for those more familiar with audio and music production.  Additionally, each track is limited to a specific character length dependent upon the player's 'Composition' skill rank.
For example, a player with a 'Composition' skill at Rank 9 has a maximum character limit of 800/350/200 for the three tracks respectively.  A fourth "Song" track is included and is only played if a player uses the 'Song' skill, which only plays that one track and 
has the player sing the part rather than play it on an instrument.  If this part is removed via an option when composing, the three other tracks have slightly extended track limits.

<figure class="mx-auto w-1/2">
    <img src="/blog_images/post2/Mabi_Compose.png" alt="Composition screen in Mabinogi" class="mx-auto">
    <figcaption class="text-center">The composition screen when composing a song on a score scroll</figcaption>
</figure>

Additionally, another skill ('Musical Knowledge') also affects the score scroll's difficulty rank, adding a difficulty level equal to the rank of the composer's 'Musical Knowledge' skill.  This makes scores harder to play if the player's 'Instrument Playing' skill is not equal to or higher than the rank of the score scroll's difficulty.  Even then, there is still a chance of playing the score incorrectly.  When a score is played incorrectly, notes are randomly played incorrectly - causing the song to sound as if it's being played incorrectly.  This can be avoided through a few different methods, including the use of items that prevent incorrect playing.  Additionally, the use of any 'combat' Bard skill will play the score correctly regardless of difficulty level or skill rank.  Other non-Bard skills can be used to the same effect.  While this may make it seem like the default 'Playing Instrument' skill is pointless, there are combat benefits to ranking up this skill such as increased buffs and debuffs when using the other Bard skills.  For the most part, score scroll difficulty is only of concern when a player is trying to rank their 'Playing Instrument' skill.

One skill/action commonly used to play music is the 'Jam Session' action which starts a minigame-style playing session that other players can join.  The player initiating the jam session will spawn a glowing treble clef that other players can click on to join the jam session.  During the jam session, all players will play the same music as the leader while a minigame starts on each players' screen.  The minigame involves correctly pressing a sequence of keys (W, A, S, D, and Space) without making a mistake.  Correctly completing many of these sequences can result in additional bonuses including level experience for that player.  Making a mistake or not completing the sequence before time is up results in the player either shrinking to a smaller size or growing to a larger size until the next sequence appears.  However, some players opt to simply ignore the minigame and just join the jam session to play along with the leader as this is one of the ways to play a song without mistakes.

Regarding the instruments themselves, some of the more common instruments for beginner players include the lute, ukelele, and mandolin as they're easily obtainable and not very expensive.  Rarer instruments can include ones such as the lyre, piano, harp, and others.  Additionally, these instruments come in different appearances (such as the "Milky Way Lyre") and can also be dyed with in-game items to change their colors.  For the most part, different varients of the same instrument will sound the same with the exception of the more unique "festival" variants of instruments which completely changes how they sound.

<figure class="mx-auto">
    <figcaption class="text-center">An example of the piano instrument in-game:</figcaption>
    <audio controls src="/blog_images/post2/Mabinogi_SongExample.wav" class="mx-auto"></audio>
    <figcaption class="text-center">Song Source: "The Lament of Falling Stars" from Pokemon Omega Ruby & Alpha Sapphire</figcaption>
</figure>

Players can easily find pre-made MML code for songs through a variety of sources.  The game itself features a "Bard Bulletin" that players can submit songs to for others to directly copy to their own score scrolls.  However, this system is slightly limited as copyrighted material seems to be taken down at times.  Video game music and original compositions can be found here, but there are mostly songs used exclusively for training skills so this is not a widely-used source of music.  Websites also exist that offer ways for players to submit and share their own compositions.  Without the same limitations that the in-game bulletin provides, wider varieties of music can be found on these sites.  Some sites include additional features such as preview options for how the song will sound in-game as well as composition tools within the browser itself.  Other sites will simply have the code listed either in parts or as a code that can be pasted directly into the game which will fill all three parts automatically.

I've found myself collecting a large amount of these MML codes throughout my time playing the game and have composed a good number of them as well.  A good number of them are saved locally on my PC as files that can be opened directly with the editing software that I use.  Unfortunately, because each song has to be written to its own score scroll, this means that the number of songs that I can have handy at any given time is limited to my inventory space.  This hasn't stopped me from trying to have as many on hand as possible though!

<figure class="mx-auto">
    <img src="/blog_images/post2/Mabinogi_ScoreScrolls.png" alt="Screenshot of my score scrolls" class="mx-auto">
    <figcaption class="text-center">My massive collection of score scrolls taking up too much inventory space</figcaption>
</figure>

Most of the music I have on-hand at any given time is usually video game or anime music from a variety of sources, mostly from what I'm interested in.  Some of the scores are also duets, designed to be played as two separate parts with multiple people on different instruments.  These require each player to have a unique score scroll that is played together to create songs utilizing more tracks than the standard in-game limitation.

## MML Basics

MML code is quite simple and only requires a basic understanding of music theory.  The code consists of the following symbols:
- **T** - Denotes the tempo at which the song is played.  "T160" will set the tempo to 160 beats per minute.  Tempo can be set as low as 32 and as high as 255 with a default of 120 if not specified. Furthermore, tempo only has to be set on one of the three tracks to affect all of the tracks.
- **L** - Denotes the default length of the notes following.  "L4" will set a default note length of "4" which is a quarter note (more on note lengths below)
- **V** - Denotes the volume of the track with V0 being completely silent and V15 being the loudest possible.
- **O** - Denotes which octave the following notes belong to, with O4 being the default and contains the note A440 (the note below middle C on a piano - 440Hz)
- **\< and \>** - Used to raise the octave of the following notes up or down one octave
- **A/B/C/D/E/F/G** - Denotes which note to be played; these are often followed by '+', '-', or '#' to change their pitch and by a number to change their length. For example, "A#4" will play the note A# with a length of a quarter note
- **1/2/4/8 etc.** - Denotes note length.  1 = whole note, 2 = half note, 4 = quarter note, and so on.  Other numbers can be used such as 3 or 6 to denote triplet notes.
- **&** - Used to tie two notes together.  The following notes will play as if their lengths are combined: "A4&A16"
- **R** - Denotes a rest and is usually followed by a number to denote length
- **N** - Can be used to denote a specific note using a Midi Note Number; this disregards octave and can be useful in situations where it takes up less characters to write than changing octaves.  For example, A4 (440Hz) can be written "N69"

When combined, these symbols are used to write the music for a single track.  A small example of MML code may look like the following:

    V15l4o2a.a8n37l8abf+4.f+a>abn49

MML can also be copied in a format that can automatically fill all three tracks by formatting the track codes into a text block like the following:

    MML@v13l32c&c&c&c&c&c&c&c&c&c&c&c&c&c&c&cr2<c+4.r2r8<a>c+4l16.&c+r2r8a32>c+4&c+r2r8<g+32b4&br8g+4r4e32ar8<a2r4a4.r2r8>>c+32e4&er2r8c-32e4&er2r8d32f+4&f+r8l32eg+8.&g+e8r8<f+4.r8b>c+8.&c+r2.l4.<br8f+l8rerfr>c+4.rl32eg+8.&g+r4<a>c+4&c+16.r8<a>c+8.&c+l4r<d.r8e.r8d.r8erf+.r8erc+32f+&f+16.r2r8f+.r2r8c+.r2r8<a32>c+l16.&c+r2r8a32>c+4&c+r2r8<g+32b4&br8g+4r4e32ar8<a2r4a4.r2r8>>c+32e4&er2r8c-32e4&er2r8d32f+4&f+r8l32eg+8.&g+e8r8<f+4.r8b>c+8.&c+r2.l4.<br8f+l8rerfr>c+4.rl32eg+8.&g+r4<a>c+4&c+16.r8<a>c+8.&c+l4r<d.r8e.r8d.r8erf+.r8erc+32f+&f+16.r2r8f+.,v15l32c&c&c&c&c&c&c&c&c&c&c&c&c&c&c&cr2l4o2a.a8n37l8abf+4.f+a>abn49e4.e>c+.d.c+<e4.ae4b4c+g+<f+2ab>c+4.<f+a>abn49a4.e>e.f+.e<g+4.bl4b>e<a.>a8<bb8>f+8c+.<b8gbl4.f+>c+8<eg+8dl8n49b>c+def+4.ac-4ef+<f+4.bl4ebf+.>c+8<g+.e8f+.>c+8c-c+<d.>c+8<g+e<b.l8b>c+f+c-f+<a+4.a+>f+2<a4.a>c+4<abf+4.f+a>abn49e4.e>c+.d.c+<e4.ae4b4c+g+<f+2ab>c+4.<f+a>abn49a4.e>e.f+.e<g+4.bl4b>e<a.>a8<bb8>f+8c+.<b8gbl4.f+>c+8<eg+8dl8n49b>c+def+4.ac-4ef+<f+4.bl4ebf+.>c+8<g+.e8f+.>c+8c-c+<d.>c+8<g+e<b.l8b>c+f+c-f+<a+4.a+>f+2,t83v12l32c&c&c&c&c&c&c&c&c&c&c&c&c&c&c&cr2l8o1f+>c+f+2.<da>d2.<a>ea2.<eb>ef+g+4b4n18c+n37c+f+2<da>d2.<a>ea2.eb>e2.<da>d4<eb>e4n30c+e4<g2da>d4<c+g+b4c-f+a4c+4f4da>d4<eb>e4<f+a>c+4<<a>ea4c-f+a4c+g+b4da>d4<c+g+b4c-2c+2n18c+f+2.n18c+f+2.n18c+f+2.<da>d2.<a>ea2.<eb>ef+g+4b4n18c+n37c+f+2<da>d2.<a>ea2.eb>e2.<da>d4<eb>e4n30c+e4<g2da>d4<c+g+b4c-f+a4c+4f4da>d4<eb>e4<f+a>c+4<<a>ea4c-f+a4c+g+b4da>d4<c+g+b4c-2c+2n18c+f+2.n18c+f+2.;

When importing MML, this will automatically fill all three tracks.  Complete MML code is denoted by the `MML@` at the beginning with a comma (,) separating each track and ending with a semicolon (;) to denote the end of the code.

## Conclusion

Mabinogi is a unique MMORPG that I've been playing for a decent portion of my life.  It features a great in-game music system that players can utilize to play custom music for others to hear or play along with.  By utilizing a special code known as MML, players can write custom music to be played in-game such as unique compositions or transcriptions of existing music.  Tying heavily into the social aspects of the game, I've found myself drawn to this particular system in the game and have built up a collection of songs both from existing sources as well as compositions of my own.  While this was a basic overview of the game and the music system, keep an eye out for future posts regarding the actual composition process I use to make transcriptions and original compositions in-game!