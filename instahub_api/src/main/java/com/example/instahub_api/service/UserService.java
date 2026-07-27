package com.example.instahub_api.service;

import com.example.instahub_api.dto.request.UserRegisterRequest;
import com.example.instahub_api.dto.response.UserResponse;
import com.example.instahub_api.entity.User;
import com.example.instahub_api.enums.Role;
import com.example.instahub_api.exception.AppException;
import com.example.instahub_api.exception.ErrorCode;
import com.example.instahub_api.mapper.UserMapper;
import com.example.instahub_api.repository.RoleRepository;
import com.example.instahub_api.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class UserService {

}
