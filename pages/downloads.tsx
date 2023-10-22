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
              font-family: 'Poppins', sans-serif;
              margin: 0;
              background: rgb(9, 9, 121);
              background: linear-gradient(90deg, rgba(85, 61, 156, 1) 0%, rgba(0, 148, 255, 1) 50%, rgba(0, 200, 83, 1) 100%);
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
        </div>
      </body>
    </html>
  );
};

export default DownloadsPage;
