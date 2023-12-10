const EmailTemplate = (buyerName, buyerEmail, paymentLinkUrl) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <html lang="en">
      <head></head>
    
      <body style="background-color: #ffffff">
        <table
          align="center"
          role="presentation"
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          style="
            max-width: 37.5em;
            padding-left: 12px;
            padding-right: 12px;
            margin: 0 auto;
          "
        >
          <tr style="width: 100%">
            <td>
              <h1
                style="color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:24px;font-weight:bold;margin:40px 0;padding:0"
              >
              Pressing on this Payment Link will allow you to buy your product
              </h1>
              <code
                style="
                  display: inline-block;
                  padding: 16px 4.5%;
                  width: 90.5%;
                  background-color: #f4f4f4;
                  border-radius: 5px;
                  border: 1px solid #eee;
                  color: #333;
                "
              >Name : ${buyerName}</code
              >
    
              <code
                style="
                  display: inline-block;
                  padding: 16px 4.5%;
                  width: 90.5%;
                  background-color: #f4f4f4;
                  border-radius: 5px;
                  border: 1px solid #eee;
                  color: #333;
                "
              >Email : ${buyerEmail}</code
              >
              <code
                style="
                  display: inline-block;
                  padding: 16px 4.5%;
                  width: 90.5%;
                  background-color: #f4f4f4;
                  border-radius: 5px;
                  border: 1px solid #eee;
                  color: #333;
                "
              >Buying Link : ${paymentLinkUrl}</code
              >
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;
};

module.exports = EmailTemplate;
