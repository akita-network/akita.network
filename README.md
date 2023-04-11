# Akita Network Website

### How to add content to the website
The content is found in folder `public/locales`.
You can easely just go into each file for each language. The files are named `common.json`
Images is added or removed in the `public/assets` folder

##### Structure:
- Header: The icons and links on top
- Content: Items array with all the sections displayed on page
- When adding or removing a image make sure that the imagefile text is displayed or removed from the content.

##### Content
You can easely add more sections or just swap between them. If you create a new one it's important that the model is the same as the one you copied and that the `component` string is not empty.

`NOTE`: All preamble tags are html friendly, so you can add html directly in the string. Some tips:
- `\n` in the html eg. if the preamble is: `Lorem ipsum.\nDolor sit amet` it will add two paragraphs on the page with spacing between.
- You can add html in the html tags with a style tag like this: `style='margin-bottom: 10px'`
- You can add TailwindCSS classes: `class='mb-5'` 

##### TailwindCSS
You can find all Tailwind classes here and most of them are compatible in the preamble string: https://tailwindcss.com/. Just search for what you want eg. margin, padding, etc.