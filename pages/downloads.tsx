import React from 'react';

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
          {`
            body {
              font-family: 'Poppins', sans-serif;
              margin: 0;
              background: #142850;
              backdrop-filter: blur(2px);
            }
          `}
        </style>
      </head>
      <body>
        <h1 className="Titlename">Downloads</h1>
        <div className="ButtonContainer">
          <div className="btn-group">
            <a
              href="/pdf/button1.pdf"
              download="S3 X3 - Wired Button replacement Procedure.pdf"
              className="Protonvpn"
            >
              <i className="fas fa-shield-alt"></i> S3 X3 - Wired Button replacement Procedure.pdf
            </a>
            </div>
            <div className="windscribeg">

            <a
              href="/pdf/button2.pdf"
              download="S3_X3 Boost_Bell Button replacement procedure-1.pdf"
              className="Protonvpn Protonvpnexe"
            >
              <i className="fas fa-shield-alt"></i> S3_X3 Boost_Bell Button replacement procedure-1.pdf
            </a>
            </div>
          
        </div>
        <h1 className="TextInfobottom">made by Tim. 2023</h1>
      </body>
    </html>
  );
};

export default DownloadsPage;
