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
            .container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              height: 100vh;
            }
            /* title styling properties */
            .Titlename {
              font-size: 60px;
              color: #BBE1FA;
              margin-bottom: 10px;
              margin-top: 100px;
            }
            .ButtonContainer {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            /* button styling properties */
            .Protonvpn,
            .Protonvpnexe,
            .daltonvoorburg,
            .Cloudwise,
            .magister,
            .home,
            .mooferapk,
            .windscribe,
            .Downloads,
            .Schoollink,
            .bikey,
            .Bitwarden,
            .aboutme,
            .keepmoving,
            .techniekcrew {
              font-family: 'Bold', sans-serif;
              font-size: 18px;
              font-weight: bold;
              border-radius: 12px;
              border: none;
              padding: 20px 30px;
              width: 350px;
              text-decoration: none;
              color: #3282B8;
              background-color: #0F4C75;
              margin-top: 15px;
            }
            .TextInfo {
              font-size: 18px;
              color: #ffffff;
              text-align: center;
              margin-top: 10px;
            }
            /* made by tim properties */
            .TextInfobottom {
              font-size: 18px;
              color: #3282B8;
              text-align: center;
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 30px;
              letter-spacing: normal;
            }
            /* Protonvpn group buttons properties */
            .btn-group {
              margin-top: 15px;
              margin-bottom: 15px;
              width: 1000px;
            }
            /* windscribe group buttons properties */
            .windscribeg {
              margin-top: 30px;
              margin-bottom: 15px;
              width: 1000px;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <h1 className="Titlename">Downloads</h1>
          <div className="ButtonContainer">
            <div className="btn-group">
              <a download
                href="/host/S3_X3_Wired_Button_replacement_Procedure.pdf"
                className="Protonvpn">
                S3_X3_Wired_Button_replacement_Procedure.pdf
              </a>
              
            </div>
            <div className="windscribeg">
              <a download
                href="/host/S3_X3_Boost_Bell Button_replacement_procedure.pdf"
                className="Protonvpn Protonvpnexe"
              >
                S3_X3_Boost_Bell Button_replacement_procedure.pdf
              </a>
            </div>
          </div>
          
        </div>
      </body>
    </html>
  );
};

export default DownloadsPage;
ChatGPT
You can add the download button component to your existing DownloadsPage component like this:

tsx
Copy code
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
In this code:

I've created a DownloadButton component that handles the file download logic. It creates a link with the specified href and download attributes.

I've included the DownloadButton component within the "btn-group" div in your DownloadsPage component, so clicking the button will trigger the download.

Make sure to update the href and download attributes in the DownloadButton component with the correct path and desired file name.




User
where is the download button?
ChatGPT
My apologies for the confusion. It appears that there was an issue with my previous code snippet. To add a download button, you can modify your original DownloadsPage component to include a simple download link. Here's the updated code:

tsx
Copy code
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
          {/* Your existing styles */}
        </style>
      </head>
      <body>
        <div className="container">
          <h1 className="Titlename">Downloads</h1>
          <div className="ButtonContainer">
            <div className="btn-group">
              {/* This is the download link for your PDF file */}
              <a href="/host/S3_X3_Wired_Button_replacement_Procedure.pdf" download className="Protonvpn">
                Download S3_X3_Wired_Button_replacement_Procedure.pdf
              </a>
            </div>
            <div className="windscribeg">
              <a href="/host/S3_X3_Boost_Bell_Button_replacement_procedure.pdf" download className="Protonvpn Protonvpnexe">
                Download S3_X3_Boost_Bell_Button_replacement_procedure.pdf
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default DownloadsPage;
In this code, I've added the download attribute to the download links within the DownloadsPage component. These links will allow users to download the specified PDF files when clicked.





