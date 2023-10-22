import React from 'react';

const DownloadButton = () => {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/host/S3_X3_Wired_Button_replacement_Procedure.pdf'; // Update the path to your PDF file
    link.download = 'S3_X3_Wired_Button_replacement_Procedure.pdf'; // Update the desired file name
    link.click();
  };

  return (
    <a onClick={downloadPdf} className="Protonvpn">
      Download S3_X3_Wired_Button_replacement_Procedure.pdf
    </a>
  );
};

const DownloadsPage: React.FC = () => {
  return (
    <html>
      <head>
        <title>Downloads</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/styles/downloads.css" />
        <style>
          {/* Your existing styles */}
        </style>
      </head>
      <body>
        <div className="container">
          <h1 className="Titlename">Downloads</h1>
          <div className="ButtonContainer">
            <div className="btn-group">
              <DownloadButton />
            </div>
            <div className="windscribeg">
              <a download
                href="/host/S3_X3_Boost_Bell_Button_replacement_procedure.pdf"
                className="Protonvpn Protonvpnexe"
              >
                S3_X3_Boost_Bell_Button_replacement_procedure.pdf
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default DownloadsPage;
