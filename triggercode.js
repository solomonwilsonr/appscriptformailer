function createTrigger() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet(); // Get the active spreadsheet
    var activeSheet = sheet.getActiveSheet(); // Get the active sheet if needed
    
    ScriptApp.newTrigger('sendEmailsBasedOnDate')
      .forSpreadsheet(sheet) // Use the spreadsheet object
      .onEdit()
      .create();
  }