const AdminEmailTemplate = (buyerName, buyerEmail, itemName, itemImgSrc, winningBid, paymentLinkUrl) => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Auction Winner Notification</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
        
            .container {
              width: 600px;
              margin: 50px auto;
              text-align: center;
              padding: 30px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              border-radius: 5px;
            }
        
            .bg-img {
              width: 100%;
              height: 200px;
              object-fit: cover;
              position: absolute;
              top: -50px;
              left: 0;
              z-index: -1;
              padding-bottom: 28px;
            }
        
            h1 {
              font-size: 24px;
              margin-bottom: 15px;
            }
        
            p {
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 10px;
            }
        
            .item-image {
              width: 300px;
              height: 200px;
              object-fit: cover;
              margin: 0 auto;
              display: block;
              margin-top: 15px;
              margin-bottom: 15px;
              border-radius: 10px;
            }
          </style>
        </head>
      
        <body>
          <div class="container">
            <img src="https://images.unsplash.com/photo-1674397167590-e8133e1c0b09?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="bg-img">
            <h1>New Auction Winner Notification</h1>
            <p>The following buyer has won the auction:</p>
            <p><strong>Buyer Name:</strong> ${buyerName}</p>
            <p><strong>Item Name:</strong> ${itemName}</p>
            <img src="${itemImgSrc}" alt="${itemName} image" class="item-image">
            <p><strong>Winning Bid:</strong> $${winningBid}</p>
            <p><strong>Buyer Email:</strong> ${buyerEmail}</p>
            <p><strong>Payment Link:</strong> <a href="${paymentLinkUrl}">${paymentLinkUrl}</a></p>
            <p>If you have any questions or need further information, please contact the buyer at their provided email or phone number.</p>
            <p>Thank you!</p>
            <p>Sincerely,</p>
            <p>Lockers Unlocked Team</p>
          </div>
        </body>
      </html>
      `;
  };
  
  module.exports = AdminEmailTemplate;
  