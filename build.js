const fs = require("fs");
const path = require("path");
const mdpdf = require("mdpdf");

const src = 'md'
const dist = "pdf";

fs.readdir(src, async (err, files) => {
  if (err) throw err;

  const mdFiles = files.filter((file) => {
    const filePath = path.join(__dirname, `${src}/${file}`)
    return fs.statSync(filePath).isFile() && /.*\.md$/.test(file);
  });

  if (mdFiles.length === 0) {
    return;
  }

  // mkdir dist
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  // generate pdf
  for (const file of mdFiles) {
    const pdfPath = await generatePDF(file)
    console.log(`PDF Path: ${pdfPath}`)
  }
});

const generatePDF = async (file) => {
  const filename = file.split(".")[0];

  const border = '20mm'

  const options = {
    source: path.join(__dirname, `${src}/${file}`),
    destination: path.join(__dirname, `${dist}/${filename}.pdf`),
    // styles: path.join(__dirname, 'style.css'),
    ghStyle: true,
    pdf: {
      format: "A4",
      orientation: "portrait",
      quality: '100',
      border: {
        top: border,
        left: border,
        bottom: border,
        right: border
      }
    },
  };

  return await mdpdf.convert(options)
};
