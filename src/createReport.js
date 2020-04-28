const pdfDocument = require('pdfkit');
const fs = require('fs');

function createReport(report, path) {
  let doc = new pdfDocument({ size: 'A4', margin: 50 });
  createHeader(doc);
  createTable(doc, report);
  createFooter(doc);
  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function createHeader(doc) {
  doc
    .image('../Logo.jpg', 50, 57, { width: 50 })
    .fillColor('#444444')
    .fontSize(20)
    .text('PIZZARIA RED IDARCIO', 110, 80)
    .fontSize(15)
    .text('Product Report', 200, 50, { align: 'right' })
    .fontSize(10)
    .text(`Report Number: 20`, 200, 80, { align: 'right' })
    .text('Address: Angola, Huila-Lubango', 200, 95, { align: 'right' })
    .text('Email: pizzariaredfir@gmail.com', 200, 110, { align: 'right' })
    .text('Tel: 222 222 222', 200, 125, { align: 'right' })
    .moveDown();
}

function createTable(doc, report) {
  let i = 0;
  const invoiceTableTop = 180;

  doc.font('Helvetica-Bold');
  createTableRow(
    doc,
    invoiceTableTop,
    'Codigo',
    'Category',
    'Product',
    'Quantity',
    'Price'
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font('Helvetica');

  report.forEach((product) => {
    const position = invoiceTableTop + (i + 1) * 40;
    createTableRow(
      doc,
      position,
      product.code,
      product.category,
      product.name,
      product.quantity,
      product.price
    );
    generateHr(doc, position + 30);
    i++;
  });
}

function createTableRow(doc, y, code, category, product, qt, price) {
  doc
    .fontSize(10)
    .text(code, 50, y, { align: 'left', width: 100 })
    .text(category, 180, y, { width: 100 })
    .text(product, 300, y, { width: 100 })
    .text(qt, 420, y, { width: 100 })
    .text(`${price} KZ`, 0, y, { align: 'right' });
}

function createFooter(doc) {
  doc.fontSize(10).text(new Date().toLocaleDateString(), 50, 740, {
    align: 'right',
    width: 500,
  });
}

function generateHr(doc, y) {
  doc.strokeColor('#aaaaaa').lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
}

module.exports = { createReport };
