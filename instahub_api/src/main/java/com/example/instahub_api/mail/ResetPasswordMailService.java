package com.example.instahub_api.mail;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ResetPasswordMailService {

    JavaMailSender mailSender;

    @NonFinal
    @Value("${spring.mail.username}")
    String from;

    @NonFinal
    @Value("${app.frontend-url}")
    String frontendUrl;

    @NonFinal
    @Value("${app.password-reset.expiration-minutes:15}")
    long expirationMinutes;

    public void send(String to, String username, String token)
            throws MessagingException, UnsupportedEncodingException {

        String resetLink = frontendUrl + "/reset-password?token=" + token;

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom(from, "Instahub");
        helper.setTo(to);
        helper.setSubject("Reset your Instahub password");

        String html = """
                <h2>Reset your password</h2>
                <p>Hello <b>%s</b>,</p>
                <p>We received a request to reset your Instahub password.</p>
                <p>
                    Click the link below to create a new password:
                </p>
                <p>
                    <a href="%s">%s</a>
                </p>
                <p>This link will expire in <b>%d minutes</b>.</p>
                <p>If you didn't request a password reset, you can safely ignore this email.</p>
                <br>
                <p>Thanks,</p>
                <p><b>Instahub Team</b></p>
                """.formatted(
                username,
                resetLink,
                resetLink,
                expirationMinutes
        );

        helper.setText(html, true);
        mailSender.send(message);
    }
}