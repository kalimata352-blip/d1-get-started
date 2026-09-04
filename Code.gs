function doPost(e) {
  try {
    const SHEET_NAME = "Biodata";
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp","Full Name","Guardian Name","DOB","Gender","Mobile",
        "WhatsApp","Email","Marital Status","Village/City","Post Office",
        "Police Station","District","State","Pincode","Full Address",
        "Education","Computer","MS Word","MS Excel","Typing Speed",
        "Experience Years","Previous Experience","Job Type",
        "Availability","About"
      ]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      data.timestamp || "",
      data.fullName || "",
      data.guardianName || "",
      data.dob || "",
      data.gender || "",
      data.mobile || "",
      data.whatsapp || "",
      data.email || "",
      data.maritalStatus || "",
      data.village || "",
      data.postOffice || "",
      data.policeStation || "",
      data.district || "",
      data.state || "",
      data.pincode || "",
      data.fullAddress || "",
      data.education || "",
      data.computer || "",
      data.msWord || "",
      data.msExcel || "",
      data.typingSpeed || "",
      data.experienceYears || "",
      data.experience || "",
      data.jobType || "",
      data.availability || "",
      data.about || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({success:true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success:false, message:error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}