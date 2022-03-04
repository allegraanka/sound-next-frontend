const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
  });

const listId = process.env.MAILCHIMP_LIST_ID;

export default async function subscribe(req, res) {
    const { email } = req.body;
    console.log(`Email received by the server, in subscribe.js: ${email}`);

    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed"
      });
      res.status(200).json({
        success: true,
        user: email
      });

      console.log(`mailchimp response ---> ${JSON.stringify(response)}`);
      console.log(`Successfully added contact: ${email} as an audience member. ${email}'s id is ${response.id}.`);
    }
    
    catch (error) {
      res.status(400).json({
        success: false,
        user: email,
        error: error
      })
    }    
  }

  // export const config = {
  //   api: {
  //     externalResolver: true,
  //   },
  // }