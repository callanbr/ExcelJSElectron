function createNewExcelFile()
{
    var Excel = require('exceljs');
    // A new Excel Work Book
    var workbook = new Excel.Workbook();

    // Some information about the Excel Work Book.
    workbook.creator = 'Callan';
    workbook.lastModifiedBy = '';
    workbook.created = new Date(2019, 5, 30);
    workbook.modified = new Date();
    workbook.lastPrinted = new Date();

    // Create a sheet
    var sheet = workbook.addWorksheet('Sheet1');
    // A table header
    sheet.columns = [
        { header: 'Id', key: 'id' },
        { header: 'Course', key: 'course' },
        { header: 'URL.', key: 'url' }
    ]

    // Add rows in the above header
    sheet.addRow({id: 1, course: 'CFS', url:'https://CFS.com' });
    sheet.addRow({id: 2, course: 'FEF', url: 'https://FEF'});
    sheet.addRow({id: 3, course: 'Angular', url: 'https://Angular.com'});
    sheet.addRow({id: 4, course: 'Java', url: 'https://Java.com'});

    // Save Excel on Hard Disk
    workbook.xlsx.writeFile("WozU.xlsx")
    .then(function() {
        // Success Message
        alert("File Saved");
    });
}

window.onload=function(e){
    createNewExcelFile();
  }