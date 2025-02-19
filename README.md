# THORNAPPLE fansite

[thornpang.com](thornpang.com)

## Dependencies

- Node version v20.11.0
- Next.js 14.1.0 (Using app router)
- tailwindcss

Run the development server at [http://localhost:3000](http://localhost:3000) by `yarn dev`

## Deployment

Deployed to AWS Amplify. (Vercel free-tier ran out.)

Automatically re-deploys when pushed to main branch of github.

## Nextjs specifics

Using SSR.

Most of the pages are statically generated, but some are generated dynamically:

- Pages with search feature, because they need to use search params.
- Video details page
  - This was complicated due to parallel routes. ([Relevant issue](https://github.com/vercel/next.js/issues/52842))

There are two types of modals: `ClientModal` and `ServerModal`.
`ClientModal` triggers `router.back()` when closed, and `ServerModal` moves to a specific route when closed.

## Code Structure (`/src`)

### app

Pages to render

- [`/`](src/app/page.tsx): profile
  - debut d-day
  - member profile & SNS link
  - links to official SNS
- [`/lyrics`](src/app/lyrics): lyrics
  - list of songs
  - list of lyrics when using search feature
  - lyrics of each song
- [`/schedule`](src/app/schedule): schedule
  - calendar showing every concert, festival, birthday, etc.
  - date, location, setlist, SNS links
- [`/video`](src/app/video): video
  - list of every official videos
  - search feature
  - upload date, title, subtitle, songs, info, link

<details>
<summary>details for video search logic</summary>
- Search keywords are made from the search string input of user.
  1. Search string, which is input by the user is changed into lower case.
  2. Special characters in the search string is changed into " "(single whitespace).
  3. Substitutions are done to the search string according to [replaceLogic](/src/data/video.ts).
  4. Search string is split by whitespace into keywords.
  5. Keyword "살" is changed to "살살" because the song "살" needs to be distinguished with "살아있는 너의 밤"
- Search data (which is a list of keywords joined with a whitespace) is made from the setlist and/or info of each video.
  1. Whitespace and special characters (brackets) are removed.
  2. The keywords are joined with a whitespace
  3. "살" is substituted to "살살".
  4. The string is changed into lowercase.
- If every search keywords should be present in the search data, the video is a hit and is shown on the list.
</details>

### common

Things that have no dependency to other files

### components

Most of the code is here.

Code structure is similar to page paths.

<details>
<summary>details</summary>

- common
  - clientModal.tsx
    - Children on the center of the screen and grays out the rest of the part
    - `triggers router.back()` when the gray part is clicked
    - White X mark exists, but acts the same as clicking the gray part
  - divIntersection.tsx
    - Wrapper (div) which appears when it is in screen
    - Changes opacity
  - divUnclick.tsx
    - Wrapper (div) which does not propagate click event
  - icons.tsx
    - Chevron and X icons
    - two types of chevron: left and right
  - modalBody.tsx
    - Used for schedule detail and video detail page
    - The text part of a modal
  - scheduleLoader.tsx
    - Prefetches schedule page of current month
    - Needed since date calculation is dynamic
  - searchBar.tsx
    - Search bar used for lyrics and video list page
    - Triggers `router.push()` when enter is pressed or icon is clicked
  - serverModal.tsx
    - Similar to ClientModal, but have `<Link>` component instead of `router`
- header
  - tab.tsx
    - Each tab of the header
    - Change color according to current route
- lyrics
  - lineItem.tsx
    - Item for lyrics list when using search feature
    - Wrapper of ListItem
    - Shows song title and one line of lyric
  - listItem.tsx
    - Item for list (May be lyrics or songs)
    - Show artwork and gradient background color according to album
  - lyricsSearchBar.tsx
    - Wrapper of SearchBar to add margin
  - songItem.tsx
    - Item for song list
    - Wrapper of ListItem
    - Shows song title and composer
    - Have animation effect: appears one by one
    - Appearing timing is cubic function
- lyricsDetail
  - background.tsx
    - Very blury album artwork
  - title.tsx
    - Shows song title
    - Can move to next/previous song
- profile
  - appleProfile.tsx
    - Image of THORNAPPLE pfp
    - Gradually appears on load
  - Dday.tsx
    - Calculates d-day since debut and shows with animation
    - Change every 20ms, takes 1s in total
  - indivProfile.tsx
    - Profile of each member
    - pfp, name, birthday, session and SNS
    - Use DivIntersection to have apperance animation
  - thornProfile.tsx
    - THORNAPPLE logo and official SNS links
  - timeline.tsx
    - Item of timeline
    - Date and title of event and line
    - Date and title is drawn in TimelineLayout
  - timelineLayout.tsx
    - Shows date and title of timeline event
    - Appears in order by default, appears faster if scrolled
- schedule
  - calendar.tsx
    - CalendarCellIner: Show date and holiday info
    - CalendarImage: `<Image/>` with css and blurDataURL
    - CalendarHalfCell: CalendarImage that is half the size of the cell (Used for days with two events)
    - CalendarCell: Cell of calendar
      - Has CalendarCellIner and CallendarImage/CalendarHalfCell (optionally) as children
    - Calendar: Calendar of the month
  - monthSelecter.tsx
    - Shows current month and two arrows to change month
    - Current year and month text is a selecter
    - Prefetches other month/year
  - scheduleModal.tsx
    - ServerModal that shows information about selected schedule
    - Can move to next/previous schedule
    - Choose image type (Rectangular, Square, Alternate) responsively
- video
  - row.tsx
    - Item for list of videos
    - Shows video thumbnail, title, subtitle and setlist
  - targetSelect.tsx
    - selecter to choose among 전체, 곡명, 정보
    - Triggers `router.push()` when changed
  - videoModal.tsx
    - Shows video thumbnail, title, subtitle, setlist and info
    - Should be wrapped with either CliehtModal or ServerModal
  - videoSearchBar.tsx - Has TargetSelect and SearchBar as children

</details>

### data

DB-ish things.

This website doesn't have a backend (because I was lazy), so every data exists in this folder.

Most of the files are in typescript not json for two reasons:

- I had technical issues making Next.js to understand json files on dynamically rendered pages.
- Typescript allows the usage of functions for making items that have similar forms.

Also check out [types.ts](src/types.ts).

<details>
<summary>details</summary>

- constants.ts
  - ALBUMS: album titles
  - SONGS: song titles
- lyrics.ts
  - Data of each song, mainly lyrics
  - Every information from official CD
- profile.json
  - Information of each member
- schedule.ts
  - `I`: Holds string constants and string-building functions
  - `minYear`, `maxYear`: min/max year for the schedule page
  - `holidays`: Information of holidays of each year and month
  - `data`: List of schedule events, sorted by date.
    - Concert, festival, birthday and anniversary
    - Personal schedules (ex. appearing in MPMG week as a guest, performing in guitarnet) are not included
    - `setlist`: Add "(앵콜)" for the first encore song.
    - `links`: Concert notice, photos and videos. Add only one concert notice per schedule. If same content is uploaded to multiple platforms, use instagram.
- video.ts
  - `replaceLogic`: List of substitutions when searching on videos
    - Abbreviation for song / festival / concert titles, English words, synonyms, nickname of members, etc.
    - "콘" is appended to concert names that can be mistaken for something else (ex. song title)
  - `I`: Useful string constants and string-building functions
  - `VideoRaw`: Similar to [Video](src/types.ts), but `subtitle` and `thumbnail` is optional
  - `processVideo`: Lifts VideoRaw into Video
  - `data`: List of videos, sorted by upload date
    - Greeting videos that are shorter than 30s are excluded
    - `title`: Title of concert, festival, tv program, "Music Video", etc.
    - `subtitle`: List of songs, "Highlight", etc. Defaults to list of songs.
    - `setlist`: _Every_ song that appears in the video. Add "(음원)" if it could be mistaken
    - `links`: Tried to find _every_ official links. Have searched youtube (thornapple, mintpaper, happyrobot), melon, genie and bugs

</details>

### types

- Song
  - Used in [lyrics.ts](src/data/lyrics.ts)
- Line: A lyrics line
  - Used when searching for lyrics ([page.tsx](/src/app/lyrics/page.tsx), [lineItem.tsx](/src/components/lyrics/lineItem.tsx))
- Schedule
  - `slug` is usually not needed because the `date` can be used as `slug`. Exception is when two events are on one day.
  - `imageR`, `imageS`, `imageA`: The name of Rectangular, Square, Alternate image files. Used responsively. At least one has to exist.
  - `location`: Each string appears line by line in ScheduleModal. If it is an empty list, the gray text "장소" will be present. If it is undefined, gray text "장소" will not appear.
  - `setlist`: Same as location.
  - `etc`: Used for special events like birthdays and anniversaries. subtitle appears as gray text in ScheduleModal.
- Video
  - `thumbnail`: The name of the thumbnail image file

## Image files

### [album](public/album/)

Album cover artworks

### [profile](public/profile/)

pfp. [sim.jpeg](public/profile/sim.jpeg) is legacy, but I don't want to delete it :(

### [schedule](public/schedule/)

Image to be used in the calendar. Mostly concert/festival posters.

Naming convention: `yyyymm-{schedule_name}-{r|s|a}.jpg`. Doesn't have to be jpg type.

Name should match the data of [schedule.ts](/src/data/schedule.ts)

### [video](public/video/)

Video thumbnails.

Sometimes same videos on different platforms have different thumbnails. That case, I chose the one I like.
