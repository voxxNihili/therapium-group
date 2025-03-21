import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name');
    const email = formData.get('email');
    const telefon = formData.get('telefon');
    const curriculumVitae = formData.get('curriculumVitae');
    const coverLetter = formData.get('coverLetter');
    
    // Prepare attachments array
    const attachments = [];
    
    // Add file attachments if provided
    if (curriculumVitae) {
      const cvBuffer = await curriculumVitae.arrayBuffer();
      attachments.push({
        filename: curriculumVitae.name,
        content: Buffer.from(cvBuffer),
        contentDisposition: "attachment",
      });
    }
    
    if (coverLetter) {
      const clBuffer = await coverLetter.arrayBuffer();
      attachments.push({
        filename: coverLetter.name,
        content: Buffer.from(clBuffer),
        contentDisposition: "attachment",
      });
    }
    
    // Prepare message text in the format used by the similar project
    const message = `
      Name: ${name}
      Email: ${email}
      Telefon: ${telefon}
      Dateien: ${attachments.map(a => a.filename).join(', ')}
    `;
    
    // Try primary email configuration first (mail@therapium.de)
    let emailSent = false;
    let lastError = null;
    
    try {
      // Create nodemailer transporter with mail@therapium.de
      const mainTransporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
        secure: process.env.EMAIL_SERVER_SECURE === 'true',
        auth: {
          user: 'mail@therapium.de',
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      });
      
      // Verify transporter connection
      await new Promise((resolve, reject) => {
        mainTransporter.verify((err, success) => {
          if (err) {
            console.error('Primary transporter verification error:', err);
            reject(err);
          } else {
            console.log(`=== Primary transporter ready: ${success} ===`);
            resolve(success);
          }
        });
      });
      
      // Send the email using the primary account
      const info = await mainTransporter.sendMail({
        from: 'mail@therapium.de',
        to: 'mail@therapium.de',
        subject: 'NEUE BEWERBUNG',
        text: message,
        attachments: attachments,
      });
      
      console.log('Message sent successfully with primary account:', info.messageId);
      emailSent = true;
    } catch (error) {
      console.error('Error with primary email account:', error);
      lastError = error;
      // Continue to fallback
    }
    
    // If primary email failed, try fallback (jobs@therapium.de or bewerbung@therapium.de)
    if (!emailSent) {
      try {
        // Create fallback transporter with jobs@therapium.de
        const fallbackTransporter = nodemailer.createTransport({
          host: process.env.EMAIL_SERVER_HOST,
          port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
          secure: process.env.EMAIL_SERVER_SECURE === 'true',
          auth: {
            user: 'jobs@therapium.de',
            pass: 'GAJGG4u8JZRkHsDE6aeZ',
          },
        });
        
        // Verify transporter connection
        await new Promise((resolve, reject) => {
          fallbackTransporter.verify((err, success) => {
            if (err) {
              console.error('Fallback transporter verification error:', err);
              reject(err);
            } else {
              console.log(`=== Fallback transporter ready: ${success} ===`);
              resolve(success);
            }
          });
        });
        
        // Send the email using the fallback account
        const info = await fallbackTransporter.sendMail({
          from: 'jobs@therapium.de',
          to: 'mail@therapium.de',
          subject: 'NEUE BEWERBUNG',
          text: message,
          attachments: attachments,
        });
        
        console.log('Message sent successfully with fallback account:', info.messageId);
        emailSent = true;
      } catch (error) {
        console.error('Error with fallback email account:', error);
        lastError = error;
        // Try one more fallback if needed
      }
    }
    
    // If still not sent, try the final fallback (bewerbung@therapium.de)
    if (!emailSent) {
      try {
        // Create final fallback transporter with bewerbung@therapium.de
        const finalFallbackTransporter = nodemailer.createTransport({
          host: process.env.EMAIL_SERVER_HOST,
          port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
          secure: process.env.EMAIL_SERVER_SECURE === 'true',
          auth: {
            user: 'bewerbung@therapium.de',
            pass: '4dAqTt74sDZhBqPKap4s',
          },
        });
        
        // Send the email using the final fallback account
        const info = await finalFallbackTransporter.sendMail({
          from: 'bewerbung@therapium.de',
          to: 'mail@therapium.de',
          subject: 'NEUE BEWERBUNG',
          text: message,
          attachments: attachments,
        });
        
        console.log('Message sent successfully with final fallback account:', info.messageId);
        emailSent = true;
      } catch (error) {
        console.error('Error with final fallback email account:', error);
        lastError = error;
        // All attempts failed
      }
    }
    
    if (!emailSent) {
      throw lastError || new Error('Failed to send email after multiple attempts');
    }
    
    // Return success response
    return NextResponse.json({ message: 'Bewerbung erfolgreich gesendet' }, { status: 200 });
  } catch (error) {
    console.error('Error sending application email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
      stack: error.stack
    });
    
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten beim Senden der Bewerbung' },
      { status: 500 }
    );
  }
} 