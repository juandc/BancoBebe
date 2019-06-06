export default function setHtml({ content, scriptTags }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="app">${content}</div>
      ${scriptTags}
    </body>
    </html>
  `;
}
