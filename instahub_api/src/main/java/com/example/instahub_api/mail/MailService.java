package com.example.instahub_api.mail;

import com.example.instahub_api.exception.AppException;
import com.example.instahub_api.exception.ErrorCode;
import jakarta.mail.MessagingException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class MailService {
    ResetPasswordMailService resetPasswordMailService;

    public void sendResetPasswordEmail(String to, String username, String token) {
        try {
            resetPasswordMailService.send(to, username, token);
        } catch (MessagingException | UnsupportedEncodingException | MailException exception) {
            throw new AppException(ErrorCode.EMAIL_SEND_FAILED);
        }
    }
}
