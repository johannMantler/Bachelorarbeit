package app.model;

import java.io.UnsupportedEncodingException;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 * Klasse zum Versenden von Emails �ber einen
 * fremden SMTP Server.
 * @author Johann Mantler
 */
public class MailSender
{
	private Properties props;
	private String smtpUser = "diary-studies@web.de";
	private String smtpUserPass = "(bla23blabla_SMTP-Sender){blablaBLABLABLA}";
	private String sendTo = "johann.mantler@stud.fh-luebeck.de";//"adelka.niels@fh-luebeck.de";
	private Authenticator auth;
	
	/**
	 * Konfiguriert das MailSender-Objekt.
	 */
	public MailSender() {
		props = new Properties();
		props.put("mail.smtp.host", "smtp.web.de");
		props.put("mail.smtp.port", 587);
		props.put("mail.transport.protocol","smtp");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.tls", "true");
		props.put("mail.smtp.user", smtpUser);
		props.put("mail.password", smtpUserPass);
		
		auth = new Authenticator() {
				   @Override
				   public PasswordAuthentication getPasswordAuthentication() {
				      return new PasswordAuthentication(smtpUser,smtpUserPass);
				   }
			   };
	}
	
	/**
	 * Versendet die Email.
	 * @param subject Betreffszeile
	 * @param msg	Inhalt der Nachricht
	 * @throws Exception 
	 */
	public void sendMail(String subject, String msg) throws Exception {
		this.sendMail(subject, msg, this.sendTo);
	}

	/**
	 * Sendet die E-Email.
	 * @param subject Betreffzeile
	 * @param msg die zusendene Nachricht
	 * @param receiver Empfänger
	 * @throws Exception wird geworfen, falls der Sendevorgang nicht m�glich ist.
	 */
	public void sendMail(String subject, String msg, String receiver) throws Exception{
		Session session = Session.getDefaultInstance(props, auth);
		Message msgObj = new MimeMessage(session);
		try {
			msgObj.setFrom(new InternetAddress(smtpUser));
			msgObj.addRecipient(Message.RecipientType.TO, new InternetAddress(receiver, ""));
			msgObj.setSubject(subject);
			//msgObj.setText(msg);
			msgObj.setContent(msg, "text/html");
			msgObj.saveChanges();
			Transport.send(msgObj);
		} catch(MessagingException e) {
			throw new Exception();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		System.err.println("senMail(): gesendet an:"+receiver);
	}
}
