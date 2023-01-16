import {sendmail} from '@directives/mailer.js'

export const post = async ({ request }) => {
  const body = await request.json()
  const name = body.name
  const email = body.email
  const message = body.message
  const subject = 'Message from contact form'

  const report = `Hello, you have received a new message from one of your online contact forms available at https://www.africa-conservancy.org. The message is from ${name}<br><br>${message}`

  await sendmail(report,subject,email,name).catch((error) => {
    console.error(`Unable to send email: ${error}`)
  })
  
  return {
    body: JSON.stringify({
      message:"Email successfully sent"
    })
  }
}
