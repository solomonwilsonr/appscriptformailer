function sendEmailsBasedOnDate() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var dataRange = sheet.getDataRange();
    var data = dataRange.getValues();
    var today = new Date();
    
    // Loop through each row in the sheet
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var emailAddress = row[0]; // Assuming email address is in the first column
      var message = row[1]; // Assuming message is in the second column
      var dateToSend = row[2]; // Assuming date is in the third column
      var emailSent = row[3]; // Assuming 'Email Sent' column is in the fourth column
      
      // Check if the date is today or in the past and email has not been sent
      if (dateToSend && new Date(dateToSend).toDateString() === today.toDateString() && emailSent !== 'Email Sent') {
        // Send email
        MailApp.sendEmail(emailAddress, 'Reminder', message);
        
        // Mark the email as sent
        sheet.getRange(i + 1, 4).setValue('Email Sent');
      }
    }
  }