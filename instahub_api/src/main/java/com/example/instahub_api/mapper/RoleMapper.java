package com.example.instahub_api.mapper;

import com.example.instahub_api.dto.request.RoleRequest;
import com.example.instahub_api.dto.response.RoleResponse;
import com.example.instahub_api.entity.Role;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RoleMapper {
    Role toRole(RoleRequest request);
    RoleResponse toRoleResponse(Role role);
}
