package com.example.instahub_api.controller;

import com.example.instahub_api.dto.ApiResponse;
import com.example.instahub_api.dto.request.*;
import com.example.instahub_api.dto.response.AuthenticationResponse;
import com.example.instahub_api.dto.response.IntrospectResponse;
import com.example.instahub_api.dto.response.UserResponse;
import com.example.instahub_api.service.AuthenticationService;
import com.nimbusds.jose.JOSEException;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class AuthenticationController {

    AuthenticationService authService;

    @PostMapping("/register")
    ApiResponse<UserResponse> register(@RequestBody @Valid UserRegisterRequest request) {
        return ApiResponse.<UserResponse>builder()
                .result(authService.register(request))
                .build();
    }

    @PostMapping("/login")
    ApiResponse<AuthenticationResponse> login(@RequestBody AuthenticationRequest request) {
        return ApiResponse.<AuthenticationResponse>builder()
                .result(authService.login(request))
                .build();
    }

    @PostMapping("/refresh_token")
    ApiResponse<AuthenticationResponse> refreshtoken(@RequestBody RefreshRequest request) throws ParseException, JOSEException {
        var result = authService.refreshToken(request);
        return ApiResponse.<AuthenticationResponse>builder().result(result).build();
    }

    @PostMapping("/logout")
    ApiResponse<Void> logout(@RequestBody LogoutRequest request) throws ParseException, JOSEException {
        authService.logout(request);
        return ApiResponse.<Void>builder().message("Log out successfully").build();
    }


    @PostMapping("/introspect")
    ApiResponse<IntrospectResponse> introspect(@RequestBody IntrospectRequest request)
            throws ParseException, JOSEException {
        var result = authService.introspect(request);
        return ApiResponse.<IntrospectResponse>builder().result(result).build();
    }

//    @PostMapping("/forgot-password")
//    public ApiResponse<Void> forgotPassword(@RequestBody ForgotPasswordRequest request) throws MessagingException, UnsupportedEncodingException {
//        authService.forgotPassword(request.getEmail());
//        return ApiResponse.<Void>builder()
//                .message("Email đã được gửi!")
//                .build();
//    }

//    @PostMapping("/reset-password")
//    public ApiResponse<Void> resetPassword(@RequestBody ResetPasswordRequest request) {
//        authService.resetPassword(request.getToken(), request.getNewPassword());
//        return ApiResponse.<Void>builder()
//                .message("Đặt lại mật khẩu thành công!")
//                .build();
//    }
}