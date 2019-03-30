# Setup

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

# Assumptions

1. When the user clicks `get data button` the content of the list is overwritten and shows only the content obtained from the HTTP request.
2. Completing the `POST request` when clicking `upload data button` pops up an alert and doesn't do anything else, as the response obtained is the same as the one procedding the `GET request`.
3. When `add line button` is clicked the new line placeholders "What is my voice?" and "What is my text?" for both list item voice and text. The id for the new line is the current highest id + 1. If there are no entries, the id is 1.

# Misc

1. As requested, no UI frameworks were used.
2. As requested, this solution was used using Vue.js.
3. All images are SVG. This choice was based on two reasons: best rendering on high-res screens (such as MBP Retina displays) and having the ability to control aspects such as size/color from the components.
4. All functionalities have been implemented.
5. Custom checkbox based on https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
6. All interactive elements (images with events and editable p and h3) have aria-label, for improved accessibility.
7. Developed on Ubuntu 18.04.1 LTS x86_64, with Node.js v11.12.0 and npm v6.7.0. Tested on Chrome 73 and Firefox Quantum 66.
